/* ============================================================
   case-study-theme.js — Dynamic Theme & Navigation System for Case Studies
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  let origin = urlParams.get('from');

  if (!origin) {
    if (document.referrer && document.referrer.includes('portfolio.html')) {
      origin = 'portfolio';
    } else {
      origin = 'index';
    }
  }

  // Save preference in localStorage for consistent navigation
  localStorage.setItem('case_study_from', origin);

  const backLinks = document.querySelectorAll('.cs-back-link, .cs-back-btn-secondary');
  const navLinks = document.querySelectorAll('.nav-menu a.nav-link');
  const brandLogo = document.querySelector('.brand-logo');
  const centerPageLink = document.querySelector('.cs-page-link.cs-center');

  if (origin === 'portfolio') {
    document.body.classList.add('theme-portfolio');
    document.body.classList.remove('theme-index');

    // Update brand logo
    if (brandLogo) {
      brandLogo.setAttribute('href', '../portfolio.html');
    }

    // Update header nav links to point to portfolio.html anchors
    navLinks.forEach(link => {
      let href = link.getAttribute('href');
      if (href && href.includes('index.html#')) {
        link.setAttribute('href', href.replace('index.html#', 'portfolio.html#'));
      }
    });

    // Update back links
    backLinks.forEach(link => {
      link.href = '../portfolio.html#projects';
      link.innerHTML = '<i class="fas fa-arrow-left"></i> <span data-i18n="cs.back_portfolio">KEMBALI KE PORTFOLIO</span>';
    });

    // Update center pagination link
    if (centerPageLink) {
      centerPageLink.href = '../portfolio.html#projects';
      centerPageLink.innerHTML = '<i class="fas fa-th"></i> <span data-i18n="cs.back_portfolio">KEMBALI KE PORTFOLIO</span>';
    }

    // Update pagination links to preserve from=portfolio
    document.querySelectorAll('.cs-page-link').forEach(link => {
      if (link.classList.contains('cs-center')) return;
      let href = link.getAttribute('href');
      if (href && !href.includes('from=')) {
        href += (href.includes('?') ? '&' : '?') + 'from=portfolio';
        link.setAttribute('href', href);
      }
    });

  } else {
    document.body.classList.add('theme-index');
    document.body.classList.remove('theme-portfolio');

    // Update brand logo
    if (brandLogo) {
      brandLogo.setAttribute('href', '../index.html');
    }

    // Update header nav links to point to index.html anchors
    navLinks.forEach(link => {
      let href = link.getAttribute('href');
      if (href && href.includes('portfolio.html#')) {
        link.setAttribute('href', href.replace('portfolio.html#', 'index.html#'));
      }
    });

    // Update back links
    backLinks.forEach(link => {
      link.href = '../index.html#projects';
      link.innerHTML = '<i class="fas fa-arrow-left"></i> <span data-i18n="cs.back_index">BACK TO PROJECTS</span>';
    });

    // Update center pagination link
    if (centerPageLink) {
      centerPageLink.href = '../index.html#projects';
      centerPageLink.innerHTML = '<i class="fas fa-th"></i> <span data-i18n="cs.back_index">BACK TO PROJECTS</span>';
    }

    // Update pagination links to preserve from=index
    document.querySelectorAll('.cs-page-link').forEach(link => {
      if (link.classList.contains('cs-center')) return;
      let href = link.getAttribute('href');
      if (href && !href.includes('from=')) {
        href += (href.includes('?') ? '&' : '?') + 'from=index';
        link.setAttribute('href', href);
      }
    });
  }

  // Trigger translation for dynamically added data-i18n attributes
  if (typeof setLanguage === 'function' && typeof currentLang !== 'undefined') {
    setLanguage(currentLang);
  }
});
