/**
 * Interactive Visualizations and Research Simulators
 * Dr. Daeyeol Chang Portfolio
 */

let fskChartInstance = null;
let vrChartInstance = null;

// Initialize Visualizations when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  initFskShockwaveChart("pm");
  initEvacuationSimulator();
  initVrChart();
});

/* =========================================================================
   1. FSK Bridge Traffic Shockwave Chart (ClearGuide TTI Data)
   ========================================================================= */
const FSK_DATA = {
  pm: {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Immediate Post-Collapse (Mar-Apr 2024)",
        data: [56, 48, 61, 62, 77],
        backgroundColor: "rgba(239, 68, 68, 0.85)", // Red
        borderColor: "rgb(239, 68, 68)",
        borderWidth: 1,
        borderRadius: 6
      },
      {
        label: "Fall Adaptation (Sep-Nov 2024)",
        data: [32, 34, 46, 50, 38],
        backgroundColor: "rgba(245, 158, 11, 0.85)", // Amber
        borderColor: "rgb(245, 158, 11)",
        borderWidth: 1,
        borderRadius: 6
      },
      {
        label: "Winter Equilibrium (Dec 2024-Feb 2025)",
        data: [26, 30, 39, 24, 38],
        backgroundColor: "rgba(59, 130, 246, 0.85)", // Blue
        borderColor: "rgb(59, 130, 246)",
        borderWidth: 1,
        borderRadius: 6
      }
    ]
  },
  am: {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Immediate Post-Collapse",
        data: [28, 34, 18, 13, 9],
        backgroundColor: "rgba(239, 68, 68, 0.85)",
        borderColor: "rgb(239, 68, 68)",
        borderWidth: 1,
        borderRadius: 6
      },
      {
        label: "Fall Adaptation",
        data: [11, 20, 15, 15, 1],
        backgroundColor: "rgba(245, 158, 11, 0.85)",
        borderColor: "rgb(245, 158, 11)",
        borderWidth: 1,
        borderRadius: 6
      },
      {
        label: "Winter Equilibrium",
        data: [14, 8, 14, 9, -4],
        backgroundColor: "rgba(59, 130, 246, 0.85)",
        borderColor: "rgb(59, 130, 246)",
        borderWidth: 1,
        borderRadius: 6
      }
    ]
  }
};

function initFskShockwaveChart(period = "pm") {
  const ctx = document.getElementById("fskChart");
  if (!ctx) return;

  if (fskChartInstance) {
    fskChartInstance.destroy();
  }

  const isDark = document.documentElement.classList.contains("dark");
  const textColor = isDark ? "#e2e8f0" : "#334155";
  const gridColor = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)";

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
          titleFont: { size: 13, weight: "bold" },
          bodyFont: { size: 12 },
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            label: function(context) {
              return ` ${context.dataset.label}: +${context.raw}% TTI increase`;
            }
          }
        }
      },
      scales: {
        x: {
          ticks: { color: textColor, font: { family: "'Inter', sans-serif", weight: "500" } },
          grid: { display: false }
        },
        y: {
          title: {
            display: true,
            text: "% Change in Travel Time Index (TTI)",
            color: textColor,
            font: { size: 12, weight: "600" }
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
    pmBtn.className = "px-4 py-1.5 rounded-lg text-sm font-semibold bg-primary-600 text-white shadow-sm transition-all";
    amBtn.className = "px-4 py-1.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all";
  } else {
    amBtn.className = "px-4 py-1.5 rounded-lg text-sm font-semibold bg-primary-600 text-white shadow-sm transition-all";
    pmBtn.className = "px-4 py-1.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all";
  }
  initFskShockwaveChart(period);
};


/* =========================================================================
   2. Evacuation Route Choice Simulator (Mixed Logit Model)
   ========================================================================= */
const LOGIT_PARAMS = {
  constant: 3.096,
  recommendedRoute: 1.360,     // willingness to use official route
  dwellingType: 1.078,         // single-family / duplex = 1
  travelTimeHour: 0.167,       // per hour of normal travel time
  employment: 0.698,           // employed = 1
  pastExperience: 0.858,       // evacuated before = 1
  earlyDeparture2Days: -0.648, // 2 days before landfall = 1
  shelterAccommodation: -1.944 // shelter or second home = 1
};

function initEvacuationSimulator() {
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
      el.addEventListener("input", calculateLogitChoice);
      el.addEventListener("change", calculateLogitChoice);
    }
  });

  calculateLogitChoice();
}

function calculateLogitChoice() {
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

  const recRoute = recRouteEl.checked ? 1 : 0;
  const dwelling = dwellingEl.checked ? 1 : 0;
  const exp = expEl.checked ? 1 : 0;
  const emp = empEl.checked ? 1 : 0;
  const early = earlyEl.checked ? 1 : 0;
  const shelter = shelterEl.checked ? 1 : 0;

  // Utility function: V = Beta * X
  const utility = 
    LOGIT_PARAMS.constant +
    (LOGIT_PARAMS.travelTimeHour * travelTime) +
    (LOGIT_PARAMS.recommendedRoute * recRoute) +
    (LOGIT_PARAMS.dwellingType * dwelling) +
    (LOGIT_PARAMS.pastExperience * exp) +
    (LOGIT_PARAMS.employment * emp) +
    (LOGIT_PARAMS.earlyDeparture2Days * early) +
    (LOGIT_PARAMS.shelterAccommodation * shelter);

  // Binary Logit Probability P(Freeway) = 1 / (1 + exp(-V))
  const probFreeway = (1 / (1 + Math.exp(-utility))) * 100;
  const probNonFreeway = 100 - probFreeway;

  const probFreewayEl = document.getElementById("probFreeway");
  const probNonFreewayEl = document.getElementById("probNonFreeway");
  const probBarFreeway = document.getElementById("probBarFreeway");
  const probBarNonFreeway = document.getElementById("probBarNonFreeway");
  const logitSummaryEl = document.getElementById("logitSummary");

  if (probFreewayEl) probFreewayEl.innerText = `${probFreeway.toFixed(1)}%`;
  if (probNonFreewayEl) probNonFreewayEl.innerText = `${probNonFreeway.toFixed(1)}%`;
  if (probBarFreeway) probBarFreeway.style.width = `${probFreeway.toFixed(1)}%`;
  if (probBarNonFreeway) probBarNonFreeway.style.width = `${probNonFreeway.toFixed(1)}%`;

  if (logitSummaryEl) {
    if (probFreeway >= 75) {
      logitSummaryEl.innerHTML = `<span class="text-emerald-600 dark:text-emerald-400 font-semibold">High Freeway Propensity:</span> Evacuees with longer trip distances and willingness to follow official routes heavily concentrate on freeways, requiring aggressive traffic management & contraflow lanes.`;
    } else if (probFreeway >= 50) {
      logitSummaryEl.innerHTML = `<span class="text-blue-600 dark:text-blue-400 font-semibold">Moderate Freeway Preference:</span> Balanced distribution across freeway and parallel arterial networks.`;
    } else {
      logitSummaryEl.innerHTML = `<span class="text-amber-600 dark:text-amber-400 font-semibold">Arterial / Local Preference:</span> Factors like 2-day early departure or short trips to public shelters divert traffic to local non-freeway routes.`;
    }
  }
}


/* =========================================================================
   3. VR Work Zone Inspection Training Performance Chart
   ========================================================================= */
function initVrChart() {
  const ctx = document.getElementById("vrChart");
  if (!ctx) return;

  if (vrChartInstance) {
    vrChartInstance.destroy();
  }

  const isDark = document.documentElement.classList.contains("dark");
  const textColor = isDark ? "#e2e8f0" : "#334155";
  const gridColor = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)";

  vrChartInstance = new Chart(ctx, {
    type: "radar",
    data: {
      labels: [
        "Deficiency Accuracy",
        "Signage Evaluation",
        "Trainee Satisfaction",
        "Spatial Immersion",
        "Flagger Protocol",
        "Practical Utility"
      ],
      datasets: [
        {
          label: "Traditional Slide/Photo Training",
          data: [44, 52, 48, 25, 40, 50],
          backgroundColor: "rgba(148, 163, 184, 0.25)",
          borderColor: "rgb(148, 163, 184)",
          borderWidth: 2,
          pointBackgroundColor: "rgb(148, 163, 184)"
        },
        {
          label: "Immersive VR Simulation Platform",
          data: [79, 88, 97, 92, 85, 95],
          backgroundColor: "rgba(14, 165, 233, 0.35)", // Sky blue
          borderColor: "rgb(14, 165, 233)",
          borderWidth: 2.5,
          pointBackgroundColor: "rgb(14, 165, 233)",
          pointHoverRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
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
          padding: 10,
          cornerRadius: 8
        }
      },
      scales: {
        r: {
          angleLines: { color: gridColor },
          grid: { color: gridColor },
          pointLabels: {
            color: textColor,
            font: { family: "'Inter', sans-serif", size: 11, weight: "600" }
          },
          ticks: {
            color: textColor,
            backdropColor: "transparent",
            stepSize: 20
          },
          min: 0,
          max: 100
        }
      }
    }
  });
}

// Re-render charts on theme change
window.refreshChartsTheme = function() {
  const currentFskPeriod = document.getElementById("btnFskPm")?.classList.contains("bg-primary-600") ? "pm" : "am";
  initFskShockwaveChart(currentFskPeriod);
  initVrChart();
};
