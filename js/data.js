/**
 * Portfolio Data: Daeyeol (Daniel) Chang, Ph.D.
 * Senior Transportation Planner & Modeler | Benesch
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Daeyeol (Daniel) Chang",
    title: "Senior Transportation Planner & Modeler",
    affiliation: "Benesch | Baltimore, MD",
    email: "chang.daeyeol@gmail.com",
    linkedin: "https://www.linkedin.com/in/chang-daeyeol/",
    scholar: "https://scholar.google.com/citations?user=8bu0_WoAAAAJ&hl=ko&oi=ao",
    github: "https://github.com/dy-chang",
    summary: "Senior transportation planner and quantitative modeler with 10+ years of experience across regional travel demand forecasting, dynamic traffic assignment (DTA), connected vehicle data analytics, and transportation network resilience. Ph.D. in Civil Engineering from the University of Missouri-Columbia, with extensive project leadership for state DOTs (MoDOT, MDOT), metropolitan planning organizations (MPOs), and research centers (Morgan State SMARTER Center, NSF).",
    researchInterests: [
      "Travel Demand Modeling (CUBE, PTV Visum, TransCAD)",
      "Dynamic Traffic Assignment & Simulation (PTV Vissim, DynusT)",
      "Connected Vehicle & GPS Probe Analytics (Iteris ClearGuide, INRIX)",
      "Disaster Evacuation & Network Resilience (Earthquake, Hurricane, Bridge Failure)",
      "Econometric Discrete Choice & Causal Modeling (Mixed Logit, DiD)"
    ]
  },

  capabilities: [
    {
      title: "Travel Demand Modeling",
      description: "Macro-level travel forecasting, highway network assignment, origin-destination matrix calibration, select-zone analysis, and scenario forecasting for regional long-range transportation plans.",
      tools: ["CUBE Voyager / Avenue", "PTV Visum", "TransCAD", "EMME/3", "Select-Zone Analysis", "Subarea Modeling"]
    },
    {
      title: "Traffic Simulation & DTA",
      description: "Microscopic and mesoscopic simulation modeling for freeway corridor management, work zone operations, interchange alternatives, and dynamic traffic assignment under network disruptions.",
      tools: ["PTV Vissim (DTA)", "DynusT", "DTALite", "UC-win/Road", "Level of Service (LOS)", "Trajectory Processing"]
    },
    {
      title: "Resilience & Evacuation Operations",
      description: "Quantitative disruption modeling, post-disaster network clearance estimation, and emergency route choice modeling combining survey data with structural damage forecasts (USGS ShakeCast).",
      tools: ["ClearGuide GPS Probes", "INRIX", "Travel Time Index (TTI)", "Mixed Logit Models", "Difference-in-Differences"]
    },
    {
      title: "Data Science, GIS & Model Automation",
      description: "Custom computational workflows in Python and R for automated O-D matrix processing, spatiotemporal bottleneck detection, highway crash risk modeling, and spatial network analysis.",
      tools: ["Python (GeoPandas, Statsmodels)", "R (mlogit, plm, lme4)", "QGIS & ArcGIS Pro", "SQL / PostgreSQL", "Git / GitHub"]
    }
  ],

  projects: [
    {
      id: "fsk-bridge",
      title: "Francis Scott Key Bridge Collapse Traffic System Shock & Resilience Analysis",
      client: "Morgan State University SMARTER Center / USDOT",
      period: "2024 – 2026",
      tags: ["ClearGuide Probe Data", "Difference-in-Differences", "Fixed/Mixed Effects", "QGIS", "MDPI Sustainability 2025"],
      overview: "Evaluated system-wide traffic disruptions and corridor recovery patterns across 30 major highway corridors in the Baltimore metropolitan area following the catastrophic collapse of the I-695 Francis Scott Key Bridge.",
      methodology: "Processed high-frequency GPS probe data from Iteris ClearGuide from September 2023 to February 2025. Applied a multi-pronged econometric framework—including Fixed Effects, Mixed Effects, Difference-in-Differences (DiD), and stratified regression models—to isolate causal congestion impacts across Immediate, Fall, and Winter post-collapse phases.",
      findings: [
        "Observed severe PM peak vulnerability: PM peak Travel Time Index (TTI) increased by 0.847 units immediately following the collapse—nearly 4x greater than the AM peak increase (0.223 units).",
        "Initial shock was most acute on Friday PM peaks (+77% TTI surge), transitioning over months to mid-week (Wednesday) recurring congestion as network equilibrium adapted.",
        "Identified persistent local hotspots on the Harbor Tunnel Thruway (NB) and MD-295 (NB) with TTI values exceeding 2.0, providing data-backed rationale for corridor-specific ramp metering and peak-hour commercial freight management."
      ],
      publication: "Published in MDPI Sustainability, Vol. 17(15), 6916 (2025)."
    },
    {
      id: "st-louis-eq",
      title: "St. Louis Regional Earthquake Emergency Response & Rescue Network",
      client: "Missouri Department of Transportation (MoDOT)",
      period: "2022 – 2024",
      tags: ["CUBE Voyager/Avenue", "USGS ShakeCast", "QGIS", "Tabletop Exercise", "TRB 2025"],
      overview: "Managed the regional travel demand modeling and disaster simulation to identify critical emergency response and rescue corridors in the St. Louis metropolitan area under a simulated M6.7 earthquake.",
      methodology: "Managed the 48,151-link, 3,003-zone regional CUBE model representing 7.9 million daily trips. Integrated structural damage predictions from USGS ShakeCast to model physical bridge failures and roadway closures across 12 distinct evacuation and emergency response scenarios.",
      findings: [
        "Mapped speed ratios, vehicle delays, and Level of Service (LOS E/F) bottlenecks across eastern Missouri highway networks in QGIS.",
        "Identified key lifeline corridors requiring seismic hardening and strategic contraflow deployment during multi-agency emergency operations.",
        "Facilitated multi-stakeholder tabletop exercises (TTX) connecting MoDOT, state emergency management (SEMA), and regional public safety agencies."
      ],
      publication: "Presented at TRB 104th Annual Meeting (2025) & MoDOT Research Report."
    },
    {
      id: "new-madrid-vissim",
      title: "New Madrid Multi-County Regional Evacuation DTA Simulation",
      client: "Missouri Department of Transportation (MoDOT)",
      period: "2021 – 2022",
      tags: ["PTV Vissim DTA", "Dynamic Traffic Assignment", "Household Survey", "GIS"],
      overview: "Constructed a regional highway simulation model across eight southeast Missouri counties to evaluate regional evacuation performance under severe seismic infrastructure damage.",
      methodology: "Built and validated an 8-county roadway network in PTV Vissim to perform Dynamic Traffic Assignment (DTA). Synthesized 891 household survey responses with US Census data to generate realistic background and evacuation O-D trip matrices across 6-hour and 12-hour departure windows.",
      findings: [
        "Demonstrated that compressed 6-hour evacuation windows dropped average network speeds to 43 mph and produced extreme bottlenecks on MO 34 WB, US 60 EB, and MO 25.",
        "Provided empirical guidelines for staged evacuation timing to avoid severe gridlock at critical river crossings and interchange bottlenecks."
      ],
      publication: "MoDOT Technical Project Report."
    },
    {
      id: "vr-workzone",
      title: "Immersive Virtual Reality Platform for Highway Work Zone Inspection Training",
      client: "Missouri Department of Transportation (MoDOT)",
      period: "2018 – 2021",
      tags: ["Unity 3D", "Oculus Rift", "Motion Capture", "MUTCD", "TRR 2020", "IEEE AIVR"],
      overview: "Developed a 3D Virtual Reality simulation platform to train state DOT inspection personnel on temporary traffic control, signage compliance, and human flagger safety protocols.",
      methodology: "Reconstructed 3D roadway geometrics in Unity and used motion-capture technology (Motive) to replicate real human flagger behavior on two-lane highway work zones based on the MUTCD and MoDOT Engineering Policy Guide (EPG).",
      findings: [
        "Tested with 34 MoDOT field personnel: Trainee deficiency identification scores increased from 44% (traditional slide quiz) to 79% in the immersive VR module.",
        "97% of participating DOT inspectors agreed that VR offered an effective, realistic, and risk-free platform for work zone compliance training."
      ],
      publication: "Published in Transportation Research Record (2020) & IEEE AIVR (2020)."
    }
  ],

  repositories: [
    {
      name: "urban-transport-intelligence",
      title: "Urban Transport Intelligence",
      description: "Python and GeoPandas framework for multimodal transit optimization, origin-destination matrix processing, and spatiotemporal mobility pattern extraction.",
      url: "https://github.com/dy-chang/urban-transport-intelligence",
      language: "Python",
      topics: ["Transportation Modeling", "GeoPandas", "Network Analytics"]
    },
    {
      name: "Traffic_Incident_Analysis",
      title: "Traffic Incident Analysis",
      description: "Statistical and spatiotemporal algorithms for detecting recurrent and non-recurrent congestion bottlenecks, estimating clearance durations, and tracking shockwave propagation.",
      url: "https://github.com/dy-chang/Traffic_Incident_Analysis",
      language: "R / Python",
      topics: ["Traffic Analytics", "Bottleneck Detection", "Probe Data"]
    },
    {
      name: "Crash_Data_Modeling",
      title: "Highway Crash Data Modeling",
      description: "Econometric count modeling scripts (Poisson, Negative Binomial, Random Parameters) for roadway safety evaluation, high-risk corridor identification, and Vision Zero analysis.",
      url: "https://github.com/dy-chang/Crash_Data_Modeling",
      language: "R / Python",
      topics: ["Safety Engineering", "Econometrics", "Risk Factors"]
    },
    {
      name: "Vulnerable-Road-User-Injury-Prediction",
      title: "VRU Injury Severity Prediction",
      description: "Machine learning and discrete choice framework for predicting pedestrian and cyclist injury severity in roadway collisions using police crash records.",
      url: "https://github.com/dy-chang/Vulnerable-Road-User-Injury-Prediction",
      language: "Python",
      topics: ["Machine Learning", "Pedestrian Safety", "XGBoost"]
    }
  ],

  experience: [
    {
      role: "Senior Transportation Planner",
      organization: "Benesch",
      location: "Baltimore, MD",
      period: "June 2026 – Present",
      type: "Industry",
      details: [
        "Lead regional travel demand modeling, select-zone analysis, and highway network scenario forecasting using PTV Visum, CUBE, and TransCAD.",
        "Develop automated Python/R workflows for O-D matrix balancing, corridor volume post-processing, and project-specific travel pattern assessments.",
        "Deliver data-driven transportation planning studies, corridor operations evaluations, and resilience strategies for municipal and state clients."
      ]
    },
    {
      role: "Postdoctoral Research Associate",
      organization: "Morgan State University (SMARTER Center)",
      location: "Baltimore, MD",
      period: "Oct 2024 – 2026",
      type: "Research",
      details: [
        "Led regional traffic performance evaluation and econometric modeling of the Francis Scott Key Bridge collapse using high-resolution ClearGuide GPS probe data.",
        "Applied panel econometric models (Fixed Effects, Mixed Effects, DiD) to isolate causal traffic shocks and assess corridor accessibility degradation."
      ]
    },
    {
      role: "Postdoctoral Fellow",
      organization: "University of Missouri-Columbia",
      location: "Columbia, MO",
      period: "Jul 2021 – Sep 2024",
      type: "Research",
      details: [
        "Investigated nationwide DOT operational traffic simulation practices across macro, meso, and microscopic tools for the TRB Research Council.",
        "Directed the 48k-link St. Louis regional CUBE evacuation model and New Madrid PTV Vissim DTA simulation projects for MoDOT."
      ]
    },
    {
      role: "Graduate Research Assistant / Ph.D. Candidate",
      organization: "University of Missouri-Columbia",
      location: "Columbia, MO",
      period: "Aug 2016 – May 2021",
      type: "Research",
      details: [
        "Completed Ph.D. dissertation: 'Modeling Transportation Impacts of Natural Disasters'.",
        "Conducted NSF-funded hurricane evacuation route choice modeling and built MoDOT VR work zone inspection platforms."
      ]
    },
    {
      role: "Researcher",
      organization: "The Korea Transport Institute (KOTI)",
      location: "Sejong, South Korea",
      period: "Apr 2015 – Jul 2016",
      type: "Research",
      details: [
        "Vision Zero Traffic Safety Project: Analyzed national crash databases to identify risk factors and support safety legislation.",
        "Village Zone Project: Analyzed crash hotspots in pilot cities and evaluated speed management countermeasure effectiveness."
      ]
    },
    {
      role: "Graduate Research Assistant",
      organization: "Chung-Ang University",
      location: "Seoul, South Korea",
      period: "Mar 2012 – Feb 2015",
      type: "Research",
      details: [
        "Analyzed Smart Card ridership and Korea Transport Database (KTDB) for Seoul Metropolitan Council bus route reorganization.",
        "Conducted travel demand forecasting for the Jangsu-Gyeyang Expressway feasibility study using TransCAD and EMME/3."
      ]
    }
  ],

  education: [
    {
      degree: "Ph.D. in Civil and Environmental Engineering",
      institution: "University of Missouri-Columbia",
      year: "2021",
      detail: "Dissertation: Modeling Transportation Impacts of Natural Disasters (Advisor: Praveen Edara)"
    },
    {
      degree: "M.S. in Urban Engineering (Transportation Focus)",
      institution: "Chung-Ang University",
      year: "2014",
      detail: "Thesis: A Study on Driving Commuters' Dependence on Expressways in Seoul Metropolitan Area"
    },
    {
      degree: "B.S. in Urban Engineering",
      institution: "Chung-Ang University",
      year: "2011",
      detail: "Urban & Transportation Planning Focus"
    }
  ],

  publications: [
    {
      id: "chang2025beyond",
      title: "Beyond the Detour: Modeling Traffic System Shocks After the Francis Scott Key Bridge Failure",
      authors: "D. Chang, N. Meimandi Nejad, M. Jeihani, M. Swami",
      journal: "Sustainability",
      year: "2025",
      volume: "17(15), 6916",
      doi: "https://doi.org/10.3390/su17156916",
      category: "resilience",
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
  ]
};
