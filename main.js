// Set current year in footer
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

// Highlight active drawer link based on current page
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.drawer nav ul li a').forEach(link => {
  if (link.getAttribute('href') === page) link.classList.add('active');
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
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

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
