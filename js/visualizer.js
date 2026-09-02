/**
 * Interactive Transportation Simulation & Study Area GIS Lab
 * Dr. Daeyeol (Daniel) Chang Portfolio
 */

let mapInstance = null;
let currentTileLayer = null;
let corridorLayerGroup = null;
let markerLayerGroup = null;
let labChartInstance = null;
let activeRegionId = "baltimore";

document.addEventListener("DOMContentLoaded", () => {
  initGisLab();
  initLogitMiniCalculator();
});

/* =========================================================================
   GIS Map & Simulation Lab Initialization
   ========================================================================= */
function initGisLab() {
  const mapContainer = document.getElementById("gisMap");
  if (!mapContainer) return;

  const defaultRegion = PORTFOLIO_DATA.studyRegions[activeRegionId];

  // Initialize Leaflet Map
  mapInstance = L.map("gisMap", {
    center: defaultRegion.center,
    zoom: defaultRegion.zoom,
    zoomControl: false,
    attributionControl: false
  });

  L.control.zoom({ position: "bottomright" }).addTo(mapInstance);

  // Layers
  corridorLayerGroup = L.layerGroup().addTo(mapInstance);
  markerLayerGroup = L.layerGroup().addTo(mapInstance);

  // Set Tile Layer (Dark/Light mode aware)
  updateMapTiles();

  // Load Initial Region
  loadStudyRegion(activeRegionId);

  // Region Tab Event Listeners
  document.querySelectorAll(".region-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const regionId = tab.dataset.region;
      if (regionId && regionId !== activeRegionId) {
        activeRegionId = regionId;
        updateRegionTabsUI(tab);
        loadStudyRegion(regionId);
      }
    });
  });
}

/* Update Map Tiles based on theme */
function updateMapTiles() {
  if (!mapInstance) return;
  const isDark = document.documentElement.classList.contains("dark");
  
  if (currentTileLayer) {
    mapInstance.removeLayer(currentTileLayer);
  }

  const tileUrl = isDark 
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";

  currentTileLayer = L.tileLayer(tileUrl, {
    maxZoom: 18,
    subdomains: "abcd"
  }).addTo(mapInstance);
}

/* Update Region Tabs UI */
function updateRegionTabsUI(activeTab) {
  document.querySelectorAll(".region-tab").forEach(t => {
    t.className = "region-tab px-3 py-1.5 rounded-md text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5";
  });
  activeTab.className = "region-tab px-3 py-1.5 rounded-md text-xs font-bold bg-blue-600 text-white shadow-sm flex items-center gap-1.5";
}

/* Load Selected Study Region */
function loadStudyRegion(regionId) {
  const region = PORTFOLIO_DATA.studyRegions[regionId];
  if (!region || !mapInstance) return;

  // Fly to region coordinates
  mapInstance.flyTo(region.center, region.zoom, { duration: 1.2 });

  // Update Region Header & Description
  const titleEl = document.getElementById("regionTitle");
  const descEl = document.getElementById("regionDesc");
  const metaBadgeEl = document.getElementById("regionMetaBadge");

  if (titleEl) titleEl.innerText = region.name;
  if (descEl) descEl.innerText = region.description;
  if (metaBadgeEl) metaBadgeEl.innerText = `${region.client} (${region.period})`;

  // Render Custom Scenario Controls
  renderScenarioControls(regionId);

  // Render Corridors & Choke Points
  updateSimulationLayers();

  // Render Telemetry & Chart
  updateLabTelemetry();
  renderLabChart();
}

/* =========================================================================
   Scenario Controls Generator for Each Study Area
   ========================================================================= */
function renderScenarioControls(regionId) {
  const container = document.getElementById("scenarioControls");
  if (!container) return;

  let controlsHtml = "";

  if (regionId === "baltimore") {
    controlsHtml = `
      <div class="space-y-3 text-xs">
        <div>
          <div class="flex justify-between font-semibold text-slate-700 dark:text-slate-300 mb-1">
            <span>Disruption Season & Period:</span>
            <span id="baltPeriodLabel" class="text-blue-600 dark:text-blue-400 font-mono">Immediate Post-Collapse (Spring '24)</span>
          </div>
          <select id="baltPeriodSelect" onchange="updateSimulationLayers()" class="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-medium">
            <option value="immediate">Immediate Shock (March–April 2024)</option>
            <option value="fall">Fall Adaptation (September–November 2024)</option>
            <option value="winter">Winter Equilibrium (Dec 2024–Feb 2025)</option>
          </select>
        </div>

        <div>
          <div class="flex justify-between font-semibold text-slate-700 dark:text-slate-300 mb-1">
            <span>Peak Hour Window:</span>
            <span id="baltPeakLabel" class="text-blue-600 dark:text-blue-400 font-mono">Friday PM Peak</span>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button onclick="setBaltPeak('pm')" id="btnBaltPm" class="p-1.5 rounded-md text-xs font-semibold bg-blue-600 text-white">PM Peak (+126% TTI)</button>
            <button onclick="setBaltPeak('am')" id="btnBaltAm" class="p-1.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">AM Peak (+34% TTI)</button>
          </div>
        </div>

        <div class="space-y-1.5 pt-1 border-t border-slate-100 dark:border-slate-800">
          <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Operational Mitigations:</span>
          <label class="flex items-center gap-2 p-1.5 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 cursor-pointer">
            <input id="baltFreightDetour" type="checkbox" checked onchange="updateSimulationLayers()" class="rounded text-blue-600">
            <span class="text-[11px] text-slate-700 dark:text-slate-300">Mandatory Hazmat/Freight I-695 Detour</span>
          </label>
          <label class="flex items-center gap-2 p-1.5 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 cursor-pointer">
            <input id="baltRampMetering" type="checkbox" onchange="updateSimulationLayers()" class="rounded text-blue-600">
            <span class="text-[11px] text-slate-700 dark:text-slate-300">Dynamic Ramp Metering on MD-295</span>
          </label>
        </div>
      </div>
    `;
  } else if (regionId === "st_louis") {
    controlsHtml = `
      <div class="space-y-3 text-xs">
        <div>
          <div class="flex justify-between font-semibold text-slate-700 dark:text-slate-300 mb-1">
            <span>Earthquake Severity (ShakeCast):</span>
            <span id="stlEqLabel" class="text-blue-600 dark:text-blue-400 font-mono">M6.7 Major Earthquake</span>
          </div>
          <input id="stlEqSlider" type="range" min="0" max="2" step="1" value="2" oninput="updateSimulationLayers()" class="w-full accent-blue-600">
          <div class="flex justify-between text-[10px] text-slate-400 mt-0.5 font-mono">
            <span>Normal</span>
            <span>M5.5 Moderate</span>
            <span>M6.7 Severe</span>
          </div>
        </div>

        <div>
          <div class="flex justify-between font-semibold text-slate-700 dark:text-slate-300 mb-1">
            <span>Departure Window:</span>
            <span id="stlWindowLabel" class="text-blue-600 dark:text-blue-400 font-mono">6-Hour Compressed Evacuation</span>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button onclick="setStlWindow('6h')" id="btnStl6h" class="p-1.5 rounded-md text-xs font-semibold bg-blue-600 text-white">6-Hour Window</button>
            <button onclick="setStlWindow('12h')" id="btnStl12h" class="p-1.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">12-Hour Staged</button>
          </div>
        </div>

        <div class="space-y-1.5 pt-1 border-t border-slate-100 dark:border-slate-800">
          <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Emergency Operations:</span>
          <label class="flex items-center gap-2 p-1.5 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 cursor-pointer">
            <input id="stlContraflow" type="checkbox" checked onchange="updateSimulationLayers()" class="rounded text-blue-600">
            <span class="text-[11px] text-slate-700 dark:text-slate-300">I-64 Dynamic Westbound Contraflow Lane</span>
          </label>
        </div>
      </div>
    `;
  } else if (regionId === "hampton_roads") {
    controlsHtml = `
      <div class="space-y-3 text-xs">
        <div>
          <div class="flex justify-between font-semibold text-slate-700 dark:text-slate-300 mb-1">
            <span>Normal Travel Time to Inland Safe Zone:</span>
            <span id="hrTravelTimeVal" class="text-blue-600 dark:text-blue-400 font-mono">4.5 hrs</span>
          </div>
          <input id="hrTravelTime" type="range" min="1.0" max="12.0" step="0.5" value="4.5" oninput="updateSimulationLayers()" class="w-full accent-blue-600">
        </div>

        <div class="grid grid-cols-2 gap-1.5">
          <label class="flex items-center gap-1.5 p-1.5 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 cursor-pointer">
            <input id="hrRecRoute" type="checkbox" checked onchange="updateSimulationLayers()" class="rounded text-blue-600">
            <span class="text-[11px] text-slate-700 dark:text-slate-300">Official Route</span>
          </label>
          <label class="flex items-center gap-1.5 p-1.5 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 cursor-pointer">
            <input id="hrDwelling" type="checkbox" checked onchange="updateSimulationLayers()" class="rounded text-blue-600">
            <span class="text-[11px] text-slate-700 dark:text-slate-300">Single Family</span>
          </label>
          <label class="flex items-center gap-1.5 p-1.5 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 cursor-pointer">
            <input id="hrExperience" type="checkbox" checked onchange="updateSimulationLayers()" class="rounded text-blue-600">
            <span class="text-[11px] text-slate-700 dark:text-slate-300">Prior Evacuee</span>
          </label>
          <label class="flex items-center gap-1.5 p-1.5 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 cursor-pointer">
            <input id="hrEarlyDep" type="checkbox" onchange="updateSimulationLayers()" class="rounded text-blue-600">
            <span class="text-[11px] text-slate-700 dark:text-slate-300">2-Day Early</span>
          </label>
        </div>

        <div class="pt-1 border-t border-slate-100 dark:border-slate-800">
          <div class="flex justify-between text-xs font-bold mb-1">
            <span class="text-blue-700 dark:text-blue-400">Freeway (I-64 HRBT): <span id="hrProbFreeway">94.2%</span></span>
            <span class="text-slate-500">Arterial (US-58): <span id="hrProbArterial">5.8%</span></span>
          </div>
          <div class="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden flex">
            <div id="hrProbBarFreeway" class="bg-blue-600 h-full transition-all duration-300" style="width: 94.2%;"></div>
            <div id="hrProbBarArterial" class="bg-slate-400 dark:bg-slate-600 h-full transition-all duration-300" style="width: 5.8%;"></div>
          </div>
        </div>
      </div>
    `;
  } else if (regionId === "new_madrid") {
    controlsHtml = `
      <div class="space-y-3 text-xs">
        <div>
          <div class="flex justify-between font-semibold text-slate-700 dark:text-slate-300 mb-1">
            <span>DTA Departure Window:</span>
            <span id="nmWindowLabel" class="text-blue-600 dark:text-blue-400 font-mono">6-Hour Compressed Surge</span>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button onclick="setNmWindow('6h')" id="btnNm6h" class="p-1.5 rounded-md text-xs font-semibold bg-blue-600 text-white">6-Hour Window (43 mph)</button>
            <button onclick="setNmWindow('12h')" id="btnNm12h" class="p-1.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">12-Hour Staged (56 mph)</button>
          </div>
        </div>

        <div class="space-y-1.5 pt-1 border-t border-slate-100 dark:border-slate-800">
          <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Fault Rupture Damage:</span>
          <label class="flex items-center gap-2 p-1.5 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 cursor-pointer">
            <input id="nmCairoSevered" type="checkbox" checked onchange="updateSimulationLayers()" class="rounded text-blue-600">
            <span class="text-[11px] text-slate-700 dark:text-slate-300">Cairo Mississippi Bridge Severance</span>
          </label>
          <label class="flex items-center gap-2 p-1.5 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 cursor-pointer">
            <input id="nmMo34Staged" type="checkbox" checked onchange="updateSimulationLayers()" class="rounded text-blue-600">
            <span class="text-[11px] text-slate-700 dark:text-slate-300">MO-34 / US-60 Staged Merging Protocol</span>
          </label>
        </div>
      </div>
    `;
  }

  container.innerHTML = controlsHtml;
  if (window.lucide) lucide.createIcons();
}

/* State variables for scenarios */
let baltPeakState = "pm";
let stlWindowState = "6h";
let nmWindowState = "6h";

window.setBaltPeak = function(peak) {
  baltPeakState = peak;
  const pmBtn = document.getElementById("btnBaltPm");
  const amBtn = document.getElementById("btnBaltAm");
  if (pmBtn && amBtn) {
    if (peak === "pm") {
      pmBtn.className = "p-1.5 rounded-md text-xs font-semibold bg-blue-600 text-white";
      amBtn.className = "p-1.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300";
    } else {
      amBtn.className = "p-1.5 rounded-md text-xs font-semibold bg-blue-600 text-white";
      pmBtn.className = "p-1.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300";
    }
  }
  updateSimulationLayers();
};

window.setStlWindow = function(win) {
  stlWindowState = win;
  const btn6 = document.getElementById("btnStl6h");
  const btn12 = document.getElementById("btnStl12h");
  if (btn6 && btn12) {
    if (win === "6h") {
      btn6.className = "p-1.5 rounded-md text-xs font-semibold bg-blue-600 text-white";
      btn12.className = "p-1.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300";
    } else {
      btn12.className = "p-1.5 rounded-md text-xs font-semibold bg-blue-600 text-white";
      btn6.className = "p-1.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300";
    }
  }
  updateSimulationLayers();
};

window.setNmWindow = function(win) {
  nmWindowState = win;
  const btn6 = document.getElementById("btnNm6h");
  const btn12 = document.getElementById("btnNm12h");
  if (btn6 && btn12) {
    if (win === "6h") {
      btn6.className = "p-1.5 rounded-md text-xs font-semibold bg-blue-600 text-white";
      btn12.className = "p-1.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300";
    } else {
      btn12.className = "p-1.5 rounded-md text-xs font-semibold bg-blue-600 text-white";
      btn6.className = "p-1.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300";
    }
  }
  updateSimulationLayers();
};

/* =========================================================================
   Update Simulation Map Layers (Polylines & Markers)
   ========================================================================= */
function updateSimulationLayers() {
  if (!corridorLayerGroup || !markerLayerGroup) return;

  corridorLayerGroup.clearLayers();
  markerLayerGroup.clearLayers();

  const region = PORTFOLIO_DATA.studyRegions[activeRegionId];
  if (!region) return;

  // 1. Render Corridors
  region.corridors.forEach(corridor => {
    let color = "#10b981"; // LOS A/B Green
    let weight = 5;
    let dashArray = null;
    let opacity = 0.85;

    if (activeRegionId === "baltimore") {
      if (corridor.type === "bridge_severed") {
        color = "#0f172a";
        dashArray = "6, 6";
        weight = 4;
        opacity = 0.9;
      } else if (corridor.id === "balt-i895") {
        color = baltPeakState === "pm" ? "#dc2626" : "#f59e0b"; // Red vs Amber
        weight = 6;
      } else if (corridor.id === "balt-i95") {
        color = baltPeakState === "pm" ? "#ef4444" : "#10b981";
        weight = 6;
      } else if (corridor.id === "balt-md295") {
        const hasMetering = document.getElementById("baltRampMetering")?.checked;
        color = hasMetering ? "#f59e0b" : "#dc2626";
      } else {
        color = "#2563eb";
      }
    } else if (activeRegionId === "st_louis") {
      const eqLevel = parseInt(document.getElementById("stlEqSlider")?.value || "2");
      const hasContraflow = document.getElementById("stlContraflow")?.checked;

      if (eqLevel === 0) {
        color = "#10b981"; // Normal
      } else if (eqLevel === 1) {
        color = corridor.id === "stl-i64" ? "#f59e0b" : "#10b981";
      } else { // M6.7 Severe
        if (corridor.id === "stl-i64") {
          color = hasContraflow ? "#2563eb" : "#dc2626";
        } else if (corridor.id === "stl-i270" || corridor.id === "stl-i70") {
          color = "#dc2626";
        } else {
          color = "#f59e0b";
        }
      }
    } else if (activeRegionId === "hampton_roads") {
      const travelTime = parseFloat(document.getElementById("hrTravelTime")?.value || "4.5");
      if (corridor.id === "hr-i64") {
        color = travelTime > 6.0 ? "#dc2626" : "#2563eb";
        weight = 6;
      } else {
        color = "#10b981";
      }
    } else if (activeRegionId === "new_madrid") {
      const is6h = nmWindowState === "6h";
      const isSevered = document.getElementById("nmCairoSevered")?.checked;

      if (corridor.id === "nm-us60") {
        color = is6h ? "#dc2626" : "#f59e0b";
      } else if (corridor.id === "nm-mo34") {
        color = isSevered ? "#ef4444" : "#10b981";
      } else {
        color = "#2563eb";
      }
    }

    const polyline = L.polyline(corridor.coords, {
      color: color,
      weight: weight,
      opacity: opacity,
      dashArray: dashArray,
      lineCap: "round"
    }).addTo(corridorLayerGroup);

    polyline.bindPopup(`
      <div class="p-2 space-y-1 text-xs">
        <strong class="text-slate-900 block font-bold">${corridor.name}</strong>
        <div class="text-[11px] text-slate-600">Base Speed: <strong>${corridor.baseSpeed} mph</strong></div>
        <div class="text-[11px] text-slate-600">Disruption Speed: <strong>${corridor.shockSpeed} mph</strong></div>
        <div class="text-[10px] font-mono text-blue-600 font-semibold mt-1">Normal TTI: ${corridor.ttiNormal} &rarr; Shock: ${corridor.ttiShock}</div>
      </div>
    `);
  });

  // 2. Render Choke Points / Bridges
  region.chokePoints.forEach(pt => {
    const isDark = document.documentElement.classList.contains("dark");
    const markerBg = pt.status === "collapsed" || pt.status === "severed" ? "#0f172a" : (pt.status === "fragility_high" || pt.status === "bottleneck" ? "#dc2626" : "#2563eb");

    const customIcon = L.divIcon({
      className: "custom-gis-marker",
      html: `
        <div style="background-color: ${markerBg}; width: 22px; height: 22px; border-radius: 50%; border: 2.5px solid #ffffff; box-shadow: 0 2px 8px rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; color: white; font-size: 10px; font-weight: bold;">
          ${pt.status === "collapsed" || pt.status === "severed" ? '✕' : '!'}
        </div>
      `,
      iconSize: [22, 22],
      iconAnchor: [11, 11]
    });

    const marker = L.marker([pt.lat, pt.lng], { icon: customIcon }).addTo(markerLayerGroup);
    marker.bindPopup(`
      <div class="p-2 space-y-1 text-xs">
        <span class="text-[10px] uppercase tracking-wider font-bold text-blue-600 block">${pt.status.replace("_", " ")}</span>
        <strong class="text-slate-900 block text-[13px] font-bold">${pt.name}</strong>
        <p class="text-[11px] text-slate-600 leading-relaxed">${pt.desc}</p>
      </div>
    `);
  });

  updateLabTelemetry();
  renderLabChart();
}

/* =========================================================================
   Update Telemetry KPI Dashboard
   ========================================================================= */
function updateLabTelemetry() {
  const kpi1 = document.getElementById("labKpi1");
  const kpi2 = document.getElementById("labKpi2");
  const kpi3 = document.getElementById("labKpi3");
  const kpi4 = document.getElementById("labKpi4");
  const policyEl = document.getElementById("labPolicyRecommendation");

  if (!kpi1 || !kpi2 || !kpi3 || !kpi4) return;

  if (activeRegionId === "baltimore") {
    const isPm = baltPeakState === "pm";
    const hasDetour = document.getElementById("baltFreightDetour")?.checked;
    const hasMetering = document.getElementById("baltRampMetering")?.checked;

    kpi1.innerHTML = `<span class="text-xs text-slate-400 block">Peak Corridor TTI</span><strong class="text-base text-slate-900 dark:text-slate-100 font-bold font-mono">${isPm ? '+126%' : '+34%'}</strong>`;
    kpi2.innerHTML = `<span class="text-xs text-slate-400 block">Harbor Tunnel Delay</span><strong class="text-base text-slate-900 dark:text-slate-100 font-bold font-mono">${isPm ? '+38 min' : '+12 min'}</strong>`;
    kpi3.innerHTML = `<span class="text-xs text-slate-400 block">Friday PM Spillback</span><strong class="text-base text-slate-900 dark:text-slate-100 font-bold font-mono">${isPm ? '8.4 miles' : '2.1 miles'}</strong>`;
    kpi4.innerHTML = `<span class="text-xs text-slate-400 block">Freight Reroute Ratio</span><strong class="text-base text-slate-900 dark:text-slate-100 font-bold font-mono">${hasDetour ? '92% via I-695' : '64% Mixed'}</strong>`;

    if (policyEl) {
      policyEl.innerHTML = `
        <div class="flex items-start gap-2 text-xs">
          <i data-lucide="shield-alert" class="w-4 h-4 text-blue-600 mt-0.5"></i>
          <div>
            <strong class="text-slate-900 dark:text-slate-100 font-bold">Empirical Policy Insight (Sustainability 2025):</strong>
            <p class="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
              Network averages mask acute corridor vulnerability where the top 20% of routes experienced a <strong>+3.81 TTI surge</strong>. Implementing heavy freight detour mandates onto the northern I-695 arc reduces tunnel queue spillback by <strong>34%</strong> during Friday peak windows.
            </p>
          </div>
        </div>
      `;
    }
  } else if (activeRegionId === "st_louis") {
    const eqLevel = parseInt(document.getElementById("stlEqSlider")?.value || "2");
    const is6h = stlWindowState === "6h";
    const hasContraflow = document.getElementById("stlContraflow")?.checked;

    kpi1.innerHTML = `<span class="text-xs text-slate-400 block">Network Delay Surge</span><strong class="text-base text-slate-900 dark:text-slate-100 font-bold font-mono">${eqLevel === 2 ? (is6h ? '+214%' : '+140%') : '+45%'}</strong>`;
    kpi2.innerHTML = `<span class="text-xs text-slate-400 block">Failed River Crossings</span><strong class="text-base text-slate-900 dark:text-slate-100 font-bold font-mono">${eqLevel === 2 ? '3 of 5 Bridges' : '1 Bridge'}</strong>`;
    kpi3.innerHTML = `<span class="text-xs text-slate-400 block">Clearance Time</span><strong class="text-base text-slate-900 dark:text-slate-100 font-bold font-mono">${is6h ? '9.8 hrs' : '6.4 hrs'}</strong>`;
    kpi4.innerHTML = `<span class="text-xs text-slate-400 block">Contraflow Benefit</span><strong class="text-base text-slate-900 dark:text-slate-100 font-bold font-mono">${hasContraflow ? '-28% Bottleneck' : 'Inactive'}</strong>`;

    if (policyEl) {
      policyEl.innerHTML = `
        <div class="flex items-start gap-2 text-xs">
          <i data-lucide="shield-alert" class="w-4 h-4 text-blue-600 mt-0.5"></i>
          <div>
            <strong class="text-slate-900 dark:text-slate-100 font-bold">Operational Guidance (ICE Municipal Engineer 2026):</strong>
            <p class="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
              Coupling USGS ShakeCast bridge fragility screening with regional CUBE demand assignment demonstrates that Poplar Street Bridge failure shifts 68,000 vehicles to northern crossings. Designated I-64 westbound contraflow preserves critical emergency responder ingress.
            </p>
          </div>
        </div>
      `;
    }
  } else if (activeRegionId === "hampton_roads") {
    const travelTime = parseFloat(document.getElementById("hrTravelTime")?.value || "4.5");
    const recRoute = document.getElementById("hrRecRoute")?.checked ? 1 : 0;
    const dwelling = document.getElementById("hrDwelling")?.checked ? 1 : 0;
    const exp = document.getElementById("hrExperience")?.checked ? 1 : 0;
    const early = document.getElementById("hrEarlyDep")?.checked ? 1 : 0;

    const utility = 3.096 + (0.167 * travelTime) + (1.360 * recRoute) + (1.078 * dwelling) + (0.858 * exp) - (0.648 * early);
    const probFreeway = (1 / (1 + Math.exp(-utility))) * 100;
    const probArterial = 100 - probFreeway;

    const probFwEl = document.getElementById("hrProbFreeway");
    const probArtEl = document.getElementById("hrProbArterial");
    const barFw = document.getElementById("hrProbBarFreeway");
    const barArt = document.getElementById("hrProbBarArterial");

    if (probFwEl) probFwEl.innerText = `${probFreeway.toFixed(1)}%`;
    if (probArtEl) probArtEl.innerText = `${probArterial.toFixed(1)}%`;
    if (barFw) barFw.style.width = `${probFreeway.toFixed(1)}%`;
    if (barArt) barArt.style.width = `${probArterial.toFixed(1)}%`;

    kpi1.innerHTML = `<span class="text-xs text-slate-400 block">Freeway Choice Prob</span><strong class="text-base text-slate-900 dark:text-slate-100 font-bold font-mono">${probFreeway.toFixed(1)}%</strong>`;
    kpi2.innerHTML = `<span class="text-xs text-slate-400 block">I-64 HRBT Queue</span><strong class="text-base text-slate-900 dark:text-slate-100 font-bold font-mono">${probFreeway > 90 ? '14.2 miles' : '6.8 miles'}</strong>`;
    kpi3.innerHTML = `<span class="text-xs text-slate-400 block">Arterial Utilization</span><strong class="text-base text-slate-900 dark:text-slate-100 font-bold font-mono">${probArterial.toFixed(1)}% (US-58)</strong>`;
    kpi4.innerHTML = `<span class="text-xs text-slate-400 block">Model Convergence</span><strong class="text-base text-slate-900 dark:text-slate-100 font-bold font-mono">200 Halton Draws</strong>`;

    if (policyEl) {
      policyEl.innerHTML = `
        <div class="flex items-start gap-2 text-xs">
          <i data-lucide="shield-alert" class="w-4 h-4 text-blue-600 mt-0.5"></i>
          <div>
            <strong class="text-slate-900 dark:text-slate-100 font-bold">Discrete Choice Findings (TRIP 2021):</strong>
            <p class="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
              Official evacuation route messaging (+1.360 utility) and past storm experience (+0.858 utility) overwhelmingly bias evacuees toward freeways. Targeted public information campaigns are necessary to encourage utilization of underloaded arterial corridors like US-58 and US-460.
            </p>
          </div>
        </div>
      `;
    }
  } else if (activeRegionId === "new_madrid") {
    const is6h = nmWindowState === "6h";
    const isSevered = document.getElementById("nmCairoSevered")?.checked;
    const isStaged = document.getElementById("nmMo34Staged")?.checked;

    kpi1.innerHTML = `<span class="text-xs text-slate-400 block">Average Speed (DTA)</span><strong class="text-base text-slate-900 dark:text-slate-100 font-bold font-mono">${is6h ? '43 mph' : '56 mph'}</strong>`;
    kpi2.innerHTML = `<span class="text-xs text-slate-400 block">Mississippi River Gridlock</span><strong class="text-base text-slate-900 dark:text-slate-100 font-bold font-mono">${isSevered ? 'Severe Overload' : 'Moderate'}</strong>`;
    kpi3.innerHTML = `<span class="text-xs text-slate-400 block">Survey Household Reach</span><strong class="text-base text-slate-900 dark:text-slate-100 font-bold font-mono">891 Sampled</strong>`;
    kpi4.innerHTML = `<span class="text-xs text-slate-400 block">Staged Departure Relief</span><strong class="text-base text-slate-900 dark:text-slate-100 font-bold font-mono">${isStaged ? '+30% Flow Rate' : 'None'}</strong>`;

    if (policyEl) {
      policyEl.innerHTML = `
        <div class="flex items-start gap-2 text-xs">
          <i data-lucide="shield-alert" class="w-4 h-4 text-blue-600 mt-0.5"></i>
          <div>
            <strong class="text-slate-900 dark:text-slate-100 font-bold">Multi-County DTA Conclusion (MoDOT):</strong>
            <p class="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
              Uncoordinated simultaneous departures across the 8 southeastern counties drop rural interstate speeds to 43 mph. Enforcing a staged county-by-county release schedule alleviates MO-34 bottlenecks and prevents total gridlock at Cape Girardeau crossings.
            </p>
          </div>
        </div>
      `;
    }
  }

  if (window.lucide) lucide.createIcons();
}

/* =========================================================================
   Render Synchronized Simulation Chart (Chart.js)
   ========================================================================= */
function renderLabChart() {
  const ctx = document.getElementById("labChart");
  if (!ctx) return;

  if (labChartInstance) {
    labChartInstance.destroy();
  }

  const isDark = document.documentElement.classList.contains("dark");
  const textColor = isDark ? "#94a3b8" : "#475569";
  const gridColor = isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.06)";

  let chartConfig = {};

  if (activeRegionId === "baltimore") {
    chartConfig = {
      type: "bar",
      data: {
        labels: ["I-895 Tunnel", "I-95 Tunnel", "MD-295", "I-695 West Arc", "US-40"],
        datasets: [
          {
            label: "Pre-Collapse Normal TTI",
            data: [1.20, 1.15, 1.25, 1.10, 1.18],
            backgroundColor: "#2563eb",
            borderRadius: 4
          },
          {
            label: baltPeakState === "pm" ? "Friday PM Peak TTI Shock" : "AM Peak TTI Shock",
            data: baltPeakState === "pm" ? [3.10, 2.65, 2.45, 1.85, 1.95] : [1.60, 1.45, 1.55, 1.30, 1.35],
            backgroundColor: "#dc2626",
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "top", labels: { color: textColor, font: { size: 10, weight: "600" } } }
        },
        scales: {
          x: { ticks: { color: textColor, font: { size: 10 } }, grid: { display: false } },
          y: { title: { display: true, text: "Travel Time Index (TTI)", color: textColor, font: { size: 10 } }, ticks: { color: textColor }, grid: { color: gridColor }, min: 1.0, max: 3.5 }
        }
      }
    };
  } else if (activeRegionId === "st_louis") {
    chartConfig = {
      type: "line",
      data: {
        labels: ["Hour 0", "Hour 2", "Hour 4", "Hour 6", "Hour 8", "Hour 10", "Hour 12"],
        datasets: [
          {
            label: "6-Hour Evacuation Window Delay",
            data: [0, 45, 120, 214, 160, 80, 20],
            borderColor: "#dc2626",
            backgroundColor: "rgba(220, 38, 38, 0.1)",
            fill: true,
            tension: 0.3
          },
          {
            label: "12-Hour Staged Departure Delay",
            data: [0, 25, 55, 90, 140, 110, 45],
            borderColor: "#2563eb",
            backgroundColor: "rgba(37, 99, 235, 0.1)",
            fill: true,
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "top", labels: { color: textColor, font: { size: 10, weight: "600" } } }
        },
        scales: {
          x: { ticks: { color: textColor, font: { size: 10 } }, grid: { display: false } },
          y: { title: { display: true, text: "% Network Delay Surge", color: textColor, font: { size: 10 } }, ticks: { color: textColor }, grid: { color: gridColor }, min: 0, max: 250 }
        }
      }
    };
  } else if (activeRegionId === "hampton_roads") {
    chartConfig = {
      type: "doughnut",
      data: {
        labels: ["Freeway (I-64 HRBT / I-664 MMBT)", "Arterial Routes (US-58 / US-460)"],
        datasets: [
          {
            data: [94.2, 5.8],
            backgroundColor: ["#2563eb", "#94a3b8"],
            borderWidth: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "bottom", labels: { color: textColor, font: { size: 10, weight: "600" } } }
        },
        cutout: "68%"
      }
    };
  } else if (activeRegionId === "new_madrid") {
    chartConfig = {
      type: "bar",
      data: {
        labels: ["I-55 Spine", "US-60 EB", "MO-34 WB", "US-61 Corridor"],
        datasets: [
          {
            label: "Free-Flow Speed (mph)",
            data: [70, 60, 55, 55],
            backgroundColor: "#2563eb",
            borderRadius: 4
          },
          {
            label: nmWindowState === "6h" ? "6-Hour Surge Speed (mph)" : "12-Hour Staged Speed (mph)",
            data: nmWindowState === "6h" ? [38, 25, 28, 30] : [58, 48, 45, 50],
            backgroundColor: "#dc2626",
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "top", labels: { color: textColor, font: { size: 10, weight: "600" } } }
        },
        scales: {
          x: { ticks: { color: textColor, font: { size: 10 } }, grid: { display: false } },
          y: { title: { display: true, text: "Operating Speed (mph)", color: textColor, font: { size: 10 } }, ticks: { color: textColor }, grid: { color: gridColor }, min: 0, max: 80 }
        }
      }
    };
  }

  labChartInstance = new Chart(ctx, chartConfig);
}

/* Fallback/Stand-alone Mini Calculator */
function initLogitMiniCalculator() {
  // Handled inside scenario controls
}

window.refreshChartsTheme = function() {
  updateMapTiles();
  renderLabChart();
};
