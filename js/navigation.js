/* ============================================================
   navigation.js — Navigation & Header Scroll Behaviors
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // 1. Header scroll class
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active Section Link Highlight
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 2. Mobile Menu Toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isActive = navMenu.classList.toggle('active');
      mobileToggle.innerHTML = isActive 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
      mobileToggle.setAttribute('aria-expanded', isActive);
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (mobileToggle) {
          mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
          mobileToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
});
