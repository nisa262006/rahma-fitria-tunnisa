# Precision Debugging & Content Mapping Audit Report

> **Target Workspace:** `d:\TUGAS KULIAH\pembelajaran mandiri\portofolio`  
> **Status:** ✅ ALL BUGS RESOLVED & VERIFIED IN REAL BROWSER SESSION  
> **Audit Date:** August 12, 2026  

---

## 1. Executive Summary & Root Cause Analysis

### A. The Lightbox "First Image" Bug
* **Symptom:** Clicking any certificate or evidence card previously opened the lightbox modal, but it frequently displayed the **first image** in the collection rather than the clicked card.
* **Root Cause Identified:** The legacy `js/gallery.js` script relied on extracting string attributes and performing imprecise search matches across DOM elements. When array index matching failed, it defaulted to index `0`. Additionally, inline `onclick="openLightbox(...)"` handlers with hardcoded strings caused mismatches.
* **Architectural Fix Implemented:**
  1. Refactored `js/gallery.js` to employ strict **Event Delegation** listening directly to click events on `[data-lightbox="true"]` elements.
  2. Extracted metadata directly from the target element's `data-src`, `data-title`, `data-category`, `data-description`, and `data-id` attributes.
  3. Context-aware group navigation: The modal automatically establishes sibling cards in the active section (`.cert-grid`, `.gallery-grid`, `.evidence-grid`) as its prev/next slideshow list, mapping `currentIndex` strictly to the clicked card element.

---

## 2. Certificate Mapping Reconciliations

A full 1:1 asset-to-metadata audit was performed on all 6 credentials in `index.html`:

| Card Position | Certificate Title | Issuer | Asset Filename | Audit Status |
| :--- | :--- | :--- | :--- | :--- |
| **01** | Belajar Dasar Data Science | Dicoding Indonesia | `assets/certificates/WhatsApp Image 2026-08-12 at 11.42.56.jpeg` | ✅ Verified Correct |
| **02** | Belajar Dasar Structured Query Language (SQL) | Dicoding Indonesia | `assets/certificates/WhatsApp Image 2026-08-12 at 11.42.55.jpeg` | 🛠️ **Fixed** (Swapped from wrong file) |
| **03** | Intro to Data Analytics (Mini Course) | RevoU Academy | `assets/certificates/2.jpeg` | ✅ Verified Correct |
| **04** | Financial Literacy & Job Readiness | DBS Foundation & Plan Indonesia | `assets/certificates/WhatsApp Image 2026-08-11 at 18.55.jpeg` | ✅ Verified Correct |
| **05** | Evolusi Ancaman Cyber & Pertahanannya | STMIK Tazkia | `assets/certificates/WhatsApp Image 2026-08-11 at 18.55.55.jpeg` | ✅ Verified Correct |
| **06** | Sertifikat Praktek Kerja Industri (PKL) | PT Yazuho Auto | `assets/certificates/WhatsApp Image 2026-08-11 at 18.55.57.jpeg` | 🛠️ **Fixed** (Swapped from wrong file) |

---

## 3. Documentation Archive & Project Link Audit

### A. Behind The System (Section 06 Evidence Archive)
- **Pray For Sumatra Banner:** Reconnected to `assets/documentation/activities/sumatra .png`.
- **Pray For Sumatra Briefing:** Reconnected to `assets/documentation/activities/sumatra2.png`.
- **BEM Sharing Session & Internal Rapat:** Reconnected to `assets/documentation/organization/bem 1 .png` and `bem 2 .png`.
- **Panitia Portal & Angkatan 3:** Reconnected to `assets/documentation/teamwork/panitia portal.png`.
- **SBS Leadership & Halaqoh:** Reconnected to `assets/documentation/teamwork/sds/holakoh.png` and `holakoh2.png`.

### B. Project Live Links Audit
- **Project 02 — Takka Steel:**
  - Added `VISIT LIVE WEBSITE ↗` Call-to-Action button pointing directly to `https://www.takkasteel.com/`.
  - Updated card badge to `PROJECT // 02 · WEBSITE LIVE DEPLOYMENT` in `index.html` and `projects/takka-steel.html`.
- **Project 03 — SertifKilat.id:**
  - Verified no fake external URLs exist; labeled accurately as system engine.
- **Project 01 — Sahabat Quran:**
  - Retained live system domain `https://akademik.sahabatquran.com`.

---

## 4. Visual Evidence Recording

The browser automated testing session was executed and recorded:
- **Video Artifact:** `portfolio_lightbox_test`
- **Verified Actions:**
  1. Clicked SQL Certificate Card → Modal opened exact SQL image and title.
  2. Clicked PKL Certificate Card → Modal opened exact PT Yazuho Auto PKL image.
  3. Clicked "Pray For Sumatra" Archive Card → Modal opened banner; Prev/Next buttons successfully navigated through images.
  4. Checked Takka Steel "VISIT LIVE WEBSITE ↗" button → Correctly targeted `https://www.takkasteel.com/`.
