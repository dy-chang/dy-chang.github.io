/**
 * Clean Application Controller
 * Dr. Daeyeol (Daniel) Chang Portfolio
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderWorkflow();
  renderProjects();
  renderRepositories();
  renderPublications();
  renderExperience();
  renderEducation();
  setupSmoothScroll();
  setupPublicationFilters();
  setupBibtexModal();
  lucide.createIcons();
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
      lucide.createIcons();
    });
  }
}

/* Smooth Scroll Navigation (Zero 404s) */
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

/* Render Visual Modeling Workflow */
function renderWorkflow() {
  const container = document.getElementById("workflowGrid");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.workflowSteps.map(step => `
    <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
      <div class="flex items-center justify-between">
        <span class="text-xs font-mono font-bold text-blue-700 dark:text-blue-400">Step ${step.step}</span>
        <span class="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700"></span>
      </div>
      <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100">${step.title}</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">${step.desc}</p>
      <div class="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">${step.tools}</div>
    </div>
  `).join("");
}

/* Render Major Projects */
function renderProjects() {
  const container = document.getElementById("projectsList");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.projects.map((proj, idx) => `
    <article class="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
        <div>
          <span class="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wide">${proj.client}</span>
          <span class="text-xs text-slate-400 dark:text-slate-500 font-mono ml-2">(${proj.period})</span>
        </div>
        <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">${proj.badge}</span>
      </div>

      <div class="space-y-2">
        <h3 class="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">${proj.title}</h3>
        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">${proj.summary}</p>
      </div>

      <!-- Quick Metric Chips -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 py-1">
        ${proj.metrics.map(m => `
          <div class="p-2.5 rounded bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80 text-center">
            <div class="text-xs font-bold text-slate-900 dark:text-slate-100">${m.value}</div>
            <div class="text-[10px] text-slate-500">${m.label}</div>
          </div>
        `).join("")}
      </div>

      <!-- Key Quantitative Takeaways -->
      <div class="space-y-1.5 pt-1">
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Key Empirical Findings & Takeaways</h4>
        <ul class="space-y-1 text-xs text-slate-600 dark:text-slate-400">
          ${proj.takeaways.map(t => `<li class="flex items-start gap-2"><span class="text-blue-600 dark:text-blue-400 font-bold mt-0.5">•</span><span>${t}</span></li>`).join("")}
        </ul>
      </div>

      ${proj.publication ? `
        <div class="text-xs text-slate-500 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span><strong>Report / Paper:</strong> ${proj.publication}</span>
          ${proj.doi ? `<a href="${proj.doi}" target="_blank" rel="noopener noreferrer" class="text-blue-700 dark:text-blue-400 font-semibold hover:underline">View DOI &rarr;</a>` : ''}
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
    <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 block space-y-3 hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
      <div class="flex items-center justify-between">
        <span class="text-xs font-mono text-slate-400">dy-chang /</span>
        <i data-lucide="external-link" class="w-3.5 h-3.5 text-slate-400"></i>
      </div>
      <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100">${repo.title}</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">${repo.description}</p>
      <div class="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
        <span class="text-[11px] font-semibold text-blue-700 dark:text-blue-400 mr-2">${repo.language}</span>
        ${repo.topics.map(t => `<span class="px-1.5 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">${t}</span>`).join("")}
      </div>
    </a>
  `).join("");
}

/* Render Experience & Education */
function renderExperience() {
  const container = document.getElementById("experienceList");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
    <div class="flex items-start justify-between py-2 border-b border-slate-100 dark:border-slate-800/80 last:border-b-0 text-xs">
      <div>
        <h4 class="font-bold text-slate-900 dark:text-slate-100">${exp.role} &mdash; <span class="text-blue-700 dark:text-blue-400 font-semibold">${exp.organization}</span></h4>
        <p class="text-slate-500">${exp.location}</p>
      </div>
      <span class="font-mono text-slate-400">${exp.period}</span>
    </div>
  `).join("");
}

function renderEducation() {
  const container = document.getElementById("educationList");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.education.map(edu => `
    <div class="p-3.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-0.5 text-xs">
      <div class="flex justify-between items-baseline font-bold text-slate-900 dark:text-slate-100">
        <span>${edu.degree}</span>
        <span class="font-mono text-slate-400 font-normal">${edu.year}</span>
      </div>
      <div class="text-blue-700 dark:text-blue-400 font-medium">${edu.institution}</div>
      <div class="text-[11px] text-slate-500">${edu.detail}</div>
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
    const catMatch = currentCategory === "all" || pub.category === currentCategory || (currentCategory === "selected" && pub.selected);
    const searchTarget = `${pub.title} ${pub.authors} ${pub.journal} ${pub.year}`.toLowerCase();
    const searchMatch = !currentSearch || searchTarget.includes(currentSearch.toLowerCase());
    return catMatch && searchMatch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p class="text-xs text-slate-500 py-6 text-center">No publications match your criteria.</p>`;
    return;
  }

  container.innerHTML = filtered.map(pub => `
    <div class="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
      <h4 class="text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">
        ${pub.doi ? `<a href="${pub.doi}" target="_blank" rel="noopener noreferrer" class="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">${pub.title}</a>` : pub.title}
      </h4>
      <p class="text-xs text-slate-600 dark:text-slate-400">${pub.authors}</p>
      <div class="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 pt-1 border-t border-slate-100 dark:border-slate-800">
        <span><em class="font-medium text-slate-700 dark:text-slate-300">${pub.journal}</em> (${pub.year})</span>
        <div class="flex items-center gap-2">
          ${pub.doi ? `<a href="${pub.doi}" target="_blank" rel="noopener noreferrer" class="text-blue-700 dark:text-blue-400 font-semibold hover:underline">DOI &rarr;</a>` : ''}
          <button onclick="openBibtexModal('${pub.id}')" class="px-2 py-0.5 rounded text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200">BibTeX</button>
        </div>
      </div>
    </div>
  `).join("");

  lucide.createIcons();
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
        b.className = "pub-tab px-3 py-1 rounded text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white";
      });
      btn.className = "pub-tab px-3 py-1 rounded text-xs font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900";
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
    close.addEventListener("click", () => modal.classList.add("hidden"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  }

  if (copy) {
    copy.addEventListener("click", () => {
      const text = document.getElementById("bibtexCode").innerText;
      navigator.clipboard.writeText(text).then(() => {
        copy.innerText = "Copied!";
        setTimeout(() => copy.innerText = "Copy", 2000);
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
  }
};
