/**
 * Main Application Logic (Industry & Agency Solutions)
 * Dr. Daeyeol (Daniel) Chang Portfolio
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderProfile();
  renderCapabilities();
  renderProjects();
  renderFeaturedRepos();
  renderExperience();
  renderEducation();
  renderPublications();
  setupSmoothScroll();
  setupSearchAndFilters();
  setupMobileMenu();
  setupBibtexModal();
  lucide.createIcons();
});

/* =========================================================================
   Theme Management (Light / Dark Mode)
   ========================================================================= */
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      const isDark = document.documentElement.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      if (window.refreshChartsTheme) {
        window.refreshChartsTheme();
      }
      lucide.createIcons();
    });
  }
}

/* =========================================================================
   SPA Smooth Scroll Navigation (Prevents Any 404 Errors)
   ========================================================================= */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href").substring(1);
      if (!targetId) return;

      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });

        // Close mobile nav if open
        const mobileNav = document.getElementById("mobileNav");
        if (mobileNav) mobileNav.classList.add("hidden");
      }
    });
  });
}

/* =========================================================================
   Profile & Hero Rendering
   ========================================================================= */
function renderProfile() {
  const data = PORTFOLIO_DATA.profile;

  // Stats Grid
  const statsContainer = document.getElementById("heroStats");
  if (statsContainer) {
    statsContainer.innerHTML = data.stats.map(stat => `
      <div class="p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 shadow-sm flex items-center gap-3.5 transform hover:-translate-y-0.5 transition-all">
        <div class="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0">
          <i data-lucide="${stat.icon}" class="w-5 h-5"></i>
        </div>
        <div>
          <div class="text-xl font-bold text-slate-900 dark:text-white tracking-tight">${stat.value}</div>
          <div class="text-xs text-slate-500 dark:text-slate-400 font-medium">${stat.label}</div>
        </div>
      </div>
    `).join("");
  }

  // Bio Paragraphs
  const bioContainer = document.getElementById("aboutBio");
  if (bioContainer) {
    bioContainer.innerHTML = data.bio.map(p => `
      <p class="text-slate-600 dark:text-slate-300 leading-relaxed">${p.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 dark:text-white font-semibold">$1</strong>')}</p>
    `).join("");
  }
}

/* =========================================================================
   Capabilities Grid Rendering
   ========================================================================= */
function renderCapabilities() {
  const container = document.getElementById("capabilitiesGrid");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.capabilities.map(cap => `
    <div class="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
      <div>
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-950/80 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0">
            <i data-lucide="${cap.icon}" class="w-5 h-5"></i>
          </div>
          <h3 class="text-base font-bold text-slate-900 dark:text-white">${cap.title}</h3>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          ${cap.desc}
        </p>
      </div>
      <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-700/60">
        ${cap.tools.map(t => `<span class="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-slate-700/70 text-slate-700 dark:text-slate-300">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/* =========================================================================
   Major Agency Projects Rendering (With Visual Highlights & Policy Impacts)
   ========================================================================= */
function renderProjects() {
  const container = document.getElementById("selectedProjectsList");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.projects.map((proj, idx) => `
    <div class="p-7 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-sm hover:shadow-lg transition-all space-y-6">
      
      <!-- Top Header -->
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-700/80 pb-4">
        <div class="flex items-center gap-3">
          <span class="w-8 h-8 rounded-xl bg-primary-600 text-white font-extrabold text-sm flex items-center justify-center shadow-sm">
            0${idx + 1}
          </span>
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">${proj.client}</span>
            <div class="text-xs text-slate-400 font-mono">${proj.period} • ${proj.category}</div>
          </div>
        </div>
        <span class="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
          ${proj.badge}
        </span>
      </div>

      <!-- Title & Description -->
      <div class="space-y-2">
        <h3 class="text-xl font-bold text-slate-900 dark:text-white leading-snug">${proj.title}</h3>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${proj.description}</p>
      </div>

      <!-- Key Quantitative Metrics Badges -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        ${proj.metrics.map(m => `
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/60 text-center">
            <div class="text-base font-extrabold text-primary-600 dark:text-primary-400">${m.value}</div>
            <div class="text-[11px] font-medium text-slate-500 dark:text-slate-400">${m.label}</div>
          </div>
        `).join("")}
      </div>

      <!-- Policy & Decision-Making Takeaways -->
      <div class="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 space-y-2">
        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-900 dark:text-indigo-300 flex items-center gap-1.5">
          <i data-lucide="compass" class="w-4 h-4 text-indigo-600 dark:text-indigo-400"></i> Public Agency & Planning Takeaways
        </h4>
        <ul class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
          ${proj.policyTakeaways.map(t => `
            <li class="flex items-start gap-2">
              <span class="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">&rarr;</span>
              <span>${t}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <!-- Tech Stack Badges -->
      <div class="flex flex-wrap gap-1.5 pt-2">
        ${proj.tools.map(t => `<span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200">${t}</span>`).join("")}
      </div>

    </div>
  `).join("");
}

/* =========================================================================
   Featured Open-Source Repositories Rendering
   ========================================================================= */
function renderFeaturedRepos() {
  const container = document.getElementById("featuredReposGrid");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.featuredRepos.map(repo => `
    <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="group block p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-sm hover:shadow-lg hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all flex flex-col justify-between space-y-4">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <i data-lucide="${repo.icon}" class="w-5 h-5"></i>
            </div>
            <span class="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">dy-chang /</span>
          </div>
          <i data-lucide="external-link" class="w-4 h-4 text-slate-400 group-hover:text-primary-600 transition-colors"></i>
        </div>
        <h3 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-1.5">
          ${repo.title}
        </h3>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          ${repo.description}
        </p>
      </div>

      <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-700/60">
        ${repo.tags.map(t => `<span class="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300">${t}</span>`).join("")}
      </div>
    </a>
  `).join("");
}

/* =========================================================================
   Experience & Education Timeline Rendering
   ========================================================================= */
function renderExperience() {
  const container = document.getElementById("experienceTimeline");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
    <div class="relative pl-8 pb-10 border-l-2 border-primary-200 dark:border-primary-900 last:border-l-transparent">
      <div class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-primary-500 flex items-center justify-center"></div>
      <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white">${exp.role}</h3>
        <span class="px-3 py-1 rounded-full text-xs font-semibold ${exp.type === 'industry' ? 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800' : 'bg-primary-100 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 border border-primary-300 dark:border-primary-800'}">
          ${exp.period}
        </span>
      </div>
      <div class="text-sm font-medium text-primary-600 dark:text-primary-400 mb-3">${exp.organization} • <span class="text-slate-500 dark:text-slate-400">${exp.location}</span></div>
      <ul class="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
        ${exp.highlights.map(h => `<li class="flex items-start gap-2"><span class="text-primary-500 font-bold mt-0.5">•</span><span>${h}</span></li>`).join("")}
      </ul>
    </div>
  `).join("");
}

function renderEducation() {
  const container = document.getElementById("educationList");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.education.map(edu => `
    <div class="p-5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-sm flex items-start gap-4">
      <div class="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0 mt-0.5">
        <i data-lucide="graduation-cap" class="w-5 h-5"></i>
      </div>
      <div class="flex-1">
        <div class="flex flex-wrap justify-between items-baseline gap-1">
          <h4 class="font-bold text-slate-900 dark:text-white">${edu.degree}</h4>
          <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">${edu.year}</span>
        </div>
        <div class="text-sm font-medium text-indigo-600 dark:text-indigo-400">${edu.institution} (${edu.location})</div>
        <div class="text-xs text-slate-500 dark:text-slate-400 mt-1">${edu.focus}</div>
      </div>
    </div>
  `).join("");
}

/* =========================================================================
   Publications Rendering & Filtering
   ========================================================================= */
let currentCategory = "all";
let currentSearchQuery = "";

function renderPublications() {
  const container = document.getElementById("publicationsList");
  if (!container) return;

  const filtered = PORTFOLIO_DATA.publications.filter(pub => {
    const matchesCategory = (currentCategory === "all") || (pub.category === currentCategory) || (currentCategory === "selected" && pub.selected);
    const searchTarget = `${pub.title} ${pub.authors.join(" ")} ${pub.venue} ${pub.tags.join(" ")}`.toLowerCase();
    const matchesSearch = !currentSearchQuery || searchTarget.includes(currentSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-12 text-center text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
        <i data-lucide="search-x" class="w-10 h-10 mx-auto mb-3 opacity-40"></i>
        <p class="text-base font-semibold">No publications found matching your filter criteria.</p>
        <button onclick="resetPubFilters()" class="mt-3 px-4 py-1.5 text-xs font-semibold text-primary-600 bg-primary-50 dark:bg-primary-950/60 rounded-lg hover:bg-primary-100">Reset Filters</button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(pub => {
    const authorsFormatted = pub.authors.map(a => 
      a.includes("Daeyeol Chang") || a === "D. Chang" ? `<strong class="text-slate-900 dark:text-white font-semibold underline decoration-primary-500 decoration-2">${a}</strong>` : a
    ).join(", ");

    return `
      <div class="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-all">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-primary-50 dark:bg-primary-950/70 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800/60">
            <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
            ${pub.venue} (${pub.year})
          </span>
          ${pub.selected ? `<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 flex items-center gap-1"><i data-lucide="star" class="w-3 h-3 fill-amber-500 text-amber-500"></i> Selected</span>` : ''}
        </div>

        <h3 class="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-2">
          ${pub.doi ? `<a href="${pub.doi}" target="_blank" rel="noopener noreferrer" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">${pub.title}</a>` : pub.title}
        </h3>

        <p class="text-sm text-slate-600 dark:text-slate-300 mb-3">${authorsFormatted}</p>

        <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 mb-4">
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed"><strong class="text-primary-600 dark:text-primary-400 font-semibold">TL;DR:</strong> ${pub.tldr}</p>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-700/60">
          <div class="flex flex-wrap gap-1.5">
            ${pub.tags.map(t => `<span class="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300">${t}</span>`).join("")}
          </div>
          <div class="flex items-center gap-2">
            ${pub.doi ? `<a href="${pub.doi}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/60 hover:bg-primary-100 dark:hover:bg-primary-900/60 transition-colors"><i data-lucide="external-link" class="w-3.5 h-3.5"></i> DOI / Paper</a>` : ''}
            <button onclick="openBibtexModal('${pub.id}')" class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
              <i data-lucide="code" class="w-3.5 h-3.5"></i> BibTeX
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  lucide.createIcons();
}

function setupSearchAndFilters() {
  const searchInput = document.getElementById("pubSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value;
      renderPublications();
    });
  }

  const filterBtns = document.querySelectorAll(".pub-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("bg-primary-600", "text-white", "shadow-sm");
        b.classList.add("bg-white", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300");
      });
      btn.classList.add("bg-primary-600", "text-white", "shadow-sm");
      btn.classList.remove("bg-white", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300");

      currentCategory = btn.dataset.category;
      renderPublications();
    });
  });
}

window.resetPubFilters = function() {
  currentCategory = "all";
  currentSearchQuery = "";
  const searchInput = document.getElementById("pubSearchInput");
  if (searchInput) searchInput.value = "";
  
  const filterBtns = document.querySelectorAll(".pub-filter-btn");
  filterBtns.forEach((b, idx) => {
    if (idx === 0) {
      b.classList.add("bg-primary-600", "text-white");
      b.classList.remove("bg-white", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300");
    } else {
      b.classList.remove("bg-primary-600", "text-white");
      b.classList.add("bg-white", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300");
    }
  });
  renderPublications();
};

/* =========================================================================
   BibTeX Modal & Clipboard
   ========================================================================= */
function setupBibtexModal() {
  const modal = document.getElementById("bibtexModal");
  const closeBtn = document.getElementById("closeBibtexBtn");
  const copyBtn = document.getElementById("copyBibtexBtn");

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const code = document.getElementById("bibtexContent").innerText;
      navigator.clipboard.writeText(code).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-emerald-400"></i> Copied!`;
        lucide.createIcons();
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
          lucide.createIcons();
        }, 2000);
      });
    });
  }
}

window.openBibtexModal = function(pubId) {
  const pub = PORTFOLIO_DATA.publications.find(p => p.id === pubId);
  if (!pub) return;

  const modal = document.getElementById("bibtexModal");
  const titleEl = document.getElementById("bibtexTitle");
  const contentEl = document.getElementById("bibtexContent");

  if (modal && titleEl && contentEl) {
    titleEl.innerText = pub.title;
    contentEl.innerText = pub.bibtex;
    modal.classList.remove("hidden");
    lucide.createIcons();
  }
};

/* =========================================================================
   Mobile Navigation Menu
   ========================================================================= */
function setupMobileMenu() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("hidden");
    });

    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.add("hidden");
      });
    });
  }
}
