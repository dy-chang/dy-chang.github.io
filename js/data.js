/**
 * Portfolio Data for Dr. Daeyeol Chang (장대열)
 * Transportation Data Scientist & Quantitative Mobility Researcher
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Daeyeol Chang, Ph.D.",
    koreanName: "장대열",
    title: "Transportation Data Scientist & Quantitative Mobility Researcher",
    headline: "Bridging Econometric Rigor with Scalable Mobility & Data Solutions",
    subheadline: "Ph.D. in Transportation Engineering | Discrete Choice & Causal Econometrics | Connected Vehicle & GPS Probe Analytics (ClearGuide/INRIX) | VR Simulation & Network Resilience",
    email: "daeyeol.chang@gmail.com",
    location: "United States / South Korea",
    bio: [
      "I am a Transportation Data Scientist and Quantitative Researcher with deep expertise in **discrete choice econometrics**, **high-frequency GPS probe data analytics (ClearGuide)**, and **transportation network resilience** under disruptive events.",
      "Having built a strong academic foundation through Ph.D. and Postdoctoral appointments at the **University of Missouri-Columbia** and **National Transportation Center (Morgan State University)**, I transitioned to the industry to translate advanced econometric modeling, machine learning, and big data systems into scalable, real-world transportation solutions.",
      "My portfolio spans evaluating catastrophic infrastructure shocks (such as the 2024 Francis Scott Key Bridge collapse), modeling hurricane evacuation route choice behaviors with mixed logit models, and developing immersive Virtual Reality (VR) simulation platforms for highway work zone safety."
    ],
    stats: [
      { label: "Citations", value: "250+", icon: "quote" },
      { label: "Publications", value: "15+", icon: "book-open" },
      { label: "R&D Experience", value: "10+ Yrs", icon: "award" },
      { label: "Major Grants", value: "USDOT & NSF", icon: "shield-check" }
    ],
    socials: {
      scholar: "https://scholar.google.com/citations?user=8bu0_WoAAAAJ&hl=ko&oi=ao",
      github: "https://github.com/dy-chang",
      linkedin: "https://www.linkedin.com/in/daeyeol-chang",
      email: "mailto:daeyeol.chang@gmail.com"
    }
  },

  skills: [
    {
      category: "Econometric & Choice Modeling",
      icon: "trending-up",
      items: [
        { name: "Discrete Choice Models (Binary, Multinomial, Mixed Logit / Random Parameters)", level: 95 },
        { name: "Causal Inference & Panel Econometrics (Fixed Effects, Mixed Effects, DiD)", level: 95 },
        { name: "Latent Variable Modeling & Structural Equation Models (SEM / PCA)", level: 90 },
        { name: "Travel Demand & Route Choice Behavior Modeling", level: 95 }
      ]
    },
    {
      category: "Big Data & Traffic Analytics",
      icon: "activity",
      items: [
        { name: "Connected Vehicle & GPS Probe Data (Iteris ClearGuide, INRIX, HERE)", level: 92 },
        { name: "Travel Time Reliability & Congestion Bottlenecks (TTI, PTI, Buffer Index)", level: 95 },
        { name: "Network Resilience & Spatiotemporal Shockwave Analysis", level: 90 },
        { name: "Spatial Network Modeling & GIS (QGIS, ArcGIS, OpenStreetMap)", level: 88 }
      ]
    },
    {
      category: "Programming & Data Science Stack",
      icon: "code",
      items: [
        { name: "Python (Pandas, NumPy, Scikit-learn, Statsmodels, GeoPandas, PyTorch)", level: 92 },
        { name: "R (mlogit, mclogit, plm, lme4, survival, ggplot2)", level: 95 },
        { name: "SQL & Relational Databases (PostgreSQL, PostGIS, BigQuery)", level: 88 },
        { name: "Interactive Visualization & Dashboards (Chart.js, Plotly, D3.js, Tableau)", level: 90 }
      ]
    },
    {
      category: "Simulation & Emerging Technologies",
      icon: "cpu",
      items: [
        { name: "Virtual Reality (VR) Simulation (Unity 3D, C#, Oculus Rift, HTC Vive)", level: 85 },
        { name: "Motion Capture & Human Behavior Tracking (Motive)", level: 82 },
        { name: "Traffic Flow Simulation & Intelligent Transportation Systems (ITS)", level: 88 },
        { name: "Work Zone Safety & Compliance Protocols (MUTCD, MoDOT EPG)", level: 90 }
      ]
    }
  ],

  experience: [
    {
      role: "Senior Transportation Data Scientist / Applied Researcher",
      organization: "Industry Mobility & Analytics",
      location: "United States",
      period: "Recent – Present",
      type: "industry",
      highlights: [
        "Developing scalable data pipelines and econometric/ML algorithms for real-time traffic flow prediction and network bottleneck mitigation.",
        "Leveraging massive connected vehicle probe datasets to extract actionable mobility intelligence for private operators and public transportation agencies.",
        "Leading end-to-end analytics initiatives translating complex transportation models into business-ready dashboards and decision support tools."
      ]
    },
    {
      role: "Postdoctoral Research Associate / Research Scientist",
      organization: "National Transportation Center, Morgan State University",
      location: "Baltimore, MD, USA",
      period: "2023 – 2025",
      type: "academia",
      highlights: [
        "Led high-impact research investigating the Francis Scott Key Bridge collapse using high-resolution ClearGuide GPS probe data across 30 major corridors.",
        "Implemented multi-pronged econometric frameworks (Fixed Effects, Mixed Effects, Difference-in-Differences, Stratified Models) published in MDPI Sustainability.",
        "Authored USDOT grant reports and collaborated with state and regional transportation stakeholders (MDOT, Baltimore Metropolitan Council)."
      ]
    },
    {
      role: "Graduate Research Assistant / Ph.D. Candidate",
      organization: "University of Missouri-Columbia (Dept. of Civil & Environmental Engineering)",
      location: "Columbia, MO, USA",
      period: "2016 – 2021",
      type: "academia",
      highlights: [
        "Conducted NSF-funded research (#1537762) on hurricane evacuation travel behavior and mixed logit route choice modeling for the Hampton Roads region.",
        "Developed first-of-its-kind immersive Virtual Reality (VR) inspection training platforms for MoDOT work zones using Unity 3D and Motion Capture technology.",
        "Published multiple peer-reviewed papers in Transportation Research Record (TRR), TRIP (Elsevier), and IEEE AIVR."
      ]
    },
    {
      role: "Graduate Researcher",
      organization: "Chung-Ang University (Dept. of Urban Engineering)",
      location: "Seoul, South Korea",
      period: "2011 – 2014",
      type: "academia",
      highlights: [
        "Investigated commuter expressway dependence and latent psychological factors in the Seoul Metropolitan Area using binary logit and PCA.",
        "Published in Proceedings of the ICE - Transport (UK) and received the Chung-Ang University Excellent Student Research Scholarship."
      ]
    }
  ],

  education: [
    {
      degree: "Ph.D. in Civil and Environmental Engineering",
      institution: "University of Missouri-Columbia",
      location: "Columbia, MO, USA",
      focus: "Transportation Engineering, Econometric Route Choice Modeling, VR Simulation",
      year: "2021"
    },
    {
      degree: "B.Eng. in Urban Engineering",
      institution: "Chung-Ang University",
      location: "Seoul, South Korea",
      focus: "Urban & Transportation Planning, Commuter Travel Behavior Analysis",
      year: "2013"
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
