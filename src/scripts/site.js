(function () {
  'use strict';

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============ Reveal on scroll ============ */
  function setupReveal() {
    const els = document.querySelectorAll('[data-reveal]');
    if (!els.length || reduceMotion || !('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('is-visible'));
      return;
    }
    els.forEach((el, i) => {
      el.style.transitionDelay = ((i % 4) * 0.07) + 's';
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => io.observe(el));
  }

  /* ============ Animated counters ============ */
  /* Les vrais chiffres sont écrits dans le HTML : sans JavaScript ou avec
     « moins d'animations », ils restent affichés tels quels. */
  function setupCounters() {
    const els = document.querySelectorAll('[data-counter]');
    if (!els.length || reduceMotion || !('IntersectionObserver' in window)) return;
    const fmt = (n) => Math.round(n).toLocaleString('fr-FR');
    const animate = (el) => {
      const target = parseFloat(el.dataset.counter);
      const dur = 1700;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(target * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    els.forEach(el => io.observe(el));
  }

  /* ============ Animations SVG de la carte ============ */
  function setupSvgMotion() {
    if (!reduceMotion) return;
    document.querySelectorAll('svg').forEach(svg => {
      if (typeof svg.pauseAnimations === 'function') svg.pauseAnimations();
    });
  }

  /* ============ Lightbox ============ */
  function setupLightbox() {
    const box = document.getElementById('ty-lightbox');
    const image = document.getElementById('ty-lightbox-image');
    const caption = document.getElementById('ty-lightbox-caption');
    const closeBtn = box && box.querySelector('.ty-lightbox-close');
    if (!box || !image || !caption || !closeBtn) return;

    let lastFocus = null;

    const open = (src, text) => {
      lastFocus = document.activeElement;
      image.src = src;
      image.alt = text || '';
      caption.textContent = text || '';
      box.classList.add('is-open');
      box.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    };
    const close = () => {
      box.classList.remove('is-open');
      box.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      image.removeAttribute('src');
      if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
    };

    document.querySelectorAll('.ty-gallery-tile').forEach(tile => {
      tile.addEventListener('click', () => {
        open(tile.dataset.image, tile.dataset.caption);
      });
    });

    box.addEventListener('click', (e) => {
      if (e.target === box || e.target.classList.contains('ty-lightbox-close')) close();
    });
    document.addEventListener('keydown', (e) => {
      if (!box.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      /* Le seul élément actif de la fenêtre est le bouton Fermer : le focus y reste */
      if (e.key === 'Tab') { e.preventDefault(); closeBtn.focus(); }
    });
  }

  /* ============ Boot ============ */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  function init() {
    setupReveal();
    setupCounters();
    setupSvgMotion();
    setupLightbox();
  }
})();
