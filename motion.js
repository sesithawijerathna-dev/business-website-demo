// Small, dependency-free enhancements. Content stays visible without JavaScript.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealItems = document.querySelectorAll('.about > div, .section-heading, .menu-card, .review-grid figure, .visit-grid > div');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealItems.forEach(item => {
    item.classList.add('reveal');
    observer.observe(item);
  });
  reducedMotion.addEventListener('change', event => {
    if (event.matches) {
      observer.disconnect();
      revealItems.forEach(item => item.classList.add('visible'));
    }
  });
}

// A subtle reading progress line, updated at most once per animation frame.
const progress = document.createElement('div');
progress.className = 'scroll-progress';
progress.setAttribute('aria-hidden', 'true');
document.body.append(progress);
let framePending = false;
function updateProgress() {
  const distance = document.documentElement.scrollHeight - window.innerHeight;
  const fraction = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
  progress.style.transform = `scaleX(${fraction})`;
  framePending = false;
}
window.addEventListener('scroll', () => {
  if (!framePending) {
    framePending = true;
    requestAnimationFrame(updateProgress);
  }
}, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();

// Menu results enter together; never leave a filtered card hidden by a reveal.
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-category]').forEach(card => {
      card.classList.add('visible');
      card.classList.remove('filter-enter');
      if (!card.hidden && !reducedMotion.matches) {
        requestAnimationFrame(() => card.classList.add('filter-enter'));
      }
    });
    requestAnimationFrame(updateProgress);
  });
});
