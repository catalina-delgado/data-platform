(function () {
    var ingots = document.querySelectorAll('.ingot');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ingots.forEach(function (el) { el.classList.add('lit'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var delay = Array.prototype.indexOf.call(ingots, el) * 110;
          setTimeout(function () { el.classList.add('lit'); }, delay);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.35 });
    ingots.forEach(function (el) { io.observe(el); });
  })();
