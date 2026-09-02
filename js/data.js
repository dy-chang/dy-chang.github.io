/**
 * Portfolio Data: Daeyeol (Daniel) Chang, Ph.D.
 * Senior Transportation Planner & Modeler | Benesch
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Daeyeol (Daniel) Chang, Ph.D.",
    title: "Senior Transportation Planner & Modeler",
    company: "Benesch",
    location: "Baltimore, MD",
    email: "chang.daeyeol@gmail.com",
    linkedin: "https://www.linkedin.com/in/chang-daeyeol/",
    scholar: "https://scholar.google.com/citations?user=8bu0_WoAAAAJ&hl=ko&oi=ao",
    github: "https://github.com/dy-chang",
    summary: "Senior transportation planner and quantitative modeler with 10+ years of experience bridging **regional travel demand forecasting**, **machine learning & advanced econometrics**, **dynamic traffic assignment (DTA)**, and **connected vehicle GPS probe big data**.",
    pillars: [
      {
        id: "demand",
        title: "Travel Demand & Forecasting",
        badge: "Macro Systems",
        tools: "CUBE Voyager, PTV Visum, TransCAD, EMME/3",
        detail: "Regional 4-step models, select-zone extraction, subarea network development, and long-range scenario forecasting."
      },
      {
        id: "ml-stats",
        title: "Machine Learning & Advanced Statistics",
        badge: "Predictive & Causal",
        tools: "XGBoost, Random Forest, Mixed Logit, Panel DiD, Count Models",
        detail: "Discrete choice behavior modeling (200 Halton draws), causal disruption inference (DiD), crash risk modeling, and VRU injury severity prediction."
      },
      {
        id: "simulation",
        title: "Traffic Simulation & DTA",
        badge: "Meso / Micro",
        tools: "PTV Vissim (DTA), DynusT, DTALite, UC-win/Road",
        detail: "Dynamic traffic assignment, corridor bottleneck diagnostics, work zone staging, and network trajectory processing."
      },
      {
        id: "probe-data",
        title: "GPS Probe Big Data & Resilience",
        badge: "Real-Time Big Data",
        tools: "Iteris ClearGuide, INRIX Probes, GeoPandas, ShakeCast",
        detail: "High-frequency probe data aggregation, Travel Time Index (TTI) reliability, and earthquake/hurricane disaster evacuation."
      }
    ]
  },

  pipeline: [
    {
      step: "01",
      name: "Big Data Ingestion",
      category: "Multi-Source Feeds",
      icon: "database",
      inputs: ["Iteris ClearGuide GPS", "INRIX Probes", "Smart Card Transit", "USGS ShakeCast", "Census O-D"],
      outputs: "Cleaned Trajectories & O-D Matrices"
    },
    {
      step: "02",
      name: "ML & Econometric Engines",
      category: "Predictive & Causal",
      icon: "cpu",
      inputs: ["Mixed Logit (Halton Draws)", "Difference-in-Differences", "XGBoost / Random Forest", "Negative Binomial"],
      outputs: "Behavioral Utilities & Shock Multipliers"
    },
    {
      step: "03",
      name: "Multi-Resolution Simulation",
      category: "Dynamic Assignment",
      icon: "git-commit",
      inputs: ["CUBE Voyager (48k Links)", "PTV Vissim DTA", "DynusT", "Damaged Network Overlays"],
      outputs: "Corridor Speeds, Delays & Bottlenecks"
    },
    {
      step: "04",
      name: "Decision & Policy Insights",
      category: "Actionable Outputs",
      icon: "bar-chart-3",
      inputs: ["Corridor Heatmaps (QGIS)", "Dynamic Pricing Strategies", "Peak Freight Controls", "Emergency Routing Plans"],
      outputs: "Agency-Ready Decision Frameworks"
    }
  ],

  /* =========================================================================
     4 Real Project Study Areas with High-Precision Geographic Highway Alignments
     ========================================================================= */
  studyRegions: {
    baltimore: {
      id: "baltimore",
      name: "Baltimore Metro, MD",
      tagline: "Francis Scott Key Bridge Collapse & ClearGuide GPS Probe Analytics",
      client: "Morgan State SMARTER Center / USDOT",
      period: "2024 – 2026",
      center: [39.260, -76.590],
      zoom: 12,
      description: "Evaluating regional network shockwaves and corridor recovery across 30 Baltimore arterial/freeway corridors following the I-695 Key Bridge collapse using high-frequency Iteris ClearGuide GPS probes.",
      kpis: {
        metric1: { label: "Peak TTI Surge", value: "+126%" },
        metric2: { label: "Corridors Analyzed", value: "30 Routes" },
        metric3: { label: "Causal DiD Shock", value: "+0.847 TTI" },
        metric4: { label: "Friday Spillback", value: "+77%" }
      },
      chokePoints: [
        { name: "FSK Key Bridge (I-695 Outer Loop)", lat: 39.2185, lng: -76.5255, status: "collapsed", desc: "Main span severed March 26, 2024; 31,000 daily vehicles diverted to tunnels & beltway." },
        { name: "I-895 Baltimore Harbor Tunnel", lat: 39.2620, lng: -76.5820, status: "bottleneck", desc: "Severe bottle-necking; Hazardous cargo prohibited; peak delays exceeded +140%." },
        { name: "I-95 Fort McHenry Tunnel", lat: 39.2680, lng: -76.5800, status: "congested", desc: "Primary detour spine; 8 lanes handling diverted interstate freight and commuter traffic." },
        { name: "MD-295 Baltimore-Washington Pkwy", lat: 39.2740, lng: -76.6240, status: "arterial_spill", desc: "Arterial spillover route experiencing severe Friday afternoon queue propagation." }
      ],
      corridors: [
        {
          id: "balt-keybridge",
          name: "I-695 Key Bridge Segment",
          coords: [
            [39.2450, -76.5680], [39.2370, -76.5520], [39.2270, -76.5385],
            [39.2185, -76.5255], [39.2130, -76.5170], [39.2040, -76.5080],
            [39.1920, -76.5050], [39.1820, -76.5120]
          ],
          type: "bridge_severed",
          baseSpeed: 55,
          shockSpeed: 0,
          ttiNormal: 1.05,
          ttiShock: 9.99
        },
        {
          id: "balt-i895",
          name: "I-895 Harbor Tunnel Thruway",
          coords: [
            [39.2280, -76.6200], [39.2380, -76.6080], [39.2480, -76.5960],
            [39.2560, -76.5870], [39.2620, -76.5820], [39.2700, -76.5740],
            [39.2820, -76.5620], [39.2940, -76.5500], [39.3080, -76.5380]
          ],
          type: "tunnel_bottleneck",
          baseSpeed: 50,
          shockSpeed: 18,
          ttiNormal: 1.20,
          ttiShock: 3.10
        },
        {
          id: "balt-i95",
          name: "I-95 Fort McHenry Tunnel",
          coords: [
            [39.2420, -76.6320], [39.2520, -76.6180], [39.2600, -76.6040],
            [39.2650, -76.5920], [39.2680, -76.5800], [39.2740, -76.5640],
            [39.2840, -76.5480], [39.2980, -76.5320], [39.3120, -76.5200]
          ],
          type: "interstate_spine",
          baseSpeed: 55,
          shockSpeed: 24,
          ttiNormal: 1.15,
          ttiShock: 2.65
        },
        {
          id: "balt-md295",
          name: "MD-295 Baltimore-Washington Pkwy",
          coords: [
            [39.2200, -76.6480], [39.2350, -76.6400], [39.2500, -76.6340],
            [39.2620, -76.6300], [39.2740, -76.6240], [39.2820, -76.6200],
            [39.2870, -76.6190]
          ],
          type: "arterial",
          baseSpeed: 45,
          shockSpeed: 19,
          ttiNormal: 1.25,
          ttiShock: 2.45
        },
        {
          id: "balt-i695west",
          name: "I-695 West / North Beltway Arc",
          coords: [
            [39.2300, -76.6850], [39.2550, -76.7100], [39.2850, -76.7320],
            [39.3200, -76.7380], [39.3550, -76.7250], [39.3850, -76.6900],
            [39.4020, -76.6400], [39.3980, -76.5800], [39.3750, -76.5200],
            [39.3400, -76.4750], [39.3000, -76.4550]
          ],
          type: "beltway_bypass",
          baseSpeed: 60,
          shockSpeed: 38,
          ttiNormal: 1.10,
          ttiShock: 1.85
        },
        {
          id: "balt-us40",
          name: "US-40 Pulaski Highway",
          coords: [
            [39.2920, -76.6700], [39.2940, -76.6350], [39.2960, -76.6050],
            [39.3020, -76.5750], [39.3140, -76.5400], [39.3280, -76.5050],
            [39.3420, -76.4650]
          ],
          type: "arterial",
          baseSpeed: 40,
          shockSpeed: 22,
          ttiNormal: 1.18,
          ttiShock: 1.95
        }
      ]
    },

    st_louis: {
      id: "st_louis",
      name: "St. Louis Metro, MO",
      tagline: "Regional Earthquake M6.7 Evacuation & USGS ShakeCast Bridge Fragility",
      client: "Missouri DOT (MoDOT)",
      period: "2022 – 2024",
      center: [38.630, -90.250],
      zoom: 11,
      description: "Macro travel demand modeling (48,151 links / 3,003 zones in CUBE Voyager) for 7.9M trips under simulated M6.7 earthquake scenario. Linked with USGS ShakeCast bridge fragility to evaluate post-disaster route choices and contraflow.",
      kpis: {
        metric1: { label: "Model Scale", value: "48,151 Links" },
        metric2: { label: "Traffic Zones", value: "3,003 TAZs" },
        metric3: { label: "Simulated Trips", value: "7.9 Million" },
        metric4: { label: "Evacuation Scenarios", value: "12 Disaster Runs" }
      },
      chokePoints: [
        { name: "Poplar Street Bridge (I-64 / I-55)", lat: 38.6184, lng: -90.1840, status: "fragility_high", desc: "USGS ShakeCast Collapse Probability: 0.68; Primary Mississippi River crossing failure point." },
        { name: "Stan Musial Veterans Bridge (I-70)", lat: 38.6355, lng: -90.1750, status: "fragility_moderate", desc: "USGS ShakeCast Damage Probability: 0.32; Key reinforced lifeline corridor for northern rescue teams." },
        { name: "I-270 Chain of Rocks Bridge", lat: 38.7620, lng: -90.1700, status: "fragility_high", desc: "USGS ShakeCast Damage Probability: 0.81; Critical outer loop crossing severance." },
        { name: "I-64 / US-40 Daniel Boone Spine", lat: 38.6430, lng: -90.4600, status: "contraflow_active", desc: "Designated westbound primary evacuation spine under dynamic contraflow operation." }
      ],
      corridors: [
        {
          id: "stl-i64",
          name: "I-64 / US-40 Westbound Lifeline",
          coords: [
            [38.6720, -90.6100], [38.6580, -90.5400], [38.6430, -90.4600],
            [38.6340, -90.3800], [38.6300, -90.3100], [38.6320, -90.2500],
            [38.6280, -90.2100], [38.6220, -90.1900], [38.6184, -90.1840],
            [38.6160, -90.1700]
          ],
          type: "evac_spine",
          baseSpeed: 60,
          shockSpeed: 28,
          ttiNormal: 1.10,
          ttiShock: 2.70
        },
        {
          id: "stl-i70",
          name: "I-70 North Corridor (Stan Musial)",
          coords: [
            [38.7800, -90.5200], [38.7450, -90.4300], [38.7200, -90.3500],
            [38.6950, -90.2700], [38.6700, -90.2200], [38.6450, -90.1900],
            [38.6355, -90.1750], [38.6340, -90.1600]
          ],
          type: "freeway",
          baseSpeed: 65,
          shockSpeed: 22,
          ttiNormal: 1.08,
          ttiShock: 3.15
        },
        {
          id: "stl-i55",
          name: "I-55 Southbound Evacuation Route",
          coords: [
            [38.3800, -90.3850], [38.4500, -90.3450], [38.5200, -90.2850],
            [38.5750, -90.2450], [38.6050, -90.2050], [38.6184, -90.1840]
          ],
          type: "freeway",
          baseSpeed: 65,
          shockSpeed: 30,
          ttiNormal: 1.06,
          ttiShock: 2.40
        },
        {
          id: "stl-i44",
          name: "I-44 Southwest Corridor",
          coords: [
            [38.4800, -90.6000], [38.5300, -90.4800], [38.5700, -90.3800],
            [38.6000, -90.2900], [38.6200, -90.2300], [38.6220, -90.1900]
          ],
          type: "freeway",
          baseSpeed: 60,
          shockSpeed: 34,
          ttiNormal: 1.08,
          ttiShock: 2.10
        },
        {
          id: "stl-i270",
          name: "I-270 Outer Circumferential Loop",
          coords: [
            [38.5150, -90.3950], [38.5750, -90.4350], [38.6450, -90.4500],
            [38.7200, -90.4350], [38.7750, -90.3850], [38.7820, -90.3000],
            [38.7780, -90.2200], [38.7620, -90.1700], [38.7300, -90.1200]
          ],
          type: "beltway",
          baseSpeed: 60,
          shockSpeed: 20,
          ttiNormal: 1.15,
          ttiShock: 3.40
        }
      ]
    },

    hampton_roads: {
      id: "hampton_roads",
      name: "Hampton Roads / Virginia Beach, VA",
      tagline: "Coastal Hurricane Evacuation & Mixed Logit Route Choice",
      client: "USDOT / TRIP Journal Publication",
      period: "2019 – 2021",
      center: [36.880, -76.320],
      zoom: 10,
      description: "Discrete choice econometrics (Random Parameter Mixed Logit with 200 Halton draws) estimating coastal evacuee route choices (Freeway vs. Arterial) under storm lead times, housing types, and official route compliance.",
      kpis: {
        metric1: { label: "Freeway Probability", value: "94.2%" },
        metric2: { label: "Halton Draws", value: "200 Draws" },
        metric3: { label: "Primary Route", value: "I-64 HRBT" },
        metric4: { label: "Arterial Bypass", value: "US-58 / US-460" }
      },
      chokePoints: [
        { name: "Hampton Roads Bridge-Tunnel (HRBT I-64)", lat: 36.9700, lng: -76.3000, status: "congested", desc: "Primary coastal freeway bottleneck; high surge vulnerability and extreme evacuation queues." },
        { name: "Monitor-Merrimac Bridge-Tunnel (MMBT I-664)", lat: 36.9600, lng: -76.4300, status: "moderate", desc: "Secondary southern bay crossing for western Chesapeake/Suffolk evacuees." },
        { name: "US-58 Midtown & Downtown Bypass", lat: 36.7800, lng: -76.3000, status: "arterial", desc: "Major arterial evacuation corridor leading west toward Suffolk and Emporia." }
      ],
      corridors: [
        {
          id: "hr-i64",
          name: "I-64 (HRBT - Hampton Roads Bridge-Tunnel)",
          coords: [
            [36.8450, -75.9800], [36.8520, -76.0800], [36.8550, -76.1700],
            [36.8850, -76.2200], [36.9300, -76.2600], [36.9700, -76.3000],
            [36.9950, -76.3250], [37.0250, -76.3600], [37.0700, -76.4200],
            [37.1300, -76.5100], [37.2200, -76.6300]
          ],
          type: "freeway_spine",
          baseSpeed: 60,
          shockSpeed: 16,
          ttiNormal: 1.12,
          ttiShock: 4.10
        },
        {
          id: "hr-i664",
          name: "I-664 (MMBT - Monitor-Merrimac Tunnel)",
          coords: [
            [36.7800, -76.3500], [36.8300, -76.4000], [36.8900, -76.4300],
            [36.9600, -76.4300], [36.9950, -76.4150], [37.0200, -76.3900],
            [37.0250, -76.3600]
          ],
          type: "freeway",
          baseSpeed: 60,
          shockSpeed: 25,
          ttiNormal: 1.05,
          ttiShock: 2.80
        },
        {
          id: "hr-us58",
          name: "US-58 Westbound Arterial Corridor",
          coords: [
            [36.8450, -75.9800], [36.8100, -76.1500], [36.7800, -76.3000],
            [36.7450, -76.4500], [36.7350, -76.6000], [36.7200, -76.7500],
            [36.7050, -76.9000], [36.6850, -77.0500]
          ],
          type: "arterial",
          baseSpeed: 45,
          shockSpeed: 28,
          ttiNormal: 1.10,
          ttiShock: 1.95
        },
        {
          id: "hr-us460",
          name: "US-460 Northwest Evacuation Route",
          coords: [
            [36.7450, -76.6000], [36.8000, -76.7500], [36.8700, -76.9200],
            [36.9600, -77.1000], [37.0500, -77.2800], [37.1500, -77.4500]
          ],
          type: "arterial",
          baseSpeed: 50,
          shockSpeed: 35,
          ttiNormal: 1.08,
          ttiShock: 1.70
        }
      ]
    },

    new_madrid: {
      id: "new_madrid",
      name: "New Madrid Region, SE Missouri",
      tagline: "8-County Regional Evacuation Dynamic Traffic Assignment (DTA)",
      client: "Missouri DOT (MoDOT)",
      period: "2021 – 2022",
      center: [36.850, -89.750],
      zoom: 9,
      description: "Micro/Meso DTA simulation in PTV Vissim synthesizing 891 household survey responses across an 8-county Missouri network to model sequential departure staging under New Madrid Seismic Zone fault ruptures.",
      kpis: {
        metric1: { label: "Network Scope", value: "8 Counties" },
        metric2: { label: "Survey Sample", value: "891 Households" },
        metric3: { label: "DTA Platform", value: "PTV Vissim" },
        metric4: { label: "Bottleneck Speed", value: "43 mph" }
      },
      chokePoints: [
        { name: "Cairo Mississippi River Bridge (US-60 / US-62)", lat: 37.0000, lng: -89.1450, status: "severed", desc: "Eastern gateway bridge vulnerable to liquefaction; total severance in M7.8 scenario." },
        { name: "Cape Girardeau Mississippi Bridge", lat: 37.3100, lng: -89.5200, status: "congested", desc: "Northernmost regional lifeline bridge sustaining severe evacuation queue loads." },
        { name: "MO-34 / US-60 Westbound Junction", lat: 37.1200, lng: -90.4500, status: "bottleneck", desc: "Major rural merging bottleneck under compressed 6-hour evacuation windows." }
      ],
      corridors: [
        {
          id: "nm-i55",
          name: "I-55 North-South Regional Spine",
          coords: [
            [37.3500, -89.5500], [37.1500, -89.5800], [36.8800, -89.6000],
            [36.6000, -89.6800], [36.3500, -89.7800], [36.0500, -89.8800]
          ],
          type: "freeway",
          baseSpeed: 70,
          shockSpeed: 38,
          ttiNormal: 1.02,
          ttiShock: 2.20
        },
        {
          id: "nm-us60",
          name: "US-60 East-West Evacuation Corridor",
          coords: [
            [36.7600, -90.4000], [36.7900, -90.1500], [36.8200, -89.9000],
            [36.8800, -89.6000], [36.9300, -89.3500], [36.9800, -89.1800],
            [37.0000, -89.1450]
          ],
          type: "arterial",
          baseSpeed: 60,
          shockSpeed: 25,
          ttiNormal: 1.05,
          ttiShock: 2.85
        },
        {
          id: "nm-mo34",
          name: "MO-34 Westbound Escape Route",
          coords: [
            [37.3100, -89.5400], [37.2800, -89.7500], [37.2400, -90.0000],
            [37.1800, -90.2500], [37.1200, -90.4500]
          ],
          type: "arterial",
          baseSpeed: 55,
          shockSpeed: 28,
          ttiNormal: 1.04,
          ttiShock: 2.45
        },
        {
          id: "nm-us61",
          name: "US-61 / US-62 River Crossing Corridor",
          coords: [
            [36.5800, -89.5500], [36.7500, -89.4000], [36.9000, -89.2500],
            [37.0000, -89.1500], [37.1500, -89.3000], [37.3100, -89.5200]
          ],
          type: "arterial",
          baseSpeed: 55,
          shockSpeed: 30,
          ttiNormal: 1.03,
          ttiShock: 2.10
        }
      ]
    }
  },

  projects: [
    {
      id: "fsk-bridge",
      title: "Francis Scott Key Bridge Collapse: Traffic Shockwave & Resiliency",
      client: "Morgan State SMARTER Center / USDOT",
      period: "2024 – 2026",
      badge: "Sustainability 2025",
      metrics: [
        { label: "Corridors", value: "30 Major Arteries" },
        { label: "PM Peak Shock", value: "+126% TTI Surge" },
        { label: "Critical Bottlenecks", value: "Harbor Tunnel & MD-295" }
      ],
      summary: "Evaluated system-wide traffic disruptions and recovery patterns across 30 Baltimore corridors using Iteris ClearGuide GPS probe data. Applied Fixed Effects, Mixed Effects, Difference-in-Differences (DiD), and stratified econometrics.",
      takeaways: [
        "PM peak congestion increased by 0.847 TTI units (nearly 4x greater than AM peak of 0.223 units).",
        "Friday PM peaks surged +77% in TTI initially, transitioning to mid-week recurring congestion by winter.",
        "Demonstrated that network averages mask severe hotspots where top 20% corridors saw +3.81 TTI increases."
      ],
      publication: "MDPI Sustainability (2025)",
      doi: "https://doi.org/10.3390/su17156916"
    },
    {
      id: "st-louis-eq",
      title: "St. Louis Regional Earthquake Evacuation & Rescue Network",
      client: "Missouri DOT (MoDOT)",
      period: "2022 – 2024",
      badge: "ICE Municipal Engineer 2026 & TRB 2025",
      metrics: [
        { label: "Model Scale", value: "48,151 Links / 3,003 Zones" },
        { label: "Demand", value: "7.9 Million Trips" },
        { label: "Disaster Scenarios", value: "12 Evacuation Runs" }
      ],
      summary: "Managed the 48,151-link, 3,003-zone regional CUBE model representing 7.9M trips for a simulated M6.7 earthquake. Integrated USGS ShakeCast bridge fragility data to simulate post-disaster route choices.",
      takeaways: [
        "Mapped speed ratios and Level of Service (LOS E/F) bottlenecks across eastern Missouri in QGIS.",
        "Identified lifeline corridors requiring seismic retrofitting and contraflow management.",
        "Facilitated multi-agency Tabletop Exercises (TTX) connecting MoDOT, SEMA, and local emergency responders."
      ],
      publication: "ICE Municipal Engineer (2026) & TRB (2025)",
      doi: "https://doi.org/10.1680/jmuen.26.00021"
    },
    {
      id: "new-madrid-vissim",
      title: "New Madrid Multi-County Regional Evacuation DTA Simulation",
      client: "Missouri DOT (MoDOT)",
      period: "2021 – 2022",
      badge: "8-County Network DTA",
      metrics: [
        { label: "Study Area", value: "8 Missouri Counties" },
        { label: "Platform", value: "PTV Vissim DTA" },
        { label: "Survey Size", value: "891 Households" }
      ],
      summary: "Built and validated an 8-county roadway network in PTV Vissim to perform Dynamic Traffic Assignment (DTA). Synthesized 891 household survey responses with US Census data under M7.8 earthquake damage.",
      takeaways: [
        "Compressed 6-hour evacuation windows dropped average network speeds to 43 mph on MO 34 WB and US 60 EB.",
        "Delivered staged departure protocols to prevent gridlock at Mississippi River crossings."
      ],
      publication: "MoDOT Technical Project Report",
      doi: null
    },
    {
      id: "vr-workzone",
      title: "Immersive VR Digital Twin for Highway Work Zone Safety Training",
      client: "Missouri DOT (MoDOT)",
      period: "2018 – 2021",
      badge: "TRR 2020 & IEEE AIVR",
      metrics: [
        { label: "Accuracy Gain", value: "44% → 79% (+35%)" },
        { label: "DOT Endorsement", value: "97% Positive" },
        { label: "Technology", value: "Unity 3D + Motive Mocap" }
      ],
      summary: "Developed a 3D Virtual Reality simulation platform to train state DOT inspectors on temporary traffic control, signage compliance, and human flagger safety protocols based on the MUTCD.",
      takeaways: [
        "Significantly reduced field inspection training hazards and travel costs.",
        "Boosted inspector deficiency identification score from 44% (slide quiz) to 79% in VR."
      ],
      publication: "Transportation Research Record (2020) & IEEE AIVR (2020)",
      doi: "https://doi.org/10.1177/0361198120953146"
    }
  ],

  repositories: [
    {
      name: "urban-transport-intelligence",
      title: "Urban Transport Intelligence",
      description: "Python and GeoPandas framework for multimodal transit route optimization, origin-destination matrix processing, and spatiotemporal mobility intelligence.",
      url: "https://github.com/dy-chang/urban-transport-intelligence",
      language: "Python",
      topics: ["GeoPandas", "Network Analytics", "Transit Optimization"]
    },
    {
      name: "Traffic_Incident_Analysis",
      title: "Traffic Incident Analysis",
      description: "Statistical and spatiotemporal algorithms for detecting recurrent and non-recurrent congestion bottlenecks, estimating clearance durations, and tracking shockwave propagation.",
      url: "https://github.com/dy-chang/Traffic_Incident_Analysis",
      language: "R / Python",
      topics: ["Bottleneck Detection", "Probe Data", "Shockwave Analytics"]
    },
    {
      name: "Crash_Data_Modeling",
      title: "Highway Crash Data Modeling",
      description: "Econometric count modeling scripts (Poisson, Negative Binomial, Random Parameters) for roadway safety evaluation and Vision Zero high-risk hotspot identification.",
      url: "https://github.com/dy-chang/Crash_Data_Modeling",
      language: "R / Python",
      topics: ["Vision Zero", "Econometrics", "Safety Analysis"]
    },
    {
      name: "Vulnerable-Road-User-Injury-Prediction",
      title: "VRU Injury Severity Prediction",
      description: "Machine learning and discrete choice modeling framework for predicting pedestrian and cyclist injury severity in roadway collisions using police crash records.",
      url: "https://github.com/dy-chang/Vulnerable-Road-User-Injury-Prediction",
      language: "Python",
      topics: ["Pedestrian Safety", "Machine Learning", "XGBoost"]
    }
  ],

  publications: [
    {
      id: "chang2026jmuen",
      title: "Transportation simulation and stakeholder exercises for urban seismic resilience",
      authors: "D. Chang",
      journal: "Proceedings of the Institution of Civil Engineers - Municipal Engineer",
      year: "2026",
      volume: "In Press",
      doi: "https://doi.org/10.1680/jmuen.26.00021",
      category: "resilience",
      selected: true,
      bibtex: `@article{chang2026jmuen,
  title={Transportation simulation and stakeholder exercises for urban seismic resilience},
  author={Chang, Daeyeol},
  journal={Proceedings of the Institution of Civil Engineers - Municipal Engineer},
  year={2026},
  doi={10.1680/jmuen.26.00021}
}`
    },
    {
      id: "chang2025beyond",
      title: "Beyond the Detour: Modeling Traffic System Shocks After the Francis Scott Key Bridge Failure",
      authors: "D. Chang, N. Meimandi Nejad, M. Jeihani, M. Swami",
      journal: "Sustainability",
      year: "2025",
      volume: "17(15), 6916",
      doi: "https://doi.org/10.3390/su17156916",
      category: "resilience",
      selected: true,
      bibtex: `@article{chang2025beyond,
  title={Beyond the Detour: Modeling Traffic System Shocks After the Francis Scott Key Bridge Failure},
  author={Chang, Daeyeol and Nejad, Niyeyesh Meimandi and Jeihani, Mansoureh and Swami, Mansha},
  journal={Sustainability},
  volume={17},
  number={15},
  pages={6916},
  year={2025},
  doi={10.3390/su17156916}
}`
    },
    {
      id: "chang2025trb_seismic",
      title: "Resilience in Motion: Analyzing Evacuation Decisions During Seismic Emergencies",
      authors: "D. Chang",
      journal: "Transportation Research Board 104th Annual Meeting (TRB)",
      year: "2025",
      category: "evacuation",
      selected: true,
      bibtex: `@inproceedings{chang2025trb_seismic,
  title={Resilience in Motion: Analyzing Evacuation Decisions During Seismic Emergencies},
  author={Chang, Daeyeol},
  booktitle={Transportation Research Board 104th Annual Meeting},
  year={2025}
}`
    },
    {
      id: "chang2024trb_covid",
      title: "The Rise of Private Vehicles: Investigating Factors for Mode Shift after COVID-19",
      authors: "D. Chang",
      journal: "Transportation Research Board 103rd Annual Meeting (TRB)",
      year: "2024",
      category: "behavior",
      selected: false,
      bibtex: `@inproceedings{chang2024trb_covid,
  title={The Rise of Private Vehicles: Investigating Factors for Mode Shift after COVID-19},
  author={Chang, Daeyeol},
  booktitle={Transportation Research Board 103rd Annual Meeting},
  year={2024}
}`
    },
    {
      id: "chang2021taking",
      title: "Taking the freeway: Inferring evacuee route selection from survey data",
      authors: "D. Chang, P. Edara, P. Murray-Tuite, J. Trainor, K. Triantis",
      journal: "Transportation Research Interdisciplinary Perspectives",
      year: "2021",
      volume: "11, 100421",
      doi: "https://doi.org/10.1016/j.trip.2021.100421",
      category: "evacuation",
      selected: true,
      bibtex: `@article{chang2021taking,
  title={Taking the freeway: Inferring evacuee route selection from survey data},
  author={Chang, Daeyeol and Edara, Praveen and Murray-Tuite, Pamela and Trainor, Joseph and Triantis, Kostas},
  journal={Transportation Research Interdisciplinary Perspectives},
  volume={11},
  pages={100421},
  year={2021},
  doi={10.1016/j.trip.2021.100421}
}`
    },
    {
      id: "aati2020immersive",
      title: "Immersive Work Zone Inspection Training using Virtual Reality",
      authors: "K. Aati, D. Chang, P. Edara, C. Sun",
      journal: "Transportation Research Record (TRR)",
      year: "2020",
      volume: "2674(12), 224–232",
      doi: "https://doi.org/10.1177/0361198120953146",
      category: "safety",
      selected: true,
      bibtex: `@article{aati2020immersive,
  title={Immersive Work Zone Inspection Training using Virtual Reality},
  author={Aati, Khaled and Chang, Daeyeol and Edara, Praveen and Sun, Carlos},
  journal={Transportation Research Record},
  volume={2674},
  number={12},
  pages={224--232},
  year={2020},
  doi={10.1177/0361198120953146}
}`
    },
    {
      id: "chang2020vrflagger",
      title: "Immersive Virtual Reality Training for Inspecting Flagger Work zones",
      authors: "D. Chang, J. Hopfenblatt, P. Edara, B. Balakrishnan",
      journal: "IEEE International Conference on Artificial Intelligence and Virtual Reality (AIVR)",
      year: "2020",
      volume: "pp. 327–330",
      doi: "https://doi.org/10.1109/AIVR50618.2020.00066",
      category: "safety",
      selected: false,
      bibtex: `@inproceedings{chang2020vrflagger,
  title={Immersive Virtual Reality Training for Inspecting Flagger Work zones},
  author={Chang, Daeyeol and Hopfenblatt, James and Edara, Praveen and Balakrishnan, Bimal},
  booktitle={2020 IEEE International Conference on Artificial Intelligence and Virtual Reality (AIVR)},
  pages={327--330},
  year={2020},
  doi={10.1109/AIVR50618.2020.00066}
}`
    },
    {
      id: "chang2015commuter",
      title: "Commuter dependence on expressways when travelling to work",
      authors: "D. Chang, K. Sohn",
      journal: "Proceedings of the Institution of Civil Engineers - Transport",
      year: "2015",
      volume: "168(1), 23–33",
      doi: "https://doi.org/10.1680/tran.13.00008",
      category: "behavior",
      selected: true,
      bibtex: `@article{chang2015commuter,
  title={Commuter dependence on expressways when travelling to work},
  author={Chang, Daeyeol and Sohn, Keemin},
  journal={Proceedings of the Institution of Civil Engineers-Transport},
  volume={168},
  number={1},
  pages={23--33},
  year={2015},
  doi={10.1680/tran.13.00008}
}`
    }
  ],

  experience: [
    {
      role: "Senior Transportation Planner",
      organization: "Benesch",
      location: "Baltimore, MD",
      period: "2026 – Present",
      type: "Industry"
    },
    {
      role: "Postdoctoral Research Associate",
      organization: "Morgan State University (SMARTER Center)",
      location: "Baltimore, MD",
      period: "2024 – 2026",
      type: "Research"
    },
    {
      role: "Postdoctoral Fellow",
      organization: "University of Missouri-Columbia",
      location: "Columbia, MO",
      period: "2021 – 2024",
      type: "Research"
    },
    {
      role: "Graduate Research Assistant / Ph.D. Candidate",
      organization: "University of Missouri-Columbia",
      location: "Columbia, MO",
      period: "2016 – 2021",
      type: "Research"
    },
    {
      role: "Researcher",
      organization: "The Korea Transport Institute (KOTI)",
      location: "Sejong, South Korea",
      period: "2015 – 2016",
      type: "Research"
    },
    {
      role: "Graduate Research Assistant",
      organization: "Chung-Ang University",
      location: "Seoul, South Korea",
      period: "2012 – 2015",
      type: "Research"
    }
  ],

  education: [
    {
      degree: "Ph.D. in Civil Engineering",
      institution: "University of Missouri-Columbia",
      detail: "Dissertation: Modeling Transportation Impacts of Natural Disasters (Advisor: Praveen Edara)"
    },
    {
      degree: "M.S. in Urban Engineering",
      institution: "Chung-Ang University",
      detail: "Thesis: Commuters' Dependence on Expressways in Seoul Metropolitan Area"
    },
    {
      degree: "B.S. in Urban Engineering",
      institution: "Chung-Ang University",
      detail: "Urban & Transportation Planning Focus"
    }
  ]
};
