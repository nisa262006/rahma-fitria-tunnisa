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

  // Extract full item metadata from a given element
  function extractMetadata(el) {
    if (!el) return null;

    const img = el.querySelector('img');
    const imgSrc = el.getAttribute('data-src') || (img ? img.getAttribute('src') : '');
    const title = el.getAttribute('data-title') || 
                  el.querySelector('.cert-title, .evidence-title, .gallery-caption')?.textContent?.trim() || 
                  'Evidence';
    const category = el.getAttribute('data-category') || 
                     el.querySelector('.cert-issuer, .evidence-badge')?.textContent?.trim() || 
                     'PORTFOLIO EVIDENCE';
    const description = el.getAttribute('data-description') || 
                        el.getAttribute('data-caption') || 
                        el.querySelector('.evidence-caption, .cert-date')?.textContent?.trim() || 
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
            <strong>${item.title}</strong>
            ${item.description ? `<p style="margin-top: 4px; font-size: 0.88rem; opacity: 0.85; line-height: 1.4;">${item.description}</p>` : ''}
          </div>
          ${item.category ? `<span class="modal-category-badge">${item.category}</span>` : ''}
        </div>
      `;
    }

    // Toggle navigation buttons
    if (prevBtn && nextBtn) {
      const showNav = currentGroup.length > 1;
      prevBtn.style.display = showNav ? 'flex' : 'none';
      nextBtn.style.display = showNav ? 'flex' : 'none';
    }
  }

  // Open Lightbox targeting the EXACT CLICKED ELEMENT
  function openLightboxFromElement(targetEl) {
    if (!targetEl) return;

    // Find parent container or section to establish current gallery group scope
    const parentContainer = targetEl.closest('.cert-grid, .gallery-grid, .evidence-grid, section, body');
    const scopeSelector = '[data-lightbox], .cert-card, .evidence-card, .gallery-item';
    
    let siblingElements = parentContainer ? Array.from(parentContainer.querySelectorAll(scopeSelector)) : [targetEl];

    // Filter out nested duplicates
    siblingElements = siblingElements.filter(el => el.matches(scopeSelector));

    currentGroup = siblingElements.map(el => extractMetadata(el)).filter(item => item && item.src);
    
    // Find index of clicked element strictly by element reference or data-id
    const clickedMeta = extractMetadata(targetEl);
    let foundIndex = currentGroup.findIndex(item => item.element === targetEl || (item.id && item.id === clickedMeta.id));

    if (foundIndex === -1 && clickedMeta.src) {
      foundIndex = currentGroup.findIndex(item => item.src === clickedMeta.src);
    }

    if (foundIndex === -1) {
      currentGroup = [clickedMeta];
      foundIndex = 0;
    }

    updateModalDisplay(foundIndex);
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // EVENT DELEGATION: Intercept clicks on lightbox cards anywhere on page
  document.body.addEventListener('click', (e) => {
    const card = e.target.closest('[data-lightbox="true"], .cert-card, .evidence-card, .gallery-item');
    if (card) {
      // Prevent anchor jumps if card is inside a link or button
      if (e.target.tagName !== 'A' && !e.target.closest('a:not(.cert-card):not(.evidence-card):not(.gallery-item)')) {
        e.preventDefault();
      }
      openLightboxFromElement(card);
    }
  });

  // Global legacy helper function for direct inline calls
  window.openLightbox = function(src, caption, category, project) {
    // Search DOM for element matching exact src attribute
    const matchingEl = Array.from(document.querySelectorAll('[data-lightbox], .cert-card, .evidence-card, .gallery-item'))
      .find(el => {
        const meta = extractMetadata(el);
        return meta && meta.src && (meta.src.includes(src) || src.includes(meta.src));
      });

    if (matchingEl) {
      openLightboxFromElement(matchingEl);
    } else {
      currentGroup = [{
        src: src,
        title: caption || 'Portfolio Evidence',
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
    if (modalImg) modalImg.src = '';
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (!modalOverlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') updateModalDisplay(currentIndex - 1);
    if (e.key === 'ArrowRight') updateModalDisplay(currentIndex + 1);
  });
});

