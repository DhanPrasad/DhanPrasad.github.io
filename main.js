// Set current year in footer
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

// Highlight the current page in the nav (and drawer, if present)
const page = location.pathname.split('/').pop() || 'index.html';
// Detail pages highlight their parent tab:
//   project-*.html → Projects,  post-*.html → Learnings
let activePage = page;
if (page.startsWith('project-')) activePage = 'projects.html';
else if (page.startsWith('post-')) activePage = 'blog.html';
document.querySelectorAll('.nav-links a, .drawer nav ul li a').forEach(link => {
  if (link.getAttribute('href') === activePage) link.classList.add('active');
});

// Hamburger / drawer logic (shared across all pages)
const hamburgerBtn = document.getElementById('hamburgerBtn');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('drawerOverlay');
const closeBtn = document.getElementById('drawerClose');

function openDrawer() {
  drawer.classList.add('open');
  overlay.classList.add('open');
  hamburgerBtn.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  drawer.classList.remove('open');
  overlay.classList.remove('open');
  hamburgerBtn.classList.remove('open');
  document.body.style.overflow = '';
}

if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
if (overlay) overlay.addEventListener('click', closeDrawer);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && drawer) closeDrawer(); });

// Project figures: fall back to a labelled placeholder when the image
// file has not been added to the repo yet.
document.querySelectorAll('.figure img').forEach(img => {
  const flag = () => img.closest('.figure')?.classList.add('missing');
  img.addEventListener('error', flag);
  if (img.complete && img.naturalWidth === 0) flag();
});

// ══════════════════════════════════════════════════════════
// Astronomy gallery (blog.html)
// ══════════════════════════════════════════════════════════

// Same placeholder fallback as .figure, for gallery cards.
document.querySelectorAll('.astro-shot img').forEach(img => {
  const flag = () => img.closest('.astro-shot')?.classList.add('missing');
  img.addEventListener('error', flag);
  if (img.complete && img.naturalWidth === 0) flag();
});

// Lightbox. Only photos that actually loaded are included, so a
// missing image never opens an empty viewer.
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lbImg     = document.getElementById('lbImg');
  const lbCaption = document.getElementById('lbCaption');
  const lbCounter = document.getElementById('lbCounter');
  let shots = [];
  let current = 0;

  function collectShots() {
    shots = [...document.querySelectorAll('.astro-shot')].filter(
      fig => !fig.classList.contains('missing')
    );
  }

  function render() {
    const fig = shots[current];
    if (!fig) return;
    const img = fig.querySelector('img');
    lbImg.src = img.getAttribute('src');
    lbImg.alt = img.getAttribute('alt') || '';
    const title = fig.dataset.title || '';
    const sub   = fig.dataset.sub || '';
    lbCaption.innerHTML = '<b>' + title + '</b>' +
      (sub ? '<span class="lb-sub">' + sub + '</span>' : '');
    lbCounter.textContent = (current + 1) + ' / ' + shots.length;
  }

  function openLightbox(fig) {
    collectShots();
    const i = shots.indexOf(fig);
    if (i === -1) return;
    current = i;
    render();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  function step(n) {
    if (!shots.length) return;
    current = (current + n + shots.length) % shots.length;
    render();
  }

  document.querySelectorAll('.astro-shot').forEach(fig => {
    fig.addEventListener('click', () => {
      if (!fig.classList.contains('missing')) openLightbox(fig);
    });
  });

  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  document.getElementById('lbPrev').addEventListener('click', e => { e.stopPropagation(); step(-1); });
  document.getElementById('lbNext').addEventListener('click', e => { e.stopPropagation(); step(1); });

  // Click the dark backdrop (but not the image) to close
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox || e.target.classList.contains('lb-figure')) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  step(-1);
    if (e.key === 'ArrowRight') step(1);
  });
}

// Animate progress bars into view (ongoing page)
const bars = document.querySelectorAll('.progress-fill');
if (bars.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.style.width = e.target.dataset.width;
    });
  }, { threshold: 0.3 });
  bars.forEach(bar => observer.observe(bar));
}
