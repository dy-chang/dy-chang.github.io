/**
 * Portfolio Data for Dr. Daeyeol (Daniel) Chang, Ph.D. (장대열)
 * Senior Planner at Benesch | Transportation Data Scientist & Quantitative Modeler
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Daeyeol (Daniel) Chang, Ph.D.",
    koreanName: "장대열",
    title: "Senior Transportation Planner & Quantitative Mobility Modeler",
    affiliation: "Benesch • Ex-Morgan State SMARTER Center • Ex-Mizzou",
    headline: "Bridging Advanced Econometric Rigor with Scalable Transportation Planning & Analytics",
    subheadline: "10+ Years in Travel Demand Modeling (CUBE, PTV Visum/Vissim, TransCAD) | Discrete Choice & Causal Econometrics | Connected Vehicle & GPS Probe Analytics (ClearGuide, INRIX) | Network Resilience & Simulation",
    email: "dchang@benesch.com",
    personalEmail: "chang.daeyeol@gmail.com",
    location: "Baltimore, Maryland, USA",
    bio: [
      "I am a **Senior Transportation Planner and Modeler** at **Benesch** with over a decade of experience bridging **regional travel demand modeling**, **dynamic traffic assignment (DTA)**, **econometric discrete choice modeling**, and **high-frequency GPS probe data analytics**.",
      "With a strong academic background through Ph.D. and Postdoctoral appointments at the **University of Missouri-Columbia** and **Morgan State University SMARTER Center**, I specialize in transforming complex transportation big data (Iteris ClearGuide, INRIX, HERE, Smart Card, Census) into actionable insights for infrastructure resilience, disaster evacuation, and regional mobility planning.",
      "My track record includes analyzing the 2024 **Francis Scott Key Bridge collapse traffic shockwave** across 30 corridors (published in MDPI *Sustainability*), managing the **St. Louis 48k-link/3k-zone regional evacuation model** (CUBE/Vissim/USGS ShakeCast), developing **NSF-funded hurricane evacuation mixed logit models**, and building the first **VR work-zone inspection training simulator** for MoDOT."
    ],
    stats: [
      { label: "Experience", value: "10+ Yrs", icon: "briefcase" },
      { label: "Citations", value: "250+", icon: "quote" },
      { label: "Publications & TRB", value: "15+", icon: "book-open" },
      { label: "Major Grants", value: "USDOT & NSF", icon: "shield-check" }
    ],
    socials: {
      scholar: "https://scholar.google.com/citations?user=8bu0_WoAAAAJ&hl=ko&oi=ao",
      github: "https://github.com/dy-chang",
      linkedin: "https://www.linkedin.com/in/chang-daeyeol/",
      email: "mailto:dchang@benesch.com"
    }
  },

  coreCapabilities: [
    {
      category: "Travel Demand Modeling & DTA",
      icon: "git-merge",
      skills: ["CUBE Voyager / Avenue", "PTV Visum", "TransCAD", "EMME/3", "Select-Zone Analysis", "O-D Matrix Calibration", "Scenario Forecasting"]
    },
    {
      category: "Micro / Meso Traffic Simulation",
      icon: "sliders",
      skills: ["PTV Vissim (DTA)", "DynusT & DTALite", "UC-win/Road", "Network Development", "Demand Preparation", "Trajectory Post-Processing"]
    },
    {
      category: "Operations, Safety & Resilience",
      icon: "shield-alert",
      skills: ["ClearGuide & INRIX GPS Probes", "Travel Time Index (TTI) & Reliability", "Bridge Collapse / Network Disruption", "Earthquake & Hurricane Evacuation", "MUTCD & MoDOT Work Zone Safety"]
    },
    {
      category: "Data Science, GIS & Automation",
      icon: "terminal",
      skills: ["Python (Pandas, GeoPandas, Scikit-learn)", "R (mlogit, plm, lme4, ggplot2)", "QGIS & ArcGIS", "SQL / MySQL", "MATLAB & C#", "Git / GitHub CI/CD"]
    }
  ],

  featuredRepos: [
    {
      name: "urban-transport-intelligence",
      title: "Urban Transport Intelligence Platform",
      description: "Comprehensive analytical framework for smart mobility, multimodal transit optimization, and spatiotemporal traffic intelligence.",
      url: "https://github.com/dy-chang/urban-transport-intelligence",
      tags: ["Python", "GeoPandas", "Network Analytics", "Mobility Intelligence"],
      icon: "map-pin"
    },
    {
      name: "Traffic_Incident_Analysis",
      title: "Traffic Incident & Congestion Analysis",
      description: "Spatiotemporal bottleneck detection, incident clearance duration estimation, and network shockwave propagation modeling.",
      url: "https://github.com/dy-chang/Traffic_Incident_Analysis",
      tags: ["Traffic Analytics", "Bottleneck Identification", "Probe Data", "R / Python"],
      icon: "activity"
    },
    {
      name: "Crash_Data_Modeling",
      title: "Highway Crash Data Modeling",
      description: "Statistical and econometric modeling of crash frequencies, safety hotspots, and risk factor identification for roadway improvements.",
      url: "https://github.com/dy-chang/Crash_Data_Modeling",
      tags: ["Safety Engineering", "Econometrics", "Count Models", "Vision Zero"],
      icon: "alert-triangle"
    },
    {
      name: "Vulnerable-Road-User-Injury-Prediction",
      title: "VRU Injury Severity Prediction",
      description: "Machine learning and discrete choice framework to predict injury severity and crash outcomes for pedestrians and cyclists.",
      url: "https://github.com/dy-chang/Vulnerable-Road-User-Injury-Prediction",
      tags: ["Machine Learning", "Pedestrian & Bike Safety", "XGBoost", "Logit"],
      icon: "user-check"
    }
  ],

  projects: [
    {
      title: "Francis Scott Key Bridge Collapse Traffic Impact & Resilience Analysis",
      client: "Morgan State University SMARTER Center / USDOT",
      period: "2024 – 2026",
      tools: ["Iteris ClearGuide", "INRIX", "Python", "R", "QGIS", "DiD / Panel Models"],
      description: "Conducted spatiotemporal performance evaluation across 30 regional corridors in Baltimore following the catastrophic FSK bridge collapse. Implemented Fixed Effects, Mixed Effects, Difference-in-Differences (DiD), and stratified econometric models to isolate causal congestion shocks and support agency detour planning.",
      publishedIn: "MDPI Sustainability (2025)"
    },
    {
      title: "St. Louis Earthquake Response & Rescue Network",
      client: "Missouri DOT (MoDOT)",
      period: "2022 – 2024",
      tools: ["CUBE Voyager/Avenue", "QGIS", "USGS ShakeCast", "Household Survey"],
      description: "Directly managed the 48,151-link, 3,003-zone CUBE model and 7.9 million-trip matrices for a simulated M6.7 earthquake. Evaluated 12 evacuation scenarios, mapped network speed ratios and bottlenecks in QGIS, and co-led multi-stakeholder tabletop exercises (TTX).",
      publishedIn: "MoDOT Technical Report & TRB 2025"
    },
    {
      title: "New Madrid Regional Earthquake Evacuation Model",
      client: "Missouri DOT (MoDOT)",
      period: "2021 – 2022",
      tools: ["PTV Vissim DTA", "GIS", "Python", "MATLAB"],
      description: "Built and validated an 8-county Vissim network to implement Dynamic Traffic Assignment (DTA). Analyzed network delay, speed, Level of Service (LOS), and critical bottlenecks under damaged infrastructure scenarios.",
      publishedIn: "MoDOT Research Project"
    },
    {
      title: "Hampton Roads Hurricane Evacuation Route Choice Modeling",
      client: "National Science Foundation (Award #1537762)",
      period: "2016 – 2021",
      tools: ["DynusT DTA", "Mixed Logit", "R (mlogit)", "MATLAB", "GIS"],
      description: "Estimated random parameter (mixed) logit models with 200 Halton draws on household survey data to model evacuee preference between freeways and arterials under a Category 4 hurricane.",
      publishedIn: "Elsevier TRIP (2021) & TRB 2020"
    },
    {
      title: "Immersive Virtual Reality Work Zone Inspection Platform",
      client: "Missouri DOT (MoDOT)",
      period: "2018 – 2021",
      tools: ["Unity 3D", "C#", "Motive Motion Capture", "Oculus Rift"],
      description: "Pioneered a 3D VR simulation platform to train state DOT inspectors on temporary traffic control and human flagger safety, boosting inspection proficiency from 44% to 79% (97% DOT endorsement).",
      publishedIn: "Transportation Research Record (2020) & IEEE AIVR (2020)"
    }
  ],

  experience: [
    {
      role: "Senior Planner",
      organization: "Benesch",
      location: "Baltimore, MD, USA",
      period: "June 2026 – Present",
      type: "industry",
      highlights: [
        "Leading regional travel demand modeling, select-zone analysis, and network scenario forecasting using PTV Visum, CUBE, and TransCAD.",
        "Developing automated Python/R post-processing workflows for O-D matrices, corridor volume balancing, and project-specific travel pattern inquiries.",
        "Delivering quantitative transportation analytics and resilience strategies for municipal and state agency clients."
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
