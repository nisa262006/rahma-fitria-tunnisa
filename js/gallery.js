/* ============================================================
   gallery.js — Advanced Lightbox & Image Evidence Viewer
   Supports: Clicked-Element Delegation, Dynamic Metadata, Group Navigation, Keyboard Controls
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const modalOverlay = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');
  const modalClose = document.getElementById('modal-close');
  
  let currentGroup = [];
  let currentIndex = 0;

  if (!modalOverlay) return;

  // Selector for all clickable image containers across index.html, portfolio.html & case studies
  const scopeSelector = '[data-lightbox="true"], [data-lightbox], .cert-card, .evidence-card, .gallery-item, .cert-cosmic-card, .evidence-cosmic-card, .project-media, .p-visual, .cs-hero-img-wrap';

  // Ensure Next/Prev buttons exist in modal container
  let prevBtn = document.getElementById('modal-prev');
  let nextBtn = document.getElementById('modal-next');
  const container = modalOverlay.querySelector('.modal-container');

  if (container) {
    if (!prevBtn) {
      prevBtn = document.createElement('button');
      prevBtn.id = 'modal-prev';
      prevBtn.className = 'modal-nav-btn modal-nav-prev';
      prevBtn.setAttribute('aria-label', 'Previous Image');
      prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
      container.appendChild(prevBtn);
    }

    if (!nextBtn) {
      nextBtn = document.createElement('button');
      nextBtn.id = 'modal-next';
      nextBtn.className = 'modal-nav-btn modal-nav-next';
      nextBtn.setAttribute('aria-label', 'Next Image');
      nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
      container.appendChild(nextBtn);
    }
  }

  // Extract metadata from any visual evidence item
  function extractMetadata(el) {
    if (!el) return null;

    const img = el.querySelector('img');
    const imgSrc = el.getAttribute('data-src') || (img ? img.getAttribute('src') : '');
    if (!imgSrc) return null;

    const title = el.getAttribute('data-title') || 
                  el.querySelector('.cert-title, .evidence-title, .gallery-caption, .project-title, .p-title, .cert-cosmic-title, .evidence-cosmic-title, .cs-title')?.textContent?.trim() || 
                  'Bukti Visual / Documentation';
    const category = el.getAttribute('data-category') || 
                     el.querySelector('.cert-issuer, .evidence-badge, .project-category, .p-kicker, .cert-cosmic-issuer, .evidence-cosmic-badge, .cs-category')?.textContent?.trim() || 
                     'PORTFOLIO EVIDENCE';
    const description = el.getAttribute('data-description') || 
                        el.getAttribute('data-caption') || 
                        el.querySelector('.evidence-caption, .cert-date, .project-desc, .p-desc, .cert-cosmic-date, .cs-summary')?.textContent?.trim() || 
                        '';
    const project = el.getAttribute('data-project') || '';
    const id = el.getAttribute('data-id') || el.id || '';

    return {
      src: imgSrc,
      title: title,
      category: category,
      description: description,
      project: project,
      id: id,
      element: el
    };
  }

  // Update Modal Display for current index in active group
  function updateModalDisplay(index) {
    if (!currentGroup || currentGroup.length === 0) return;

    if (index < 0) index = currentGroup.length - 1;
    if (index >= currentGroup.length) index = 0;
    currentIndex = index;

    const item = currentGroup[currentIndex];
    if (modalImg) {
      modalImg.src = item.src;
      modalImg.alt = item.title;
    }

    if (modalCaption) {
      modalCaption.innerHTML = `
        <div class="modal-caption-bar">
          <div class="modal-caption-text">
            <strong style="display: block; font-size: 1rem; color: #ffffff;">${item.title}</strong>
            ${item.description ? `<p style="margin-top: 6px; font-size: 0.88rem; opacity: 0.85; line-height: 1.4;">${item.description}</p>` : ''}
          </div>
          ${item.category ? `<span class="modal-category-badge">${item.category}</span>` : ''}
        </div>
      `;
    }

    // Toggle navigation buttons strictly when multiple images exist in group
    if (prevBtn && nextBtn) {
      const showNav = currentGroup.length > 1;
      prevBtn.style.display = showNav ? 'flex' : 'none';
      nextBtn.style.display = showNav ? 'flex' : 'none';
    }
  }

  // Open Lightbox targeting the EXACT CLICKED ELEMENT
  function openLightboxFromElement(targetEl) {
    if (!targetEl) return;

    const parentContainer = targetEl.closest('.cert-grid, .gallery-grid, .evidence-grid, .cert-cosmic-grid, .evidence-cosmic-grid, .projects-grid, .project-cards, section, body');
    
    let siblingElements = parentContainer ? Array.from(parentContainer.querySelectorAll(scopeSelector)) : [targetEl];
    siblingElements = siblingElements.filter(el => el.matches(scopeSelector));

    currentGroup = siblingElements.map(el => extractMetadata(el)).filter(item => item && item.src);
    
    const clickedMeta = extractMetadata(targetEl);
    let foundIndex = currentGroup.findIndex(item => item.element === targetEl || (item.id && item.id === clickedMeta.id));

    if (foundIndex === -1 && clickedMeta && clickedMeta.src) {
      foundIndex = currentGroup.findIndex(item => item.src === clickedMeta.src);
    }

    if (foundIndex === -1) {
      currentGroup = clickedMeta && clickedMeta.src ? [clickedMeta] : [];
      foundIndex = 0;
    }

    if (currentGroup.length > 0) {
      updateModalDisplay(foundIndex);
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  // EVENT DELEGATION: Intercept clicks on any lightbox-enabled element
  document.body.addEventListener('click', (e) => {
    // Ignore action buttons or direct link clicks inside project cards
    if (e.target.closest('button.btn, button.p-btn-modal, a.btn, a.p-btn-case, .project-actions, .p-actions-row')) {
      return;
    }

    const card = e.target.closest(scopeSelector);
    if (card) {
      const isAnchor = card.tagName === 'A' || e.target.tagName === 'A';
      if (isAnchor && !card.hasAttribute('data-lightbox')) {
        return; // Allow standard link navigation if not explicitly lightbox enabled
      }
      e.preventDefault();
      openLightboxFromElement(card);
    }
  });

  // Global helper function for direct inline calls
  window.openLightbox = function(src, caption, category, project) {
    const matchingEl = Array.from(document.querySelectorAll(scopeSelector))
      .find(el => {
        const meta = extractMetadata(el);
        return meta && meta.src && (meta.src.includes(src) || src.includes(meta.src));
      });

    if (matchingEl) {
      openLightboxFromElement(matchingEl);
    } else {
      currentGroup = [{
        src: src,
        title: caption || 'Visual Evidence',
        category: category || 'EVIDENCE',
        description: caption || '',
        project: project || ''
      }];
      updateModalDisplay(0);
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  // Previous & Next navigation
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateModalDisplay(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateModalDisplay(currentIndex + 1);
    });
  }

  // Modal Close
  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (!modalOverlay.classList.contains('active') && modalImg) {
        modalImg.src = '';
      }
    }, 250);
  }

  if (modalClose) {
    modalClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closeModal();
    });
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay || e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!modalOverlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') updateModalDisplay(currentIndex - 1);
    if (e.key === 'ArrowRight') updateModalDisplay(currentIndex + 1);
  });
});
