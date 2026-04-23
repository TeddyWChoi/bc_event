// BC Ranking Event — Vue 2 App
// Scroll-triggered animations via IntersectionObserver

new Vue({
  el: '#app',
  mounted: function () {
    this._initScrollAnimations();
  },
  methods: {
    _initScrollAnimations: function () {
      var selectors = '.fade-in-up, .fade-in-left, .fade-in-right';
      var targets = document.querySelectorAll(selectors);

      // Fallback for browsers without IntersectionObserver
      if (!('IntersectionObserver' in window)) {
        targets.forEach(function (el) {
          el.classList.add('playing');
        });
        return;
      }

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('playing');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      targets.forEach(function (el) {
        observer.observe(el);
      });
    }
  }
});
