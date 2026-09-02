/**
 * Clean Application Controller with Visual Pipeline Flow & Interactive Matrix
 * Dr. Daeyeol (Daniel) Chang Portfolio
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderMatrix();
  renderPipeline();
  renderProjects();
  renderRepositories();
  renderPublications();
  renderExperience();
  renderEducation();
  setupSmoothScroll();
  setupPublicationFilters();
  setupBibtexModal();
  setTimeout(() => {
      if(window.lucide) lucide.createIcons();
  }, 100);
});

/* Theme Toggle */
function initTheme() {
  const toggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (saved === "dark" || (!saved && prefersDark)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      const isDark = document.documentElement.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      if (window.refreshChartsTheme) window.refreshChartsTheme();
      setTimeout(() => lucide.createIcons(), 50);
    });
  }
}

/* Smooth Scroll Navigation */
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

        const mobileNav = document.getElementById("mobileNav");
        if (mobileNav) mobileNav.classList.add("hidden");
      }
    });
  });

  const mobileBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");
  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("hidden");
    });
  }
}

/* Render Hero Interactive Matrix */
function renderMatrix() {
  const container = document.getElementById("heroMatrix");
  const detailContainer = document.getElementById("matrixDetail");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.profile.pillars.map((p, idx) => {
      let borderClasses = "";
      if (idx === 0) borderClasses = "border-b border-r border-slate-100 dark:border-slate-800"; // Top-Left
      if (idx === 1) borderClasses = "border-b border-slate-100 dark:border-slate-800"; // Top-Right
      if (idx === 2) borderClasses = "border-r border-slate-100 dark:border-slate-800"; // Bottom-Left
      if (idx === 3) borderClasses = ""; // Bottom-Right

      const isActive = idx === 1;
      const activeBg = isActive ? "bg-blue-50/80 dark:bg-blue-900/20" : "bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50";
      const activeText = isActive ? "text-blue-700 dark:text-blue-400" : "text-slate-900 dark:text-slate-200";

      return `
        <button onclick="selectPillar('${p.id}')" class="matrix-btn w-full h-full p-4 text-left transition-all ${borderClasses} ${activeBg}" id="pbtn-${p.id}" data-idx="${idx}">
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400">${p.badge}</span>
            <span class="matrix-dot w-2 h-2 rounded-full ${isActive ? 'bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]' : 'bg-slate-200 dark:bg-slate-700'} transition-all"></span>
          </div>
          <div class="matrix-title text-[13px] font-bold ${activeText} leading-snug transition-colors">${p.title}</div>
        </button>
      `;
  }).join("");

  if (detailContainer) {
    const active = PORTFOLIO_DATA.profile.pillars[1]; 
    updateDetailBox(detailContainer, active);
  }
}

window.selectPillar = function(id) {
  const pillar = PORTFOLIO_DATA.profile.pillars.find(p => p.id === id);
  if (!pillar) return;

  document.querySelectorAll(".matrix-btn").forEach(btn => {
    btn.classList.remove("bg-blue-50/80", "dark:bg-blue-900/20");
    btn.classList.add("bg-white", "dark:bg-slate-900");
    
    const dot = btn.querySelector('.matrix-dot');
    dot.classList.remove('bg-blue-600', 'shadow-[0_0_8px_rgba(37,99,235,0.6)]');
    dot.classList.add('bg-slate-200', 'dark:bg-slate-700');

    const title = btn.querySelector('.matrix-title');
    title.classList.remove('text-blue-700', 'dark:text-blue-400');
    title.classList.add('text-slate-900', 'dark:text-slate-200');
  });

  const activeBtn = document.getElementById(`pbtn-${id}`);
  if (activeBtn) {
    activeBtn.classList.remove("bg-white", "dark:bg-slate-900");
    activeBtn.classList.add("bg-blue-50/80", "dark:bg-blue-900/20");

    const dot = activeBtn.querySelector('.matrix-dot');
    dot.classList.remove('bg-slate-200', 'dark:bg-slate-700');
    dot.classList.add('bg-blue-600', 'shadow-[0_0_8px_rgba(37,99,235,0.6)]');

    const title = activeBtn.querySelector('.matrix-title');
    title.classList.remove('text-slate-900', 'dark:text-slate-200');
    title.classList.add('text-blue-700', 'dark:text-blue-400');
  }

  const detailContainer = document.getElementById("matrixDetail");
  if (detailContainer) {
    detailContainer.style.opacity = 0;
    setTimeout(() => {
      updateDetailBox(detailContainer, pillar);
      detailContainer.style.opacity = 1;
    }, 150);
  }
};

function updateDetailBox(container, pillar) {
    container.innerHTML = `
      <div class="flex items-start gap-2 mb-1.5">
         <i data-lucide="cpu" class="w-4 h-4 text-blue-600 mt-0.5"></i>
         <div>
            <div class="text-[13px] font-bold text-slate-900 dark:text-slate-100">${pillar.title}</div>
            <div class="text-[10px] font-mono text-blue-700 dark:text-blue-400 mt-0.5">${pillar.tools}</div>
         </div>
      </div>
      <div class="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed pl-6">${pillar.detail}</div>
    `;
    lucide.createIcons();
}


/* Render Connected Visual Pipeline with Arrows */
function renderPipeline() {
  const container = document.getElementById("pipelineFlow");
  if (!container) return;

  let html = "";
  const stages = PORTFOLIO_DATA.pipeline;

  stages.forEach((stage, idx) => {
    html += `
      <div class="relative flex-1 p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 z-10 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-600 transition-all group">
        <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2 mb-2">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs font-bold font-mono flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">${stage.step}</span>
            <span class="text-[10px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest">${stage.category}</span>
          </div>
          <i data-lucide="${stage.icon}" class="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors"></i>
        </div>

        <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100">${stage.name}</h3>

        <div class="space-y-1 text-xs">
          <div class="text-[9px] font-bold uppercase tracking-wider text-slate-400">Core Inputs / Engines:</div>
          <ul class="space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
            ${stage.inputs.map(inp => `<li class="flex items-start gap-1.5"><span class="text-blue-400 dark:text-blue-500 mt-0.5"><i data-lucide="check" class="w-3 h-3"></i></span><span>${inp}</span></li>`).join("")}
          </ul>
        </div>

        <div class="pt-3 mt-auto border-t border-slate-100 dark:border-slate-800">
          <span class="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Generated Output:</span>
          <span class="text-[10px] font-mono font-semibold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-950 px-2 py-1 rounded border border-slate-200 dark:border-slate-800 block truncate" title="${stage.outputs}">${stage.outputs}</span>
        </div>
      </div>
    `;

    if (idx < stages.length - 1) {
      html += `
        <!-- Desktop Horizontal Arrow -->
        <div class="hidden lg:flex items-center justify-center -mx-4 z-0 text-slate-300 dark:text-slate-700">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </div>
        <!-- Mobile Vertical Arrow -->
        <div class="flex lg:hidden items-center justify-center text-slate-300 dark:text-slate-700 py-1">
           <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
           </svg>
        </div>
      `;
    }
  });

  container.innerHTML = html;
}

/* Render Major Projects */
function renderProjects() {
  const container = document.getElementById("projectsList");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.projects.map((proj, idx) => `
    <article class="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm hover:shadow transition-shadow">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
        <div>
          <span class="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest">${proj.client}</span>
          <span class="text-[11px] text-slate-400 dark:text-slate-500 font-mono ml-2 border-l border-slate-300 dark:border-slate-700 pl-2">${proj.period}</span>
        </div>
        <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">${proj.badge}</span>
      </div>

      <div class="space-y-2">
        <h3 class="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">${proj.title}</h3>
        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">${proj.summary}</p>
      </div>

      <!-- Quick Metric Chips -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 py-2">
        ${proj.metrics.map(m => `
          <div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80 text-center flex flex-col justify-center">
            <div class="text-xs font-bold text-slate-900 dark:text-slate-100 mb-0.5">${m.value}</div>
            <div class="text-[9px] font-mono text-slate-500 uppercase">${m.label}</div>
          </div>
        `).join("")}
      </div>

      <!-- Key Quantitative Takeaways -->
      <div class="space-y-2 pt-2">
        <h4 class="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5"><i data-lucide="zap" class="w-3.5 h-3.5 text-yellow-500"></i> Key Empirical Findings</h4>
        <ul class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
          ${proj.takeaways.map(t => `<li class="flex items-start gap-2"><span class="text-blue-600 dark:text-blue-400 font-bold mt-0.5">&rarr;</span><span class="leading-relaxed">${t}</span></li>`).join("")}
        </ul>
      </div>

      ${proj.publication ? `
        <div class="text-xs text-slate-500 pt-4 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span class="flex items-center gap-1.5"><i data-lucide="book" class="w-3.5 h-3.5"></i> <strong>Paper:</strong> ${proj.publication}</span>
          ${proj.doi ? `<a href="${proj.doi}" target="_blank" rel="noopener noreferrer" class="text-blue-700 dark:text-blue-400 font-bold hover:underline flex items-center gap-1">View DOI <i data-lucide="external-link" class="w-3 h-3"></i></a>` : ''}
        </div>
      ` : ''}
    </article>
  `).join("");
}

/* Render Open Source Repositories */
function renderRepositories() {
  const container = document.getElementById("repositoriesGrid");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.repositories.map(repo => `
    <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 block space-y-3 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all group">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
        <span class="text-[10px] font-mono font-bold text-slate-400 flex items-center gap-1.5"><i data-lucide="github" class="w-3.5 h-3.5"></i> dy-chang /</span>
        <i data-lucide="external-link" class="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors"></i>
      </div>
      <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">${repo.title}</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">${repo.description}</p>
      <div class="flex flex-wrap items-center gap-1.5 pt-3">
        <span class="text-[11px] font-bold text-blue-700 dark:text-blue-400 mr-2 border-r border-slate-200 dark:border-slate-700 pr-2">${repo.language}</span>
        ${repo.topics.map(t => `<span class="px-1.5 py-0.5 rounded-md text-[9px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">${t}</span>`).join("")}
      </div>
    </a>
  `).join("");
}

/* Render Experience & Education */
function renderExperience() {
  const container = document.getElementById("experienceList");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
    <div class="p-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-sm">
      <div>
        <h4 class="font-bold text-slate-900 dark:text-slate-100 text-sm">${exp.role}</h4>
        <div class="text-blue-700 dark:text-blue-400 font-medium mt-0.5">${exp.organization} &bull; <span class="text-slate-500 font-normal">${exp.location}</span></div>
      </div>
      <span class="font-mono text-[10px] bg-slate-50 dark:bg-slate-950 px-2 py-1 rounded border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 whitespace-nowrap">${exp.period}</span>
    </div>
  `).join("");
}

function renderEducation() {
  const container = document.getElementById("educationList");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.education.map(edu => `
    <div class="p-3.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg text-xs shadow-sm space-y-1">
      <h4 class="font-bold text-slate-900 dark:text-slate-100 text-sm">${edu.degree}</h4>
      <div class="text-blue-700 dark:text-blue-400 font-semibold">${edu.institution}</div>
      <div class="text-[11px] text-slate-500 bg-slate-50 dark:bg-slate-950 p-2 rounded-md border border-slate-100 dark:border-slate-800 leading-relaxed">${edu.detail}</div>
    </div>
  `).join("");
}

/* Render Publications */
let currentCategory = "all";
let currentSearch = "";

function renderPublications() {
  const container = document.getElementById("publicationsList");
  if (!container) return;

  const filtered = PORTFOLIO_DATA.publications.filter(pub => {
    const catMatch = currentCategory === "all" || pub.category === currentCategory;
    const searchTarget = `${pub.title} ${pub.authors} ${pub.journal} ${pub.year}`.toLowerCase();
    const searchMatch = !currentSearch || searchTarget.includes(currentSearch.toLowerCase());
    return catMatch && searchMatch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p class="text-xs text-slate-500 py-8 text-center bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">No publications match your criteria.</p>`;
    return;
  }

  container.innerHTML = filtered.map(pub => `
    <div class="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm hover:border-blue-300 dark:hover:border-blue-800 transition-colors">
      <h4 class="text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">
        ${pub.doi ? `<a href="${pub.doi}" target="_blank" rel="noopener noreferrer" class="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">${pub.title}</a>` : pub.title}
      </h4>
      <p class="text-xs text-slate-600 dark:text-slate-400">${pub.authors}</p>
      <div class="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800 mt-2">
        <span class="bg-slate-50 dark:bg-slate-950 px-2 py-1 rounded border border-slate-100 dark:border-slate-800"><em class="font-medium text-slate-700 dark:text-slate-300">${pub.journal}</em> &bull; ${pub.year}</span>
        <div class="flex items-center gap-2">
          ${pub.doi ? `<a href="${pub.doi}" target="_blank" rel="noopener noreferrer" class="text-blue-700 dark:text-blue-400 font-bold hover:underline flex items-center gap-1"><i data-lucide="external-link" class="w-3 h-3"></i> DOI</a>` : ''}
          <button onclick="openBibtexModal('${pub.id}')" class="px-2 py-1 rounded-md text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1"><i data-lucide="code" class="w-3 h-3"></i> BibTeX</button>
        </div>
      </div>
    </div>
  `).join("");

  setTimeout(() => lucide.createIcons(), 50);
}

function setupPublicationFilters() {
  const input = document.getElementById("pubSearchInput");
  if (input) {
    input.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderPublications();
    });
  }

  document.querySelectorAll(".pub-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".pub-tab").forEach(b => {
        b.className = "pub-tab px-3 py-1.5 rounded-md font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors";
      });
      btn.className = "pub-tab px-3 py-1.5 rounded-md font-semibold bg-white dark:bg-slate-700 text-blue-700 dark:text-blue-400 shadow-sm transition-colors";
      currentCategory = btn.dataset.category;
      renderPublications();
    });
  });
}

/* BibTeX Modal */
function setupBibtexModal() {
  const modal = document.getElementById("bibtexModal");
  const close = document.getElementById("closeBibtexBtn");
  const copy = document.getElementById("copyBibtexBtn");

  if (close && modal) {
    close.addEventListener("click", () => {
        modal.classList.remove("opacity-100");
        setTimeout(() => modal.classList.add("hidden"), 200);
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
          modal.classList.remove("opacity-100");
          setTimeout(() => modal.classList.add("hidden"), 200);
      }
    });
  }

  if (copy) {
    copy.addEventListener("click", () => {
      const text = document.getElementById("bibtexCode").innerText;
      navigator.clipboard.writeText(text).then(() => {
        const originalText = copy.innerHTML;
        copy.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5"></i> Copied!`;
        lucide.createIcons();
        copy.classList.replace("bg-blue-600", "bg-green-600");
        copy.classList.replace("hover:bg-blue-700", "hover:bg-green-700");
        setTimeout(() => {
            copy.innerHTML = originalText;
            lucide.createIcons();
            copy.classList.replace("bg-green-600", "bg-blue-600");
            copy.classList.replace("hover:bg-green-700", "hover:bg-blue-700");
        }, 2000);
      });
    });
  }
}

window.openBibtexModal = function(id) {
  const pub = PORTFOLIO_DATA.publications.find(p => p.id === id);
  if (!pub) return;

  const modal = document.getElementById("bibtexModal");
  const title = document.getElementById("bibtexTitle");
  const code = document.getElementById("bibtexCode");

  if (modal && title && code) {
    title.innerText = pub.title;
    code.innerText = pub.bibtex;
    modal.classList.remove("hidden");
    void modal.offsetWidth;
    modal.classList.add("opacity-100");
  }
};
