// Set current year in footer
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

// Highlight active nav link based on current page
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === page || (page === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// Animate progress bars into view (ongoing page)
const bars = document.querySelectorAll('.progress-fill');
if (bars.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.width;
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(bar => observer.observe(bar));
}
