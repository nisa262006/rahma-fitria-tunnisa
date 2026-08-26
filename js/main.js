/* ============================================================
   main.js — Core Interactions, Reveal Animations & Observers
   ============================================================ */

/* ——— CENTRALIZED CV URL (change only here) ——— */
const CV_URL = 'assets/cv/Rahma-Fitria-Tunnisa-CV.pdf';

document.addEventListener('DOMContentLoaded', () => {
  // 0. Wire all CV buttons via data attribute
  document.querySelectorAll('[data-cv-action]').forEach(el => {
    const action = el.getAttribute('data-cv-action');
    el.setAttribute('href', CV_URL);
    if (action === 'download') {
      el.setAttribute('download', 'Rahma-Fitria-Tunnisa-CV.pdf');
    } else {
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // 1. Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.10,
    rootMargin: '0px 0px -40px 0px'
  });
  revealElements.forEach(el => revealObserver.observe(el));

  // 2. Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        // close mobile menu if open
        const nm = document.querySelector('.nav-menu');
        if (nm) { nm.classList.remove('active', 'open'); }
        const btn = document.querySelector('.mobile-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // 3. Mobile menu toggle
  const toggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      navMenu.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });
  }

  // 4. Header scroll effect
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // 5. Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          const link = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (link) link.classList.add('active');
        }
      });
    }, { threshold: 0.35 });
    sections.forEach(s => observer.observe(s));
  }

  // 6. PDF Export Handler with Image Pre-loading Guard
  const printDeckBtn = document.getElementById('contact-export-pdf');
  if (printDeckBtn) {
    printDeckBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const deck = document.getElementById('print-deck');
      if (!deck) {
        window.print();
        return;
      }
      const imgs = Array.from(deck.querySelectorAll('img'));
      const promises = imgs.map(img => {
        if (img.complete && img.naturalHeight !== 0) {
          return Promise.resolve();
        }
        return new Promise(resolve => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      const prevCursor = document.body.style.cursor;
      document.body.style.cursor = 'wait';

      Promise.all(promises).then(() => {
        document.body.style.cursor = prevCursor;
        window.print();
      }).catch(() => {
        document.body.style.cursor = prevCursor;
        window.print();
      });
    });
  }

  console.log('Portfolio initialized — Rahma Fitria Tunnisa | CV_URL:', CV_URL);
});

