// Comprehensive Ministry Data for Seychelles Government - Part 2
// Ministries 5-15
// Source: Wikipedia - Cabinet of Seychelles (October 2025)
// https://en.wikipedia.org/wiki/Cabinet_of_Seychelles

import { Ministry } from './ministries-data';

export const ministriesDataPart2: Record<string, Ministry> = {
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
  },

  'transport': {
    id: 'transport',
    name: "Ministry of Transport, Port and Civil Aviation",
    shortName: "Transport Ministry",
    portfolio: [
      "Transport",
      "Port Services",
      "Civil Aviation",
      "Maritime Safety",
      "Road Infrastructure"
    ],
    minister: "Veronique Laporte",
    ministerSince: "October 2025",
    established: "1976",
    mandate: "To develop and manage safe, efficient, and sustainable transport systems including roads, ports, and aviation, ensuring connectivity across the islands and with the world.",
    vision: "A modern, safe, and efficient transport network connecting all Seychellois and supporting economic development.",
    mission: "To provide safe, reliable, and sustainable transport infrastructure and services for the movement of people and goods.",
    leadership: {
      minister: "Veronique Laporte",
      ministerSince: "October 2025",
      image: "/img/ministers/veronique-laporte.jpg"
    },
    contact: {
      address: "Oceangate House, Victoria, Mahé, Seychelles",
      phone: "+248 4384777",
      email: "info@transport.gov.sc",
      website: "https://www.transport.gov.sc/"
    },
    departments: [
      {
        name: "Land Transport Division",
        description: "Manages roads, public transport, and vehicle registration."
      },
      {
        name: "Seychelles Ports Authority",
        description: "Operates and manages seaports and maritime services."
      },
      {
        name: "Seychelles Civil Aviation Authority",
        description: "Regulates aviation and manages airports."
      },
      {
        name: "Maritime Safety Administration",
        description: "Ensures maritime safety and vessel registration."
      }
    ],
    keyResponsibilities: [
      "Road infrastructure development and maintenance",
      "Public transport services",
      "Port operations and maritime services",
      "Airport operations and aviation safety",
      "Maritime safety and vessel registration",
      "Transport policy and regulation",
      "Emergency transport coordination"
    ],
    drmdRole: "The Ministry ensures transport infrastructure resilience, coordinates emergency transportation, manages port and airport operations during disasters, and facilitates evacuation and relief supply logistics.",
    drmdCoordination: [
      "Coordinates emergency transportation services",
      "Manages port operations for relief supplies",
      "Ensures airport functionality during emergencies",
      "Coordinates evacuation transport",
      "Maintains critical transport infrastructure",
      "Facilitates inter-island emergency transport",
      "Manages road access for emergency vehicles"
    ],
    recentInitiatives: [
      {
        title: "Climate-Resilient Infrastructure Program",
        description: "Building disaster-resilient roads, ports, and airports.",
        year: "2024-2029",
        status: "ongoing",
        budget: "SCR 800 Million"
      },
      {
        title: "Public Transport Modernization",
        description: "Upgrading public bus services and infrastructure.",
        year: "2023-2026",
        status: "ongoing"
      }
    ],
    annualBudget: "SCR 700 Million",
    staffCount: "800+",
    relatedLinks: [
      { title: "Seychelles Ports Authority", url: "https://www.spa.gov.sc/" },
      { title: "Seychelles Civil Aviation Authority", url: "https://www.scaa.sc/" },
      { title: "Land Transport Division", url: "/transport/land" }
    ],
    organizationalStructure: {
      description: "The Ministry oversees four main divisions managing land, sea, and air transport.",
      divisions: [
        "Land Transport Division",
        "Seychelles Ports Authority",
        "Seychelles Civil Aviation Authority",
        "Maritime Safety Administration"
      ]
    }
  }
};

