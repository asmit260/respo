/* ═══════════════════════════════════════════════════════════════════
   LITTLE STARS PRESCHOOL — GALLERY SCRIPT
   Reads SITE_CONFIG.gallery[] and builds:
   - Filter tabs by category
   - Responsive grid
   - Lightbox with keyboard/click navigation
   ═══════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const gallery = SITE_CONFIG.gallery;
  let currentIdx = 0;

  /* ── Build Filter Tabs ─────────────────────────────────────────── */
  const filterWrap = document.getElementById('gallery-filters');
  const categories = ['all', ...new Set(gallery.map(g => g.category))];

  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat === 'all' ? ' active' : '');
    btn.textContent = cat === 'all' ? 'All Photos' : cap(cat);
    btn.dataset.filter = cat;
    filterWrap.appendChild(btn);
  });

  filterWrap.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterItems(btn.dataset.filter);
  });

  /* ── Build Gallery Grid ────────────────────────────────────────── */
  const grid = document.getElementById('gallery-grid');

  gallery.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'gallery-item reveal';
    div.dataset.category = item.category;
    div.innerHTML = `
      <img src="${item.src}" alt="${item.alt}" loading="lazy" onerror="this.src='images/placeholder.jpg'">
      <div class="gallery-overlay">
        <span>🔍</span>
        <p>${item.alt}</p>
      </div>
    `;
    div.addEventListener('click', () => openLightbox(idx));
    grid.appendChild(div);
  });

  // Trigger scroll reveal for dynamically added items
  setTimeout(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll('.gallery-item.reveal').forEach(el => obs.observe(el));
  }, 50);

  /* ── Filter ────────────────────────────────────────────────────── */
  function filterItems(cat) {
    document.querySelectorAll('.gallery-item').forEach(item => {
      const show = cat === 'all' || item.dataset.category === cat;
      item.style.display = show ? '' : 'none';
    });
  }

  /* ── Lightbox ──────────────────────────────────────────────────── */
  const lightbox   = document.getElementById('lightbox');
  const lbImg      = document.getElementById('lightbox-img');
  const lbCaption  = document.getElementById('lightbox-caption');
  const lbCounter  = document.getElementById('lightbox-counter');
  const lbClose    = document.getElementById('lightbox-close');
  const lbPrev     = document.getElementById('lightbox-prev');
  const lbNext     = document.getElementById('lightbox-next');

  function openLightbox(idx) {
    currentIdx = idx;
    renderLightbox(idx);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function renderLightbox(idx) {
    const item = gallery[idx];
    lbImg.src = item.src;
    lbImg.alt = item.alt;
    lbCaption.textContent = item.alt;
    lbCounter.textContent = (idx + 1) + ' / ' + gallery.length;
  }

  function next() { currentIdx = (currentIdx + 1) % gallery.length; renderLightbox(currentIdx); }
  function prev() { currentIdx = (currentIdx - 1 + gallery.length) % gallery.length; renderLightbox(currentIdx); }

  lbClose.addEventListener('click', closeLightbox);
  lbNext.addEventListener('click', next);
  lbPrev.addEventListener('click', prev);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowRight')  next();
    if (e.key === 'ArrowLeft')   prev();
  });

  // Touch swipe support
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
  lightbox.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  }, { passive: true });

  /* ── Helper ────────────────────────────────────────────────────── */
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

})();
