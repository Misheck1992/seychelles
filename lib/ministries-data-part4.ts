// Comprehensive Ministry Data for Seychelles Government - Part 4
// Final Ministries: Environment, Industry, Tourism
// Source: Wikipedia - Cabinet of Seychelles (October 2025)
// https://en.wikipedia.org/wiki/Cabinet_of_Seychelles

import { Ministry } from './ministries-data';

export const ministriesDataPart4: Record<string, Ministry> = {
  'environment': {
    id: 'environment',
    name: "Ministry of Environment, Climate, Energy and Natural Resources",
    shortName: "Environment Ministry",
    portfolio: [
      "Environment",
      "Climate Change",
      "Energy",
      "Natural Resources",
      "Conservation"
    ],
    minister: "Marie-May Jeremie",
    ministerSince: "October 2025",
    established: "1976",
    mandate: "To protect and manage the environment, address climate change, develop sustainable energy, conserve natural resources, and ensure environmental sustainability for future generations.",
    vision: "A sustainable Seychelles with clean energy, protected environment, and climate resilience.",
    mission: "To safeguard the environment, combat climate change, promote renewable energy, and ensure sustainable management of natural resources.",
    leadership: {
      minister: "Marie-May Jeremie",
      ministerSince: "October 2025",
      image: "/img/ministers/marie-may-jeremie.jpg"
    },
    contact: {
      address: "Botanical Gardens, Mont Fleuri, Victoria, Mahé, Seychelles",
      phone: "+248 4670500",
      email: "info@environment.gov.sc",
      website: "https://www.environment.gov.sc/"
    },
    departments: [
      {
        name: "Climate Change Division",
        description: "Coordinates climate change adaptation and mitigation efforts."
      },
      {
        name: "Energy Division",
        description: "Develops renewable energy and energy efficiency programs."
      },
      {
        name: "Conservation and Biodiversity",
        description: "Manages protected areas and biodiversity conservation."
      },
      {
        name: "Environmental Assessment and Permits",
        description: "Conducts environmental impact assessments and issues permits."
      },
      {
        name: "Natural Resources Management",
        description: "Manages forests, water resources, and natural assets."
      }
    ],
    keyResponsibilities: [
      "Environmental protection and conservation",
      "Climate change adaptation and mitigation",
      "Renewable energy development",
      "Natural resources management",
      "Biodiversity conservation",
      "Environmental impact assessment",
      "Climate disaster risk management"
    ],
    drmdRole: "The Ministry plays a central role in climate-related disaster management, coordinates environmental emergency response, manages natural hazard monitoring, and leads climate adaptation and resilience building.",
    drmdCoordination: [
      "Coordinates climate-related disaster response",
      "Manages environmental hazard monitoring",
      "Leads climate adaptation and resilience programs",
      "Coordinates coastal erosion and flooding response",
      "Manages environmental emergency response",
      "Provides climate early warning information",
      "Coordinates ecosystem-based disaster risk reduction"
    ],
    recentInitiatives: [
      {
        title: "National Climate Change Strategy",
        description: "Comprehensive climate adaptation and mitigation framework.",
        year: "2024-2030",
        status: "ongoing",
        budget: "SCR 500 Million"
      },
      {
        title: "Renewable Energy Transition Program",
        description: "Transitioning to 100% renewable energy by 2030.",
        year: "2023-2030",
        status: "ongoing",
        budget: "SCR 800 Million"
      },
      {
        title: "Coastal Resilience Project",
        description: "Building resilience against coastal erosion and sea-level rise.",
        year: "2024-2028",
        status: "ongoing",
        budget: "SCR 400 Million"
      }
    ],
    annualBudget: "SCR 600 Million",
    staffCount: "400+",
    relatedLinks: [
      { title: "Ministry of Environment Website", url: "https://www.environment.gov.sc/" },
      { title: "Climate Change Division", url: "/environment/climate" },
      { title: "Seychelles National Parks Authority", url: "https://www.snpa.gov.sc/" }
    ],
    organizationalStructure: {
      description: "The Ministry operates through five main divisions managing environment, climate, energy, and natural resources.",
      divisions: [
        "Climate Change Division",
        "Energy Division",
        "Conservation and Biodiversity Division",
        "Environmental Assessment and Permits Division",
        "Natural Resources Management Division"
      ]
    }
  },

  'industry': {
    id: 'industry',
    name: "Ministry of Industry and Enterprise",
    shortName: "Industry Ministry",
    portfolio: [
      "Industry",
      "Enterprise Development",
      "Small Business Support",
      "Industrial Development"
    ],
    minister: "Geralda Desaubin",
    ministerSince: "October 2025",
    established: "2020",
    mandate: "To promote industrial development, support enterprise growth, develop small businesses, and create a competitive and diversified economy.",
    vision: "A diversified and competitive economy with thriving industries and enterprises.",
    mission: "To foster industrial development, support entrepreneurship, promote business growth, and create economic opportunities for all Seychellois.",
    leadership: {
      minister: "Geralda Desaubin",
      ministerSince: "October 2025",
      image: "/img/ministers/geralda-desaubin.jpg"
    },
    contact: {
      address: "Victoria, Mahé, Seychelles",
      phone: "+248 4293000",
      email: "info@industry.gov.sc",
      website: "https://www.industry.gov.sc/"
    },
    departments: [
      {
        name: "Industrial Development Division",
        description: "Promotes industrial growth and manufacturing."
      },
      {
        name: "Enterprise Development Division",
        description: "Supports small and medium enterprise development."
      },
      {
        name: "Business Support Services",
        description: "Provides business advisory and support services."
      },
      {
        name: "Investment Promotion",
        description: "Attracts and facilitates business investment."
      }
    ],
    keyResponsibilities: [
      "Industrial development and policy",
      "Enterprise and SME support",
      "Business development services",
      "Investment promotion",
      "Manufacturing sector development",
      "Business continuity planning",
      "Economic diversification"
    ],
    drmdRole: "The Ministry supports business continuity during disasters, coordinates private sector disaster response, manages economic recovery programs, and ensures supply chain resilience.",
    drmdCoordination: [
      "Coordinates business continuity planning",
      "Supports private sector disaster preparedness",
      "Manages economic recovery programs",
      "Ensures supply chain resilience",
      "Coordinates business sector disaster response",
      "Facilitates business recovery assistance",
      "Promotes disaster-resilient business practices"
    ],
    recentInitiatives: [
      {
        title: "SME Development Program",
        description: "Comprehensive support for small and medium enterprises.",
        year: "2024-2027",
        status: "ongoing",
        budget: "SCR 150 Million"
      },
      {
        title: "Industrial Park Development",
        description: "Developing modern industrial facilities and infrastructure.",
        year: "2024-2028",
        status: "ongoing"
      },
      {
        title: "Business Resilience Initiative",
        description: "Building disaster resilience in the business sector.",
        year: "2024-2026",
        status: "ongoing"
      }
    ],
    annualBudget: "SCR 250 Million",
    staffCount: "180+",
    relatedLinks: [
      { title: "Enterprise Seychelles Agency", url: "https://www.esa.sc/" },
      { title: "SME Support", url: "/industry/sme" },
      { title: "Investment Opportunities", url: "/industry/investment" }
    ],
    organizationalStructure: {
      description: "The Ministry operates through four divisions supporting industrial and enterprise development.",
      divisions: [
        "Industrial Development Division",
        "Enterprise Development Division",
        "Business Support Services Division",
        "Investment Promotion Division"
      ]
    }
  },

  'tourism': {
    id: 'tourism',
    name: "Ministry of Tourism and Culture",
    shortName: "Tourism Ministry",
    portfolio: [
      "Tourism",
      "Culture",
      "Heritage",
      "Arts",
      "Creative Industries"
    ],
    minister: "Amanda Bernstein",
    ministerSince: "October 2025",
    established: "1976",
    mandate: "To develop and promote tourism, preserve cultural heritage, support arts and creative industries, and position Seychelles as a premier sustainable tourism destination.",
    vision: "A world-class sustainable tourism destination with vibrant culture and preserved heritage.",
    mission: "To promote sustainable tourism, preserve cultural heritage, support creative industries, and showcase Seychelles to the world.",
    leadership: {
      minister: "Amanda Bernstein",
      ministerSince: "October 2025",
      image: "/img/ministers/amanda-bernstein.jpg"
    },
    contact: {
      address: "Independence House, Victoria, Mahé, Seychelles",
      phone: "+248 4671300",
      email: "info@tourism.gov.sc",
      website: "https://www.tourism.gov.sc/"
    },
    departments: [
      {
        name: "Tourism Development Division",
        description: "Develops tourism policy and promotes destination marketing."
      },
      {
        name: "Culture and Heritage Division",
        description: "Preserves cultural heritage and manages cultural sites."
      },
      {
        name: "Arts and Creative Industries",
        description: "Supports artists and develops creative industries."
      },
      {
        name: "Tourism Standards and Quality",
        description: "Regulates tourism standards and quality assurance."
      }
    ],
    keyResponsibilities: [
      "Tourism development and promotion",
      "Cultural heritage preservation",
      "Arts and creative industries support",
      "Tourism regulation and standards",
      "Destination marketing",
      "Cultural events and festivals",
      "Tourism crisis management"
    ],
    drmdRole: "The Ministry manages tourism sector disaster response, coordinates tourist safety during emergencies, manages tourism crisis communication, and supports tourism sector recovery after disasters.",
    drmdCoordination: [
      "Coordinates tourist safety during disasters",
      "Manages tourism crisis communication",
      "Coordinates hotel and resort emergency response",
      "Provides tourist evacuation support",
      "Manages tourism sector recovery programs",
      "Coordinates with tourism industry on preparedness",
      "Protects cultural heritage during disasters"
    ],
    recentInitiatives: [
      {
        title: "Sustainable Tourism Strategy",
        description: "Developing environmentally and socially sustainable tourism.",
        year: "2024-2030",
        status: "ongoing",
        budget: "SCR 200 Million"
      },
      {
        title: "Cultural Heritage Preservation Program",
        description: "Protecting and promoting Seychellois cultural heritage.",
        year: "2023-2027",
        status: "ongoing"
      },
      {
        title: "Tourism Resilience Initiative",
        description: "Building disaster resilience in the tourism sector.",
        year: "2024-2026",
        status: "ongoing"
      }
    ],
    annualBudget: "SCR 350 Million",
    staffCount: "250+",
    relatedLinks: [
      { title: "Seychelles Tourism Board", url: "https://www.seychelles.travel/" },
      { title: "Cultural Heritage", url: "/tourism/heritage" },
      { title: "Creative Industries", url: "/tourism/creative" }
    ],
    organizationalStructure: {
      description: "The Ministry operates through four divisions managing tourism development, culture, and creative industries.",
      divisions: [
        "Tourism Development Division",
        "Culture and Heritage Division",
        "Arts and Creative Industries Division",
        "Tourism Standards and Quality Division"
      ]
    }
  }
};

