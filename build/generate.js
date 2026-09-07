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
  return `${renderInline(normalPart)}<span class="accent">${renderInline(accent)}</span>`;
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

// ---------- Sidebar ----------
function renderSidebar(activeHref) {
  const groups = modules.map(mod => {
    const meta = MODULE_META[mod.number];
    const items = mod.lessons.map(l => {
      const href = lessonHref(l);
      const active = href === activeHref ? ' active' : '';
      return `<li><a class="${active.trim()}" href="${href}"><span class="num">${l.number}</span>${renderInline(l.title)}</a></li>`;
    }).join('');
    return `
      <div class="sidebar-group">
        <a class="sidebar-module-link" href="${moduleHref(mod.number)}">Module ${mod.number}: ${renderInline(mod.title)}</a>
        <ol class="sidebar-lessons">${items}</ol>
      </div>`;
  }).join('');

  return `
    <aside class="sidebar">
      <a class="sidebar-index-title" href="/contents.html">In This Playbook</a>
      ${groups}
    </aside>`;
}

const NEWSLETTER_URL = 'https://superhuman-marketing.beehiiv.com/subscribe';

const BRAND_LOGO = `
  <a class="brand-logo" href="/index.html">
    <span class="brand-logo-icon">📣</span>
    <span>Marketing Standup</span>
  </a>`;

function topNav(withMenuToggle) {
  return `
  <div class="top-nav">
    <div class="top-nav-in">
      <div class="top-nav-left">
        ${withMenuToggle ? '<button class="menu-toggle" data-sidebar-toggle type="button" aria-label="Open menu">☰</button>' : ''}
        ${BRAND_LOGO}
      </div>
      <a class="btn-subscribe" href="${NEWSLETTER_URL}" target="_blank" rel="noopener noreferrer">Subscribe to Newsletter</a>
    </div>
  </div>`;
}

// ---------- Page shell ----------
function page({ title, description, bodyClass, content, extraHead = '', extraScripts = '', withMenuToggle = false }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="stylesheet" href="/assets/style.css?v=${BUILD_ID}">
${extraHead}
</head>
<body class="${bodyClass || ''}">
${topNav(withMenuToggle)}
${content}
<script src="/assets/main.js"></script>
${extraScripts}
</body>
</html>`;
}

// ---------- Lesson pages ----------
allLessons.forEach((lesson, i) => {
  const prev = allLessons[i - 1];
  const next = allLessons[i + 1];
  const href = lessonHref(lesson);

  const nav = `
    <div class="lesson-nav">
      ${prev ? `<a class="prev" href="${lessonHref(prev)}"><span class="dir">← Previous</span>${prev.number} ${renderInline(prev.title)}</a>` : '<div class="nav-empty"></div>'}
      ${next ? `<a class="next" href="${lessonHref(next)}"><span class="dir">Next →</span>${next.number} ${renderInline(next.title)}</a>` : '<div class="nav-empty"></div>'}
    </div>`;

  const content = `
    <div class="app">
      ${renderSidebar(href)}
      <main class="content">
        <div class="lesson-wrap">
          <h1 class="lesson-title">${renderInline(lesson.title)}</h1>
          <div class="lesson-body">
            ${renderLessonBody(lesson.body)}
          </div>
          ${nav}
        </div>
      </main>
    </div>`;

  const html = page({
    title: `${lesson.number} ${lesson.title} — Claude Playbook for Marketers`,
    description: lesson.title,
    content,
    withMenuToggle: true
  });
  fs.writeFileSync(path.join(SITE, 'lessons', `${lesson.slug}.html`), html);
});

// ---------- Module overview pages ----------
modules.forEach(mod => {
  const meta = MODULE_META[mod.number];
  const introHtml = marked.parse(mod.introRaw);
  const rows = mod.lessons.map(l => `
    <a class="lesson-row" href="${lessonHref(l)}">
      <span class="num">${l.number}</span>
      <span class="title">${renderInline(l.title)}</span>
      <span class="arrow">→</span>
    </a>`).join('');

  const content = `
    <div class="app">
      ${renderSidebar(moduleHref(mod.number))}
      <main class="content">
        <div class="module-hero">
          <h1>Module ${mod.number}: ${renderInline(mod.title)}</h1>
          <div class="lede">${introHtml}</div>
          <a class="btn btn-primary" href="${lessonHref(mod.lessons[0])}" style="margin-top:18px;">Start Module ${mod.number}</a>
        </div>
        <div class="module-list">
          <div class="eyebrow">Lessons In This Module</div>
          ${rows}
        </div>
      </main>
    </div>`;

  const html = page({
    title: `Module ${mod.number}: ${mod.title} — Claude Playbook for Marketers`,
    description: mod.title,
    content,
    withMenuToggle: true
  });
  fs.writeFileSync(path.join(SITE, `module-${mod.number}.html`), html);
});

// ---------- Full contents index page ----------
const contentsGroups = modules.map(mod => {
  const meta = MODULE_META[mod.number];
  const rows = mod.lessons.map(l => `
    <a class="lesson-row" href="${lessonHref(l)}">
      <span class="num">${l.number}</span>
      <span class="title">${renderInline(l.title)}</span>
      <span class="arrow">→</span>
    </a>`).join('');
  return `
    <div class="module-list contents-list">
      <div class="contents-module-header">
        <a href="${moduleHref(mod.number)}" class="contents-module-link">Module ${mod.number}: ${renderInline(mod.title)}</a>
        <span class="contents-module-meta">${meta.badge} · ${mod.lessons.length} lessons</span>
      </div>
      ${rows}
    </div>`;
}).join('<div style="height:28px"></div>');

const contentsContent = `
  <div class="app">
    ${renderSidebar('/contents.html')}
    <main class="content">
      <div class="module-hero">
        <h1>In This Playbook</h1>
      </div>
      ${contentsGroups}
    </main>
  </div>`;

fs.writeFileSync(path.join(SITE, 'contents.html'), page({
  title: 'In This Playbook — Claude Playbook for Marketers',
  description: 'Full index of every module and lesson in the Claude Playbook for Marketers.',
  content: contentsContent,
  withMenuToggle: true
}));

// ---------- Landing page (headline + inline one-question fluency check) ----------
const landingContent = `
<header class="page-hero">
  <div class="wrap">
    <h1 id="hero-title">Claude Code Playbook <span class="accent">for Marketers</span></h1>
    <p class="sub" id="hero-sub">Your starter guide to become a Marketing Engineer. 32 hands-on lessons and real workflows from marketers and GTM teams already running their work through Claude.</p>

    <div class="fluency" id="fluency-root"></div>
  </div>
</header>
`;

fs.writeFileSync(path.join(SITE, 'index.html'), page({
  title: 'The Claude Playbook for Marketers',
  description: 'Hands-on lessons for AI-first marketers, drawn from real practitioners using Claude.',
  content: landingContent,
  extraScripts: '<script src="/assets/fluency.js"></script>'
}));

console.log(`Generated ${allLessons.length} lesson pages, ${modules.length} module pages, index.html.`);
