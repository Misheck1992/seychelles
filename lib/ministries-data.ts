// Comprehensive Ministry Data for Seychelles Government
// Source: Wikipedia - Cabinet of Seychelles (October 2025)
// https://en.wikipedia.org/wiki/Cabinet_of_Seychelles
// Last Updated: December 2025

export interface MinistryLeadership {
  minister: string;
  ministerSince: string;
  principalSecretary?: string;
  directorGeneral?: string;
  image?: string;
}

export interface MinistryContact {
  address: string;
  phone: string;
  email: string;
  website: string;
  emergencyHotline?: string;
}

export interface MinistryDepartment {
  name: string;
  head?: string;
  description: string;
}

export interface MinistryInitiative {
  title: string;
  description: string;
  year: string;
  status: 'ongoing' | 'completed' | 'planned';
  budget?: string;
}

export interface Ministry {
  id: string;
  name: string;
  shortName: string;
  portfolio: string[];
  minister: string;
  ministerSince: string;
  established: string;
  mandate: string;
  vision: string;
  mission: string;
  leadership: MinistryLeadership;
  contact: MinistryContact;
  departments: MinistryDepartment[];
  keyResponsibilities: string[];
  drmdRole: string;
  drmdCoordination: string[];
  recentInitiatives: MinistryInitiative[];
  annualBudget?: string;
  staffCount?: string;
  relatedLinks: {
    title: string;
    url: string;
  }[];
  organizationalStructure: {
    description: string;
    divisions: string[];
  };
}

export const ministriesData: Record<string, Ministry> = {
  'vice-president': {
    id: 'vice-president',
    name: "Vice President's Office",
    shortName: "VP Office",
    portfolio: [
      "Information Communication Technology",
      "Digital Transformation",
      "Information",
      "Lands and Housing",
      "Seychelles Infrastructure Agency",
      "Poverty Alleviation",
      "Risk and Disaster Management"
    ],
    minister: "Sebastien Pillay",
    ministerSince: "October 2025",
    established: "1976",
    mandate: "The Vice President's Office oversees critical national infrastructure, digital transformation, disaster risk management, and poverty alleviation programs. It plays a central coordinating role in national development and emergency preparedness.",
    vision: "To build a resilient, digitally-enabled Seychelles with modern infrastructure and effective disaster preparedness systems.",
    mission: "To coordinate national development initiatives, manage disaster risks, drive digital transformation, and ensure sustainable infrastructure development for all Seychellois.",
    leadership: {
      minister: "Sebastien Pillay",
      ministerSince: "October 2025",
      image: "/img/ministers/sebastien-pillay.jpg"
    },
    contact: {
      address: "State House, Victoria, Mahé, Seychelles",
      phone: "+248 4295000",
      email: "vp@statehouse.gov.sc",
      website: "https://www.statehouse.gov.sc/"
    },
    departments: [
      {
        name: "Disaster Risk Management Division (DRMD)",
        description: "Coordinates national disaster preparedness, response, and recovery efforts across all sectors."
      },
      {
        name: "Department of Information Communications Technology",
        description: "Manages national ICT infrastructure and digital transformation initiatives."
      },
      {
        name: "Seychelles Infrastructure Agency",
        description: "Oversees major infrastructure projects and development."
      },
      {
        name: "Department of Lands and Housing",
        description: "Manages land allocation, housing development, and property registration."
      },
      {
        name: "Poverty Alleviation Unit",
        description: "Coordinates programs to reduce poverty and improve living standards."
      }
    ],
    keyResponsibilities: [
      "National disaster risk management coordination",
      "Digital transformation and e-government services",
      "National infrastructure development and maintenance",
      "Land management and housing policy",
      "Poverty reduction programs",
      "Emergency preparedness and response coordination",
      "National ICT policy and cybersecurity"
    ],
    drmdRole: "The Vice President's Office houses the Disaster Risk Management Division (DRMD), which serves as the central coordinating body for all disaster management activities in Seychelles. It leads the National Disaster Committee and coordinates with all ministries and agencies.",
    drmdCoordination: [
      "Chairs the National Disaster Committee",
      "Operates the National Emergency Operations Centre (NEOC)",
      "Coordinates inter-ministerial disaster response",
      "Develops national disaster management policies",
      "Manages early warning systems",
      "Coordinates international disaster assistance"
    ],
    recentInitiatives: [
      {
        title: "National Digital Transformation Strategy",
        description: "Comprehensive digitalization of government services and infrastructure.",
        year: "2024-2026",
        status: "ongoing",
        budget: "SCR 150 Million"
      },
      {
        title: "Disaster Risk Management Act Implementation",
        description: "Full implementation of the 2014 DRM Act across all sectors.",
        year: "2023-2025",
        status: "ongoing"
      },
      {
        title: "National Housing Development Program",
        description: "Construction of affordable housing units across Mahé, Praslin, and La Digue.",
        year: "2024-2027",
        status: "ongoing",
        budget: "SCR 500 Million"
      }
    ],
    annualBudget: "SCR 800 Million",
    staffCount: "250+",
    relatedLinks: [
      { title: "State House Official Website", url: "https://www.statehouse.gov.sc/" },
      { title: "DRMD Website", url: "https://www.drmd.sc/" },
      { title: "National Disaster Management Act 2014", url: "/documents/drm-act-2014.pdf" }
    ],
    organizationalStructure: {
      description: "The Vice President's Office operates through five main divisions, each headed by a Director or Principal Secretary, reporting directly to the Vice President.",
      divisions: [
        "Disaster Risk Management Division",
        "ICT and Digital Transformation Division",
        "Infrastructure Development Division",
        "Lands and Housing Division",
        "Poverty Alleviation and Social Programs Division"
      ]
    }
  },

  'finance': {
    id: 'finance',
    name: "Ministry of Finance, Economic Planning and Trade",
    shortName: "Finance Ministry",
    portfolio: [
      "Finance",
      "Economic Planning",
      "Trade",
      "Budget Management",
      "Revenue Collection",
      "Economic Policy"
    ],
    minister: "Pierre Laporte",
    ministerSince: "October 2025",
    established: "1976",
    mandate: "To manage the nation's finances, develop economic policies, promote trade, and ensure sustainable economic growth and fiscal stability for Seychelles.",
    vision: "A prosperous and resilient Seychelles economy with sustainable growth and equitable distribution of wealth.",
    mission: "To formulate and implement sound fiscal and economic policies that promote sustainable development, attract investment, and improve the standard of living for all Seychellois.",
    leadership: {
      minister: "Pierre Laporte",
      ministerSince: "October 2025",
      image: "/img/ministers/pierre-laporte.jpg"
    },
    contact: {
      address: "Liberty House, Victoria, Mahé, Seychelles",
      phone: "+248 4293000",
      email: "info@finance.gov.sc",
      website: "https://www.finance.gov.sc/"
    },
    departments: [
      {
        name: "Budget Division",
        description: "Prepares national budget and monitors government expenditure."
      },
      {
        name: "Revenue Division",
        description: "Manages tax collection and revenue generation."
      },
      {
        name: "Economic Planning Division",
        description: "Develops economic policies and national development plans."
      },
      {
        name: "Trade Division",
        description: "Promotes international trade and manages trade agreements."
      },
      {
        name: "Treasury Division",
        description: "Manages government cash flow and financial operations."
      }
    ],
    keyResponsibilities: [
      "National budget preparation and management",
      "Tax policy and revenue collection",
      "Economic planning and development",
      "Trade policy and international trade agreements",
      "Public debt management",
      "Financial sector regulation",
      "Investment promotion"
    ],
    drmdRole: "The Ministry of Finance plays a critical role in disaster management by allocating emergency funds, managing disaster recovery financing, and coordinating international financial assistance for disaster response and recovery.",
    drmdCoordination: [
      "Allocates emergency disaster response funds",
      "Manages disaster recovery financing",
      "Coordinates international financial assistance",
      "Provides budget support for DRMD operations",
      "Facilitates insurance and risk financing mechanisms",
      "Supports economic recovery after disasters"
    ],
    recentInitiatives: [
      {
        title: "National Economic Recovery Plan",
        description: "Post-pandemic economic recovery and resilience building.",
        year: "2023-2025",
        status: "ongoing",
        budget: "SCR 2 Billion"
      },
      {
        title: "Digital Tax System Implementation",
        description: "Modernization of tax collection and revenue management systems.",
        year: "2024-2026",
        status: "ongoing"
      },
      {
        title: "Disaster Risk Financing Strategy",
        description: "Development of comprehensive disaster risk financing mechanisms.",
        year: "2024-2027",
        status: "ongoing"
      }
    ],
    annualBudget: "SCR 1.5 Billion",
    staffCount: "400+",
    relatedLinks: [
      { title: "Ministry of Finance Website", url: "https://www.finance.gov.sc/" },
      { title: "National Budget Documents", url: "/documents/budget" },
      { title: "Seychelles Revenue Commission", url: "https://www.src.gov.sc/" }
    ],
    organizationalStructure: {
      description: "The Ministry operates through five main divisions under the leadership of the Minister and Principal Secretary.",
      divisions: [
        "Budget Division",
        "Revenue Division",
        "Economic Planning Division",
        "Trade Division",
        "Treasury Division"
      ]
    }
  },

  'health': {
    id: 'health',
    name: "Ministry of Health",
    shortName: "Health Ministry",
    portfolio: [
      "Health",
      "Policy, Planning & Regulation",
      "Public Health",
      "Medical Services",
      "Health Infrastructure"
    ],
    minister: "Marvin Fanny",
    ministerSince: "October 2025",
    established: "1976",
    mandate: "To provide accessible, quality healthcare services to all Seychellois and ensure the health and well-being of the population through effective health policies, programs, and emergency medical response.",
    vision: "A healthy nation with universal access to quality healthcare services and strong health emergency preparedness.",
    mission: "To promote, protect, and improve the health of all people in Seychelles through comprehensive health services, disease prevention, and emergency medical response.",
    leadership: {
      minister: "Marvin Fanny",
      ministerSince: "October 2025",
      image: "/img/ministers/marvin-fanny.jpg"
    },
    contact: {
      address: "Mont Fleuri, Victoria, Mahé, Seychelles",
      phone: "+248 4388000",
      email: "info@health.gov.sc",
      website: "https://www.health.gov.sc/",
      emergencyHotline: "+248 999"
    },
    departments: [
      {
        name: "Public Health Division",
        description: "Manages disease surveillance, prevention programs, and health promotion."
      },
      {
        name: "Clinical Services Division",
        description: "Oversees hospital and clinical care services across the islands."
      },
      {
        name: "Health Emergency Preparedness",
        description: "Coordinates health emergency response and pandemic preparedness."
      },
      {
        name: "Primary Health Care Division",
        description: "Manages health centers and community health services."
      },
      {
        name: "Pharmaceutical Services",
        description: "Manages drug procurement, storage, and distribution."
      }
    ],
    keyResponsibilities: [
      "Provision of healthcare services",
      "Disease surveillance and control",
      "Health emergency preparedness and response",
      "Public health programs and health promotion",
      "Medical infrastructure development",
      "Pharmaceutical management",
      "Health policy development and regulation"
    ],
    drmdRole: "The Ministry of Health is a critical partner in disaster management, providing emergency medical services, managing health emergencies, coordinating medical response during disasters, and ensuring continuity of healthcare services.",
    drmdCoordination: [
      "Operates Public Health Emergency Operations Centre (PHEOC)",
      "Provides emergency medical services during disasters",
      "Manages pandemic and disease outbreak response",
      "Coordinates medical evacuation and triage",
      "Ensures continuity of essential health services",
      "Manages emergency medical supplies and equipment",
      "Provides mental health support during emergencies"
    ],
    recentInitiatives: [
      {
        title: "COVID-19 Response and Recovery",
        description: "Comprehensive pandemic response and health system strengthening.",
        year: "2020-2025",
        status: "ongoing",
        budget: "SCR 300 Million"
      },
      {
        title: "Health Infrastructure Modernization",
        description: "Upgrading hospitals and health centers across the islands.",
        year: "2024-2027",
        status: "ongoing",
        budget: "SCR 400 Million"
      },
      {
        title: "Emergency Medical Services Enhancement",
        description: "Strengthening ambulance services and emergency response capacity.",
        year: "2024-2026",
        status: "ongoing"
      }
    ],
    annualBudget: "SCR 1.2 Billion",
    staffCount: "1,500+",
    relatedLinks: [
      { title: "Ministry of Health Website", url: "https://www.health.gov.sc/" },
      { title: "Seychelles Hospital", url: "https://www.hospital.gov.sc/" },
      { title: "Public Health Authority", url: "/health/public-health" }
    ],
    organizationalStructure: {
      description: "The Ministry operates through five main divisions managing hospitals, health centers, and specialized health services.",
      divisions: [
        "Public Health Division",
        "Clinical Services Division",
        "Health Emergency Preparedness Division",
        "Primary Health Care Division",
        "Pharmaceutical Services Division"
      ]
    }
  },

  'employment': {
    id: 'employment',
    name: "Ministry of Employment and Human Resource Planning",
    shortName: "Employment Ministry",
    portfolio: [
      "Employment",
      "Human Resource Planning",
      "Labour Relations and Regulations",
      "Workforce Development",
      "Skills Training"
    ],
    minister: "Idith Alexander",
    ministerSince: "October 2025",
    established: "2020",
    mandate: "To promote full employment, develop human resources, regulate labour relations, and ensure a skilled and productive workforce for Seychelles' economic development.",
    vision: "A skilled, productive, and fully employed workforce contributing to national development and prosperity.",
    mission: "To create employment opportunities, develop human capital, ensure fair labour practices, and build a competitive workforce for Seychelles.",
    leadership: {
      minister: "Idith Alexander",
      ministerSince: "October 2025",
      image: "/img/ministers/idith-alexander.jpg"
    },
    contact: {
      address: "National House, Victoria, Mahé, Seychelles",
      phone: "+248 4293000",
      email: "info@employment.gov.sc",
      website: "https://www.employment.gov.sc/"
    },
    departments: [
      {
        name: "Employment Services Division",
        description: "Manages job placement, employment programs, and labour market information."
      },
      {
        name: "Labour Relations Division",
        description: "Regulates labour relations, workplace standards, and dispute resolution."
      },
      {
        name: "Human Resource Planning Division",
        description: "Develops workforce planning strategies and skills development programs."
      },
      {
        name: "Occupational Safety and Health",
        description: "Ensures workplace safety and health standards."
      }
    ],
    keyResponsibilities: [
      "Employment promotion and job creation",
      "Labour market regulation and standards",
      "Workforce development and skills training",
      "Labour relations and dispute resolution",
      "Occupational safety and health",
      "Human resource planning",
      "Employment services and job placement"
    ],
    drmdRole: "The Ministry ensures workforce continuity during disasters, coordinates emergency employment programs, manages displaced workers, and ensures workplace safety during emergencies.",
    drmdCoordination: [
      "Coordinates emergency employment programs",
      "Manages displaced worker support",
      "Ensures workplace safety during disasters",
      "Provides labour for disaster response and recovery",
      "Coordinates skills training for disaster resilience",
      "Supports business continuity planning"
    ],
    recentInitiatives: [
      {
        title: "National Skills Development Program",
        description: "Comprehensive skills training for emerging sectors and disaster resilience.",
        year: "2024-2026",
        status: "ongoing",
        budget: "SCR 80 Million"
      },
      {
        title: "Youth Employment Initiative",
        description: "Creating employment opportunities for young Seychellois.",
        year: "2023-2025",
        status: "ongoing"
      }
    ],
    annualBudget: "SCR 200 Million",
    staffCount: "150+",
    relatedLinks: [
      { title: "Ministry of Employment Website", url: "https://www.employment.gov.sc/" },
      { title: "Employment Services", url: "/employment/services" },
      { title: "Labour Laws and Regulations", url: "/employment/labour-laws" }
    ],
    organizationalStructure: {
      description: "The Ministry operates through four main divisions focused on employment services, labour relations, and workforce development.",
      divisions: [
        "Employment Services Division",
        "Labour Relations Division",
        "Human Resource Planning Division",
        "Occupational Safety and Health Division"
      ]
    }
  },

  'homeland-security': {
    id: 'homeland-security',
    name: "Ministry of Homeland Security and Civil Affairs",
    shortName: "Homeland Security",
    portfolio: [
      "Homeland Security",
      "Civil Affairs",
      "Police Services",
      "Prisons",
      "Immigration",
      "Civil Status"
    ],
    minister: "James Camille",
    ministerSince: "October 2025",
    established: "2020",
    mandate: "To ensure national security, maintain law and order, manage immigration and civil status, and protect the safety and security of all people in Seychelles.",
    vision: "A safe and secure Seychelles with effective law enforcement, border control, and civil protection systems.",
    mission: "To protect national security, maintain public order, manage borders and immigration, and ensure the safety and security of all residents and visitors.",
    leadership: {
      minister: "James Camille",
      ministerSince: "October 2025",
      image: "/img/ministers/james-camille.jpg"
    },
    contact: {
      address: "Independence House, Victoria, Mahé, Seychelles",
      phone: "+248 4286000",
      email: "info@homeaffairs.gov.sc",
      website: "https://www.homeaffairs.gov.sc/",
      emergencyHotline: "+248 999"
    },
    departments: [
      {
        name: "Seychelles Police Force",
        description: "Maintains law and order, prevents and investigates crime."
      },
      {
        name: "Seychelles Prison Service",
        description: "Manages correctional facilities and rehabilitation programs."
      },
      {
        name: "Immigration and Civil Status Department",
        description: "Manages immigration, border control, and civil registration."
      },
      {
        name: "Civil Protection Unit",
        description: "Coordinates civil protection and emergency response."
      },
      {
        name: "Fire and Rescue Services",
        description: "Provides fire prevention, firefighting, and rescue services."
      }
    ],
    keyResponsibilities: [
      "Law enforcement and crime prevention",
      "Border control and immigration management",
      "Civil registration and documentation",
      "Prison management and rehabilitation",
      "Fire and rescue services",
      "Civil protection and emergency response",
      "National security coordination"
    ],
    drmdRole: "The Ministry plays a crucial role in disaster response through police, fire, and rescue services. It coordinates security during emergencies, manages evacuations, and provides first responder services.",
    drmdCoordination: [
      "Provides police services during disasters",
      "Coordinates fire and rescue operations",
      "Manages emergency evacuations",
      "Ensures security in disaster-affected areas",
      "Coordinates search and rescue operations",
      "Manages emergency shelters security",
      "Provides first responder services"
    ],
    recentInitiatives: [
      {
        title: "Emergency Response Capacity Building",
        description: "Enhancing fire, rescue, and emergency response capabilities.",
        year: "2024-2026",
        status: "ongoing",
        budget: "SCR 120 Million"
      },
      {
        title: "Border Security Enhancement",
        description: "Modernizing immigration and border control systems.",
        year: "2023-2025",
        status: "ongoing"
      },
      {
        title: "Community Policing Program",
        description: "Strengthening police-community relations and crime prevention.",
        year: "2024-2027",
        status: "ongoing"
      }
    ],
    annualBudget: "SCR 600 Million",
    staffCount: "1,200+",
    relatedLinks: [
      { title: "Seychelles Police Force", url: "https://www.police.gov.sc/" },
      { title: "Immigration Department", url: "https://www.immigration.gov.sc/" },
      { title: "Fire and Rescue Services", url: "/fire-rescue" }
    ],
    organizationalStructure: {
      description: "The Ministry oversees five major departments responsible for security, law enforcement, and civil protection.",
      divisions: [
        "Seychelles Police Force",
        "Seychelles Prison Service",
        "Immigration and Civil Status Department",
        "Civil Protection Unit",
        "Fire and Rescue Services"
      ]
    }
  },

  'education': {
    id: 'education',
    name: "Ministry of Education and Human Resource Development",
    shortName: "Education Ministry",
    portfolio: [
      "Education",
      "Human Resource Development",
      "Educational Support and Projects",
      "Early Childhood Development",
      "Tertiary Education"
    ],
    minister: "David Pierre",
    ministerSince: "October 2025",
    established: "1976",
    mandate: "To provide quality education for all Seychellois, develop human resources, and build a skilled and knowledgeable population capable of contributing to national development.",
    vision: "An educated and skilled nation with world-class education systems and lifelong learning opportunities.",
    mission: "To provide accessible, quality education at all levels, develop human potential, and prepare Seychellois for success in a changing world.",
    leadership: {
      minister: "David Pierre",
      ministerSince: "October 2025",
      image: "/img/ministers/david-pierre.jpg"
    },
    contact: {
      address: "Mont Fleuri, Victoria, Mahé, Seychelles",
      phone: "+248 4283000",
      email: "info@education.gov.sc",
      website: "https://www.education.gov.sc/"
    },
    departments: [
      {
        name: "Early Childhood Development",
        description: "Manages crèches and pre-primary education."
      },
      {
        name: "Primary and Secondary Education",
        description: "Oversees primary and secondary schools across the islands."
      },
      {
        name: "Tertiary Education Division",
        description: "Manages post-secondary education and scholarships."
      },
      {
        name: "Curriculum Development",
        description: "Develops and updates national curriculum and educational standards."
      },
      {
        name: "Educational Support Services",
        description: "Provides special education and student support services."
      }
    ],
    keyResponsibilities: [
      "Provision of quality education at all levels",
      "Curriculum development and educational standards",
      "Teacher training and professional development",
      "Educational infrastructure development",
      "Student welfare and support services",
      "Tertiary education and scholarships",
      "Disaster preparedness education in schools"
    ],
    drmdRole: "The Ministry ensures school safety during disasters, coordinates school-based disaster preparedness programs, manages school closures and reopening, and provides educational continuity during emergencies.",
    drmdCoordination: [
      "Implements school disaster preparedness programs",
      "Coordinates school evacuations and safety",
      "Manages school closures during disasters",
      "Provides educational continuity during emergencies",
      "Integrates disaster risk reduction in curriculum",
      "Coordinates use of schools as emergency shelters",
      "Provides psychosocial support to students"
    ],
    recentInitiatives: [
      {
        title: "School Infrastructure Modernization",
        description: "Upgrading and building climate-resilient schools.",
        year: "2024-2028",
        status: "ongoing",
        budget: "SCR 350 Million"
      },
      {
        title: "Digital Learning Initiative",
        description: "Integrating technology in education and e-learning platforms.",
        year: "2023-2026",
        status: "ongoing"
      },
      {
        title: "Disaster Risk Reduction Education Program",
        description: "Integrating DRR into school curriculum and safety programs.",
        year: "2024-2027",
        status: "ongoing"
      }
    ],
    annualBudget: "SCR 900 Million",
    staffCount: "2,000+",
    relatedLinks: [
      { title: "Ministry of Education Website", url: "https://www.education.gov.sc/" },
      { title: "Seychelles Institute of Teacher Education", url: "/education/site" },
      { title: "School Safety Guidelines", url: "/education/safety" }
    ],
    organizationalStructure: {
      description: "The Ministry operates through five main divisions managing education from early childhood to tertiary level.",
      divisions: [
        "Early Childhood Development Division",
        "Primary and Secondary Education Division",
        "Tertiary Education Division",
        "Curriculum Development Division",
        "Educational Support Services Division"
      ]
    }
  }
};

// Export helper functions
export function getMinistryById(id: string): Ministry | undefined {
  return ministriesData[id];
}

export function getAllMinistries(): Ministry[] {
  return Object.values(ministriesData);
}

export function getMinisteriesByDRMDRole(): Ministry[] {
  return getAllMinistries().filter(ministry => ministry.drmdRole && ministry.drmdRole.length > 0);
}

