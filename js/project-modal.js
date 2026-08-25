/* ============================================================
   project-modal.js — Project Detail Modal Interactions
   Provides clean modal popup for project details on both index.html & portfolio.html
   ============================================================ */

const PROJECT_DETAILS_DATA = {
  "sahabat-quran": {
    id: "sahabat-quran",
    title: {
      id: "Sistem Manajemen Yayasan Sahabat Quran",
      en: "Sahabat Quran Foundation Management System"
    },
    category: {
      id: "PROYEK KLIEN NYATA",
      en: "REAL CLIENT PROJECT"
    },
    status: {
      id: "Aktif Digunakan (~500 Santri)",
      en: "Actively Used (~500 Students)"
    },
    role: {
      id: "Backend Developer (Tim 3 Orang)",
      en: "Backend Developer (Team of 3)"
    },
    image: "assets/projects/sahabat-quran/WhatsApp Image 2026-08-11 at 13.10.10.WebP",
    tech: ["SQL Database", "PHP Backend", "JavaScript", "Database Schema", "Auth System"],
    desc: {
      id: "Mendigitalkan seluruh operasional administrasi Yayasan Sahabat Quran Bogor — mencakup manajemen data santri (~500 santri), pendaftaran santri baru online, sistem presensi harian, modul rekapitulasi rapor, dan manajemen transaksi keuangan terintegrasi.",
      en: "Digitized full administrative operations for Sahabat Quran Foundation Bogor — covering student data management (~500 students), online registration, daily attendance tracking, report card modules, and integrated financial transaction management."
    },
    problem: {
      id: "Sebelumnya administrasi yayasan dilakukan secara manual dengan dokumen fisik dan spreadsheet terpisah, menyebabkan proses rekapitulasi rapor dan laporan keuangan memakan waktu hingga 1 minggu.",
      en: "Previously, foundation administration was conducted manually using paper forms and disconnected spreadsheets, causing report card generation and financial reporting to take up to 1 week."
    },
    contributions: [
      { id: "Merancang skema arsitektur basis data SQL terstruktur untuk santri, pengajar, dan modul keuangan.", en: "Architected structured SQL database schema for students, teachers, and financial modules." },
      { id: "Membangun sistem autentikasi bertingkat untuk admin, pengajar, dan orang tua santri.", en: "Built multi-level authentication system for administrators, teachers, and parents." },
      { id: "Mengembangkan API backend PHP untuk kalkulasi presensi harian dan rekapitulasi nilai rapor.", en: "Developed PHP backend APIs for daily attendance calculation and report card grading summaries." }
    ],
    impact: {
      id: "Sistem aktif digunakan mengelola ~500 santri. Memangkas waktu pembuatan rapor dari 1 minggu menjadi beberapa menit. Tim pengembang menerima Sertifikat Apresiasi Resmi dari yayasan.",
      en: "System actively manages ~500 students. Reduced report card processing time from 1 week to minutes. Developers received an Official Certificate of Appreciation from the foundation."
    },
    caseStudyUrl: "projects/sahabat-quran.html"
  },

  "takka-steel": {
    id: "takka-steel",
    title: {
      id: "Company Profile & Katalog — Takka Steel",
      en: "Company Profile & Catalog — Takka Steel"
    },
    category: {
      id: "PROYEK KLIEN NYATA · WEBSITE LIVE",
      en: "REAL CLIENT PROJECT · LIVE WEBSITE"
    },
    status: {
      id: "Selesai (Live Website)",
      en: "Completed (Live Website)"
    },
    role: {
      id: "Project Manager / Project Lead",
      en: "Project Manager / Project Lead"
    },
    image: "assets/projects/takka-steel/Cuplikan layar 2026-08-11 130742.WebP",
    tech: ["HTML5", "CSS3", "JavaScript", "UI Design", "Requirement Gathering", "Project Lead"],
    desc: {
      id: "Memimpin proyek pengembangan website company profile dan katalog produk digital untuk distributor baja & bahan bangunan Jabodetabek (Takka Steel). Mengelola proyek dari prapemasaran, requirement gathering, hingga live deployment di takkasteel.com.",
      en: "Led the development project for a company profile website and digital product catalog for a steel & building materials distributor in Greater Jakarta (Takka Steel). Managed the project from client requirement gathering through live deployment at takkasteel.com."
    },
    problem: {
      id: "Klien awalnya mengajukan pembuatan WMS (Warehouse Management System). Setelah requirement gathering langsung di lokasi gudang fisik, ditemukan bahwa klien sudah memiliki WMS internal, namun belum memiliki media katalog digital untuk penawaran harga.",
      en: "The client initially requested a Warehouse Management System (WMS). During direct requirement gathering at their physical warehouse, we discovered they already had an internal WMS, but lacked an official digital catalog website for price quotes."
    },
    contributions: [
      { id: "Memimpin requirement gathering dan diskusi strategi bersama manajemen Takka Steel.", en: "Led requirement gathering and strategy discussions directly with Takka Steel management." },
      { id: "Merekomendasikan pivot proyek dari WMS ke Company Profile & Katalog Digital responsif.", en: "Recommended pivoting the project scope from WMS to a responsive Company Profile & Digital Catalog." },
      { id: "Mengoordinasikan timeline pengerjaan (~3 minggu efektif) serta membagi peran tim.", en: "Coordinated project timeline (~3 effective weeks) and allocated team responsibilities." },
      { id: "Mengawasi kualitas antarmuka UI/UX, pengkodean HTML/CSS/JS, dan integrasi WhatsApp Instant CTA.", en: "Oversaw UI/UX interface quality, HTML/CSS/JS coding, and WhatsApp Instant CTA integration." }
    ],
    impact: {
      id: "Website resmi deployed dan beroperasi di www.takkasteel.com, memfasilitasi calon pembeli baja Jabodetabek mendapatkan penawaran harga instan via WhatsApp.",
      en: "Official website deployed and operational at www.takkasteel.com, enabling prospective steel buyers in Greater Jakarta to receive instant price quotes via WhatsApp."
    },
    liveUrl: "https://www.takkasteel.com/",
    caseStudyUrl: "projects/takka-steel.html"
  },

  "sertifikat-kilat": {
    id: "sertifikat-kilat",
    title: {
      id: "Sertifikat Kilat — Automated Certificate Platform",
      en: "Sertifikat Kilat — Automated Certificate Platform"
    },
    category: {
      id: "STARTUP PLATFORM",
      en: "STARTUP PLATFORM"
    },
    status: {
      id: "Aktif",
      en: "Active"
    },
    role: {
      id: "Co-Founder (Tim 2 Orang)",
      en: "Co-Founder (Team of 2)"
    },
    image: "assets/projects/sertifikat-kilat/Cuplikan layar 2026-08-11 132211.WebP",
    tech: ["QR Code Engine", "PDF Generator", "Spreadsheet Import", "JavaScript", "Automation"],
    desc: {
      id: "Platform otomatisasi pembuatan sertifikat massal dengan verifikasi QR Code terintegrasi, dirancang untuk memangkas waktu penerbitan sertifikat event, webinar, dan pelatihan.",
      en: "Automated bulk certificate generation platform with integrated QR Code verification, designed to eliminate manual certificate creation delays for campus events and webinars."
    },
    problem: {
      id: "Panitia acara kampus dan webinar sering menghabiskan waktu 1–2 hari secara manual untuk memasukkan nama peserta ke dalam template sertifikat satu per satu.",
      en: "Campus event organizers and webinar hosts frequently spend 1–2 days manually editing participant names onto certificate templates one by one."
    },
    contributions: [
      { id: "Menganalisis alur impor data dari spreadsheet Excel/CSV ke dalam sistem generator.", en: "Analyzed spreadsheet import workflows from Excel/CSV into the generator system." },
      { id: "Mengembangkan modul pemetaan teks nama & nomor sertifikat secara presisi pada PDF.", en: "Developed precise text mapping for participant names & certificate numbers onto PDF output." },
      { id: "Membangun sistem verifikasi QR Code unik untuk validasi keaslian dokumen sertifikat.", en: "Built unique QR Code verification system for certificate authenticity validation." }
    ],
    impact: {
      id: "Mampu menerbitkan 25+ sertifikat terverifikasi hanya dalam 3–5 menit, menghemat 95% waktu pengerjaan manual.",
      en: "Capable of generating 25+ verified certificates in just 3–5 minutes, saving 95% of manual labor."
    },
    caseStudyUrl: "projects/sertifikat-kilat.html"
  }
};

// Initialize Project Detail Modal logic
function initProjectModal() {
  // Ensure modal DOM elements exist
  let modalOverlay = document.getElementById('project-detail-modal');
  
  if (!modalOverlay) {
    modalOverlay = document.createElement('div');
    modalOverlay.id = 'project-detail-modal';
    modalOverlay.className = 'proj-modal-overlay';
    modalOverlay.setAttribute('aria-hidden', 'true');
    modalOverlay.innerHTML = `
      <div class="proj-modal-container">
        <button id="proj-modal-close" class="proj-modal-close" aria-label="Close Modal">&times;</button>
        <div id="proj-modal-content" class="proj-modal-content"></div>
      </div>
    `;
    document.body.appendChild(modalOverlay);
  }

  const modalContent = document.getElementById('proj-modal-content');
  const closeBtn = document.getElementById('proj-modal-close');

  function getLang() {
    return localStorage.getItem('language') || 'id';
  }

  function openProjectModal(projectId) {
    const data = PROJECT_DETAILS_DATA[projectId];
    if (!data) return;

    const lang = getLang();
    const title = data.title[lang] || data.title.id;
    const category = data.category[lang] || data.category.id;
    const status = data.status[lang] || data.status.id;
    const role = data.role[lang] || data.role.id;
    const desc = data.desc[lang] || data.desc.id;
    const problem = data.problem[lang] || data.problem.id;
    const impact = data.impact[lang] || data.impact.id;
    const contributions = data.contributions.map(c => c[lang] || c.id);

    const isEn = lang === 'en';

    modalContent.innerHTML = `
      <div class="proj-modal-grid">
        <!-- Left: Image -->
        <div class="proj-modal-media">
          <img src="${data.image}" alt="${title}" class="proj-modal-img">
          <div class="proj-modal-badge-bar">
            <span class="proj-modal-tag">${category}</span>
            <span class="proj-modal-status">${status}</span>
          </div>
        </div>

        <!-- Right: Information -->
        <div class="proj-modal-info">
          <h2 class="proj-modal-title">${title}</h2>
          
          <div class="proj-modal-role-box">
            <strong>${isEn ? 'MY ROLE' : 'PERAN SAYA'}:</strong>
            <span>${role}</span>
          </div>

          <p class="proj-modal-desc">${desc}</p>

          ${problem ? `
            <div class="proj-modal-section">
              <h4><i class="fas fa-exclamation-circle"></i> ${isEn ? 'Background & Challenge' : 'Latar Belakang & Tantangan'}</h4>
              <p>${problem}</p>
            </div>
          ` : ''}

          <div class="proj-modal-section">
            <h4><i class="fas fa-check-circle"></i> ${isEn ? 'Key Contributions' : 'Kontribusi Utama'}</h4>
            <ul class="proj-modal-list">
              ${contributions.map(c => `<li><i class="fas fa-chevron-right"></i> ${c}</li>`).join('')}
            </ul>
          </div>

          <div class="proj-modal-section">
            <h4><i class="fas fa-chart-line"></i> ${isEn ? 'Project Impact & Result' : 'Dampak & Hasil Proyek'}</h4>
            <p>${impact}</p>
          </div>

          <div class="proj-modal-section">
            <h4><i class="fas fa-code"></i> Tech Stack</h4>
            <div class="proj-modal-chips">
              ${data.tech.map(t => `<span class="proj-chip">${t}</span>`).join('')}
            </div>
          </div>

          <div class="proj-modal-actions">
            ${data.liveUrl ? `
              <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 10px 18px; font-size: 0.82rem;">
                <i class="fas fa-globe"></i> ${isEn ? 'Visit Live Website ↗' : 'Kunjungi Website Live ↗'}
              </a>
            ` : ''}
            ${data.caseStudyUrl ? `
              <a href="${data.caseStudyUrl}" class="btn btn-outline" style="padding: 10px 18px; font-size: 0.82rem;">
                <i class="fas fa-file-alt"></i> ${isEn ? 'View Detailed Case Study' : 'Lihat Studi Kasus Lengkap'}
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Intercept click on project detail buttons across the page
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-project-detail]');
    if (btn) {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project-detail');
      openProjectModal(projectId);
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

document.addEventListener('DOMContentLoaded', initProjectModal);
