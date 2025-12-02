// Comprehensive Ministry Data for Seychelles Government - Part 3
// Ministries 8-15
// Source: Wikipedia - Cabinet of Seychelles (October 2025)
// https://en.wikipedia.org/wiki/Cabinet_of_Seychelles

import { Ministry } from './ministries-data';

export const ministriesDataPart3: Record<string, Ministry> = {
  'local-government': {
    id: 'local-government',
    name: "Ministry for Local Government and Inner Islands",
    shortName: "Local Government",
    portfolio: [
      "Local Government",
      "Inner Islands Administration",
      "District Administration",
      "Community Development"
    ],
    minister: "Eveline Rose",
    ministerSince: "October 2025",
    established: "2020",
    mandate: "To promote local governance, administer inner islands, support district development, and empower communities for sustainable local development.",
    vision: "Empowered local communities with effective governance and sustainable development across all islands.",
    mission: "To strengthen local governance, support community development, and ensure equitable development across all districts and inner islands.",
    leadership: {
      minister: "Eveline Rose",
      ministerSince: "October 2025",
      image: "/img/ministers/eveline-rose.jpg"
    },
    contact: {
      address: "Victoria, Mahé, Seychelles",
      phone: "+248 4293000",
      email: "info@localgovernment.gov.sc",
      website: "https://www.localgovernment.gov.sc/"
    },
    departments: [
      {
        name: "District Administration",
        description: "Manages 26 administrative districts across Mahé, Praslin, and La Digue."
      },
      {
        name: "Inner Islands Administration",
        description: "Oversees administration and development of outer islands."
      },
      {
        name: "Community Development Division",
        description: "Supports community projects and local development initiatives."
      }
    ],
    keyResponsibilities: [
      "District administration and governance",
      "Inner islands development and administration",
      "Community development programs",
      "Local infrastructure development",
      "District disaster preparedness",
      "Community engagement and empowerment"
    ],
    drmdRole: "The Ministry coordinates district-level disaster preparedness, manages local emergency response, ensures inner islands disaster resilience, and facilitates community-based disaster risk reduction.",
    drmdCoordination: [
      "Coordinates district disaster committees",
      "Manages local emergency response",
      "Ensures inner islands disaster preparedness",
      "Facilitates community-based DRR programs",
      "Coordinates local evacuation plans",
      "Manages district emergency shelters",
      "Supports community resilience building"
    ],
    recentInitiatives: [
      {
        title: "District Development Program",
        description: "Infrastructure and community development across all districts.",
        year: "2024-2027",
        status: "ongoing",
        budget: "SCR 200 Million"
      },
      {
        title: "Inner Islands Resilience Project",
        description: "Building disaster resilience in outer islands.",
        year: "2024-2028",
        status: "ongoing"
      }
    ],
    annualBudget: "SCR 250 Million",
    staffCount: "300+",
    relatedLinks: [
      { title: "District Administration", url: "/local-government/districts" },
      { title: "Inner Islands Development", url: "/local-government/inner-islands" },
      { title: "Community Programs", url: "/local-government/community" }
    ],
    organizationalStructure: {
      description: "The Ministry operates through three main divisions managing districts, inner islands, and community development.",
      divisions: [
        "District Administration Division",
        "Inner Islands Administration Division",
        "Community Development Division"
      ]
    }
  },

  'youth-sports': {
    id: 'youth-sports',
    name: "Ministry of Youth and Sports",
    shortName: "Youth & Sports",
    portfolio: [
      "Youth Development",
      "Sports Development",
      "Recreation",
      "Youth Empowerment"
    ],
    minister: "Kalsey Belle",
    ministerSince: "October 2025",
    established: "2020",
    mandate: "To develop youth potential, promote sports excellence, provide recreational opportunities, and empower young Seychellois for national development.",
    vision: "Empowered youth and a sporting nation achieving excellence and healthy lifestyles.",
    mission: "To nurture youth talent, promote sports development, and create opportunities for young Seychellois to excel and contribute to society.",
    leadership: {
      minister: "Kalsey Belle",
      ministerSince: "October 2025",
      image: "/img/ministers/kalsey-belle.jpg"
    },
    contact: {
      address: "Stad Popiler, Victoria, Mahé, Seychelles",
      phone: "+248 4225000",
      email: "info@youth.gov.sc",
      website: "https://www.youth.gov.sc/"
    },
    departments: [
      {
        name: "Youth Development Division",
        description: "Manages youth programs, empowerment, and development initiatives."
      },
      {
        name: "Sports Development Division",
        description: "Promotes sports excellence and manages sports facilities."
      },
      {
        name: "Recreation and Community Sports",
        description: "Provides recreational facilities and community sports programs."
      }
    ],
    keyResponsibilities: [
      "Youth development and empowerment programs",
      "Sports development and excellence",
      "Recreation facilities management",
      "Youth leadership training",
      "Sports infrastructure development",
      "Youth disaster preparedness education"
    ],
    drmdRole: "The Ministry mobilizes youth volunteers for disaster response, coordinates youth disaster preparedness programs, and ensures safety of sports facilities during emergencies.",
    drmdCoordination: [
      "Mobilizes youth volunteers for disaster response",
      "Coordinates youth disaster preparedness training",
      "Manages sports facilities as emergency shelters",
      "Provides youth psychosocial support",
      "Coordinates youth community service during recovery",
      "Integrates DRR in youth programs"
    ],
    recentInitiatives: [
      {
        title: "Youth Empowerment Program",
        description: "Comprehensive youth development and skills training.",
        year: "2024-2026",
        status: "ongoing",
        budget: "SCR 60 Million"
      },
      {
        title: "Sports Excellence Initiative",
        description: "Developing elite athletes and sports infrastructure.",
        year: "2023-2027",
        status: "ongoing"
      }
    ],
    annualBudget: "SCR 150 Million",
    staffCount: "200+",
    relatedLinks: [
      { title: "Youth Programs", url: "/youth/programs" },
      { title: "Sports Development", url: "/youth/sports" },
      { title: "Stad Popiler", url: "/youth/stad-popiler" }
    ],
    organizationalStructure: {
      description: "The Ministry operates through three divisions focused on youth development and sports excellence.",
      divisions: [
        "Youth Development Division",
        "Sports Development Division",
        "Recreation and Community Sports Division"
      ]
    }
  },

  'fisheries': {
    id: 'fisheries',
    name: "Ministry of Fisheries and Blue Economy",
    shortName: "Fisheries & Blue Economy",
    portfolio: [
      "Fisheries",
      "Blue Economy",
      "Marine Resources",
      "Aquaculture",
      "Fisheries Monitoring"
    ],
    minister: "Wallace Cosgrow",
    ministerSince: "October 2025",
    established: "1976",
    mandate: "To sustainably manage marine resources, develop the blue economy, promote fisheries development, and ensure food security through responsible fishing practices.",
    vision: "A thriving blue economy with sustainable fisheries and marine resource management.",
    mission: "To manage and develop fisheries resources sustainably, promote the blue economy, and ensure long-term food security and economic benefits from marine resources.",
    leadership: {
      minister: "Wallace Cosgrow",
      ministerSince: "October 2025",
      image: "/img/ministers/wallace-cosgrow.jpg"
    },
    contact: {
      address: "Fishing Port, Victoria, Mahé, Seychelles",
      phone: "+248 4670300",
      email: "info@fisheries.gov.sc",
      website: "https://www.fisheries.gov.sc/"
    },
    departments: [
      {
        name: "Fisheries Management Division",
        description: "Manages fishing licenses, quotas, and sustainable fishing practices."
      },
      {
        name: "Blue Economy Division",
        description: "Develops blue economy initiatives and marine-based economic activities."
      },
      {
        name: "Seychelles Fishing Authority (SFA)",
        description: "Regulates and monitors fishing activities in Seychelles waters."
      },
      {
        name: "Aquaculture Development",
        description: "Promotes and develops aquaculture and mariculture."
      }
    ],
    keyResponsibilities: [
      "Sustainable fisheries management",
      "Blue economy development",
      "Marine resource conservation",
      "Fishing industry regulation",
      "Aquaculture development",
      "Fisheries monitoring and enforcement",
      "Marine disaster preparedness"
    ],
    drmdRole: "The Ministry coordinates marine disaster response, manages fishing vessel safety during storms, provides early warning to fishers, and ensures food security during emergencies through fisheries resources.",
    drmdCoordination: [
      "Coordinates marine disaster warnings to fishers",
      "Manages fishing vessel safety during storms",
      "Ensures fisheries food security during emergencies",
      "Coordinates port safety and vessel protection",
      "Monitors marine hazards and tsunamis",
      "Supports coastal community disaster preparedness",
      "Manages fisheries infrastructure resilience"
    ],
    recentInitiatives: [
      {
        title: "Blue Economy Strategic Plan",
        description: "Comprehensive development of marine-based economic sectors.",
        year: "2024-2030",
        status: "ongoing",
        budget: "SCR 300 Million"
      },
      {
        title: "Sustainable Fisheries Management Program",
        description: "Ensuring long-term sustainability of fish stocks.",
        year: "2023-2028",
        status: "ongoing"
      },
      {
        title: "Climate-Resilient Fisheries Infrastructure",
        description: "Building disaster-resilient fishing ports and facilities.",
        year: "2024-2027",
        status: "ongoing"
      }
    ],
    annualBudget: "SCR 400 Million",
    staffCount: "500+",
    relatedLinks: [
      { title: "Seychelles Fishing Authority", url: "https://www.sfa.sc/" },
      { title: "Blue Economy", url: "/fisheries/blue-economy" },
      { title: "Sustainable Fishing", url: "/fisheries/sustainability" }
    ],
    organizationalStructure: {
      description: "The Ministry operates through four main divisions managing fisheries, blue economy, and marine resources.",
      divisions: [
        "Fisheries Management Division",
        "Blue Economy Division",
        "Seychelles Fishing Authority",
        "Aquaculture Development Division"
      ]
    }
  },

  'foreign-affairs': {
    id: 'foreign-affairs',
    name: "Ministry of Foreign Affairs and Diaspora",
    shortName: "Foreign Affairs",
    portfolio: [
      "Foreign Affairs",
      "Diaspora Relations",
      "International Relations",
      "Diplomatic Services"
    ],
    minister: "Barry Faure",
    ministerSince: "October 2025",
    established: "1976",
    mandate: "To manage Seychelles' foreign relations, represent national interests internationally, engage the diaspora, and promote international cooperation.",
    vision: "A globally connected Seychelles with strong international partnerships and engaged diaspora.",
    mission: "To advance Seychelles' interests abroad, strengthen international relations, engage the diaspora, and promote peace and cooperation.",
    leadership: {
      minister: "Barry Faure",
      ministerSince: "October 2025",
      image: "/img/ministers/barry-faure.jpg"
    },
    contact: {
      address: "Mont Fleuri, Victoria, Mahé, Seychelles",
      phone: "+248 4283000",
      email: "info@mfa.gov.sc",
      website: "https://www.mfa.gov.sc/"
    },
    departments: [
      {
        name: "Bilateral Relations Division",
        description: "Manages bilateral diplomatic relations with other countries."
      },
      {
        name: "Multilateral Relations Division",
        description: "Coordinates participation in international organizations."
      },
      {
        name: "Diaspora Affairs Division",
        description: "Engages and supports Seychellois diaspora worldwide."
      },
      {
        name: "Protocol and Consular Services",
        description: "Provides diplomatic protocol and consular assistance."
      }
    ],
    keyResponsibilities: [
      "Foreign policy formulation and implementation",
      "Diplomatic relations management",
      "International treaty negotiations",
      "Diaspora engagement and support",
      "Consular services for citizens abroad",
      "International cooperation and partnerships",
      "Coordination of international disaster assistance"
    ],
    drmdRole: "The Ministry coordinates international disaster assistance, facilitates diplomatic support during emergencies, manages consular services for citizens affected by disasters abroad, and coordinates with international partners for disaster response.",
    drmdCoordination: [
      "Coordinates international disaster assistance",
      "Facilitates diplomatic channels for emergency aid",
      "Manages consular support during disasters",
      "Coordinates with UN and regional disaster mechanisms",
      "Facilitates international expert deployment",
      "Manages bilateral disaster assistance agreements",
      "Coordinates diaspora support during national emergencies"
    ],
    recentInitiatives: [
      {
        title: "Diaspora Engagement Strategy",
        description: "Strengthening ties with Seychellois communities abroad.",
        year: "2024-2027",
        status: "ongoing"
      },
      {
        title: "Climate Diplomacy Initiative",
        description: "Leading international advocacy on climate change and small island states.",
        year: "2023-2026",
        status: "ongoing"
      }
    ],
    annualBudget: "SCR 180 Million",
    staffCount: "150+",
    relatedLinks: [
      { title: "Ministry of Foreign Affairs", url: "https://www.mfa.gov.sc/" },
      { title: "Diplomatic Missions", url: "/foreign-affairs/missions" },
      { title: "Diaspora Services", url: "/foreign-affairs/diaspora" }
    ],
    organizationalStructure: {
      description: "The Ministry operates through four main divisions managing bilateral relations, multilateral engagement, and diaspora affairs.",
      divisions: [
        "Bilateral Relations Division",
        "Multilateral Relations Division",
        "Diaspora Affairs Division",
        "Protocol and Consular Services Division"
      ]
    }
  },

  'social-affairs': {
    id: 'social-affairs',
    name: "Ministry of Social Affairs, Family and Equality",
    shortName: "Social Affairs",
    portfolio: [
      "Social Affairs",
      "Family Welfare",
      "Gender Equality",
      "Social Protection",
      "Disability Services"
    ],
    minister: "Pamela Charlette",
    ministerSince: "October 2025",
    established: "2020",
    mandate: "To promote social welfare, protect vulnerable populations, advance gender equality, support families, and ensure social protection for all Seychellois.",
    vision: "An inclusive society with strong families, gender equality, and comprehensive social protection.",
    mission: "To provide social protection, support families, promote equality, and empower vulnerable groups for a just and inclusive society.",
    leadership: {
      minister: "Pamela Charlette",
      ministerSince: "October 2025",
      image: "/img/ministers/pamela-charlette.jpg"
    },
    contact: {
      address: "Victoria, Mahé, Seychelles",
      phone: "+248 4293000",
      email: "info@socialaffairs.gov.sc",
      website: "https://www.socialaffairs.gov.sc/"
    },
    departments: [
      {
        name: "Social Welfare Division",
        description: "Provides social assistance and welfare programs."
      },
      {
        name: "Family Services Division",
        description: "Supports families and child protection services."
      },
      {
        name: "Gender Equality Division",
        description: "Promotes gender equality and women's empowerment."
      },
      {
        name: "Disability Services",
        description: "Provides support and services for persons with disabilities."
      },
      {
        name: "Social Protection Division",
        description: "Manages social security and protection programs."
      }
    ],
    keyResponsibilities: [
      "Social welfare and assistance programs",
      "Family support and child protection",
      "Gender equality promotion",
      "Disability services and inclusion",
      "Social protection and security",
      "Vulnerable population support",
      "Disaster social protection"
    ],
    drmdRole: "The Ministry provides social protection during disasters, manages vulnerable population support, coordinates psychosocial services, and ensures continuity of social services during emergencies.",
    drmdCoordination: [
      "Provides social protection during disasters",
      "Coordinates support for vulnerable populations",
      "Manages psychosocial support services",
      "Ensures continuity of social welfare programs",
      "Coordinates family reunification after disasters",
      "Provides disability-inclusive disaster response",
      "Manages emergency social assistance"
    ],
    recentInitiatives: [
      {
        title: "Social Protection Enhancement Program",
        description: "Strengthening social safety nets and assistance programs.",
        year: "2024-2027",
        status: "ongoing",
        budget: "SCR 250 Million"
      },
      {
        title: "Gender Equality Action Plan",
        description: "Advancing gender equality across all sectors.",
        year: "2023-2026",
        status: "ongoing"
      }
    ],
    annualBudget: "SCR 400 Million",
    staffCount: "350+",
    relatedLinks: [
      { title: "Social Welfare Services", url: "/social-affairs/welfare" },
      { title: "Gender Equality", url: "/social-affairs/gender" },
      { title: "Disability Services", url: "/social-affairs/disability" }
    ],
    organizationalStructure: {
      description: "The Ministry operates through five divisions providing comprehensive social services and protection.",
      divisions: [
        "Social Welfare Division",
        "Family Services Division",
        "Gender Equality Division",
        "Disability Services Division",
        "Social Protection Division"
      ]
    }
  }
};


