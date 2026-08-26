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
    "hero.role1": "Data Analyst",
    "hero.role2": "Business Analyst",
    "hero.role3": "Information Systems",
    "hero.quote": "Mahasiswi Sistem Informasi dengan pengalaman dalam pengembangan website, koordinasi proyek, dan pengembangan sistem. Memiliki ketertarikan pada analisis data serta sedang mengembangkan kemampuan di bidang SQL, Python, Data Science, dan Machine Learning.",
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
    "about.p1": "Saya Rahma Fitria Tunnisa, mahasiswi Sistem Informasi di STMIK Tazkia. Saya telah menyelesaikan Semester 4 dengan IP Semester 3.80 dan IPK Kumulatif 3.57, serta bersiap memasuki Semester 5.",
    "about.p2": "Sejak Semester 3, saya aktif terlibat dalam proyek sistem dan website nyata — mulai dari requirement gathering bersama klien, perancangan basis data SQL, pengembangan logika backend, hingga mengkoordinasikan proyek sebagai Project Lead.",
    "about.p3": "Saya memiliki ketertarikan kuat di bidang Analisis Data (Data Analysis) dan Analisis Bisnis (Business Analysis), serta terus memperdalam kemampuan teknis dalam SQL, Python, Data Science, dan Machine Learning.",
    "about.box2_title": "Fokus & Informasi Akademik",
    "about.spec_major_label": "Program Studi:",
    "about.spec_major_val": "Sistem Informasi",
    "about.spec_inst_label": "Institusi:",
    "about.spec_inst_val": "STMIK Tazkia",
    "about.spec_status_label": "Status Akademik:",
    "about.spec_status_val": "Telah menyelesaikan Semester 4 • Akan memasuki Semester 5",
    "about.spec_gpa_label": "IPK Kumulatif:",
    "about.spec_gpa_val": "3.57 / 4.00",
    "about.spec_sem4_label": "IP Semester 4:",
    "about.spec_sem4_val": "3.80",
    "about.spec_focus_label": "Fokus Karier:",
    "about.spec_focus_val": "Data Analyst / Business Analyst / Web Dev",
    "about.spec_open_label": "Peluang:",
    "about.spec_open_val": "Terbuka untuk Magang & Project Collaboration",

    // Education Section
    "edu.tag": "02 / PENDIDIKAN",
    "edu.title": "Latar Belakang Pendidikan",
    "edu.subtitle": "Pendidikan formal yang membangun fondasi berpikir analitis, manajemen sistem informasi, dan ketelitian teknis.",
    "edu.s1_level": "Pendidikan Tinggi",
    "edu.s1_school": "STMIK Tazkia",
    "edu.s1_major": "S1 Sistem Informasi",
    "edu.s1_period": "2024 — Sekarang",
    "edu.s1_status": "Telah menyelesaikan Semester 4 • Akan memasuki Semester 5",
    "edu.s1_gpa": "IPK Kumulatif: 3.57 / 4.00 · IP Semester 4: 3.80",
    "edu.s1_desc": "Fokus perkuliahan: Manajemen Basis Data (SQL), Analisis & Perancangan Sistem Informasi, Pemrograman Web, Rekayasa Perangkat Lunak, Data Science, dan Machine Learning.",

    "edu.smk_level": "Sekolah Menengah Kejuruan",
    "edu.smk_school": "SMK Negeri 3 Cikarang Barat",
    "edu.smk_major": "Teknik Perancangan Gambar Mesin (TPGM)",
    "edu.smk_period": "2020 — 2023",
    "edu.smk_status": "Lulus 2023",
    "edu.smk_pkl": "PKL: PT Yazuho Auto (Kawasan Industri Jababeka I, Cikarang)",
    "edu.smk_pkl_period": "Desember 2022 – Maret 2023 (3 Bulan)",
    "edu.smk_desc": "Mempelajari menggambar teknik 2D/3D (AutoCAD), presisi CAD, dokumentasi teknis, dan disiplin industri.",

    // Skills Section
    "skills.tag": "03 / KEAHLIAN",
    "skills.title": "Keahlian Teknis & Profesional",
    "skills.subtitle": "Kombinasi bahasa pemrograman, basis data, perkakas data, serta kompetensi profesional berbasis proyek nyata.",
    "skills.cat1_title": "Pemrograman & Web",
    "skills.cat2_title": "Basis Data & Analytics",
    "skills.cat3_title": "Tools & Teknologi",
    "skills.cat4_title": "Bisnis & Manajemen Proyek",

    // Projects Section
    "projects.tag": "04 / PROYEK",
    "projects.title": "Proyek Pilihan & Klien Nyata",
    "projects.subtitle": "Sistem dan website terstruktur yang dibangun untuk menjawab kebutuhan bisnis dan operasional nyata.",
    "projects.view_case": "Lihat Studi Kasus",
    "projects.visit_live": "Kunjungi Website ↗",
    "projects.github_repo": "GitHub Repository ↗",

    // Project 1 - Sahabat Quran
    "proj1.cat": "PROYEK // 01 · KLIEN NYATA",
    "proj1.status": "Aktif Digunakan",
    "proj1.title": "Sistem Manajemen Yayasan Sahabat Quran",
    "proj1.role_label": "PERAN SAYA",
    "proj1.role_val": "Backend Developer (Tim 3 Orang)",
    "proj1.tech_label": "TECH STACK",
    "proj1.tech_val": "SQL, PHP, JavaScript, Database Schema",
    "proj1.desc": "Mendigitalkan seluruh operasional administrasi Yayasan Sahabat Quran Bogor — manajemen data santri, pendaftaran baru, rapor, presensi, dan modul keuangan terintegrasi.",
    "proj1.impact": "Mengelola ~500 santri secara aktif. Memangkas waktu proses admin dari 1 minggu menjadi hitungan menit. Memperoleh sertifikat apresiasi dari yayasan.",

    // Project 2 - Takka Steel
    "proj2.cat": "PROYEK // 02 · WEBSITE LIVE",
    "proj2.status": "Selesai (Live)",
    "proj2.title": "Company Profile & Katalog — Takka Steel",
    "proj2.role_label": "PERAN SAYA",
    "proj2.role_val": "Project Manager / Project Lead",
    "proj2.tech_label": "TECH STACK",
    "proj2.tech_val": "HTML, CSS, JavaScript, UI Design",
    "proj2.desc": "Memimpin proyek klien nyata untuk distributor baja & bahan bangunan Jabodetabek. Melakukan requirement gathering langsung dengan klien — awalnya sistem manajemen gudang, lalu dipivot menjadi website company profile setelah menemukan bahwa klien sudah memiliki WMS. Mengelola proyek dari perencanaan hingga deployment dalam ~3 minggu efektif.",
    "proj2.impact": "Website Live: Deployed dan beroperasi dengan katalog produk & integrasi WhatsApp CTA. Proyek menghasilkan income dari jasa pengembangan.",

    // Project 3 - Sertifikat Kilat
    "proj3.cat": "PROYEK // 03 · STARTUP PLATFORM",
    "proj3.status": "Aktif",
    "proj3.title": "Sertifikat Kilat — Automated Certificate Platform",
    "proj3.role_label": "PERAN SAYA",
    "proj3.role_val": "Co-Founder (Tim 2 Orang)",
    "proj3.tech_label": "TECH STACK",
    "proj3.tech_val": "QR Engine, PDF Generation, Spreadsheet Import",
    "proj3.desc": "Co-founder platform pembuatan sertifikat otomatis. Mengidentifikasi masalah pembuatan sertifikat manual yang memakan waktu 1–2 hari per batch. Membangun sistem generator massal yang menghasilkan 25 sertifikat dalam ~3–5 menit dari data spreadsheet.",
    "proj3.impact": "Otomatisasi: Menghemat 95% waktu pengerjaan manual dengan dukungan verifikasi QR Code.",

    // Experience Section
    "exp.tag": "05 / PENGALAMAN",
    "exp.title": "Pengalaman & Kepemimpinan",
    "exp.subtitle": "Pengalaman proyek klien, magang industri (PKL), kepengurusan organisasi kampus, dan aktivitas sosial.",

    "exp.item1_title": "Backend Developer",
    "exp.item1_org": "Proyek Klien — Yayasan Sahabat Quran Bogor",
    "exp.item1_date": "Semester 3 – Semester 4",
    "exp.item1_tag": "Proyek Klien",
    "exp.item1_desc": "Merancang arsitektur database SQL, modul autentikasi, presensi santri, pendaftaran online, dan modul keuangan terintegrasi untuk ~500 pengguna aktif.",

    "exp.item2_title": "Project Manager / Project Lead",
    "exp.item2_org": "Proyek Klien — Takka Steel (Distributor Bahan Bangunan)",
    "exp.item2_date": "2024 (± 1 Bulan)",
    "exp.item2_tag": "Proyek Klien",
    "exp.item2_desc": "Memimpin komunikasi klien, requirement gathering, timeline pengembangan, hingga pengawasan live deployment website takkasteel.com.",

    "exp.item3_title": "Praktik Kerja Industri (PKL)",
    "exp.item3_org": "PT Yazuho Auto — Kawasan Industri Jababeka I, Cikarang",
    "exp.item3_date": "Desember 2022 – Maret 2023",
    "exp.item3_tag": "Magang Industri",
    "exp.item3_desc": "Melaksanakan magang industri jurusan Teknik Perancangan Gambar Mesin (TPGM). Mengaplikasikan gambar teknik presisi dan disiplin dokumentasi kerja industri.",

    "exp.item4_title": "Staf Kementerian Dalam Negeri",
    "exp.item4_org": "BEM STMIK Tazkia",
    "exp.item4_date": "Periode Kepengurusan BEM",
    "exp.item4_tag": "Organisasi Kampus",
    "exp.item4_desc": "Mengelola koordinasi internal BEM, merencanakan program kerja kemahasiswaan, dan memfasilitasi sesi sharing/diskusi internal mahasiswa.",

    "exp.item5_title": "Ketua Kelompok Belajar / SDS Leader",
    "exp.item5_org": "Halaqah Sharing Session Student (SDS) — STMIK Tazkia",
    "exp.item5_date": "Aktivitas Kemahasiswaan",
    "exp.item5_tag": "Kepemimpinan Student",
    "exp.item5_desc": "Memimpin dan memfasilitasi diskusi kelompok belajar mahasiswi, sesi halaqah mingguan, serta bertindak sebagai Ketua Pelaksana kegiatan outdoor SDS.",

    "exp.item6_title": "Anggota Aktif",
    "exp.item6_org": "PASKAS RJ — Remaja Masjid Roda Tojana",
    "exp.item6_date": "Kegiatan Kemasyarakatan",
    "exp.item6_tag": "Kegiatan Sosial",
    "exp.item6_desc": "Aktif berpartisipasi dalam program keagamaan, sosial kemasyarakatan, dan kepemudaan remaja masjid.",

    "exp.item7_title": "Asisten Pengelola Kelas",
    "exp.item7_org": "STMIK Tazkia",
    "exp.item7_date": "Dokumentasi Akademik",
    "exp.item7_tag": "Asistensi Akademik",
    "exp.item7_desc": "Membantu administrasi perkuliahan, pengolahan presensi mahasiswa, dan koordinasi aktivitas kelas mata kuliah Informatika.",

    "exp.item8_title": "Panitia Portal & Event Kampus",
    "exp.item8_org": "Angkatan 3 STMIK Tazkia",
    "exp.item8_date": "Kepanitiaan Kampus",
    "exp.item8_tag": "Kepanitiaan",
    "exp.item8_desc": "Menjadi panitia aktif dalam berbagai acara portal angkatan dan event resmi institusi STMIK Tazkia.",

    "exp.item9_title": "Relawan Aksi 'Pray for Sumatra'",
    "exp.item9_org": "Tazkia Baitulmal & STMIK Tazkia",
    "exp.item9_date": "Aksi Relawan Kemanusiaan",
    "exp.item9_tag": "Relawan",
    "exp.item9_desc": "Terlibat aktif dalam penggalangan dana dan penyaluran bantuan tanggap bencana kemanusiaan untuk masyarakat Sumatra.",

    // Certifications Section
    "cert.tag": "06 / SERTIFIKAT",
    "cert.title": "Sertifikat & Lisensi Kompetensi",
    "cert.subtitle": "Kredensial resmi dan sertifikasi kelulusan dari lembaga pelatihan ternama, platform teknologi, dan instansi profesional.",
    "cert.view_btn": "Lihat Sertifikat",

    // Cert items
    "cert1.title": "Belajar Machine Learning untuk Pemula",
    "cert1.issuer": "DICODING INDONESIA",
    "cert1.date": "24 AGUSTUS 2026",

    "cert2.title": "Belajar Strategi Pengembangan Diri",
    "cert2.issuer": "DICODING INDONESIA",
    "cert2.date": "22 AGUSTUS 2026",

    "cert3.title": "Memulai Pemrograman dengan Python",
    "cert3.issuer": "DICODING INDONESIA",
    "cert3.date": "15 AGUSTUS 2026",

    "cert4.title": "Belajar Dasar Structured Query Language (SQL)",
    "cert4.issuer": "DICODING INDONESIA",
    "cert4.date": "12 AGUSTUS 2026",

    "cert5.title": "Introduction to Financial Literacy",
    "cert5.issuer": "DICODING INDONESIA",
    "cert5.date": "12 AGUSTUS 2026",

    "cert6.title": "Belajar Dasar Data Science",
    "cert6.issuer": "DICODING INDONESIA",
    "cert6.date": "11 AGUSTUS 2026",

    "cert7.title": "Intro to Data Analytics (Mini Course)",
    "cert7.issuer": "REVOU ACADEMY",
    "cert7.date": "15 AGUSTUS 2025",

    "cert8.title": "Financial Literacy & Job Readiness (You RISE)",
    "cert8.issuer": "DBS FOUNDATION & PLAN INDONESIA",
    "cert8.date": "23 JULI 2026",

    "cert9.title": "Kuliah Perdana — Evolusi Ancaman Cyber & Pertahanannya",
    "cert9.issuer": "STMIK TAZKIA",
    "cert9.date": "09 OKTOBER 2024",

    "cert10.title": "Webinar: Large Language Model Artificial Intelligence",
    "cert10.issuer": "BOGOR TECHNOPRENEUR COMMUNITY (B-TECH)",
    "cert10.date": "14 JUNI 2025",

    "cert11.title": "Sertifikat Praktek Kerja Industri (PKL)",
    "cert11.issuer": "PT YAZUHO AUTO",
    "cert11.date": "28 MARET 2023",

    // Gallery Section
    "gallery.tag": "07 / DOKUMENTASI KEGIATAN",
    "gallery.title": "Dokumentasi & Bukti Kegiatan",
    "gallery.subtitle": "Dokumentasi kegiatan organisasi BEM, kepanitiaan angkatan, kepemimpinan SDS, halaqah, dan kolaborasi proyek.",

    // Contact Section
    "contact.tag": "08 / KONTAK",
    "contact.title": "Mari Terhubung & Berkolaborasi",
    "contact.subtitle": "Tertarik berdiskusi mengenai proyek analisis data, pengembangan sistem informasi, atau peluang magang? Jangan ragu untuk menghubungi saya.",
    "contact.badge": "Saat ini terbuka untuk kesempatan magang",
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
    "hero.role1": "Data Analyst",
    "hero.role2": "Business Analyst",
    "hero.role3": "Information Systems",
    "hero.quote": "Information Systems student with experience in website development, project coordination, and system development. Passionate about data analytics while actively developing technical capabilities in SQL, Python, Data Science, and Machine Learning.",
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
    "about.subtitle": "Information Systems student bridging technical programming, business analysis, and real project experience.",
    "about.box1_title": "Profile & Background",
    "about.p1": "I am Rahma Fitria Tunnisa, an Information Systems student at STMIK Tazkia. I have completed Semester 4 with a Semester GPA of 3.80 and a Cumulative GPA of 3.57, and I am preparing to enter Semester 5.",
    "about.p2": "Since Semester 3, I have been actively involved in real system and web projects — from requirement gathering with clients to SQL database design, backend logic development, and leading projects as Project Lead.",
    "about.p3": "I have a strong interest in Data Analysis and Business Analysis, while continuously building technical depth in SQL, Python, Data Science, and Machine Learning.",
    "about.box2_title": "Focus & Academic Details",
    "about.spec_major_label": "Degree Program:",
    "about.spec_major_val": "Information Systems (S1)",
    "about.spec_inst_label": "Institution:",
    "about.spec_inst_val": "STMIK Tazkia",
    "about.spec_status_label": "Academic Status:",
    "about.spec_status_val": "Completed Semester 4 • Entering Semester 5",
    "about.spec_gpa_label": "Cumulative GPA:",
    "about.spec_gpa_val": "3.57 / 4.00",
    "about.spec_sem4_label": "Semester 4 GPA:",
    "about.spec_sem4_val": "3.80",
    "about.spec_focus_label": "Career Focus:",
    "about.spec_focus_val": "Data Analyst / Business Analyst / Web Dev",
    "about.spec_open_label": "Opportunities:",
    "about.spec_open_val": "Open for Internships & Project Collaboration",

    // Education Section
    "edu.tag": "02 / EDUCATION",
    "edu.title": "Academic Background",
    "edu.subtitle": "Formal education establishing a solid foundation in analytical thinking, information systems management, and technical precision.",
    "edu.s1_level": "Higher Education",
    "edu.s1_school": "STMIK Tazkia",
    "edu.s1_major": "B.S. in Information Systems",
    "edu.s1_period": "2024 — Present",
    "edu.s1_status": "Completed Semester 4 • Entering Semester 5",
    "edu.s1_gpa": "Cumulative GPA: 3.57 / 4.00 · Semester 4 GPA: 3.80",
    "edu.s1_desc": "Core coursework: Database Management (SQL), Information Systems Analysis & Design, Web Programming, Software Engineering, Data Science, and Machine Learning.",

    "edu.smk_level": "Vocational High School",
    "edu.smk_school": "SMK Negeri 3 Cikarang Barat",
    "edu.smk_major": "Mechanical Drafting & Design (TPGM)",
    "edu.smk_period": "2020 — 2023",
    "edu.smk_status": "Graduated 2023",
    "edu.smk_pkl": "Internship: PT Yazuho Auto (Jababeka I Industrial Estate, Cikarang)",
    "edu.smk_pkl_period": "December 2022 – March 2023 (3 Months)",
    "edu.smk_desc": "Studied 2D/3D technical drafting (AutoCAD), CAD precision, technical documentation, and industrial standards.",

    // Skills Section
    "skills.tag": "03 / SKILLS",
    "skills.title": "Technical & Professional Skills",
    "skills.subtitle": "A blend of programming languages, databases, analytical tools, and project management competencies built through coursework and client projects.",
    "skills.cat1_title": "Programming & Web",
    "skills.cat2_title": "Database & Analytics",
    "skills.cat3_title": "Tools & Technologies",
    "skills.cat4_title": "Business & Project Lead",

    // Projects Section
    "projects.tag": "04 / PROJECTS",
    "projects.title": "Selected Work & Client Projects",
    "projects.subtitle": "Real systems and websites built to solve actual business and operational challenges.",
    "projects.view_case": "View Case Study",
    "projects.visit_live": "Visit Website ↗",
    "projects.github_repo": "GitHub Repository ↗",

    // Project 1 - Sahabat Quran
    "proj1.cat": "PROJECT // 01 · REAL CLIENT",
    "proj1.status": "Actively Used",
    "proj1.title": "Sahabat Quran Foundation Management System",
    "proj1.role_label": "MY ROLE",
    "proj1.role_val": "Backend Developer (Team of 3)",
    "proj1.tech_label": "TECH STACK",
    "proj1.tech_val": "SQL, PHP, JavaScript, Database Schema",
    "proj1.desc": "Digitized administrative operations for Sahabat Quran Foundation Bogor — student management, admissions, report cards, attendance, and integrated financial module.",
    "proj1.impact": "Actively manages ~500 students. Reduced admin processing from 1 week to minutes. Awarded official appreciation certificate from the foundation.",

    // Project 2 - Takka Steel
    "proj2.cat": "PROJECT // 02 · LIVE WEBSITE",
    "proj2.status": "Completed (Live)",
    "proj2.title": "Company Profile & Catalog — Takka Steel",
    "proj2.role_label": "MY ROLE",
    "proj2.role_val": "Project Manager / Project Lead",
    "proj2.tech_label": "TECH STACK",
    "proj2.tech_val": "HTML, CSS, JavaScript, UI Design",
    "proj2.desc": "Led a real client project for a steel & building materials distributor in Greater Jakarta. Conducted direct client requirement gathering — initially a warehouse management system, then pivoted to a company profile website after finding the client already had a WMS. Managed planning through deployment in ~3 effective weeks.",
    "proj2.impact": "Live Website: Deployed and operational with product catalog & WhatsApp CTA integration. Generated revenue from development services.",

    // Project 3 - Sertifikat Kilat
    "proj3.cat": "PROJECT // 03 · STARTUP PLATFORM",
    "proj3.status": "Active",
    "proj3.title": "Sertifikat Kilat — Automated Certificate Platform",
    "proj3.role_label": "MY ROLE",
    "proj3.role_val": "Co-Founder (Team of 2)",
    "proj3.tech_label": "TECH STACK",
    "proj3.tech_val": "QR Engine, PDF Generation, Spreadsheet Import",
    "proj3.desc": "Co-founded an automated certificate generation platform to solve manual creation delays (1–2 days per batch). Built a bulk generator producing 25 certificates in ~3–5 minutes from spreadsheet data.",
    "proj3.impact": "Automation: Saved 95% manual effort with built-in QR Code verification.",

    // Experience Section
    "exp.tag": "05 / EXPERIENCE",
    "exp.title": "Experience & Leadership",
    "exp.subtitle": "Client projects, industrial internship (PKL), student executive board involvement, and community service.",

    "exp.item1_title": "Backend Developer",
    "exp.item1_org": "Client Project — Sahabat Quran Foundation Bogor",
    "exp.item1_date": "Semester 3 – Semester 4",
    "exp.item1_tag": "Client Project",
    "exp.item1_desc": "Architected SQL database schema, authentication modules, attendance tracking, online registration, and financial reporting for ~500 active users.",

    "exp.item2_title": "Project Manager / Project Lead",
    "exp.item2_org": "Client Project — Takka Steel (Building Materials Distributor)",
    "exp.item2_date": "2024 (± 1 Month)",
    "exp.item2_tag": "Client Project",
    "exp.item2_desc": "Led client communications, requirement gathering, timeline coordination, and deployment oversight for the official takkasteel.com website.",

    "exp.item3_title": "Industrial Internship (PKL)",
    "exp.item3_org": "PT Yazuho Auto — Jababeka I Industrial Estate, Cikarang",
    "exp.item3_date": "December 2022 – March 2023",
    "exp.item3_tag": "Industrial Internship",
    "exp.item3_desc": "Completed technical drafting internship in Mechanical Drafting & Design (TPGM). Applied precision CAD drafting and industrial documentation standards.",

    "exp.item4_title": "Internal Affairs Ministry Staff",
    "exp.item4_org": "Student Executive Board (BEM) STMIK Tazkia",
    "exp.item4_date": "BEM Office Term",
    "exp.item4_tag": "Campus Organization",
    "exp.item4_desc": "Coordinated internal organizational affairs, planned student development programs, and facilitated internal sharing sessions.",

    "exp.item5_title": "Study Group Leader / SDS Leader",
    "exp.item5_org": "Halaqah Sharing Session Student (SDS) — STMIK Tazkia",
    "exp.item5_date": "Student Leadership",
    "exp.item5_tag": "Student Leadership",
    "exp.item5_desc": "Led and facilitated study group discussions, weekly halaqah sessions, and served as Event Chair for outdoor SDS activities.",

    "exp.item6_title": "Active Member",
    "exp.item6_org": "PASKAS RJ — Youth Mosque Organization",
    "exp.item6_date": "Community Service",
    "exp.item6_tag": "Social Activity",
    "exp.item6_desc": "Actively participated in community outreach, youth mosque programs, and social initiatives.",

    "exp.item7_title": "Agrotechnology Class Administrator Assistant",
    "exp.item7_org": "STMIK Tazkia",
    "exp.item7_date": "Academic Assistance",
    "exp.item7_tag": "Academic Support",
    "exp.item7_desc": "Assisted course administration, attendance tracking, and class activity coordination for Agrotechnology classes.",

    "exp.item8_title": "Batch 3 Portal & Campus Event Committee",
    "exp.item8_org": "Batch 3 STMIK Tazkia",
    "exp.item8_date": "Campus Committee",
    "exp.item8_tag": "Committee",
    "exp.item8_desc": "Organized and executed student portal events and official campus functions for Batch 3 at STMIK Tazkia.",

    "exp.item9_title": "'Pray for Sumatra' Humanitarian Volunteer",
    "exp.item9_org": "Tazkia Baitulmal & STMIK Tazkia",
    "exp.item9_date": "Humanitarian Relief",
    "exp.item9_tag": "Volunteer",
    "exp.item9_desc": "Participated in fundraising and disaster response relief operations for affected communities in Sumatra.",

    // Certifications Section
    "cert.tag": "06 / CERTIFICATIONS",
    "cert.title": "Certifications & Credentials",
    "cert.subtitle": "Verified certifications and course completions from technology academies and professional bodies.",
    "cert.view_btn": "View Certificate",

    // Cert items
    "cert1.title": "Machine Learning for Beginners",
    "cert1.issuer": "DICODING INDONESIA",
    "cert1.date": "24 AUGUST 2026",

    "cert2.title": "Self-Development Strategy Learning",
    "cert2.issuer": "DICODING INDONESIA",
    "cert2.date": "22 AUGUST 2026",

    "cert3.title": "Starting Programming with Python",
    "cert3.issuer": "DICODING INDONESIA",
    "cert3.date": "15 AUGUST 2026",

    "cert4.title": "Basic Structured Query Language (SQL)",
    "cert4.issuer": "DICODING INDONESIA",
    "cert4.date": "12 AUGUST 2026",

    "cert5.title": "Introduction to Financial Literacy",
    "cert5.issuer": "DICODING INDONESIA",
    "cert5.date": "12 AUGUST 2026",

    "cert6.title": "Basic Data Science Learning",
    "cert6.issuer": "DICODING INDONESIA",
    "cert6.date": "11 AUGUST 2026",

    "cert7.title": "Intro to Data Analytics (Mini Course)",
    "cert7.issuer": "REVOU ACADEMY",
    "cert7.date": "15 AUGUST 2025",

    "cert8.title": "Financial Literacy & Job Readiness (You RISE)",
    "cert8.issuer": "DBS FOUNDATION & PLAN INDONESIA",
    "cert8.date": "23 JULY 2026",

    "cert9.title": "Cyber Threat Evolution & Defense Lecture",
    "cert9.issuer": "STMIK TAZKIA",
    "cert9.date": "09 OCTOBER 2024",

    "cert10.title": "Webinar: Large Language Model Artificial Intelligence",
    "cert10.issuer": "BOGOR TECHNOPRENEUR COMMUNITY (B-TECH)",
    "cert10.date": "14 JUNE 2025",

    "cert11.title": "Industrial Internship Certificate (PKL)",
    "cert11.issuer": "PT YAZUHO AUTO",
    "cert11.date": "28 MARCH 2023",

    // Gallery Section
    "gallery.tag": "07 / EVIDENCE ARCHIVE",
    "gallery.title": "Activity & Project Evidence",
    "gallery.subtitle": "Real documentation from campus organizations, BEM sharing sessions, SDS leadership, and client project teamwork.",

    // Contact Section
    "contact.tag": "08 / CONTACT",
    "contact.title": "Let's Connect & Collaborate",
    "contact.subtitle": "Interested in discussing data analysis projects, business systems development, or internship opportunities? Feel free to reach out.",
    "contact.badge": "Currently open for internship opportunities",
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
