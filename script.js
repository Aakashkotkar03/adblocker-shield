/* ─── AdBlocker Shield Website — Shared JS ───────────────────────────────── */

// ── Navigation scroll effect ──────────────────────────────────────────────────
const nav = document.querySelector('.nav');
function updateNav() {
  if (window.scrollY > 40) nav?.classList.add('scrolled');
  else nav?.classList.remove('scrolled');
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// ── Mobile nav toggle ─────────────────────────────────────────────────────────
const toggle = document.querySelector('.nav-mobile-toggle');
const links = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => {
  links?.classList.toggle('open');
});
document.addEventListener('click', (e) => {
  if (!nav?.contains(e.target)) links?.classList.remove('open');
});

// ── Active nav link ───────────────────────────────────────────────────────────
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ── Intersection observer for reveal animations ───────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length > 0) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('revealed'), i * 80);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => io.observe(el));
}

// ── Counter animation ─────────────────────────────────────────────────────────
function animateCounter(el, target, duration, suffix) {
  const start = performance.now();
  function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const e = 1 - Math.pow(1 - p, 3);
    const val = Math.round(target * e);
    el.textContent = val.toLocaleString() + (suffix || '');
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
const counterEls = document.querySelectorAll('[data-count]');
if (counterEls.length > 0) {
  const cio = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = '1';
        const target = parseInt(entry.target.dataset.count);
        const suffix = entry.target.dataset.suffix || '';
        const dur = parseInt(entry.target.dataset.dur || '1500');
        animateCounter(entry.target, target, dur, suffix);
      }
    });
  }, { threshold: 0.5 });
  counterEls.forEach(el => cio.observe(el));
}
