(function () {
  'use strict';

  /* ============ Reveal on scroll ============ */
  function setupReveal() {
    const els = document.querySelectorAll('[data-reveal]');
    if (!els.length || !('IntersectionObserver' in window)) {
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
  function setupCounters() {
    const els = document.querySelectorAll('[data-counter]');
    if (!els.length) return;
    const fmt = (n) => Math.round(n).toLocaleString('fr-FR');
    els.forEach(el => { el.textContent = fmt(0); });
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => { el.textContent = fmt(parseFloat(el.dataset.counter)); });
      return;
    }
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

  /* ============ Lightbox ============ */
  function setupLightbox() {
    const box = document.getElementById('ty-lightbox');
    const image = document.getElementById('ty-lightbox-image');
    const caption = document.getElementById('ty-lightbox-caption');
    if (!box || !image || !caption) return;

    const open = (src, text) => {
      image.style.backgroundImage = "url('" + src + "')";
      caption.textContent = text;
      box.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    };
    const close = () => {
      box.classList.remove('is-open');
      document.body.style.overflow = '';
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
      if (e.key === 'Escape' && box.classList.contains('is-open')) close();
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
    setupLightbox();
  }
})();
