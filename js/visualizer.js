/**
 * Data Visualizations & Econometric Simulators
 * Styled for professional publication and agency reporting
 */

let fskChartInstance = null;

document.addEventListener("DOMContentLoaded", () => {
  initFskChart("pm");
  initLogitSimulator();
});

/* =========================================================================
   1. FSK Bridge Traffic Disruption Chart (ClearGuide GPS Probe TTI)
   ========================================================================= */
const FSK_DATA = {
  pm: {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Immediate Post-Collapse (Mar–Apr 2024)",
        data: [56, 48, 61, 62, 77],
        backgroundColor: "#dc2626", // Clean Crimson
        borderRadius: 4
      },
      {
        label: "Fall Adaptation (Sep–Nov 2024)",
        data: [32, 34, 46, 50, 38],
        backgroundColor: "#d97706", // Amber
        borderRadius: 4
      },
      {
        label: "Winter Equilibrium (Dec 2024–Feb 2025)",
        data: [26, 30, 39, 24, 38],
        backgroundColor: "#2563eb", // Royal Blue
        borderRadius: 4
      }
    ]
  },
  am: {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Immediate Post-Collapse",
        data: [28, 34, 18, 13, 9],
        backgroundColor: "#dc2626",
        borderRadius: 4
      },
      {
        label: "Fall Adaptation",
        data: [11, 20, 15, 15, 1],
        backgroundColor: "#d97706",
        borderRadius: 4
      },
      {
        label: "Winter Equilibrium",
        data: [14, 8, 14, 9, -4],
        backgroundColor: "#2563eb",
        borderRadius: 4
      }
    ]
  }
};

function initFskChart(period = "pm") {
  const ctx = document.getElementById("fskChart");
  if (!ctx) return;

  if (fskChartInstance) {
    fskChartInstance.destroy();
  }

  const isDark = document.documentElement.classList.contains("dark");
  const textColor = isDark ? "#94a3b8" : "#475569";
  const gridColor = isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.06)";

  fskChartInstance = new Chart(ctx, {
    type: "bar",
    data: FSK_DATA[period],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: "index",
        intersect: false
      },
      plugins: {
        legend: {
          position: "top",
          labels: {
            color: textColor,
            font: { family: "'Inter', sans-serif", size: 12, weight: "500" },
            usePointStyle: true,
            boxWidth: 8
          }
        },
        tooltip: {
          backgroundColor: isDark ? "#0f172a" : "#1e293b",
          titleFont: { size: 12, weight: "600" },
          bodyFont: { size: 12 },
          padding: 10,
          cornerRadius: 6,
          callbacks: {
            label: function(context) {
              return ` ${context.dataset.label}: +${context.raw}% TTI`;
            }
          }
        }
      },
      scales: {
        x: {
          ticks: { color: textColor, font: { family: "'Inter', sans-serif", size: 11 } },
          grid: { display: false }
        },
        y: {
          title: {
            display: true,
            text: "% Change in Travel Time Index (TTI)",
            color: textColor,
            font: { size: 11, weight: "600" }
          },
          ticks: {
            color: textColor,
            callback: (val) => `${val}%`
          },
          grid: { color: gridColor },
          min: period === "am" ? -10 : 0,
          max: period === "am" ? 45 : 90
        }
      }
    }
  });
}

window.toggleFskPeriod = function(period) {
  const pmBtn = document.getElementById("btnFskPm");
  const amBtn = document.getElementById("btnFskAm");

  if (period === "pm") {
    pmBtn.className = "px-3 py-1 rounded text-xs font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900";
    amBtn.className = "px-3 py-1 rounded text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white";
  } else {
    amBtn.className = "px-3 py-1 rounded text-xs font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900";
    pmBtn.className = "px-3 py-1 rounded text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white";
  }
  initFskChart(period);
};


/* =========================================================================
   2. Hurricane Evacuation Route Choice Simulator (Mixed Logit)
   ========================================================================= */
const LOGIT_PARAMS = {
  constant: 3.096,
  recommendedRoute: 1.360,
  dwellingType: 1.078,
  travelTimeHour: 0.167,
  employment: 0.698,
  pastExperience: 0.858,
  earlyDeparture2Days: -0.648,
  shelterAccommodation: -1.944
};

function initLogitSimulator() {
  const inputs = [
    "simTravelTime",
    "simRecRoute",
    "simDwelling",
    "simExperience",
    "simEmployed",
    "simEarlyDep",
    "simShelter"
  ];

  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", calculateLogit);
      el.addEventListener("change", calculateLogit);
    }
  });

  calculateLogit();
}

function calculateLogit() {
  const travelTimeEl = document.getElementById("simTravelTime");
  const travelTimeValEl = document.getElementById("simTravelTimeVal");
  const recRouteEl = document.getElementById("simRecRoute");
  const dwellingEl = document.getElementById("simDwelling");
  const expEl = document.getElementById("simExperience");
  const empEl = document.getElementById("simEmployed");
  const earlyEl = document.getElementById("simEarlyDep");
  const shelterEl = document.getElementById("simShelter");

  if (!travelTimeEl) return;

  const travelTime = parseFloat(travelTimeEl.value);
  if (travelTimeValEl) travelTimeValEl.innerText = `${travelTime.toFixed(1)} hrs`;

  const recRoute = recRouteEl?.checked ? 1 : 0;
  const dwelling = dwellingEl?.checked ? 1 : 0;
  const exp = expEl?.checked ? 1 : 0;
  const emp = empEl?.checked ? 1 : 0;
  const early = earlyEl?.checked ? 1 : 0;
  const shelter = shelterEl?.checked ? 1 : 0;

  const utility = 
    LOGIT_PARAMS.constant +
    (LOGIT_PARAMS.travelTimeHour * travelTime) +
    (LOGIT_PARAMS.recommendedRoute * recRoute) +
    (LOGIT_PARAMS.dwellingType * dwelling) +
    (LOGIT_PARAMS.pastExperience * exp) +
    (LOGIT_PARAMS.employment * emp) +
    (LOGIT_PARAMS.earlyDeparture2Days * early) +
    (LOGIT_PARAMS.shelterAccommodation * shelter);

  const probFreeway = (1 / (1 + Math.exp(-utility))) * 100;
  const probNonFreeway = 100 - probFreeway;

  const probFreewayEl = document.getElementById("probFreeway");
  const probNonFreewayEl = document.getElementById("probNonFreeway");
  const probBarFreeway = document.getElementById("probBarFreeway");
  const probBarNonFreeway = document.getElementById("probBarNonFreeway");

  if (probFreewayEl) probFreewayEl.innerText = `${probFreeway.toFixed(1)}%`;
  if (probNonFreewayEl) probNonFreewayEl.innerText = `${probNonFreeway.toFixed(1)}%`;
  if (probBarFreeway) probBarFreeway.style.width = `${probFreeway.toFixed(1)}%`;
  if (probBarNonFreeway) probBarNonFreeway.style.width = `${probNonFreeway.toFixed(1)}%`;
}

window.refreshChartsTheme = function() {
  const currentFskPeriod = document.getElementById("btnFskPm")?.classList.contains("bg-slate-900") ? "pm" : "am";
  initFskChart(currentFskPeriod);
};
