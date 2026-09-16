// Landing page: onboarding-style fluency check.
// Three screens (hero -> one question -> your level), progress bar, confetti on the result.
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

  var screens = Array.prototype.slice.call(document.querySelectorAll('.screen'));
  if (!screens.length) return;
  var bar = document.getElementById('progress-bar');
  var choices = document.getElementById('choices');
  if (choices) choices.setAttribute('role', 'radiogroup');
  var showBtn = document.getElementById('show-level');
  var RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var selected = null;

  function go(n) {
    screens.forEach(function (sc) { sc.classList.toggle('on', +sc.dataset.s === n); });
    if (bar) bar.style.width = (n / (screens.length - 1) * 100) + '%';
    var scr = screens[n];
    if (scr) scr.scrollTop = 0;
    if (n === 2) confetti();
  }

  // Choices
  OPTIONS.forEach(function (opt, i) {
    var el = document.createElement('button');
    el.type = 'button';
    el.className = 'ch rv';
    el.style.setProperty('--d', (0.1 + i * 0.05) + 's');
    el.setAttribute('role', 'radio'); el.setAttribute('aria-checked', 'false');
    el.innerHTML = '<span class="box" aria-hidden="true"><span class="tick">&#10003;</span></span><span>' + opt.t + '</span>';
    el.addEventListener('click', function () {
      selected = i;
      Array.prototype.forEach.call(choices.children, function (c, j) { c.classList.toggle('pick', j === i); c.setAttribute('aria-checked', j === i ? 'true' : 'false'); });
      showBtn.disabled = false;
    });
    choices.appendChild(el);
  });

  showBtn.addEventListener('click', function () {
    if (selected === null) return;
    var opt = OPTIONS[selected];
    document.getElementById('result-level').textContent = opt.level;
    document.getElementById('result-start').setAttribute('href', opt.href);
    go(2);
  });

  document.querySelectorAll('[data-go]').forEach(function (b) {
    b.addEventListener('click', function () { go(+b.dataset.go); });
  });

  // Confetti (from the Academy onboarding survey)
  function confetti() {
    var cv = document.getElementById('confetti');
    if (!cv) return;
    var c = cv.getContext('2d');
    cv.width = innerWidth; cv.height = innerHeight;
    var cols = ['#ff5c35', '#3ef06c', '#f8ecca', '#dcebf7', '#26251e'], P = [];
    for (var i = 0; i < 130; i++) P.push({ x: Math.random() * cv.width, y: -20 - Math.random() * cv.height * .5, v: 2.2 + Math.random() * 3, w: 5 + Math.random() * 6, a: Math.random() * 6.3, s: (Math.random() < .5 ? -1 : 1) * (.05 + Math.random() * .07), col: cols[i % 5] });
    var t0 = Date.now(), dur = RM ? 300 : 2200;
    (function tick() {
      c.clearRect(0, 0, cv.width, cv.height);
      var dt = Date.now() - t0;
      P.forEach(function (p) { p.y += p.v; p.a += p.s; c.save(); c.translate(p.x, p.y); c.rotate(p.a); c.fillStyle = p.col; c.globalAlpha = Math.max(0, 1 - dt / dur); c.fillRect(-p.w / 2, -p.w / 2, p.w, p.w * .6); c.restore(); });
      if (dt < dur) requestAnimationFrame(tick); else c.clearRect(0, 0, cv.width, cv.height);
    })();
  }

  go(0);
})();
