#!/usr/bin/env node
// Generates the static site (site/) from module-1.md, module-2.md, module-3.md.
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const ROOT = path.join(__dirname, '..');
const SITE = path.join(ROOT, 'site');

// site/assets holds hand-authored CSS/JS (not generated) — never delete it, only ensure it exists.
fs.mkdirSync(path.join(SITE, 'assets'), { recursive: true });
fs.mkdirSync(path.join(SITE, 'lessons'), { recursive: true });

marked.setOptions({ mangle: false, headerIds: false });

// Cache-buster so a rebuild is never masked by the browser's stylesheet cache.
const BUILD_ID = Date.now();

// Lesson H1 styling: the back half of each title (wherever it turns into its second clause)
// renders in the italic accent font, matching the landing-page headline treatment.
const TITLE_ACCENT = {
  '1.1': 'With Real Context',
  '1.2': 'And Product Facts Once',
  '1.3': 'Into A Week Of Social Posts',
  '1.4': 'Sound Like You',
  '1.5': 'From Your Own Past Edits',
  '1.6': 'That Stop The Scroll',
  '1.7': 'That Produces A Reusable Playbook',
  '1.8': 'By Simulating Them',
  '1.9': 'If Your Brand Appears In AI Search',
  '1.10': 'Into An Executive Summary',
  '1.11': 'With A Modular Prompt Formula',
  '2.1': 'At Once',
  '2.2': 'Into A Presentation Deck',
  '2.3': 'In Place',
  '2.4': 'Your ICP, Personas, And Messaging',
  '2.5': 'A Weekly Lookalike Outbound Agent',
  '2.6': 'Recurring Marketing Tasks',
  '2.7': 'To Find Wasted Hours',
  '2.8': 'For Each Recurring Deliverable',
  '2.9': 'That Captures Emails',
  '2.10': 'From Your Tab List',
  '2.11': 'For Different Visitor Segments',
  '3.1': 'And Produce A Report',
  '3.2': 'Automatically',
  '3.3': 'Build On The Last',
  '3.4': 'Into A Ranked To-Do List',
  '3.5': 'Your Email Broadcasts',
  '3.6': 'From HTML',
  '3.7': 'As HTML',
  '3.8': 'In HTML',
  '3.9': 'In An Evening',
  '3.10': 'A Self-Improving Marketing Workflow'
};

function renderLessonTitle(lesson) {
  const accent = TITLE_ACCENT[lesson.number];
  const title = lesson.title;
  if (!accent || !title.endsWith(accent)) return renderInline(title);
  const normalPart = title.slice(0, title.length - accent.length);
  return `${renderInline(normalPart)}<em>${renderInline(accent)}</em>`;
}

// Every link in lesson/module content is an external source citation — open in a new tab.
const renderer = new marked.Renderer();
renderer.link = function ({ href, title, tokens }) {
  const titleAttr = title ? ` title="${title}"` : '';
  const text = this.parser.parseInline(tokens);
  return `<a href="${href}"${titleAttr} target="_blank" rel="noopener noreferrer">${text}</a>`;
};
marked.use({ renderer });

const MODULE_META = {
  1: { badge: 'Beginner', tone: 'Everything runs in a browser tab.', color: 'mint' },
  2: { badge: 'Intermediate', tone: 'Claude gets access to your files, your tools, and a schedule.', color: 'lavender' },
  3: { badge: 'Advanced', tone: 'Marketing systems you build in the terminal.', color: 'cream' }
};

function readModule(n) {
  const raw = fs.readFileSync(path.join(ROOT, `module-${n}.md`), 'utf8');
  const h1Match = raw.match(/^# (.+)$/m);
  const title = h1Match[1].replace(/^Module \d+:\s*/, '');

  const lessonsListIdx = raw.indexOf('### Lessons In This Module');
  const introRaw = raw.slice(h1Match.index + h1Match[0].length, lessonsListIdx).trim();

  const bodyStart = raw.indexOf('\n---\n', lessonsListIdx);
  const lessonsRaw = raw.slice(bodyStart + 5);

  // Split into lessons on "## N.M Title"
  const lessonHeaderRe = /^## (\d+)\.(\d+) (.+)$/gm;
  const headers = [];
  let m;
  while ((m = lessonHeaderRe.exec(lessonsRaw))) {
    headers.push({ major: m[1], minor: m[2], title: m[3], index: m.index, headerLen: m[0].length });
  }

  const lessons = headers.map((h, i) => {
    const start = h.index + h.headerLen;
    const end = i + 1 < headers.length ? headers[i + 1].index : lessonsRaw.length;
    let body = lessonsRaw.slice(start, end);
    body = body.replace(/\n---\s*$/, '').trim();
    return {
      module: n,
      major: h.major,
      minor: h.minor,
      slug: `${h.major}-${h.minor}`,
      number: `${h.major}.${h.minor}`,
      title: h.title,
      body
    };
  });

  return { number: n, title, introRaw, lessons };
}

function renderInline(md) {
  return marked.parseInline(md);
}

function renderSubsection(heading, bodyMd) {
  const html = marked.parse(bodyMd);
  let cls = 'content-section';
  let inner = `<h3>${renderInline(heading)}</h3>${html}`;

  // Every fenced code block gets a copy button, regardless of which section it's in
  // (checklists outside "Get Started Today" are pasteable too, e.g. lesson 1.2).
  inner = inner.replace(
    /<pre>([\s\S]*?)<\/pre>/g,
    '<div class="prompt-copy-wrap"><pre>$1</pre><button class="copy-btn" type="button">Copy</button></div>'
  );

  if (/^Watch /i.test(heading)) {
    cls = 'video-section';
    // Turn the thumbnail-that-links-out into a real inline embed the video can play in.
    inner = inner.replace(
      /<p><a href="https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([\w-]+)"[^>]*><img[^>]*><\/a><\/p>/,
      '<div class="video-embed"><iframe src="https://www.youtube.com/embed/$1" title="Embedded video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe></div>'
    );
  } else if (/^Try This In/i.test(heading)) {
    cls = 'tryit-section';
  } else if (/^Get Started Today$/i.test(heading)) {
    cls = 'prompt-section';
    inner = inner.replace(
      /<p><strong>Personalize it further\.<\/strong>([\s\S]*?)<\/p>/,
      '<div class="personalize-callout"><strong>Personalize it further.</strong>$1</div>'
    );
  }
  return `<section class="${cls}">${inner}</section>`;
}

function fenceSpans(bodyMd) {
  const spans = [];
  const fenceRe = /```[\s\S]*?```/g;
  let fm;
  while ((fm = fenceRe.exec(bodyMd))) {
    spans.push([fm.index, fm.index + fm[0].length]);
  }
  return spans;
}

function insideAnySpan(idx, spans) {
  return spans.some(([s, e]) => idx >= s && idx < e);
}

function renderLessonBody(bodyMd) {
  const spans = fenceSpans(bodyMd);
  const subheadRe = /^### (.+)$/gm;
  const marks = [];
  let m;
  while ((m = subheadRe.exec(bodyMd))) {
    if (insideAnySpan(m.index, spans)) continue;
    marks.push({ heading: m[1], index: m.index, len: m[0].length });
  }
  let html = '';
  if (marks.length === 0 || marks[0].index > 0) {
    const introEnd = marks.length ? marks[0].index : bodyMd.length;
    const intro = bodyMd.slice(0, introEnd).trim();
    if (intro) html += `<section class="content-section">${marked.parse(intro)}</section>`;
  }
  marks.forEach((mark, i) => {
    const start = mark.index + mark.len;
    const end = i + 1 < marks.length ? marks[i + 1].index : bodyMd.length;
    const sectionBody = bodyMd.slice(start, end).trim();
    html += renderSubsection(mark.heading, sectionBody);
  });
  return html;
}

// ---------- Load all module data ----------
const modules = [1, 2, 3].map(readModule);
const allLessons = modules.flatMap(mod => mod.lessons);

function lessonHref(lesson) {
  return `/lessons/${lesson.slug}.html`;
}
function moduleHref(n) {
  return `/module-${n}.html`;
}

// ---------- Sidebar: hub segments (one collapsible row per module, progress ring, visited ticks) ----------
function renderSidebar(activeHref) {
  const groups = modules.map(mod => {
    const meta = MODULE_META[mod.number];
    const isCurrent = activeHref === moduleHref(mod.number) || mod.lessons.some(l => lessonHref(l) === activeHref);
    const items = mod.lessons.map(l => {
      const href = lessonHref(l);
      const active = href === activeHref ? ' active' : '';
      return `<li><a class="lrow${active}" href="${href}" data-lesson="${l.slug}" title="${l.number} ${l.title.replace(/"/g, '&quot;')}"><span class="num">${l.number}</span><span class="lname">${renderInline(l.title)}</span></a></li>`;
    }).join('');
    return `
      <details class="seg"${isCurrent ? ' open' : ''} data-module="${mod.number}">
        <summary class="seg-head">
          <span class="seg-name"><b><a href="${moduleHref(mod.number)}" title="Module ${mod.number}: ${mod.title.replace(/"/g, '&quot;')}">Module ${mod.number}</a></b></span>
          <span class="chev" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></span>
        </summary>
        <ol class="seg-list">${items}</ol>
      </details>`;
  }).join('');

  return `
    <aside class="sidebar">
      <div class="rail-head"><a class="sidebar-index-title${activeHref === '/contents.html' ? ' active' : ''}" href="/contents.html">In This Playbook</a><span class="rail-count">${allLessons.length} lessons</span></div>
      ${groups}
    </aside>`;
}
const renderLessonSidebar = renderSidebar;

const NEWSLETTER_URL = 'https://superhuman-marketing.beehiiv.com/subscribe';

// ---------- Lesson pages (Superhuman Academy design: dark opener + wash bands) ----------
const FONTS_HREF = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=JetBrains+Mono:wght@400;500;700&display=swap';

// Opener variant rotates by global lesson order so consecutive lessons never match.
const OPENERS = ['neon', 'sky', 'gold', 'coral'];
const openerFor = lesson => OPENERS[allLessons.indexOf(lesson) % OPENERS.length];


// Group a lesson's sections into bands: story (sky) / how it works (parchment) / watch (sage) /
// worksheet (lilac) / get started (butter). Content inside each section is untouched.
function bandLesson(bodyHtml) {
  // Module wrap-up ("By this point you should have:" + list) becomes a white card, like the personalize callout.
  bodyHtml = bodyHtml.replace(/(?:<hr>\s*)?<p>By this point you should have:<\/p>\s*<ul>([\s\S]*?)<\/ul>/,
    '<div class="wrapup-card"><div class="wrapup-title">By this point you should have:</div><ul>$1</ul></div>');
  const sections = bodyHtml.split('</section>').map(x => x.trim()).filter(Boolean).map(x => x + '</section>');
  const kind = x => (x.match(/^<section class="([a-z-]+)"/) || [])[1];
  const bands = [];
  const push = (wash, label) => { bands.push({ wash, label, parts: [] }); return bands[bands.length - 1]; };
  let cur = null, seenTry = false;
  sections.forEach((sec, i) => {
    const k = kind(sec);
    if (i === 0) cur = push('sky', 'The story');
    else if (k === 'video-section') cur = push('sage', 'Watch');
    else if (k === 'tryit-section') { cur = push('lilac', 'Hands-on Worksheet'); seenTry = true; }
    else if (k === 'prompt-section' || (seenTry && k === 'content-section')) { if (!cur || cur.wash !== 'butter') cur = push('butter', 'Get started'); }
    else if (cur.wash !== 'parchment') cur = push('parchment', 'How it works');
    cur.parts.push(sec);
  });
  return bands.map(b => `
      <section class="band" data-wash="${b.wash}">
        <div class="band-in">
          <div class="band-label">${b.label}</div>
          <div class="lesson-body">
            ${b.parts.join('\n')}
          </div>
        </div>
      </section>`).join('');
}

function lessonPage({ lesson, content }) {
  const [mj, mi] = lesson.number.split('.');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${lesson.number} ${lesson.title} — Claude Playbook for Marketers</title>
<meta name="description" content="${lesson.title}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${FONTS_HREF}" rel="stylesheet">
<link rel="stylesheet" href="/assets/lesson.css?v=${BUILD_ID}">
</head>
<body data-lesson="${lesson.slug}">
  <div class="topbar">
    <div class="tb-in">
      <div class="tb-left">
        <button class="menu-toggle" data-sidebar-toggle type="button" aria-label="Open menu">
          <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
        <a class="tb-brand" href="/index.html">Marketing Standup</a>
      </div>
      <div class="tb-right">
        <a class="tb-btn" href="${NEWSLETTER_URL}" target="_blank" rel="noopener noreferrer">Subscribe to Newsletter</a>
      </div>
    </div>
  </div>
  <div class="app">
    ${renderLessonSidebar(lessonHref(lesson))}
    ${content}
  </div>
<script src="/assets/main.js?v=${BUILD_ID}"></script>
</body>
</html>`;
}

allLessons.forEach((lesson, i) => {
  const prev = allLessons[i - 1];
  const next = allLessons[i + 1];
  const [mj, mi] = lesson.number.split('.');

  // Prev/next cards carry the opener branding of the lesson they lead to.
  const navCard = (l, cls, dir) => l
    ? `<a class="${cls}" href="${lessonHref(l)}" data-opener="${openerFor(l)}"><span class="dir">${dir}</span><span class="lbl">${l.number} ${renderInline(l.title)}</span></a>`
    : '<div class="nav-empty"></div>';
  const nav = `<div class="lesson-nav">
      ${navCard(prev, 'prev', '&larr; Previous')}
      ${navCard(next, 'next', 'Next &rarr;')}
    </div>`;

  const content = `<main class="content">
      <section class="band band-hero" data-wash="dark" data-opener="${openerFor(lesson)}">
        <div class="band-in">
          <div class="kick">Module ${mj} · Lesson ${mi}</div>
          <h1 class="lesson-title">${renderLessonTitle(lesson)}</h1>
        </div>
      </section>
      ${bandLesson(renderLessonBody(lesson.body))}
      <section class="band band-nav" data-wash="parchment"><div class="band-in">${nav}</div></section>
    </main>`;

  fs.writeFileSync(path.join(SITE, 'lessons', `${lesson.slug}.html`), lessonPage({ lesson, content }));
});

// ---------- Module overview pages ----------
const MODULE_ACCENT = { 1: 'In A Browser Tab', 2: 'With Your Files And Tools', 3: 'In The Terminal' };
// Module page takes the opener slot just before its first lesson, so module -> lesson 1 never repeats.
const moduleOpener = mod => OPENERS[(allLessons.indexOf(mod.lessons[0]) - 1 + OPENERS.length) % OPENERS.length];
function renderModuleTitle(mod) {
  const acc = MODULE_ACCENT[mod.number];
  const t = mod.title;
  return acc && t.endsWith(acc) ? `${renderInline(t.slice(0, t.length - acc.length))}<em>${renderInline(acc)}</em>` : renderInline(t);
}

function modulePageNew(mod) {
  const meta = MODULE_META[mod.number];
  const introHtml = marked.parse(mod.introRaw);
  const rows = mod.lessons.map(l => `
      <a class="mrow" href="${lessonHref(l)}">
        <span class="mrow-num">${l.number}</span>
        <span class="mrow-title">${renderInline(l.title)}</span>
        <span class="mrow-arrow" aria-hidden="true">&rarr;</span>
      </a>`).join('');
  const prevMod = modules[mod.number - 2];
  const nextMod = modules[mod.number];
  const modCard = (m, cls, dir) => m
    ? `<a class="${cls}" href="${moduleHref(m.number)}" data-opener="${moduleOpener(m)}"><span class="dir">${dir}</span><span class="lbl">Module ${m.number} · ${renderInline(m.title)}</span></a>`
    : (cls === 'prev'
        ? `<a class="prev" href="/contents.html" data-opener="neon"><span class="dir">&larr; Back</span><span class="lbl">In This Playbook</span></a>`
        : `<a class="next" href="/contents.html" data-opener="neon"><span class="dir">Next &rarr;</span><span class="lbl">In This Playbook</span></a>`);

  const content = `<main class="content">
      <section class="band band-hero" data-wash="dark" data-opener="${moduleOpener(mod)}">
        <div class="band-in">
          <div class="kick">Module ${mod.number} · ${meta.badge}</div>
          <h1 class="lesson-title">${renderModuleTitle(mod)}</h1>
          <a class="btn-hero" href="${lessonHref(mod.lessons[0])}">Start Module ${mod.number} <span class="ar">&rarr;</span></a>
        </div>
      </section>
      <section class="band band-lessons" data-wash="mint">
        <div class="band-in">
          <div class="band-label">Lessons</div>
          <div class="mlist">${rows}</div>
        </div>
      </section>
    </main>`;

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Module ${mod.number}: ${mod.title} — Claude Playbook for Marketers</title>
<meta name="description" content="${mod.title}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${FONTS_HREF}" rel="stylesheet">
<link rel="stylesheet" href="/assets/lesson.css?v=${BUILD_ID}">
</head>
<body>
  <div class="topbar">
    <div class="tb-in">
      <div class="tb-left">
        <a class="tb-brand" href="/index.html">Marketing Standup</a>
      </div>
      <div class="tb-right">
        <a class="tb-btn" href="${NEWSLETTER_URL}" target="_blank" rel="noopener noreferrer">Subscribe to Newsletter</a>
      </div>
    </div>
  </div>
  <div class="app no-rail">
    ${content}
  </div>
<script src="/assets/main.js?v=${BUILD_ID}"></script>
</body>
</html>`;
}

modules.forEach(mod => {
  fs.writeFileSync(path.join(SITE, `module-${mod.number}.html`), modulePageNew(mod));
});

// ---------- Full contents index page ----------
// Shell shared with lesson/module pages (topbar, sidebar, footer).
function shellPage({ title, description, activeHref, content }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${FONTS_HREF}" rel="stylesheet">
<link rel="stylesheet" href="/assets/lesson.css?v=${BUILD_ID}">
</head>
<body>
  <div class="topbar">
    <div class="tb-in">
      <div class="tb-left">
        <button class="menu-toggle" data-sidebar-toggle type="button" aria-label="Open menu">
          <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
        <a class="tb-brand" href="/index.html">Marketing Standup</a>
      </div>
      <div class="tb-right">
        <a class="tb-btn" href="${NEWSLETTER_URL}" target="_blank" rel="noopener noreferrer">Subscribe to Newsletter</a>
      </div>
    </div>
  </div>
  <div class="app">
    ${renderLessonSidebar(activeHref)}
    ${content}
  </div>
<script src="/assets/main.js?v=${BUILD_ID}"></script>
</body>
</html>`;
}

const CONTENTS_WASH = { 1: 'sky', 2: 'lilac', 3: 'butter' };
const contentsBands = modules.map(mod => {
  const meta = MODULE_META[mod.number];
  const rows = mod.lessons.map(l => `
      <a class="mrow" href="${lessonHref(l)}">
        <span class="mrow-num">${l.number}</span>
        <span class="mrow-title">${renderInline(l.title)}</span>
        <span class="mrow-arrow" aria-hidden="true">&rarr;</span>
      </a>`).join('');
  return `
      <section class="band" data-wash="${CONTENTS_WASH[mod.number]}">
        <div class="band-in">
          <div class="band-label">Module ${mod.number} · ${meta.badge}</div>
          <a class="contents-module" href="${moduleHref(mod.number)}"><h2>${renderModuleTitle(mod)}</h2></a>
          <div class="mlist">${rows}</div>
        </div>
      </section>`;
}).join('');

const contentsContent = `<main class="content">
      <section class="band band-hero" data-wash="dark" data-opener="${OPENERS[(0 - 2 + OPENERS.length * 2) % OPENERS.length]}">
        <div class="band-in">
          <div class="kick">${modules.length} modules · ${allLessons.length} lessons</div>
          <h1 class="lesson-title">In This <em>Playbook</em></h1>
        </div>
      </section>
      ${contentsBands}
    </main>`;

fs.writeFileSync(path.join(SITE, 'contents.html'), shellPage({
  title: 'In This Playbook — Claude Playbook for Marketers',
  description: 'Full index of every module and lesson in the Claude Playbook for Marketers.',
  activeHref: '/contents.html',
  content: contentsContent
}));

// ---------- Landing page: dark hero with fluency check + one band per module ----------
const landingContent = `<div class="progress" aria-hidden="true"><i id="progress-bar"></i></div>
  <main class="stage" id="stage">
    <section class="screen band-hero on" data-s="0" data-wash="dark" data-opener="coral">
      <div class="inner">
        <h1 class="lesson-title rv" style="--d:.06s">Claude Code Playbook <em>for Marketers</em></h1>
        <p class="hero-sub rv" style="--d:.12s">Your starter guide to become a Marketing Engineer. 32 hands-on lessons and real workflows from marketers and GTM teams already running their work through Claude.</p>
        <button class="btn-hero rv" style="--d:.18s" type="button" data-go="1">Check My AI Fluency Level <span class="ar">&rarr;</span></button>
      </div>
    </section>
    <section class="screen" data-s="1" data-wash="sage">
      <div class="inner">
        <h2 class="lesson-title rv" style="--d:.05s">Which sounds <em>most like you?</em></h2>
        <div class="choices one" id="choices"></div>
        <button class="btn-cta rv" style="--d:.2s" type="button" id="show-level" disabled>Show My AI Fluency Level <span class="ar">&rarr;</span></button>
        <button class="fluency-back rv" style="--d:.25s" type="button" data-go="0">&larr; Back</button>
      </div>
    </section>
    <section class="screen" data-s="2" data-wash="mint">
      <div class="inner">
        <div class="qnum rv">Your level</div>
        <h2 class="lesson-title rv" style="--d:.05s" id="result-level"></h2>
        <a class="btn-cta rv" style="--d:.18s" id="result-start" href="#">Start Learning <span class="ar">&rarr;</span></a>
        <button class="fluency-back rv" style="--d:.25s" type="button" data-go="1">Change my answer</button>
      </div>
    </section>
  </main>
  <canvas class="confetti" id="confetti" width="0" height="0" aria-hidden="true"></canvas>`;

fs.writeFileSync(path.join(SITE, 'index.html'), `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>The Claude Playbook for Marketers</title>
<meta name="description" content="Hands-on lessons for AI-first marketers, drawn from real practitioners using Claude.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${FONTS_HREF}" rel="stylesheet">
<link rel="stylesheet" href="/assets/lesson.css?v=${BUILD_ID}">
</head>
<body class="landing">
  <div class="topbar">
    <div class="tb-in">
      <div class="tb-left">
        <a class="tb-brand" href="/index.html">Marketing Standup</a>
      </div>
      <div class="tb-right">
        <a class="tb-btn" href="${NEWSLETTER_URL}" target="_blank" rel="noopener noreferrer">Subscribe to Newsletter</a>
      </div>
    </div>
  </div>
  ${landingContent}
<script src="/assets/fluency.js?v=${BUILD_ID}"></script>
</body>
</html>`);

console.log(`Generated ${allLessons.length} lesson pages, ${modules.length} module pages, index.html.`);
