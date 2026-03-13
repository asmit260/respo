/* ═══════════════════════════════════════════════════════════════════
   LITTLE STARS PRESCHOOL — MAIN SCRIPT
   Reads SITE_CONFIG and builds: navbar, footer, sticky bar,
   scroll animations, and all homepage sections.
   ═══════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  buildNavbar();
  buildFooter();
  buildStickyBar();
  buildWAFloat();
  setActiveLink();

  // Homepage sections
  if (document.getElementById('hero-heading'))        buildHero();
  if (document.getElementById('stats-grid'))          buildStats();
  if (document.getElementById('trust-grid'))          buildTrust();
  if (document.getElementById('principal-msg'))       buildPrincipal();
  if (document.getElementById('programs-grid'))       buildProgramCards();
  if (document.getElementById('gallery-teaser-grid')) buildGalleryTeaser();
  if (document.getElementById('learning-grid'))       buildLearning();
  if (document.getElementById('testimonials-grid'))   buildTestimonials();
  if (document.getElementById('steps-grid'))          buildSteps();
  if (document.getElementById('cta'))                 buildCTA();
  if (document.getElementById('popup-overlay'))       buildPopup();

  // About page
  if (document.getElementById('about-story-text'))    buildAbout();
  if (document.getElementById('teachers-grid'))       buildTeachers();

  // Programs page
  if (document.getElementById('programs-detail'))     buildProgramsDetail();

  // Admission page
  if (document.getElementById('age-table-body'))      buildAdmission();

  // Contact page
  if (document.getElementById('contact-info'))        buildContact();

  // ⚠️  MUST run LAST — after all dynamic content is injected into the DOM
  //     so the IntersectionObserver can find and watch every .reveal element
  initScrollReveal();
});

/* ─── NAVBAR ──────────────────────────────────────────────────────── */
function buildNavbar() {
  const s = SITE_CONFIG;
  const navLogo = document.querySelector('.nav-logo');
  if (navLogo && s.school.logo) {
    navLogo.innerHTML = `<img src="${s.school.logo}" alt="${s.school.name}" style="height: 60px; width: auto; object-fit: contain; transform: scale(1.8); transform-origin: left center;">`;
  } else {
    document.querySelector('.nav-logo-name').textContent = s.school.name;
  }

  // Desktop links
  const links = document.getElementById('nav-links');
  s.nav.forEach(item => {
    const a = document.createElement('a');
    a.href = item.href; a.textContent = item.label;
    links.appendChild(a);
  });

  // Mobile links
  const mLinks = document.getElementById('mobile-nav-links');
  s.nav.forEach(item => {
    const a = document.createElement('a');
    a.href = item.href; a.textContent = item.label;
    mLinks.appendChild(a);
  });
  const mBtn = document.createElement('a');
  mBtn.href = 'contact.html'; mBtn.className = 'btn btn-primary';
  mBtn.innerHTML = '<i class="ri-calendar-line"></i> Book a Visit';
  mLinks.appendChild(mBtn);

  // Hamburger
  const ham = document.getElementById('hamburger');
  const mNav = document.getElementById('mobile-nav');
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mNav.classList.toggle('open');
  });

  // Scroll shadow
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

/* ─── FOOTER ──────────────────────────────────────────────────────── */
function buildFooter() {
  const s = SITE_CONFIG.school;
  const footLogo = document.querySelector('#footer .nav-logo');
  if (footLogo && s.logo) {
    footLogo.innerHTML = `<img src="${s.logo}" alt="${s.name}" style="height: 80px; width: auto; object-fit: contain; transform: scale(1.6); transform-origin: left center; filter: brightness(0) invert(1);">`;
  } else {
    document.getElementById('footer-name').textContent = SITE_CONFIG.school.name;
  }
  document.getElementById('footer-tagline').textContent = 'Nurturing young minds since ' + s.founded + '.';
  document.getElementById('footer-address').textContent = s.address;
  document.getElementById('footer-phone').textContent  = s.phone;
  document.getElementById('footer-phone').href         = 'tel:' + s.phone.replace(/\s/g,'');
  document.getElementById('footer-email').textContent  = s.email;
  document.getElementById('footer-email').href         = 'mailto:' + s.email;
  document.getElementById('footer-wa').href            = 'https://wa.me/' + s.whatsapp;
  document.getElementById('footer-fb').href            = s.facebook;
  document.getElementById('footer-ig').href            = s.instagram;
  document.getElementById('footer-year').textContent   = new Date().getFullYear();
  document.getElementById('footer-school-name').textContent = SITE_CONFIG.school.name;

  // Nav links in footer
  const fLinks = document.getElementById('footer-nav-links');
  SITE_CONFIG.nav.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${item.href}">${item.label}</a>`;
    fLinks.appendChild(li);
  });
}

/* ─── STICKY BAR ─────────────────────────────────────────────────── */
function buildStickyBar() {
  const s = SITE_CONFIG.school;
  document.getElementById('sticky-call').href = 'tel:' + s.phone.replace(/\s/g,'');
  document.getElementById('sticky-call-num').textContent = s.phone;
  document.getElementById('sticky-wa').href = 'https://wa.me/' + s.whatsapp;
}

/* ─── WHATSAPP FLOAT ─────────────────────────────────────────────── */
function buildWAFloat() {
  const btn = document.getElementById('wa-float');
  if (btn) btn.href = 'https://wa.me/' + SITE_CONFIG.school.whatsapp;
}

/* ─── ACTIVE NAV LINK ────────────────────────────────────────────── */
function setActiveLink() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#nav-links a, #mobile-nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
}

/* ─── SCROLL REVEAL ──────────────────────────────────────────────── */
function initScrollReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ─── HERO ───────────────────────────────────────────────────────── */
function buildHero() {
  const h = SITE_CONFIG.hero;
  setText('hero-label',   h.label);
  setText('hero-heading', h.heading);
  setText('hero-subtext', h.subtext);
  const img = document.getElementById('hero-img');
  if (img) { 
    img.src = h.image; img.alt = 'Happy students at ' + SITE_CONFIG.school.name; 
    
    // Setup slideshow
    if (h.slideshow && h.slideshow.length > 0) {
      let index = 0;
      img.style.transition = "opacity 0.4s ease-in-out";
      
      const changeSlide = (newIndex) => {
        img.style.opacity = 0;
        setTimeout(() => {
          index = newIndex !== undefined ? newIndex : (index + 1) % h.slideshow.length;
          img.src = h.slideshow[index];
          img.style.opacity = 1;
        }, 400); // Wait for fade out
      };

      let slideInterval = setInterval(() => changeSlide(), 4000);
      
      // Click tracking
      img.style.cursor = "pointer";
      img.addEventListener('click', () => {
        clearInterval(slideInterval);
        changeSlide();
        slideInterval = setInterval(() => changeSlide(), 4000);
      });

      // Swipe tracking
      let touchstartX = 0;
      let touchendX = 0;
      
      const handleSwipe = () => {
        if (touchendX < touchstartX - 40) { // Swipe left, next slide
          clearInterval(slideInterval);
          changeSlide((index + 1) % h.slideshow.length);
          slideInterval = setInterval(() => changeSlide(), 4000);
        }
        if (touchendX > touchstartX + 40) { // Swipe right, prev slide
          clearInterval(slideInterval);
          changeSlide((index - 1 + h.slideshow.length) % h.slideshow.length);
          slideInterval = setInterval(() => changeSlide(), 4000);
        }
      }

      img.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
      }, {passive: true});

      img.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleSwipe();
      }, {passive: true});
    }
  }
  const btnWrap = document.getElementById('hero-btns');
  if (btnWrap) {
    btnWrap.innerHTML = `
      <a href="${h.primaryBtn.href}" class="btn btn-primary">${h.primaryBtn.label}</a>
      <a href="${h.secondaryBtn.href}" class="btn btn-secondary">${h.secondaryBtn.label}</a>
    `;
  }
  const badgeWrap = document.getElementById('hero-badges');
  if (badgeWrap) {
    badgeWrap.innerHTML = h.badges.map(b => `<span class="hero-badge">${b}</span>`).join('');
  }
}

/* ─── STATS ──────────────────────────────────────────────────────── */
function buildStats() {
  const grid = document.getElementById('stats-grid');
  SITE_CONFIG.stats.forEach(s => {
    const div = document.createElement('div');
    div.className = 'stats-item reveal';
    div.innerHTML = `<div class="stats-value">${s.value}</div><div class="stats-label">${s.label}</div>`;
    grid.appendChild(div);
  });
}

/* ─── TRUST CARDS ────────────────────────────────────────────────── */
function buildTrust() {
  const grid = document.getElementById('trust-grid');
  SITE_CONFIG.trust.forEach((t, i) => {
    const div = document.createElement('div');
    div.className = `trust-card reveal reveal-d${i + 1}`;
    div.innerHTML = `<div class="trust-icon">${t.icon}</div><h3>${t.title}</h3><p>${t.desc}</p>`;
    grid.appendChild(div);
  });
}

/* ─── PROGRAM CARDS (Homepage) ───────────────────────────────────── */
function buildProgramCards() {
  const grid = document.getElementById('programs-grid');
  SITE_CONFIG.programs.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = `program-card reveal reveal-d${i + 1}`;
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='images/placeholder.jpg'">
      <div class="program-body">
        <span class="program-age ${p.colorClass}">${p.age}</span>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="program-tags">
          ${p.activities.map(a => `<span class="program-tag">✨ ${a}</span>`).join('')}
        </div>
      </div>
    `;
    grid.appendChild(div);
  });
}

/* ─── GALLERY TEASER ─────────────────────────────────────────────── */
function buildGalleryTeaser() {
  const grid = document.getElementById('gallery-teaser-grid');
  const items = SITE_CONFIG.gallery.slice(0, 4);
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'gallery-teaser-item reveal';
    div.innerHTML = `<img src="${item.src}" alt="${item.alt}" loading="lazy" onerror="this.src='images/placeholder.jpg'">`;
    div.addEventListener('click', () => window.location.href = 'gallery.html');
    grid.appendChild(div);
  });
}

/* ─── LEARNING APPROACH ──────────────────────────────────────────── */
function buildLearning() {
  const grid = document.getElementById('learning-grid');
  SITE_CONFIG.learningApproach.forEach((l, i) => {
    const div = document.createElement('div');
    div.className = `learning-card reveal reveal-d${i + 1}`;
    div.innerHTML = `<div class="learning-emoji">${l.emoji}</div><h3>${l.title}</h3><p>${l.desc}</p>`;
    grid.appendChild(div);
  });
}

/* ─── TESTIMONIALS ───────────────────────────────────────────────── */
function buildTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  SITE_CONFIG.testimonials.forEach((t, i) => {
    const div = document.createElement('div');
    div.className = `testimonial-card reveal reveal-d${i + 1}`;
    div.innerHTML = `
      <div class="testimonial-quote">"</div>
      <div class="testimonial-stars stars">${'★'.repeat(t.rating)}</div>
      <p>${t.text}</p>
      <div class="testimonial-top" style="margin-top:18px">
        <div class="testimonial-avatar" style="background:${t.color}">${t.initials}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-loc">📍 ${t.location}</div>
        </div>
      </div>
    `;
    grid.appendChild(div);
  });
}

/* ─── ADMISSION STEPS ────────────────────────────────────────────── */
function buildSteps() {
  const grid = document.getElementById('steps-grid');
  SITE_CONFIG.admissionSteps.forEach((s, i) => {
    const div = document.createElement('div');
    div.className = `step-card reveal reveal-d${i + 1}`;
    div.innerHTML = `<div class="step-num">${s.step}</div><h3>${s.title}</h3><p>${s.desc}</p>`;
    grid.appendChild(div);
  });
}

/* ─── CTA ────────────────────────────────────────────────────────── */
function buildCTA() {
  const s = SITE_CONFIG.school;
  document.getElementById('cta-wa').href   = 'https://wa.me/' + s.whatsapp;
  document.getElementById('cta-call').href = 'tel:' + s.phone.replace(/\s/g,'');
}

/* ─── PRINCIPAL MESSAGE ──────────────────────────────────────────── */
function buildPrincipal() {
  if (!SITE_CONFIG.principal) return;
  const p = SITE_CONFIG.principal;
  const img = document.getElementById('principal-img');
  if (img) { img.src = p.photo; }
  setText('principal-msg', p.message);
  setText('principal-name', p.name);
  setText('principal-title', p.title);
}

/* ─── POPUP BANNER ───────────────────────────────────────────────── */
function buildPopup() {
  if (!SITE_CONFIG.popup || !SITE_CONFIG.popup.enabled) return;
  const pop = SITE_CONFIG.popup;
  const overlay = document.getElementById('popup-overlay');
  
  if (!overlay) return;
  
  setText('popup-title', pop.title);
  setText('popup-text', pop.text);
  const btn = document.getElementById('popup-btn');
  if (btn) {
    btn.textContent = pop.btnText;
    btn.href = pop.btnLink;
  }
  
  const closeBtn = document.getElementById('popup-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  }
  
  setTimeout(() => {
    overlay.classList.add('active');
  }, (pop.delaySeconds || 8) * 1000);
}

/* ─── ABOUT PAGE ─────────────────────────────────────────────────── */
function buildAbout() {
  const a = SITE_CONFIG.about;
  setText('about-story-text', a.story);
  setText('founder-message', a.founderMessage);
  setText('founder-name', a.founderName);
  setText('founder-title', a.founderTitle);
  setText('vision-text', a.vision);
  setText('mission-text', a.mission);
  const img = document.getElementById('about-img');
  if (img) { img.src = 'images/hero.jpg'; img.alt = SITE_CONFIG.school.name; }
}

/* ─── TEACHERS ───────────────────────────────────────────────────── */
function buildTeachers() {
  const grid = document.getElementById('teachers-grid');
  SITE_CONFIG.teachers.forEach((t, i) => {
    const div = document.createElement('div');
    div.className = `teacher-card reveal reveal-d${i + 1}`;
    div.innerHTML = `
      <div class="teacher-avatar">${t.initials}</div>
      <h3>${t.name}</h3>
      <div class="teacher-role">${t.role}</div>
      <p class="teacher-bio">${t.bio}</p>
    `;
    grid.appendChild(div);
  });
}

/* ─── PROGRAMS DETAIL PAGE ───────────────────────────────────────── */
function buildProgramsDetail() {
  const container = document.getElementById('programs-detail');
  SITE_CONFIG.programs.forEach((p, i) => {
    const sec = document.createElement('div');
    sec.className = 'program-detail';
    const isReverse = i % 2 !== 0;
    sec.innerHTML = `
      <div class="container">
        <div class="program-detail-grid ${isReverse ? 'reverse' : ''}">
          <div class="program-detail-img">
            <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='images/placeholder.jpg'">
          </div>
          <div class="program-detail-content reveal">
            <span class="section-label">${p.age}</span>
            <h2 style="margin:12px 0 14px">${p.name}</h2>
            <p>${p.description}</p>
            <div class="program-activities-list" style="margin-top:20px">
              ${p.activities.map(a => `<div class="program-activity-item">✅ ${a}</div>`).join('')}
            </div>
            <a href="contact.html" class="btn btn-primary" style="margin-top:24px">Enquire Now</a>
          </div>
        </div>
      </div>
    `;
    container.appendChild(sec);
  });
}

/* ─── ADMISSION PAGE ─────────────────────────────────────────────── */
function buildAdmission() {
  const info = SITE_CONFIG.admissionInfo;
  const tbody = document.getElementById('age-table-body');
  info.ageGroups.forEach(g => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td><strong>${g.program}</strong></td><td>${g.age}</td><td>${g.cutoff}</td>`;
    tbody.appendChild(tr);
  });
  const docList = document.getElementById('doc-list');
  info.documents.forEach(d => {
    const li = document.createElement('li');
    li.innerHTML = '<i class="ri-file-list-3-line" style="color:var(--primary);font-size:1.1rem;flex-shrink:0"></i> ' + d;
    docList.appendChild(li);
  });
  const banner = document.getElementById('admission-status');
  if (banner) {
    const open = info.admissionOpen;
    banner.innerHTML = open
      ? '<i class="ri-checkbox-circle-fill" style="color:#2E7D32"></i> Admissions are currently <strong>OPEN</strong> for 2025–26'
      : '<i class="ri-close-circle-fill" style="color:#B91C1C"></i> Admissions are currently <strong>closed</strong>. Please check back soon.';
    banner.style.background = open ? '#E8F5E9' : '#FEE2E2';
    banner.style.color      = open ? '#2E7D32' : '#B91C1C';
  }
}

/* ─── CONTACT PAGE ───────────────────────────────────────────────── */
function buildContact() {
  const s = SITE_CONFIG.school;
  setText('contact-address', s.address);
  setText('contact-timing', s.visitTiming);
  const phoneEl = document.getElementById('contact-phone');
  if (phoneEl) { phoneEl.textContent = s.phone; phoneEl.href = 'tel:' + s.phone.replace(/\s/g,''); }
  const emailEl = document.getElementById('contact-email');
  if (emailEl) { emailEl.textContent = s.email; emailEl.href = 'mailto:' + s.email; }
  const waEl = document.getElementById('contact-wa');
  if (waEl) waEl.href = 'https://wa.me/' + s.whatsapp;
  const mapEl = document.getElementById('contact-map');
  if (mapEl) mapEl.src = s.mapEmbed;
}

/* ─── HELPERS ────────────────────────────────────────────────────── */
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}
