# 🌐 Dr. Daeyeol Chang (장대열) - Personal Academic & Industry Portfolio

[![GitHub Pages Deployment](https://img.shields.io/badge/Hosted%20On-GitHub%20Pages-blue?logo=github)](https://dy-chang.github.io)
[![Google Scholar Profile](https://img.shields.io/badge/Google-Scholar-4285F4?logo=google-scholar&logoColor=white)](https://scholar.google.com/citations?user=8bu0_WoAAAAJ&hl=ko&oi=ao)
[![Field](https://img.shields.io/badge/Field-Transportation%20Engineering%20%26%20Data%20Science-emerald)]()

Modern, responsive, and high-performance personal portfolio website highlighting the transition from **Ph.D. / Postdoctoral Academic Research** to **Scalable Industry Transportation Data Science**.

---

## ✨ Features & Architecture

- **Zero-Build, Pure Modern Web**: Built with semantic HTML5, Tailwind CSS, Lucide Icons, and Chart.js. Requires zero local Node.js or Python runtime installations.
- **Interactive Research Demos**:
  - 📊 **FSK Bridge Collapse Traffic Shockwave Explorer**: Interactive Travel Time Index (TTI) changes across AM/PM peaks across 30 corridors.
  - 📈 **Hurricane Evacuation Mixed Logit Interactive Simulator**: Real-time econometric choice probability calculator with dynamic sliders.
  - 👓 **VR Work Zone Inspection Performance Radar**: MoDOT training comparison metrics.
- **Filterable & Searchable Publications Catalog**: Instant search by keyword, tag, year, or venue with one-click **BibTeX modal copy**.
- **Dark Mode & Light Mode**: Seamless theme toggle with localStorage persistence.
- **Data-Driven Architecture**: All publications, experience, and bio texts are isolated in [`js/data.js`](js/data.js) for effortless future updates.

---

## 🚀 How to Publish to GitHub Pages (`dy-chang.github.io`)

### Step 1: Create a New GitHub Repository
1. Go to [GitHub.com/new](https://github.com/new).
2. Set the **Repository name** to: `dy-chang.github.io` (or any preferred repo name).
3. Set visibility to **Public**.
4. Click **Create repository**.

### Step 2: Push Local Files to GitHub
In your terminal, navigate to this directory and run:

```bash
git init
git add .
git commit -m "Initial commit: Academic to Industry portfolio website"
git branch -M main
git remote add origin https://github.com/dy-chang/dy-chang.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages in Repository Settings
1. Go to your GitHub repository -> **Settings** -> **Pages** (left sidebar).
2. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch` (Branch: `main`, Folder: `/ (root)`), OR choose `GitHub Actions`.
3. Within 1~2 minutes, your website will be live at:
   👉 **`https://dy-chang.github.io`**

---

## 📝 How to Update Content (Adding Papers / CV / Bio)

All personal details, papers, and career milestones are neatly organized in:
📁 [`js/data.js`](js/data.js)

- **To add a new publication**: Add a new object inside `PORTFOLIO_DATA.publications`.
- **To add CV PDF**: Place your PDF file at `assets/cv.pdf` and link to it.
- **To update profile links or email**: Edit the `PORTFOLIO_DATA.profile` object.

---

© 2026 Dr. Daeyeol Chang. All rights reserved.
