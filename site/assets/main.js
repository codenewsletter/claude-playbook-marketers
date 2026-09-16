// Shared behavior: mobile sidebar toggle, copy-to-clipboard, and lesson progress
// (visited lessons are remembered in this browser only, no account or server).
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('[data-sidebar-toggle]');
  var sidebar = document.querySelector('.sidebar');
  if (toggle && sidebar) {
    toggle.addEventListener('click', function () { sidebar.classList.toggle('open'); });
    document.addEventListener('click', function (e) {
      if (!sidebar.classList.contains('open')) return;
      if (sidebar.contains(e.target) || toggle.contains(e.target)) return;
      sidebar.classList.remove('open');
    });
  }

  // The rail is always visible; when it overlaps the dark opener it switches to light labels.
  var hero = document.querySelector('.band-hero');
  if (sidebar) sidebar.classList.add('show');
  if (hero && sidebar) {
    var ticking = false;
    var update = function () {
      ticking = false;
      var r = sidebar.getBoundingClientRect();
      var hb = hero.getBoundingClientRect().bottom;
      sidebar.classList.toggle('on-dark', hb > r.top + r.height * 0.5);
    };
    var onScroll = function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  }

  // Spotlight: the current lesson is full strength, neighbours step down, the rest fade.
  var activeRow = document.querySelector('.sidebar .lrow.active');
  if (activeRow) {
    var items = Array.prototype.slice.call(activeRow.closest('.seg-list').children);
    var at = items.indexOf(activeRow.parentNode);
    items.forEach(function (li, i) {
      var d = Math.abs(i - at);
      li.setAttribute('data-dist', d > 2 ? 'far' : String(d));
    });
    document.querySelectorAll('.sidebar details.seg').forEach(function (seg) {
      if (!seg.contains(activeRow)) seg.classList.add('far');
    });
    var idx = document.querySelector('.sidebar-index-title');
    if (idx) idx.classList.add('far');
  }

  // Keep the current lesson visible in the sidebar.
  var activeLink = document.querySelector('.sidebar .lrow.active');
  if (activeLink && sidebar) {
    sidebar.scrollTop = activeLink.offsetTop - sidebar.clientHeight / 2 + activeLink.offsetHeight / 2;
  }

  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var pre = btn.closest('.prompt-copy-wrap').querySelector('pre code');
      navigator.clipboard.writeText(pre.textContent).then(function () {
        var original = btn.textContent;
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(function () { btn.textContent = original; btn.classList.remove('copied'); }, 1800);
      });
    });
  });
});
