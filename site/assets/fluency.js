// Inline one-question AI fluency check on the landing page.
// Three-stage interactive flow: intro CTA -> question -> instant result.
// The hero heading/subtext step aside once the question appears, so each stage reads as its own screen.
(function () {
  var OPTIONS = [
    {
      t: "I ask Claude questions here and there.",
      level: "Beginner",
      module: 1,
      reason: "Module 1 gives you the habits that make every answer better, right from a browser tab.",
      href: "/module-1.html"
    },
    {
      t: "I use Claude for real work, but I re-explain my context every time.",
      level: "Intermediate",
      module: 2,
      reason: "Module 2 hands Claude your files and tools once, so you stop repeating yourself.",
      href: "/module-2.html"
    },
    {
      t: "Claude already knows my context. I use Projects, connectors, or scheduled tasks.",
      level: "Advanced",
      module: 3,
      reason: "Module 3 takes you into building systems with Claude Code that keep working on their own.",
      href: "/module-3.html"
    }
  ];

  var root = document.getElementById('fluency-root');
  if (!root) return;

  var heroTitle = document.getElementById('hero-title');
  var heroSub = document.getElementById('hero-sub');
  var selected = null;

  function setHeroVisible(visible) {
    if (heroTitle) heroTitle.hidden = !visible;
    if (heroSub) heroSub.hidden = !visible;
  }

  function renderIntro() {
    setHeroVisible(true);
    root.innerHTML = '';
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn-primary fluency-submit fluency-cta';
    btn.textContent = 'Check Your AI Fluency →';
    btn.addEventListener('click', renderQuestion);
    root.appendChild(btn);
  }

  function renderQuestion() {
    setHeroVisible(false);
    root.innerHTML = '';
    var wrap = document.createElement('div');
    wrap.className = 'fluency-plain';

    var headline = document.createElement('h2');
    headline.className = 'fluency-headline';
    headline.innerHTML = 'Which sounds <span class="accent">most like you?</span>';
    wrap.appendChild(headline);

    var opts = document.createElement('div');
    opts.className = 'fluency-options';
    OPTIONS.forEach(function (opt, i) {
      var row = document.createElement('label');
      row.className = 'fluency-option';
      if (selected === i) row.classList.add('selected');
      row.innerHTML = '<span class="radio"></span><span>' + opt.t + '</span>';
      row.addEventListener('click', function () {
        selected = i;
        renderQuestion();
      });
      opts.appendChild(row);
    });
    wrap.appendChild(opts);

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn-primary fluency-submit';
    btn.textContent = 'Show My AI Fluency Level →';
    btn.disabled = selected === null;
    btn.addEventListener('click', renderResult);
    wrap.appendChild(btn);

    var back = document.createElement('button');
    back.type = 'button';
    back.className = 'fluency-back';
    back.textContent = '← Back';
    back.addEventListener('click', function () {
      selected = null;
      renderIntro();
    });
    wrap.appendChild(back);

    root.appendChild(wrap);
  }

  function renderResult() {
    setHeroVisible(false);
    var opt = OPTIONS[selected];
    root.innerHTML = '';
    var card = document.createElement('div');
    card.className = 'fluency-card fluency-result';
    card.innerHTML =
      '<div class="fluency-label">Your level</div>' +
      '<h2>' + opt.level + '</h2>' +
      '<p>' + opt.reason + '</p>' +
      '<a class="btn btn-primary fluency-submit" href="' + opt.href + '">Start Learning →</a>';

    var back = document.createElement('button');
    back.type = 'button';
    back.className = 'fluency-back';
    back.textContent = 'Change my answer';
    back.addEventListener('click', renderQuestion);
    card.appendChild(back);

    root.appendChild(card);
  }

  renderIntro();
})();
