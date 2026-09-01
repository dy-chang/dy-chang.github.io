/**
 * Industry & Government-Focused Portfolio Data
 * Dr. Daeyeol (Daniel) Chang, Ph.D. (장대열)
 * Senior Transportation Planner & Modeler | Benesch
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Daeyeol (Daniel) Chang, Ph.D.",
    koreanName: "장대열",
    role: "Senior Transportation Planner & Quantitative Modeler",
    company: "Benesch",
    affiliation: "Baltimore, MD | Ex-Morgan State SMARTER Center | Ex-Mizzou",
    headline: "Transportation Modeling, Infrastructure Resilience & Big Data Analytics for Public Agencies & Industry",
    subheadline: "10+ Years Delivering Decision-Ready Travel Demand Models (CUBE, PTV Visum, TransCAD), Multi-Resolution DTA Traffic Simulations (PTV Vissim, DynusT), and Connected Vehicle Probe Analytics (ClearGuide, INRIX) for State DOTs, MPOs, and Municipalities.",
    email: "dchang@benesch.com",
    personalEmail: "chang.daeyeol@gmail.com",
    location: "Baltimore, Maryland, USA",
    bio: [
      "I am a **Senior Transportation Planner and Modeler** at **Benesch** specializing in delivering high-fidelity modeling, data analytics, and policy-driven solutions for **State DOTs, Metropolitan Planning Organizations (MPOs), and regional transit agencies**.",
      "With over a decade of technical leadership spanning Ph.D. and Postdoctoral appointments at **University of Missouri-Columbia** and **Morgan State University (SMARTER Center)**, I translate petabyte-scale mobility data (Iteris ClearGuide, INRIX GPS probes, Smart Card transit, Census) into actionable infrastructure resilience, bottleneck mitigation, and disaster evacuation strategies.",
      "My work directly supports public decision-makers through advanced econometrics, dynamic traffic assignment (DTA), and automated GIS workflows—proven on critical projects like the **Francis Scott Key Bridge Collapse Traffic Impact Study**, the **St. Louis 48k-link M6.7 Earthquake Evacuation Model (MoDOT)**, and **MoDOT VR Work Zone Safety Training Platforms**."
    ],
    stats: [
      { label: "Industry & R&D Experience", value: "10+ Yrs", icon: "briefcase" },
      { label: "Regional Models & Networks", value: "50k+ Links", icon: "git-merge" },
      { label: "Agency & NSF Projects", value: "USDOT / MoDOT", icon: "shield-check" },
      { label: "Citations & Research Impact", value: "250+ Cites", icon: "award" }
    ],
    socials: {
      linkedin: "https://www.linkedin.com/in/chang-daeyeol/",
      scholar: "https://scholar.google.com/citations?user=8bu0_WoAAAAJ&hl=ko&oi=ao",
      github: "https://github.com/dy-chang",
      email: "mailto:dchang@benesch.com"
    }
  },

  // Industry & Agency Focused Capabilities
  capabilities: [
    {
      title: "Travel Demand Modeling & Forecasting",
      icon: "git-merge",
      desc: "Developing regional travel forecasting models, zone systems, O-D matrices, and scenario-based network alternatives for MPO/DOT long-range planning.",
      tools: ["CUBE Voyager / Avenue", "PTV Visum", "TransCAD", "EMME/3", "Select-Zone Analysis", "Subarea Extraction", "O-D Matrix Calibration"]
    },
    {
      title: "Traffic Simulation & DTA Operations",
      icon: "sliders",
      desc: "Microscopic and mesoscopic Dynamic Traffic Assignment (DTA) to evaluate freeway corridors, arterial signal coordination, and interchange alternatives.",
      tools: ["PTV Vissim (DTA)", "DynusT", "DTALite", "UC-win/Road", "Level of Service (LOS)", "Bottleneck Diagnostics", "Trajectory Analysis"]
    },
    {
      title: "Disruption, Resilience & Evacuation Planning",
      icon: "shield-alert",
      desc: "Quantitative risk assessment and emergency traffic management for major bridge closures, hurricanes, and seismic events with USGS ShakeCast integration.",
      tools: ["Iteris ClearGuide", "INRIX Probes", "Travel Time Index (TTI)", "Difference-in-Differences (DiD)", "Mixed Logit", "Evacuation Clearance Time"]
    },
    {
      title: "Big Data, GIS & Policy Automation",
      icon: "terminal",
      desc: "High-performance Python/R pipelines, spatial analysis, automated corridor dashboards, and machine learning models for safety and transit optimization.",
      tools: ["Python (GeoPandas, Statsmodels)", "R (mlogit, plm, lme4)", "QGIS & ArcGIS Pro", "SQL / PostGIS", "Interactive Web Dashboards", "Vision Zero Analytics"]
    }
  ],

  // Major Projects with Visual Highlights & Policy Impacts
  projects: [
    {
      id: "proj-fsk",
      title: "Francis Scott Key Bridge Collapse: Regional Traffic Shockwave & Resiliency Analysis",
      client: "Morgan State University SMARTER Center / USDOT / MDOT",
      period: "2024 – 2026",
      category: "Resilience & Operations",
      badge: "Featured Study • MDPI Sustainability 2025",
      badgeColor: "rose",
      metrics: [
        { label: "Corridors Analyzed", value: "30 Major Arteries" },
        { label: "PM Peak Shock", value: "+126% TTI Surge" },
        { label: "Critical Bottlenecks", value: "Harbor Tunnel & MD-295" }
      ],
      description: "Conducted high-frequency GPS probe data analytics (Iteris ClearGuide) across 30 corridors in the Baltimore metropolitan area following the catastrophic collapse of the I-695 Key Bridge. Applied Fixed Effects, Mixed Effects, Difference-in-Differences (DiD), and stratified econometrics to isolate causal impacts across Immediate, Fall, and Winter periods.",
      policyTakeaways: [
        "Identified asymmetric vulnerability: PM peak congestion was up to 4x worse than AM peaks (+0.847 TTI vs +0.223 TTI).",
        "Formulated actionable agency recommendations: Peak-hour freight routing restrictions, dynamic corridor pricing, and adaptive ramp metering on I-95 & I-895.",
        "Demonstrated that network averages mask acute localized bottlenecks where top 20% corridors experienced +3.81 TTI surge."
      ],
      tools: ["Iteris ClearGuide", "INRIX Probe Data", "Difference-in-Differences", "Panel Fixed/Mixed Effects", "QGIS", "Python/R"]
    },
    {
      id: "proj-stlouis",
      title: "St. Louis Regional Earthquake Emergency Response & Rescue Network",
      client: "Missouri Department of Transportation (MoDOT)",
      period: "2022 – 2024",
      category: "Emergency Planning & Simulation",
      badge: "MoDOT Statewide Project • TRB 2025",
      badgeColor: "blue",
      metrics: [
        { label: "Network Scope", value: "48,151 Links / 3,003 Zones" },
        { label: "Trip Demand", value: "7.9 Million Trips" },
        { label: "Disaster Scenarios", value: "12 Evacuation Sets" }
      ],
      description: "Directly managed the regional CUBE Voyager/Avenue travel demand model and 7.9M trip matrices for a simulated M6.7 earthquake in the New Madrid Seismic Zone. Integrated USGS ShakeCast bridge vulnerability data to identify structural failures and simulate post-disaster route choices.",
      policyTakeaways: [
        "Identified critical emergency lifeline corridors across eastern Missouri requiring seismic hardening.",
        "Mapped speed ratios and Level of Service (LOS E/F) bottlenecks across 12 disaster scenarios in QGIS.",
        "Facilitated multi-agency Tabletop Exercises (TTX) connecting MoDOT, SEMA, and local emergency responders."
      ],
      tools: ["CUBE Voyager / Avenue", "QGIS", "USGS ShakeCast", "Household Survey Analysis", "Tabletop Exercise (TTX)"]
    },
    {
      id: "proj-newmadrid",
      title: "New Madrid Multi-County Regional Evacuation DTA Simulation",
      client: "Missouri Department of Transportation (MoDOT)",
      period: "2021 – 2022",
      category: "DTA & Simulation",
      badge: "8-County Network Simulation",
      badgeColor: "amber",
      metrics: [
        { label: "Study Area", value: "8 Missouri Counties" },
        { label: "Simulation Platform", value: "PTV Vissim DTA" },
        { label: "Survey Sample", value: "891 Households" },
      ],
      description: "Constructed and validated an 8-county regional highway simulation model using PTV Vissim Dynamic Traffic Assignment (DTA). Scaled household survey data with US Census to generate realistic background and evacuation demand under M7.8 earthquake damage scenarios.",
      policyTakeaways: [
        "Uncovered acute bottlenecks on MO 34 WB, US 60 EB, and MO 25 during compressed 6-hour vs 12-hour evacuation departure windows.",
        "Delivered data-driven evacuation routing and staged departure strategies to prevent severe gridlock at Mississippi River crossings."
      ],
      tools: ["PTV Vissim DTA", "GIS Mapping", "Python", "MATLAB", "Origin-Destination Matrix Estimation"]
    },
    {
      id: "proj-vr-safety",
      title: "Immersive VR Digital Twin Platform for Highway Work Zone Inspection Training",
      client: "Missouri DOT (MoDOT) & TRB",
      period: "2018 – 2021",
      category: "Safety & Emerging Tech",
      badge: "Award-Winning • TRR 2020 & IEEE AIVR",
      badgeColor: "emerald",
      metrics: [
        { label: "Inspection Accuracy", value: "44% → 79% (+35%)" },
        { label: "Agency Endorsement", value: "97% Positive" },
        { label: "Technology Stack", value: "Unity 3D + Motion Capture" }
      ],
      description: "Pioneered a 3D Virtual Reality training simulator replicating real-world highway construction and flagger operations using Unity 3D, Oculus Rift, and Motive motion capture. Directly addressed MUTCD and MoDOT Engineering Policy Guide (EPG) compliance.",
      policyTakeaways: [
        "Dramatically reduced agency training costs and field inspection hazards while boosting safety deficiency recognition from 44% to 79%.",
        "Adopted by MoDOT engineers with a 97% rating for realistic training utility and procedural compliance."
      ],
      tools: ["Unity 3D Engine", "C#", "Motive Motion Capture", "Oculus Rift", "MUTCD & MoDOT EPG Standards"]
    }
  ],

  // 4 Featured Open-Source Repositories
  featuredRepos: [
    {
      name: "urban-transport-intelligence",
      title: "Urban Transport Intelligence Platform",
      description: "End-to-end framework for smart mobility analytics, transit route optimization, and spatiotemporal traffic intelligence for municipal transportation departments.",
      url: "https://github.com/dy-chang/urban-transport-intelligence",
      tags: ["Python", "GeoPandas", "Network Analytics", "Mobility Intelligence", "GIS"],
      icon: "map-pin"
    },
    {
      name: "Traffic_Incident_Analysis",
      title: "Traffic Incident & Bottleneck Diagnostics",
      description: "Spatiotemporal algorithms for incident detection, clearance duration modeling, and network shockwave propagation tracking using connected probe data.",
      url: "https://github.com/dy-chang/Traffic_Incident_Analysis",
      tags: ["Traffic Analytics", "Bottleneck Detection", "Probe Data", "R / Python"],
      icon: "activity"
    },
    {
      name: "Crash_Data_Modeling",
      title: "Highway Safety & Crash Risk Modeling",
      description: "Econometric count data modeling (Negative Binomial, Poisson, Random Parameters) for identifying roadway safety hotspots and Vision Zero countermeasures.",
      url: "https://github.com/dy-chang/Crash_Data_Modeling",
      tags: ["Vision Zero", "Safety Engineering", "Econometrics", "Risk Factors"],
      icon: "alert-triangle"
    },
    {
      name: "Vulnerable-Road-User-Injury-Prediction",
      title: "VRU Injury Severity Prediction System",
      description: "Machine learning and discrete choice modeling suite to predict injury severity and crash outcomes for pedestrians, bicyclists, and micromobility users.",
      url: "https://github.com/dy-chang/Vulnerable-Road-User-Injury-Prediction",
      tags: ["Machine Learning", "Pedestrian Safety", "XGBoost", "Logit Modeling"],
      icon: "user-check"
    }
  ],

  // Career Timeline
  experience: [
    {
      role: "Senior Transportation Planner",
      organization: "Benesch",
      location: "Baltimore, MD, USA",
      period: "June 2026 – Present",
      type: "industry",
      highlights: [
        "Leading travel demand modeling, select-zone analysis, and network scenario evaluation using PTV Visum, CUBE, and TransCAD.",
        "Developing automated Python/R workflows for O-D matrix post-processing, corridor traffic balancing, and project-specific travel pattern assessments.",
        "Delivering quantitative transportation analytics, traffic operations evaluations, and resilience strategies for municipal and state clients."
      ]
    },
    {
      role: "Postdoctoral Research Associate",
      organization: "Morgan State University (SMARTER Center)",
      location: "Baltimore, MD, USA",
      period: "October 2024 – 2026",
      type: "academia",
      highlights: [
        "Spearheaded regional traffic performance evaluation and econometric modeling of the Francis Scott Key Bridge collapse using ClearGuide GPS probe data.",
        "Assessed transportation network resilience, corridor accessibility changes, and service degradation using QGIS and panel econometric models (DiD, FE, ME)."
      ]
    },
    {
      role: "Postdoctoral Fellow",
      organization: "University of Missouri-Columbia (Dept. of Civil & Env. Engineering)",
      location: "Columbia, MO, USA",
      period: "July 2021 – September 2024",
      type: "academia",
      highlights: [
        "Investigated nationwide DOT practices for operational traffic simulation models across macro, meso, and microscopic resolutions for the TRB Research Council.",
        "Led the MoDOT St. Louis 48,151-link CUBE evacuation model and New Madrid PTV Vissim DTA simulation projects."
      ]
    },
    {
      role: "Graduate Research Assistant / Ph.D. Candidate",
      organization: "University of Missouri-Columbia",
      location: "Columbia, MO, USA",
      period: "August 2016 – May 2021",
      type: "academia",
      highlights: [
        "Completed Ph.D. dissertation: 'Modeling Transportation Impacts of Natural Disasters'.",
        "Conducted NSF hurricane evacuation modeling and developed MoDOT VR work zone inspection platforms."
      ]
    },
    {
      role: "Researcher",
      organization: "The Korea Transport Institute (KOTI)",
      location: "Sejong, South Korea",
      period: "April 2015 – July 2016",
      type: "industry",
      highlights: [
        "Vision Zero Traffic Safety Project: Analyzed and predicted crash patterns from national databases to support safety legislation.",
        "Village Zone Project: Identified crash hotspots in targeted cities and evaluated safety intervention effectiveness."
      ]
    },
    {
      role: "Graduate Research Assistant",
      organization: "Chung-Ang University (Dept. of Urban Engineering)",
      location: "Seoul, South Korea",
      period: "March 2012 – February 2015",
      type: "academia",
      highlights: [
        "Public Transit Route Reorganization (Seoul Metro Council): Analyzed Smart Card and KTDB ridership data to optimize fleet allocation.",
        "Jangsu-Gyeyang Expressway Feasibility Study (KDI): Forecasted expressway travel demand using TransCAD and EMME/3."
      ]
    }
  ],

  education: [
    {
      degree: "Ph.D. in Civil and Environmental Engineering",
      institution: "University of Missouri-Columbia",
      location: "Columbia, MO, USA",
      focus: "Transportation Engineering (Dissertation: Modeling Transportation Impacts of Natural Disasters)",
      year: "2021"
    },
    {
      degree: "M.S. in Urban Engineering",
      institution: "Chung-Ang University",
      location: "Seoul, South Korea",
      focus: "Transportation Focus (Thesis: Driving Commuters' Dependence on Expressways in Seoul)",
      year: "2014"
    },
    {
      degree: "B.S. in Urban Engineering",
      institution: "Chung-Ang University",
      location: "Seoul, South Korea",
      focus: "Urban & Transportation Planning",
      year: "2011"
    }
  ],

  // Curated Publications & Policy Papers
  publications: [
    {
      id: "chang2025beyond",
      title: "Beyond the Detour: Modeling Traffic System Shocks After the Francis Scott Key Bridge Failure",
      authors: ["Daeyeol Chang", "Niyeyesh Meimandi Nejad", "Mansoureh Jeihani", "Mansha Swami"],
      venue: "Sustainability",
      year: 2025,
      volume: "17(15)",
      pages: "6916",
      doi: "https://doi.org/10.3390/su17156916",
      tags: ["Bridge Collapse", "Causal Inference", "Difference-in-Differences", "ClearGuide GPS Probe", "Fixed Effects", "Network Resilience"],
      category: "resilience",
      selected: true,
      tldr: "Quantified spatiotemporal network disruption following the Francis Scott Key Bridge collapse using 30-corridor high-frequency ClearGuide probe data. Revealed severe PM peak shocks (up to 4x AM) and validated causal impacts using Difference-in-Differences (DiD) and stratified models.",
      bibtex: `@article{chang2025beyond,
  title={Beyond the Detour: Modeling Traffic System Shocks After the Francis Scott Key Bridge Failure},
  author={Chang, Daeyeol and Nejad, Niyeyesh Meimandi and Jeihani, Mansoureh and Swami, Mansha},
  journal={Sustainability},
  volume={17},
  number={15},
  pages={6916},
  year={2025},
  publisher={MDPI},
  doi={10.3390/su17156916}
}`
    },
    {
      id: "chang2025trb_seismic",
      title: "Resilience in Motion: Analyzing Evacuation Decisions During Seismic Emergencies",
      authors: ["Daeyeol Chang"],
      venue: "Transportation Research Board 104th Annual Meeting (TRB 2025)",
      year: 2025,
      tags: ["TRB 2025", "Seismic Evacuation", "Travel Demand", "CUBE Avenue", "Resilience"],
      category: "evacuation",
      selected: true,
      tldr: "Presented regional evacuation decision models and traffic simulation findings under severe seismic network disruptions.",
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
      authors: ["Daeyeol Chang"],
      venue: "Transportation Research Board 103rd Annual Meeting (TRB 2024)",
      year: 2024,
      tags: ["TRB 2024", "Mode Choice", "COVID-19 Shift", "Discrete Choice", "Travel Behavior"],
      category: "behavior",
      selected: false,
      tldr: "Investigated post-pandemic mode choice behavior shifts towards private vehicle reliance using discrete choice modeling.",
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
      authors: ["Daeyeol Chang", "Praveen Edara", "Pamela Murray-Tuite", "Joseph Trainor", "Kostas Triantis"],
      venue: "Transportation Research Interdisciplinary Perspectives (TRIP)",
      year: 2021,
      volume: "11",
      pages: "100421",
      doi: "https://doi.org/10.1016/j.trip.2021.100421",
      tags: ["Hurricane Evacuation", "Route Choice", "Mixed Logit", "Random Parameter Logit", "Travel Behavior", "NSF Grant"],
      category: "evacuation",
      selected: true,
      tldr: "Developed a random parameter (mixed) logit model with 200 Halton draws to analyze household evacuation route choice (freeway vs. non-freeway) under a Category 4 hurricane scenario in Hampton Roads, VA.",
      bibtex: `@article{chang2021taking,
  title={Taking the freeway: Inferring evacuee route selection from survey data},
  author={Chang, Daeyeol and Edara, Praveen and Murray-Tuite, Pamela and Trainor, Joseph and Triantis, Kostas},
  journal={Transportation Research Interdisciplinary Perspectives},
  volume={11},
  pages={100421},
  year={2021},
  publisher={Elsevier},
  doi={10.1016/j.trip.2021.100421}
}`
    },
    {
      id: "aati2020immersive",
      title: "Immersive Work Zone Inspection Training using Virtual Reality",
      authors: ["Khaled Aati", "Daeyeol Chang", "Praveen Edara", "Carlos Sun"],
      venue: "Transportation Research Record (TRR)",
      year: 2020,
      volume: "2674",
      pages: "1–9",
      doi: "https://doi.org/10.1177/0361198120953146",
      tags: ["Virtual Reality (VR)", "Work Zone Safety", "Inspection Training", "Unity 3D", "MoDOT", "Traffic Control"],
      category: "vr-safety",
      selected: true,
      tldr: "Built an interactive 3D VR inspection training platform in Unity 3D with Oculus Rift for Missouri DOT staff, achieving a 79% deficiency identification score and 97% training utility rating.",
      bibtex: `@article{aati2020immersive,
  title={Immersive Work Zone Inspection Training using Virtual Reality},
  author={Aati, Khaled and Chang, Daeyeol and Edara, Praveen and Sun, Carlos},
  journal={Transportation Research Record},
  volume={2674},
  number={10},
  pages={1--9},
  year={2020},
  publisher={SAGE Publications},
  doi={10.1177/0361198120953146}
}`
    },
    {
      id: "chang2020vrflagger",
      title: "Immersive Virtual Reality Training for Inspecting Flagger Work zones",
      authors: ["Daeyeol Chang", "James Hopfenblatt", "Praveen Edara", "Bimal Balakrishnan"],
      venue: "2020 IEEE International Conference on Artificial Intelligence and Virtual Reality (AIVR)",
      year: 2020,
      pages: "327–330",
      doi: "https://doi.org/10.1109/AIVR50618.2020.00066",
      tags: ["IEEE AIVR", "Motion Capture", "Flagger Safety", "Virtual Reality", "Human Avatar", "Two-lane Highway"],
      category: "vr-safety",
      selected: true,
      tldr: "Integrated motion capture technology (Motive) and 3D terrain reconstruction in Unity to replicate real-world human flagger behavior on two-lane highway work zones for inspector compliance training.",
      bibtex: `@inproceedings{chang2020vrflagger,
  title={Immersive Virtual Reality Training for Inspecting Flagger Work zones},
  author={Chang, Daeyeol and Hopfenblatt, James and Edara, Praveen and Balakrishnan, Bimal},
  booktitle={2020 IEEE International Conference on Artificial Intelligence and Virtual Reality (AIVR)},
  pages={327--330},
  year={2020},
  organization={IEEE},
  doi={10.1109/AIVR50618.2020.00066}
}`
    },
    {
      id: "chang2015commuter",
      title: "Commuter dependence on expressways when travelling to work",
      authors: ["Daeyeol Chang", "Keemin Sohn"],
      venue: "Proceedings of the Institution of Civil Engineers - Transport",
      year: 2015,
      volume: "168(1)",
      pages: "23–33",
      doi: "https://doi.org/10.1680/tran.13.00008",
      tags: ["Commuter Choice", "Expressway Dependence", "Binary Logit", "Latent Variables", "PCA", "Seoul Metro"],
      category: "behavior",
      selected: true,
      tldr: "Investigated irrational commuter dependence on expressways in Seoul despite travel time/toll disadvantages, extracting 14 latent behavioral propensities via PCA and integrating into a binary logit choice model.",
      bibtex: `@article{chang2015commuter,
  title={Commuter dependence on expressways when travelling to work},
  author={Chang, Daeyeol and Sohn, Keemin},
  journal={Proceedings of the Institution of Civil Engineers-Transport},
  volume={168},
  number={1},
  pages={23--33},
  year={2015},
  publisher={Thomas Telford Ltd},
  doi={10.1680/tran.13.00008}
}`
    }
  ]
};
