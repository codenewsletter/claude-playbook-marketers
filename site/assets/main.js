// Shared behavior for module/lesson pages: mobile sidebar toggle + copy-to-clipboard.
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('[data-sidebar-toggle]');
  var sidebar = document.querySelector('.sidebar');
  if (toggle && sidebar) {
    toggle.addEventListener('click', function () {
      sidebar.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (!sidebar.classList.contains('open')) return;
      if (sidebar.contains(e.target) || toggle.contains(e.target)) return;
      sidebar.classList.remove('open');
    });
  }

  // Keep the current lesson visible in the sidebar instead of resetting to the top on every page load.
  var activeLink = document.querySelector('.sidebar-lessons a.active');
  if (activeLink && sidebar) {
    var linkTop = activeLink.offsetTop;
    var linkHeight = activeLink.offsetHeight;
    sidebar.scrollTop = linkTop - sidebar.clientHeight / 2 + linkHeight / 2;
  }

  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var pre = btn.closest('.prompt-copy-wrap').querySelector('pre code');
      var text = pre.textContent;
      navigator.clipboard.writeText(text).then(function () {
        var original = btn.textContent;
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.textContent = original;
          btn.classList.remove('copied');
        }, 1800);
      });
    });
  });
});
