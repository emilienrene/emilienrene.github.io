/* Progressive decoration: content remains visible with JavaScript disabled. */
(() => {
  const toggle = document.querySelector('#theme-toggle [role="button"]');
  if (toggle) {
    toggle.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggle.click();
      }
    });
  }
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      if (!reducedMotion.matches) entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.portfolio-home h2, .portfolio-home h3, .project-figures figure')
    .forEach((element) => observer.observe(element));
})();
