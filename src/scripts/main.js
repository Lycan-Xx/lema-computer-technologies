// Extracted JS from index.html
// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-overlay');
  menu.classList.toggle('open');
  overlay.classList.toggle('hidden');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

// Scroll reveal
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// Stagger children reveal
document.querySelectorAll('.grid').forEach(grid => {
  const children = grid.querySelectorAll('.reveal');
  children.forEach((child, index) => {
    child.style.transitionDelay = `${index * 0.1}s`;
  });
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Navbar background on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.08)';
    nav.style.backgroundColor = 'rgba(5,5,5,0.95)';
  } else {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.05)';
    nav.style.backgroundColor = 'rgba(5,5,5,0.8)';
  }
});

// Toast notification
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  toast.className = `toast toast-${type} show`;
  toastMessage.textContent = message;
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// Form submission
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnIcon = document.getElementById('btn-icon');
  const btnSpinner = document.getElementById('btn-spinner');

  // Show loading state
  if (btnText) btnText.textContent = 'Sending...';
  if (btnIcon) btnIcon.classList.add('hidden');
  if (btnSpinner) btnSpinner.classList.remove('hidden');
  if (btn) { btn.disabled = true; btn.style.opacity = '0.7'; }

  // Simulate form submission (replace with actual backend call)
  setTimeout(() => {
    if (btnText) btnText.textContent = 'Message Sent!';
    if (btnSpinner) btnSpinner.classList.add('hidden');
    if (btn) btn.style.opacity = '1';
    showToast('Your message has been sent successfully! We\'ll contact you soon.', 'success');

    // Reset form
    setTimeout(() => {
      const form = document.getElementById('contact-form');
      if (form) form.reset();
      if (btnText) btnText.textContent = 'Send Message';
      if (btnIcon) btnIcon.classList.remove('hidden');
      if (btn) btn.disabled = false;
    }, 2000);
  }, 2000);
}

// Attach form handler
const contactForm = document.getElementById('contact-form');
if (contactForm) contactForm.addEventListener('submit', handleSubmit);

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = '#ffffff';
    }
  });
});
