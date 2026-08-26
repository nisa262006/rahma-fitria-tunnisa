/* ============================================================
   i18n.js — Rahma Fitria Tunnisa Portfolio
   Bilingual Translation System (ID / EN)
   Default: Bahasa Indonesia (id)
   Persisted via localStorage ("language")
   ============================================================ */

const translations = {
  id: {
    // Navigation
    "nav.brand_sub": "RAHMA FITRIA.T.",
    "nav.about": "Tentang",
    "nav.education": "Pendidikan",
    "nav.skills": "Keahlian",
    "nav.projects": "Proyek",
    "nav.experience": "Pengalaman",
    "nav.certificates": "Sertifikat",
    "nav.contact": "Kontak",
    "nav.cv_download": "Unduh CV",
    "nav.cv_view": "Lihat CV",

    // Hero Section
    "hero.eyebrow": "MAHASISWI SISTEM INFORMASI • STMIK TAZKIA",
    "hero.name": "Rahma Fitria Tunnisa",
    "hero.role1": "Sistem Informasi",
    "hero.role2": "System & Web Dev",
    "hero.role3": "Analisis Bisnis & Data",
    "hero.quote": "Mahasiswi Sistem Informasi STMIK Tazkia dengan pengalaman langsung dalam pengembangan sistem & web, requirement gathering, dan koordinasi proyek. Memahami proses bisnis di balik sistem serta sedang memperkuat kemampuan di bidang SQL, Python, Data Analytics, Data Science, dan Machine Learning.",
    "hero.btn_projects": "Lihat Proyek",
    "hero.btn_cv_view": "Lihat CV",
    "hero.btn_cv_download": "Unduh CV",
    "hero.btn_contact": "Hubungi Saya",
    "hero.stat1_label": "IPK Kumulatif",
    "hero.stat2_label": "IP Semester 4",
    "hero.stat3_label": "Proyek Klien Nyata",
    "hero.status_badge": "Terbuka untuk Magang",

    // Hero Floating Badges
    "hero.badge_sql": "SQL Database",
    "hero.badge_data": "Data Analytics",
    "hero.badge_python": "Python Data",
    "hero.badge_web": "Web Development",

    // About Section
    "about.tag": "01 / TENTANG SAYA",
    "about.title": "Mahasiswi Sistem Informasi Berorientasi Solusi",
    "about.subtitle": "Mahasiswi Sistem Informasi yang menggabungkan kemampuan teknis, analisis bisnis, dan pengalaman proyek nyata.",
    "about.box1_title": "Profil & Latar Belakang",
    "about.p1": "Saya Rahma Fitria Tunnisa, mahasiswi Program Studi Sistem Informasi di STMIK Tazkia (Fakultas Sains dan Teknologi). Saya telah menyelesaikan Semester 4 dengan IP Semester 3.80 dan IPK Kumulatif 3.57/4.00, serta akan memasuki Semester 5.",
    "about.p2": "Memiliki pengalaman langsung dalam pengembangan sistem dan web — mulai dari requirement gathering langsung bersama klien nyata, perancangan basis data SQL, pengembangan logika backend, integrasi sistem, hingga mengelola koordinasi proyek sebagai Project Lead.",
    "about.p3": "Terbiasa bekerja dalam tim proyek kecil, memahami proses bisnis di balik sebuah sistem, serta mengelola kegiatan organisasi kampus. Saat ini sedang memperkuat kemampuan di bidang SQL, Python, Data Analytics, Data Science, dan Machine Learning, sambil terbuka terhadap kesempatan magang di bidang Teknologi Informasi dan Sistem Informasi.",
    "about.box2_title": "Fokus & Informasi Akademik",
    "about.spec_major_label": "Program Studi:",
    "about.spec_major_val": "Sistem Informasi (Fakultas Sains & Teknologi)",
    "about.spec_inst_label": "Institusi:",
    "about.spec_inst_val": "STMIK Tazkia",
    "about.spec_status_label": "Status Akademik:",
    "about.spec_status_val": "Telah menyelesaikan Semester 4 • Akan memasuki Semester 5",
    "about.spec_gpa_label": "IPK Kumulatif:",
    "about.spec_gpa_val": "3.57 / 4.00",
    "about.spec_sem4_label": "IP Semester 4:",
    "about.spec_sem4_val": "3.80",
    "about.spec_focus_label": "Minat Karier:",
    "about.spec_focus_val": "Pengembangan Sistem & Web, Analisis Bisnis, Data Analytics",
    "about.spec_open_label": "Peluang:",
    "about.spec_open_val": "Terbuka untuk Magang IT / Sistem Informasi",

    // Education Section
    "edu.tag": "02 / PENDIDIKAN",
    "edu.title": "Latar Belakang Pendidikan",
    "edu.subtitle": "Pendidikan formal yang membangun fondasi berpikir analitis, manajemen sistem informasi, dan disiplin teknis.",
    "edu.s1_level": "Pendidikan Tinggi",
    "edu.s1_school": "Sekolah Tinggi Manajemen Informatika dan Komputer (STMIK) Tazkia",
    "edu.s1_major": "Program Studi Sistem Informasi, Fakultas Sains dan Teknologi",
    "edu.s1_period": "2024 — Sekarang",
    "edu.s1_status": "Telah menyelesaikan Semester 4 • Akan memasuki Semester 5",
    "edu.s1_gpa": "IPK Kumulatif: 3.57 / 4.00 · IP Semester 4: 3.80",
    "edu.s1_desc": "Mempelajari pengembangan sistem, perancangan basis data SQL, requirement gathering, proses bisnis, serta memperdalam ilmu data analytics dan kecerdasan buatan.",

    "edu.smk_level": "Sekolah Menengah Kejuruan",
    "edu.smk_school": "SMK Negeri 3 Cikarang Barat",
    "edu.smk_major": "Jurusan Teknik Perancangan Gambar Mesin (TPGM)",
    "edu.smk_period": "Lulus 2024",
    "edu.smk_status": "Lulus 2024",
    "edu.smk_pkl": "PKL: PT Yazuho Auto (Kawasan Industri Jababeka I, Cikarang)",
    "edu.smk_pkl_period": "Desember 2022 – Maret 2023 (3 Bulan)",
    "edu.smk_desc": "Melakukan pengecekan dan analisis kondisi barang (quality inspection) sebelum didistribusikan, memastikan barang yang diterima maupun dikirim dalam kondisi baik.",

    // Skills Section
    "skills.tag": "03 / KEAHLIAN",
    "skills.title": "Keahlian Teknis & Profesional",
    "skills.subtitle": "Kombinasi bahasa pemrograman, basis data, perkakas kerja, serta keahlian profesional berbasis proyek nyata.",
    "skills.cat1_title": "Pengembangan Sistem & Web",
    "skills.cat2_title": "Basis Data & Data",
    "skills.cat3_title": "Tools & Perkakas",
    "skills.cat4_title": "Keahlian Profesional",

    // Projects Section
    "projects.tag": "04 / PROYEK",
    "projects.title": "Proyek Pilihan & Klien Nyata",
    "projects.subtitle": "Sistem dan website terstruktur yang dibangun untuk menjawab kebutuhan bisnis dan operasional nyata.",
    "projects.view_case": "Lihat Studi Kasus",
    "projects.visit_live": "Kunjungi Website ↗",
    "projects.github_repo": "GitHub Repository ↗",

    // Project 1 - Takka Steel
    "proj2.cat": "PROYEK // 01 · KLIEN NYATA",
    "proj2.status": "Selesai (Live)",
    "proj2.title": "Website Company Profile & Katalog — Takka Steel",
    "proj2.role_label": "PERAN SAYA",
    "proj2.role_val": "Project Manager / Project Lead",
    "proj2.tech_label": "TECH STACK",
    "proj2.tech_val": "HTML5, CSS3, JavaScript, Responsive UI",
    "proj2.desc": "Memimpin tim proyek kecil (mini company) dari perencanaan hingga deploy. Melakukan requirement gathering langsung dengan klien; permintaan awal (sistem manajemen gudang) dialihkan ke website company profile setelah menemukan bahwa WMS sudah dimiliki klien. Pengembangan selasai dalam ~3 minggu efektif (total ~1 bulan). Memperoleh pendapatan dari jasa pengembangan.",
    "proj2.impact": "Website Live & Deployed. Memperoleh pendapatan jasa pengembangan dan meningkatkan visibilitas digital produk distributor.",

    // Project 2 - Sahabat Quran
    "proj1.cat": "PROYEK // 02 · KLIEN NYATA",
    "proj1.status": "Aktif Digunakan",
    "proj1.title": "Sistem Manajemen Yayasan — Sahabat Quran Bogor",
    "proj1.role_label": "PERAN SAYA",
    "proj1.role_val": "Backend Developer (Tim 3 Orang)",
    "proj1.tech_label": "TECH STACK",
    "proj1.tech_val": "SQL, PHP, JavaScript, Logic Modul Backend",
    "proj1.desc": "Mengembangkan backend untuk sistem manajemen Yayasan Sahabat Quran (tim 3 orang: PM, UI/UX, Backend). Mengembangkan 4 modul utama: registrasi santri, rapor, absensi, dan keuangan, serta mengintegrasikannya dengan frontend.",
    "proj1.impact": "Mengelola data hampir 500 santri secara digital. Memangkas proses administrasi manual dari 1 minggu menjadi hitungan menit. Memperoleh sertifikat apresiasi yayasan.",

    // Project 3 - Sertifikat Kilat
    "proj3.cat": "PROYEK // 03 · STARTUP PLATFORM",
    "proj3.status": "Berjalan (Ongoing)",
    "proj3.title": "Sertifikat Kilat — Platform Sertifikat Otomatis",
    "proj3.role_label": "PERAN SAYA",
    "proj3.role_val": "Co-Founder (Tim 2 Orang)",
    "proj3.tech_label": "TECH STACK",
    "proj3.tech_val": "JavaScript Batch Processing, QR Verification, Spreadsheet Engine",
    "proj3.desc": "Co-founder platform pembuatan sertifikat otomatis untuk mengatasi proses manual yang memakan waktu 1–2 hari per sertifikat. Mengembangkan platform yang menghasilkan 25 sertifikat dalam 3–5 menit dari data spreadsheet (versi berbayar mendukung 100+ sertifikat).",
    "proj3.impact": "Otomatisasi tinggi: Menghemat 95% waktu pengerjaan manual dengan dukungan verifikasi QR Code keabsahan.",

    // Experience Section
    "exp.tag": "05 / PENGALAMAN",
    "exp.title": "Pengalaman & Kepemimpinan",
    "exp.subtitle": "Pengalaman proyek klien nyata, magang industri (PKL), kepengurusan organisasi BEM, asistensi kelas, dan kegiatan kemasyarakatan.",

    "exp.item1_title": "Project Manager / Project Lead",
    "exp.item1_org": "Proyek Klien Nyata — Takka Steel",
    "exp.item1_date": "2024 (± 1 Bulan / ~3 Minggu Efektif)",
    "exp.item1_tag": "Proyek Klien Nyata",
    "exp.item1_desc": "Memimpin tim proyek kecil dari perencanaan hingga deploy. Melakukan requirement gathering langsung dengan klien (pivot dari WMS ke company profile) dan mengelola timeline hingga live deployment.",

    "exp.item2_title": "Backend Developer",
    "exp.item2_org": "Proyek Klien Nyata — Yayasan Sahabat Quran, Bogor",
    "exp.item2_date": "Semester 3 – Semester 4",
    "exp.item2_tag": "Proyek Klien Nyata",
    "exp.item2_desc": "Merancang logic backend login, registrasi, dan keuangan dalam tim 3 orang. Mengembangkan 4 modul utama (pendaftaran santri, rapor, absensi, keuangan) untuk mengelola data hampir 500 santri.",

    "exp.item3_title": "Praktik Kerja Lapangan (PKL)",
    "exp.item3_org": "PT Yazuho Auto — Kawasan Industri Jababeka I, Cikarang",
    "exp.item3_date": "Desember 2022 – Maret 2023 (3 Bulan)",
    "exp.item3_tag": "Magang Industri",
    "exp.item3_desc": "Menjalani PKL jurusan Teknik Perancangan Gambar Mesin (TPGM). Melakukan pengecekan dan analisis kondisi barang (quality inspection) sebelum didistribusikan.",

    "exp.item4_title": "Staf Kementerian Dalam Negeri (Kemendagri)",
    "exp.item4_org": "Badan Eksekutif Mahasiswa (BEM) STMIK Tazkia",
    "exp.item4_date": "Periode Kepengurusan",
    "exp.item4_tag": "Organisasi Kampus",
    "exp.item4_desc": "Merencanakan dan mengelola program sharing session (dihadiri ~25 mahasiswa, ~60% 1 angkatan, 2x per bulan) serta berkoordinasi internal untuk konsistensi kegiatan.",

    "exp.item5_title": "Ketua Kelompok Belajar (Halaqah Sharing Session)",
    "exp.item5_org": "STMIK Tazkia",
    "exp.item5_date": "Aktivitas Kemahasiswaan",
    "exp.item5_tag": "Kepemimpinan Student",
    "exp.item5_desc": "Memimpin dan mengoordinasikan kelompok belajar beranggotakan 11 mahasiswa untuk sharing session dan diskusi mingguan mengenai akhlak dan pengembangan karakter.",

    "exp.item6_title": "Anggota Aktif",
    "exp.item6_org": "PASKAS RJ — Remaja Masjid Roda Tojana",
    "exp.item6_date": "Kegiatan Kemasyarakatan",
    "exp.item6_tag": "Kegiatan Sosial",
    "exp.item6_desc": "Aktif dalam kegiatan sosial, keagamaan, dan pembinaan pemuda di lingkungan masjid.",

    "exp.item7_title": "Asisten Pengelola Kelas Agroteknologi",
    "exp.item7_org": "STMIK Tazkia",
    "exp.item7_date": "Aktivitas Akademik",
    "exp.item7_tag": "Asistensi Akademik",
    "exp.item7_desc": "Dipercaya menjaga kelas tetap kondusif saat dosen berhalangan hadir maupun saat perkuliahan daring (Zoom) sementara mahasiswa tetap berada di kampus.",

    "exp.item8_title": "Pendukung Usaha UMKM Keluarga",
    "exp.item8_org": "Usaha Penjualan Es (Kuliner UMKM)",
    "exp.item8_date": "Dukungan Usaha",
    "exp.item8_tag": "Pengalaman UMKM",
    "exp.item8_desc": "Membantu kegiatan operasional harian usaha kecil keluarga, penjualan langsung di sekitar sekolah dasar, dan pengadaan bahan baku langsung ke pasar.",

    "exp.item9_title": "Kegiatan Kepanitiaan & Relawan Kampus",
    "exp.item9_org": "STMIK Tazkia & Tazkia Baitulmal",
    "exp.item9_date": "Kepanitiaan & Relawan",
    "exp.item9_tag": "Relawan & Panitia",
    "exp.item9_desc": "Panitia PKKMB/Ospek, Panitia Kampus Terbuka, Panitia Khitanan Massal Tahunan, serta Relawan Penggalangan Dana Bencana ('Pray for Sumatra').",

    // Certifications Section
    "cert.tag": "06 / SERTIFIKAT",
    "cert.title": "Sertifikat & Lisensi Kompetensi",
    "cert.subtitle": "Kredensial resmi dan sertifikasi kelulusan dari Dicoding, RevoU, DBS Foundation, Plan Indonesia, dan instansi profesional.",
    "cert.view_btn": "Lihat Sertifikat",

    // Cert items
    "cert1.title": "Belajar Machine Learning untuk Pemula",
    "cert1.issuer": "DICODING INDONESIA",
    "cert1.date": "AGUSTUS 2026",

    "cert2.title": "Belajar Strategi Pengembangan Diri",
    "cert2.issuer": "DICODING INDONESIA",
    "cert2.date": "AGUSTUS 2026",

    "cert3.title": "Memulai Pemrograman dengan Python",
    "cert3.issuer": "DICODING INDONESIA",
    "cert3.date": "AGUSTUS 2026",

    "cert4.title": "Belajar Dasar Structured Query Language (SQL)",
    "cert4.issuer": "DICODING INDONESIA",
    "cert4.date": "AGUSTUS 2026",

    "cert5.title": "Introduction to Financial Literacy",
    "cert5.issuer": "DICODING INDONESIA",
    "cert5.date": "AGUSTUS 2026",

    "cert6.title": "Belajar Dasar Data Science",
    "cert6.issuer": "DICODING INDONESIA",
    "cert6.date": "AGUSTUS 2026",

    "cert7.title": "Intro to Data Analytics (Mini Course — 1 & 2 Minggu)",
    "cert7.issuer": "REVOU ACADEMY",
    "cert7.date": "SERTIFIKAT KURSUS",

    "cert8.title": "Financial Literacy & Job Readiness (You RISE)",
    "cert8.issuer": "DBS FOUNDATION & PLAN INDONESIA",
    "cert8.date": "JAKARTA, 2026",

    "cert9.title": "Sertifikat Apresiasi — Yayasan Sahabat Quran",
    "cert9.issuer": "YAYASAN SAHABAT QURAN BOGOR",
    "cert9.date": "PENGHARGAAN PROYEK",

    "cert10.title": "Sertifikat Praktik Kerja Industri (PKL)",
    "cert10.issuer": "PT YAZUHO AUTO",
    "cert10.date": "DES 2022 – MAR 2023",

    "cert11.title": "Kuliah Perdana — Evolusi Ancaman Cyber & Pertahanannya",
    "cert11.issuer": "STMIK TAZKIA",
    "cert11.date": "OKTOBER 2024",

    "cert12.title": "Webinar: Large Language Model Artificial Intelligence",
    "cert12.issuer": "BOGOR TECHNOPRENEUR COMMUNITY (B-TECH)",
    "cert12.date": "JUNI 2025",

    // Gallery Section
    "gallery.tag": "07 / DOKUMENTASI KEGIATAN",
    "gallery.title": "Dokumentasi & Bukti Kegiatan",
    "gallery.subtitle": "Dokumentasi kegiatan organisasi BEM, kelompok belajar halaqah, kepanitiaan, dan tim proyek lapangan.",

    // Contact Section
    "contact.tag": "08 / KONTAK",
    "contact.title": "Mari Terhubung & Berkolaborasi",
    "contact.subtitle": "Tertarik berdiskusi mengenai proyek sistem informasi, web development, proses bisnis, atau peluang magang? Jangan ragu untuk menghubungi saya.",
    "contact.badge": "Terbuka untuk Kesempatan Magang IT & Sistem Informasi",
    "contact.btn_whatsapp": "WhatsApp",
    "contact.btn_linkedin": "LinkedIn",
    "contact.btn_github": "GitHub",
    "contact.btn_export_pdf": "Unduh PDF",
    "contact.btn_cv_view": "Lihat CV",
    "contact.btn_cv_download": "Unduh CV",
    "contact.cta": "Hubungi Saya Sekarang",

    // Footer
    "footer.copyright": "© 2026 Rahma Fitria Tunnisa. Dibuat dengan HTML, CSS & JavaScript.",
    "footer.role": "Mahasiswi Sistem Informasi — STMIK Tazkia",
    "footer.gpa": "IPK Kumulatif: 3.57 / 4.00 · IP Sem 4: 3.80",

    // Case Study Section
    "cs.back_portfolio": "Kembali ke Portfolio",
    "cs.back_index": "Kembali ke Proyek",
    "cs.meta_role": "PERAN SAYA",
    "cs.meta_category": "KATEGORI",
    "cs.meta_tech_stack": "TEKNOLOGI",
    "cs.meta_domain": "DOMAIN LIVE",
    "cs.meta_scale": "SKALA SISTEM",
    "cs.meta_speed": "KECEPATAN OTOMASI",
    "cs.visit_live": "Kunjungi Website Live ↗",
    "cs.tag_problem": "02 / TANTANGAN & MASALAH",
    "cs.tag_role": "03 / PERAN & TANGGUNG JAWAB",
    "cs.tag_process": "04 / ALUR PENGERJAAN",
    "cs.tag_solution": "05 / SOLUSI & FITUR SISTEM",
    "cs.tag_result": "06 / HASIL & DAMPAK PROYEK",
    "cs.tag_evidence": "07 / DOKUMENTASI PROYEK",
    "cs.tag_links": "08 / TAUTAN LENGKAP"
  },

  en: {
    // Navigation
    "nav.brand_sub": "RAHMA FITRIA.T.",
    "nav.about": "About",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.certificates": "Certifications",
    "nav.contact": "Contact",
    "nav.cv_download": "Download CV",
    "nav.cv_view": "View CV",

    // Hero Section
    "hero.eyebrow": "INFORMATION SYSTEMS STUDENT • STMIK TAZKIA",
    "hero.name": "Rahma Fitria Tunnisa",
    "hero.role1": "Information Systems",
    "hero.role2": "System & Web Dev",
    "hero.role3": "Business & Data Analysis",
    "hero.quote": "Information Systems student at STMIK Tazkia with hands-on experience in system & web development, requirement gathering, and project coordination. Understanding business processes behind systems while actively building capabilities in SQL, Python, Data Analytics, Data Science, and Machine Learning.",
    "hero.btn_projects": "View Projects",
    "hero.btn_cv_view": "View CV",
    "hero.btn_cv_download": "Download CV",
    "hero.btn_contact": "Contact Me",
    "hero.stat1_label": "Cumulative GPA",
    "hero.stat2_label": "Semester 4 GPA",
    "hero.stat3_label": "Real Client Projects",
    "hero.status_badge": "Open for Internships",

    // Hero Floating Badges
    "hero.badge_sql": "SQL Database",
    "hero.badge_data": "Data Analytics",
    "hero.badge_python": "Python Data",
    "hero.badge_web": "Web Development",

    // About Section
    "about.tag": "01 / ABOUT ME",
    "about.title": "Solution-Oriented Information Systems Student",
    "about.subtitle": "Information Systems student combining technical programming, business analysis, and real project experience.",
    "about.box1_title": "Profile & Background",
    "about.p1": "I am Rahma Fitria Tunnisa, an Information Systems student at STMIK Tazkia (Faculty of Science and Technology). I have completed Semester 4 with a Semester GPA of 3.80 and a Cumulative GPA of 3.57/4.00, and I am entering Semester 5.",
    "about.p2": "Hands-on experience in system and web development — from direct requirement gathering with real clients, SQL database design, backend logic development, system integration, to managing project coordination as Project Lead.",
    "about.p3": "Accustomed to working in small project teams, understanding business processes behind systems, and organizing student board activities. Currently strengthening skills in SQL, Python, Data Analytics, Data Science, and Machine Learning, while open for IT & Information Systems internship opportunities.",
    "about.box2_title": "Focus & Academic Details",
    "about.spec_major_label": "Degree Program:",
    "about.spec_major_val": "Information Systems (Faculty of Science & Tech)",
    "about.spec_inst_label": "Institution:",
    "about.spec_inst_val": "STMIK Tazkia",
    "about.spec_status_label": "Academic Status:",
    "about.spec_status_val": "Completed Semester 4 • Entering Semester 5",
    "about.spec_gpa_label": "Cumulative GPA:",
    "about.spec_gpa_val": "3.57 / 4.00",
    "about.spec_sem4_label": "Semester 4 GPA:",
    "about.spec_sem4_val": "3.80",
    "about.spec_focus_label": "Career Focus:",
    "about.spec_focus_val": "System & Web Dev, Business Analysis, Data Analytics",
    "about.spec_open_label": "Opportunities:",
    "about.spec_open_val": "Open for IT / Information Systems Internships",

    // Education Section
    "edu.tag": "02 / EDUCATION",
    "edu.title": "Academic Background",
    "edu.subtitle": "Formal education establishing a solid foundation in analytical thinking, information systems management, and technical discipline.",
    "edu.s1_level": "Higher Education",
    "edu.s1_school": "STMIK Tazkia",
    "edu.s1_major": "Information Systems, Faculty of Science and Technology",
    "edu.s1_period": "2024 — Present",
    "edu.s1_status": "Completed Semester 4 • Entering Semester 5",
    "edu.s1_gpa": "Cumulative GPA: 3.57 / 4.00 · Semester 4 GPA: 3.80",
    "edu.s1_desc": "Studying system development, SQL database design, requirement gathering, business processes, data analytics, and machine learning.",

    "edu.smk_level": "Vocational High School",
    "edu.smk_school": "SMK Negeri 3 Cikarang Barat",
    "edu.smk_major": "Mechanical Drafting & Design (TPGM)",
    "edu.smk_period": "Graduated 2024",
    "edu.smk_status": "Graduated 2024",
    "edu.smk_pkl": "Internship: PT Yazuho Auto (Jababeka I Industrial Estate, Cikarang)",
    "edu.smk_pkl_period": "December 2022 – March 2023 (3 Months)",
    "edu.smk_desc": "Performed incoming/outgoing goods quality inspection, ensuring items were verified in optimal condition before distribution.",

    // Skills Section
    "skills.tag": "03 / SKILLS",
    "skills.title": "Technical & Professional Skills",
    "skills.subtitle": "A blend of programming languages, databases, productivity tools, and professional competencies built through real client projects.",
    "skills.cat1_title": "System & Web Development",
    "skills.cat2_title": "Database & Data",
    "skills.cat3_title": "Tools & Productivity",
    "skills.cat4_title": "Professional Competencies",

    // Projects Section
    "projects.tag": "04 / PROJECTS",
    "projects.title": "Selected Work & Client Projects",
    "projects.subtitle": "Real systems and websites built to solve actual business and operational challenges.",
    "projects.view_case": "View Case Study",
    "projects.visit_live": "Visit Website ↗",
    "projects.github_repo": "GitHub Repository ↗",

    // Project 1 - Takka Steel
    "proj2.cat": "PROJECT // 01 · REAL CLIENT",
    "proj2.status": "Completed (Live)",
    "proj2.title": "Company Profile & Catalog — Takka Steel",
    "proj2.role_label": "MY ROLE",
    "proj2.role_val": "Project Manager / Project Lead",
    "proj2.tech_label": "TECH STACK",
    "proj2.tech_val": "HTML5, CSS3, JavaScript, Responsive UI",
    "proj2.desc": "Led a small project team (mini company) from planning through deployment. Conducted direct client requirement gathering; pivoted scope from warehouse management system to company profile website after discovering client already owned a WMS. Completed in ~3 effective weeks.",
    "proj2.impact": "Live Website Deployed. Generated development revenue and elevated client's digital distributor presence.",

    // Project 2 - Sahabat Quran
    "proj1.cat": "PROJECT // 02 · REAL CLIENT",
    "proj1.status": "Actively Used",
    "proj1.title": "Foundation Management System — Sahabat Quran Bogor",
    "proj1.role_label": "MY ROLE",
    "proj1.role_val": "Backend Developer (Team of 3)",
    "proj1.tech_label": "TECH STACK",
    "proj1.tech_val": "SQL, PHP, JavaScript, Backend Logic Modules",
    "proj1.desc": "Developed backend logic for Sahabat Quran Foundation management system (team of 3: PM, UI/UX, Backend). Engineered 4 core modules: student registration, report cards, attendance, and finance.",
    "proj1.impact": "Digitally manages ~500 students. Reduced manual admin processing from 1 week to minutes. Awarded official foundation appreciation certificate.",

    // Project 3 - Sertifikat Kilat
    "proj3.cat": "PROJECT // 03 · STARTUP PLATFORM",
    "proj3.status": "Ongoing",
    "proj3.title": "Sertifikat Kilat — Automated Certificate Platform",
    "proj3.role_label": "MY ROLE",
    "proj3.role_val": "Co-Founder (Team of 2)",
    "proj3.tech_label": "TECH STACK",
    "proj3.tech_val": "JavaScript Batch Processing, QR Verification, Spreadsheet Engine",
    "proj3.desc": "Co-founded an automated certificate platform solving manual creation bottlenecks (1–2 days per batch). Co-developed engine generating 25 certificates in 3–5 minutes from spreadsheet data.",
    "proj3.impact": "High Automation: Saved 95% manual effort with built-in QR Code verification engine.",

    // Experience Section
    "exp.tag": "05 / EXPERIENCE",
    "exp.title": "Experience & Leadership",
    "exp.subtitle": "Real client projects, industrial internship (PKL), student executive board involvement, class assistance, and community service.",

    "exp.item1_title": "Project Manager / Project Lead",
    "exp.item1_org": "Real Client Project — Takka Steel",
    "exp.item1_date": "2024 (± 1 Month / ~3 Effective Weeks)",
    "exp.item1_tag": "Real Client Project",
    "exp.item1_desc": "Led small project team from planning to deployment. Conducted direct requirement gathering with client (pivoted from WMS to company profile) and coordinated live deployment.",

    "exp.item2_title": "Backend Developer",
    "exp.item2_org": "Real Client Project — Sahabat Quran Foundation Bogor",
    "exp.item2_date": "Semester 3 – Semester 4",
    "exp.item2_tag": "Real Client Project",
    "exp.item2_desc": "Engineered backend logic for login, registration, and finance in a team of 3. Developed 4 core modules (student registration, report cards, attendance, finance) managing ~500 students.",

    "exp.item3_title": "Industrial Internship (PKL)",
    "exp.item3_org": "PT Yazuho Auto — Jababeka I Industrial Estate, Cikarang",
    "exp.item3_date": "December 2022 – March 2023 (3 Months)",
    "exp.item3_tag": "Industrial Internship",
    "exp.item3_desc": "Completed technical drafting internship (TPGM). Executed quality inspection of incoming/outgoing goods prior to distribution.",

    "exp.item4_title": "Internal Affairs Ministry Staff",
    "exp.item4_org": "Student Executive Board (BEM) STMIK Tazkia",
    "exp.item4_date": "BEM Office Term",
    "exp.item4_tag": "Campus Organization",
    "exp.item4_desc": "Planned and managed bi-monthly sharing sessions (~25 students average, ~60% of cohort) and coordinated internal execution.",

    "exp.item5_title": "Study Group Leader (Halaqah Sharing Session)",
    "exp.item5_org": "STMIK Tazkia",
    "exp.item5_date": "Student Leadership",
    "exp.item5_tag": "Student Leadership",
    "exp.item5_desc": "Led and coordinated an 11-member study group focusing on weekly sharing sessions and character development.",

    "exp.item6_title": "Active Member",
    "exp.item6_org": "PASKAS RJ — Youth Mosque Organization",
    "exp.item6_date": "Community Service",
    "exp.item6_tag": "Social Activity",
    "exp.item6_desc": "Actively participated in community outreach, youth mosque activities, and social programs.",

    "exp.item7_title": "Agrotechnology Class Administrator Assistant",
    "exp.item7_org": "STMIK Tazkia",
    "exp.item7_date": "Academic Assistance",
    "exp.item7_tag": "Academic Support",
    "exp.item7_desc": "Entrusted to maintain classroom order during lecturer absences or online Zoom sessions while students remained on campus.",

    "exp.item8_title": "Family Business Support",
    "exp.item8_org": "Family Ice Retail Business (UMKM)",
    "exp.item8_date": "Business Support",
    "exp.item8_tag": "UMKM Experience",
    "exp.item8_desc": "Supported daily operations of a small family-owned beverage retail business, direct sales near an elementary school, and market procurement.",

    "exp.item9_title": "Campus Committee & Humanitarian Volunteer",
    "exp.item9_org": "STMIK Tazkia & Tazkia Baitulmal",
    "exp.item9_date": "Volunteering & Committee",
    "exp.item9_tag": "Volunteer & Committee",
    "exp.item9_desc": "Student Orientation (PKKMB) Committee, Open Campus Committee, Mass Circumcision Committee, and Disaster Relief Fundraising Volunteer ('Pray for Sumatra').",

    // Certifications Section
    "cert.tag": "06 / CERTIFICATIONS",
    "cert.title": "Certifications & Credentials",
    "cert.subtitle": "Verified certifications and credentials from Dicoding, RevoU, DBS Foundation, Plan Indonesia, and professional bodies.",
    "cert.view_btn": "View Certificate",

    // Cert items
    "cert1.title": "Machine Learning for Beginners",
    "cert1.issuer": "DICODING INDONESIA",
    "cert1.date": "AUGUST 2026",

    "cert2.title": "Self-Development Strategy Learning",
    "cert2.issuer": "DICODING INDONESIA",
    "cert2.date": "AUGUST 2026",

    "cert3.title": "Starting Programming with Python",
    "cert3.issuer": "DICODING INDONESIA",
    "cert3.date": "AUGUST 2026",

    "cert4.title": "Basic Structured Query Language (SQL)",
    "cert4.issuer": "DICODING INDONESIA",
    "cert4.date": "AUGUST 2026",

    "cert5.title": "Introduction to Financial Literacy",
    "cert5.issuer": "DICODING INDONESIA",
    "cert5.date": "AUGUST 2026",

    "cert6.title": "Basic Data Science Learning",
    "cert6.issuer": "DICODING INDONESIA",
    "cert6.date": "AUGUST 2026",

    "cert7.title": "Intro to Data Analytics (Mini Course — 1 & 2 Weeks)",
    "cert7.issuer": "REVOU ACADEMY",
    "cert7.date": "COURSE CERTIFICATE",

    "cert8.title": "Financial Literacy & Job Readiness (You RISE)",
    "cert8.issuer": "DBS FOUNDATION & PLAN INDONESIA",
    "cert8.date": "JAKARTA, 2026",

    "cert9.title": "Appreciation Certificate — Sahabat Quran Foundation",
    "cert9.issuer": "SAHABAT QURAN BOGOR FOUNDATION",
    "cert9.date": "PROJECT AWARD",

    "cert10.title": "Industrial Internship Certificate (PKL)",
    "cert10.issuer": "PT YAZUHO AUTO",
    "cert10.date": "DEC 2022 – MAR 2023",

    "cert11.title": "Cyber Threat Evolution & Defense Lecture",
    "cert11.issuer": "STMIK TAZKIA",
    "cert11.date": "OCTOBER 2024",

    "cert12.title": "Webinar: Large Language Model Artificial Intelligence",
    "cert12.issuer": "BOGOR TECHNOPRENEUR COMMUNITY (B-TECH)",
    "cert12.date": "JUNE 2025",

    // Gallery Section
    "gallery.tag": "07 / EVIDENCE ARCHIVE",
    "gallery.title": "Activity & Project Evidence",
    "gallery.subtitle": "Real documentation from campus organizations, halaqah study group, committees, and client project teamwork.",

    // Contact Section
    "contact.tag": "08 / CONTACT",
    "contact.title": "Let's Connect & Collaborate",
    "contact.subtitle": "Interested in discussing information systems projects, web development, business processes, or internship opportunities? Feel free to reach out.",
    "contact.badge": "Open for IT & Information Systems Internship Opportunities",
    "contact.btn_whatsapp": "WhatsApp",
    "contact.btn_linkedin": "LinkedIn",
    "contact.btn_github": "GitHub",
    "contact.btn_export_pdf": "Download PDF",
    "contact.btn_cv_view": "View CV",
    "contact.btn_cv_download": "Download CV",
    "contact.cta": "Contact Me Now",

    // Footer
    "footer.copyright": "© 2026 Rahma Fitria Tunnisa. Built with HTML, CSS & JavaScript.",
    "footer.role": "Information Systems Student — STMIK Tazkia",
    "footer.gpa": "Cumulative GPA: 3.57 / 4.00 · Sem 4 GPA: 3.80",

    // Case Study Section
    "cs.back_portfolio": "Back to Portfolio",
    "cs.back_index": "Back to Projects",
    "cs.meta_role": "MY ROLE",
    "cs.meta_category": "CATEGORY",
    "cs.meta_tech_stack": "TECH STACK",
    "cs.meta_domain": "LIVE DOMAIN",
    "cs.meta_scale": "SYSTEM SCALE",
    "cs.meta_speed": "AUTOMATION SPEED",
    "cs.visit_live": "Visit Live Website ↗",
    "cs.tag_problem": "02 / THE PROBLEM",
    "cs.tag_role": "03 / MY ROLE & RESPONSIBILITIES",
    "cs.tag_process": "04 / DEVELOPMENT PROCESS",
    "cs.tag_solution": "05 / SOLUTION & SYSTEM FEATURES",
    "cs.tag_result": "06 / VERIFIED RESULTS & IMPACT",
    "cs.tag_evidence": "07 / PROJECT EVIDENCE",
    "cs.tag_links": "08 / VERIFIED LINKS"
  }
};

let currentLang = localStorage.getItem('language') || 'id';

function setLanguage(lang) {
  if (!translations[lang]) lang = 'id';
  currentLang = lang;
  localStorage.setItem('language', lang);
  document.documentElement.setAttribute('lang', lang);

  // Update text content for elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      const translatedText = translations[lang][key];
      
      // Handle elements with fontawesome icons or specific child nodes
      const icon = el.querySelector('i');
      if (icon) {
        const iconHTML = icon.outerHTML;
        el.innerHTML = iconHTML + ' <span>' + translatedText + '</span>';
      } else {
        el.textContent = translatedText;
      }
    }
  });

  // Update language switcher buttons UI state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === lang) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);

  // Wire language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
});
