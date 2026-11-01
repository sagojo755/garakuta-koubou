/* ふわっと表示：スクロールで見えた要素を、ゆっくり現す */
(function () {
  var root = document.documentElement;
  if (!("IntersectionObserver" in window)) { root.classList.remove("js"); return; }
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) { root.classList.remove("js"); return; }

  var targets = document.querySelectorAll(
    ".page h2, main h2, .about-grid, .cards .card, .steps li, .info, .note, .contact, .page > ul, .friends, .center .btn"
  );
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  targets.forEach(function (el, i) {
    el.classList.add("reveal");
    var d = (el.closest(".cards, .steps") ? Array.prototype.indexOf.call(el.parentNode.children, el) : 0) * 90;
    el.style.transitionDelay = d + "ms";
    io.observe(el);
  });
})();
