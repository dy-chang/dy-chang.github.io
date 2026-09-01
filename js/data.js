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
      year: "2021",
      detail: "Dissertation: Modeling Transportation Impacts of Natural Disasters (Advisor: Praveen Edara)"
    },
    {
      degree: "M.S. in Urban Engineering",
      institution: "Chung-Ang University",
      year: "2014",
      detail: "Thesis: Commuters' Dependence on Expressways in Seoul Metropolitan Area"
    },
    {
      degree: "B.S. in Urban Engineering",
      institution: "Chung-Ang University",
      year: "2011",
      detail: "Urban & Transportation Planning Focus"
    }
  ]
};
