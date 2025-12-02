export const navigationLinks = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "#",
    dropdown: true,
    submenu: [
      { name: "Know Us", href: "/about" },
      { name: "FAQs", href: "/faq" }
    ]
  },
  {
    name: "Ministries",
    href: "#",
    dropdown: true,
    megaMenu: true,
    columns: [
      [
        { name: "Finance, Economic Planning & Trade", href: "/council" },
        { name: "Health", href: "/council" },
        { name: "Employment & Human Resource Planning", href: "/council" },
        { name: "Homeland Security & Civil Affairs", href: "/council" }
      ],
      [
        { name: "Education & Human Resource Development", href: "/council" },
        { name: "Transport, Port & Civil Aviation", href: "/council" },
        { name: "Local Government & Inner Islands", href: "/council" },
        { name: "Youth & Sports", href: "/council" }
      ],
      [
        { name: "Fisheries & Blue Economy", href: "/council" },
        { name: "Foreign Affairs & Diaspora", href: "/council" },
        { name: "Social Affairs, Family & Equality", href: "/council" },
        { name: "Environment, Climate, Energy & Natural Resources", href: "/council" }
      ],
      [
        { name: "Industry & Enterprise", href: "/council" },
        { name: "Tourism & Culture", href: "/council" },
        { name: "Vice President's Office", href: "/council" }
      ]
    ]
  },
  {
    name: "Districts",
    href: "#",
    dropdown: true,
    megaMenu: true,
    columns: [
      [
        // Greater Victoria Districts (8 districts)
        { name: "Bel Air", href: "/districts/bel-air" },
        { name: "English River", href: "/districts/english-river" },
        { name: "Les Mamelles", href: "/districts/les-mamelles" },
        { name: "Mont Buxton", href: "/districts/mont-buxton" },
        { name: "Mont Fleuri", href: "/districts/mont-fleuri" },
        { name: "Plaisance", href: "/districts/plaisance" },
        { name: "Roche Caïman", href: "/districts/roche-caiman" },
        { name: "Saint Louis", href: "/districts/saint-louis" }
      ],
      [
        // East Mahé Districts
        { name: "Anse aux Pins", href: "/districts/anse-aux-pins" },
        { name: "Au Cap", href: "/districts/au-cap" },
        { name: "Cascade", href: "/districts/cascade" },
        { name: "Pointe La Rue", href: "/districts/pointe-larue" },
        // North Mahé Districts
        { name: "Anse Etoile", href: "/districts/anse-etoile" },
        { name: "Beau Vallon", href: "/districts/beau-vallon" },
        { name: "Glacis", href: "/districts/glacis" }
      ],
      [
        // West Mahé Districts
        { name: "Anse Boileau", href: "/districts/anse-boileau" },
        { name: "Bel Ombre", href: "/districts/bel-ombre" },
        { name: "Grand'Anse Mahé", href: "/districts/grand-anse-mahe" },
        { name: "Port Glaud", href: "/districts/port-glaud" },
        // South Mahé Districts
        { name: "Anse Royale", href: "/districts/anse-royale" },
        { name: "Baie Lazare", href: "/districts/baie-lazare" },
        { name: "Takamaka", href: "/districts/takamaka" }
      ],
      [
        // Praslin Districts
        { name: "Baie Sainte Anne", href: "/districts/baie-sainte-anne" },
        { name: "Grand'Anse Praslin", href: "/districts/grand-anse-praslin" },
        // La Digue
        { name: "La Digue", href: "/districts/la-digue" },
        // Outer Islands
        { name: "Outer Islands", href: "/districts/outer-islands" }
      ]
    ]
  },
  {
    name: "Outer Islands",
    href: "#",
    dropdown: true,
    submenu: [
      { name: "Aldabra Atoll", href: "/district" },
      { name: "Alphonse Group", href: "/district" },
      { name: "Amirantes Group", href: "/district" },
      { name: "Farquhar Group", href: "/district" }
    ]
  },
  {
    name: "Resources",
    href: "#",
    dropdown: true,
    submenu: [
      { name: "Infographics", href: "/documents" },
      { name: "Documents", href: "/documents" },
      { name: "Interactive Maps", href: "/documents" },
      { name: "Forms", href: "/documents" },
      { name: "User Manuals", href: "/documents" }
    ]
  },
  { name: "Contact Us", href: "/contact" }
]

export const featuredDocuments = [
  {
    id: 1,
    title: "National Disaster Response Plan",
    description: "Comprehensive plan for coordinated disaster response across all agencies",
    category: "orange",
    fileType: "PDF",
    fileSize: "4.2 MB",
    url: "/documents/national-disaster-response-plan.pdf",
  },
  {
    id: 2,
    title: "Community-Based Disaster Risk Reduction Manual",
    description: "Guidelines for implementing disaster risk reduction at the community level",
    category: "blue",
    fileType: "PDF",
    fileSize: "3.8 MB",
    url: "/documents/community-based-drr-manual.pdf",
  },
  {
    id: 3,
    title: "Climate Change Adaptation Strategy",
    description: "Strategic framework for adapting to climate change impacts on vulnerable sectors",
    category: "purple",
    fileType: "PDF",
    fileSize: "5.1 MB",
    url: "/documents/climate-change-adaptation-strategy.pdf",
  },
  {
    id: 4,
    title: "Emergency Operations Protocol",
    description: "Standard operating procedures for emergency response operations",
    category: "orange",
    fileType: "PDF",
    fileSize: "2.3 MB",
    url: "/documents/emergency-operations-protocol.pdf",
  },
]

export const recentDocuments = [
  {
    id: 1,
    title: "Cyclone Preparedness Guide",
    date: "April 15, 2023",
    size: "3.2 MB",
    type: "PDF",
    url: "/documents/cyclone-preparedness-guide.pdf",
  },
  {
    id: 2,
    title: "Flood Evacuation Plans",
    date: "March 22, 2023",
    size: "2.8 MB",
    type: "PDF",
    url: "/documents/flood-evacuation-plans.pdf",
  },
  {
    id: 3,
    title: "Emergency Shelter Guidelines",
    date: "March 10, 2023",
    size: "4.5 MB",
    type: "PDF",
    url: "/documents/emergency-shelter-guidelines.pdf",
  },
  {
    id: 4,
    title: "Post-Disaster Needs Assessment",
    date: "February 28, 2023",
    size: "5.1 MB",
    type: "PDF",
    url: "/documents/post-disaster-needs-assessment.pdf",
  },
  {
    id: 5,
    title: "Disaster Contingency Plan",
    date: "February 15, 2023",
    size: "6.7 MB",
    type: "PDF",
    url: "/documents/disaster-contingency-plan.pdf",
  },
]

export const dashboardStats = [
  {
    id: 1,
    title: "Current Alerts by Region",
    image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=250&h=150&fit=crop",
    description: "Active alerts across different regions",
  },
  {
    id: 2,
    title: "Past Disasters by Category",
    image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=250&h=150&fit=crop",
    description: "Historical disaster events by type",
  },
  {
    id: 3,
    title: "Resource Distribution Status",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=250&h=150&fit=crop",
    description: "Current resource allocation across affected areas",
  },
]

// Source: https://www.drmd.sc/
export const keyPersonnel = [
  {
    id: 1,
    name: "DRMD Leadership",
    title: "Director General",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
    contact: "+248 4389898",
  },
  {
    id: 2,
    name: "Operations Team",
    title: "Deputy Director for Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
    contact: "+248 4389898",
  },
  {
    id: 3,
    name: "DRR Team",
    title: "Chief, Disaster Risk Reduction",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
    contact: "+248 4389898",
  },
]

export const latestNews = [
  {
    id: 1,
    title: "DRMD Conducts Nationwide Disaster Preparedness Exercise",
    summary: "A nationwide disaster preparedness exercise was conducted to test emergency response capabilities",
    date: "April 20, 2023",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=250&h=150&fit=crop",
    url: "/news/nationwide-preparedness-exercise",
  },
  {
    id: 2,
    title: "New Early Warning System Deployed",
    summary: "State-of-the-art early warning systems have been installed in coastal areas",
    date: "April 12, 2023",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=250&h=150&fit=crop",
    url: "/news/early-warning-system",
  },
  {
    id: 3,
    title: "Community Resilience Program Launched",
    summary: "A new program aimed at building community resilience to disasters has been launched",
    date: "April 5, 2023",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=250&h=150&fit=crop",
    url: "/news/community-resilience-program",
  },
]

export const quickLinks = [
  { name: "Disaster Preparedness", href: "/preparedness" },
  { name: "Emergency Hotlines", href: "/hotlines" },
  { name: "Evacuation Centers", href: "/evacuation" },
  { name: "Safety Tips", href: "/safety-tips" },
  { name: "Volunteer", href: "/volunteer" },
  { name: "Donate", href: "/donate" },
]

export const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: "Facebook" },
  { name: "Twitter", href: "https://twitter.com", icon: "Twitter" },
  { name: "YouTube", href: "https://youtube.com", icon: "Youtube" },
  { name: "Instagram", href: "https://instagram.com", icon: "Instagram" },
]

export const footerLinks = {
  aboutUs: [
    { name: "About DRMD", href: "/about" },
    { name: "Leadership", href: "/leadership" },
    { name: "Mission & Vision", href: "/mission-vision" },
    { name: "History", href: "/history" },
  ],
  quickLinks: [
    { name: "Emergency Alerts", href: "/alerts" },
    { name: "Disaster Stats", href: "/stats" },
    { name: "Resources", href: "/resources" },
    { name: "Donations", href: "/donate" },
  ],
  contactInfo: [
    { name: "Phone", value: "+248 4389898" },
    { name: "Email", value: "info@drmd.sc" },
    { name: "Address", value: "Global Village, Suite no 3, Mont Fleuri, Mahe, P.O. Box 113, Victoria, Mahe, Seychelles" },
  ],
}

// Source: https://www.drmd.sc/about-us/
export const aboutContent = {
  subtitle: "Be Aware, Be Prepared!",
  description:
    "Despite having being lawfully established in 2014 by enactment of the Disaster Risk Management Act, disaster risk management as a government pre-occupation started decades prior. In August 2014, the Disaster Risk Management Act was assented and established the Disaster Risk Management Division as a division within the government of Seychelles for effective management of disaster through a comprehensive and integrated all hazard approach and for matters connected therewith or incidents thereto.",
  mission:
    "To promote disaster risk management best practices nationally. To strive for a disaster resilient Seychelles.",
  vision: "To be the centre of excellence for disaster risk management amongst small island developing states.",
  mandate: "In accordance to the Disaster Risk Management Act, 2014 the Disaster Risk Management Division is established for the effective management of disaster through a comprehensive and integrated all-hazard approach and for matters connected therewith or incidental thereto.",
  values: ["Excellence", "Integrity", "Inclusivity", "Compassion", "Passion"],
  motto: "Be aware, be prepared!",
  image: "/placeholder.svg?height=400&width=600",
}

// Source: https://www.drmd.sc/about-us/
export const drmdHistory = [
  {
    year: "1995",
    title: "National Disaster Committee (NDC)",
    description: "A National Disaster Committee (NDC) was created and its mandate was to study the different natural disasters which may strike the islands of Seychelles. Its prime objectives were prevention and preparation of National Disaster Response Plan (NDPR)."
  },
  {
    year: "2004",
    title: "National Disaster Secretariat",
    description: "In October 2004 the National Disaster Secretariat for the NDC was established. Two months later on 26th December 2004 a tsunami that was triggered by an earthquake with the epicentre off the west coast of Sumatra, Indonesia, impacted Seychelles."
  },
  {
    year: "2006",
    title: "Division of Risk and Disaster Management",
    description: "The Division of Risk and Disaster Management was established under the Vice President's Office."
  },
  {
    year: "2010",
    title: "Division Split",
    description: "The organisation was split into 2 divisions; i.e.; the Disaster and Risk Management and the Operation, Education and Communication divisions with two directors general at the helm of each."
  },
  {
    year: "2012",
    title: "Divisions Merged",
    description: "The two divisions were merged into one with one director general as the head."
  },
  {
    year: "2014",
    title: "Disaster Risk Management Act",
    description: "In August 2014, the Disaster Risk Management Act was assented and established the Disaster Risk Management Division as a division within the government of Seychelles for effective management of disaster through a comprehensive and integrated all hazard approach and for matters connected therewith or incidents thereto."
  }
]

// Source: https://www.drmd.sc/ - Disaster Risk Management Cycle
export const disasterRiskManagementCycle = {
  mitigation: {
    title: "Mitigation",
    description: "The lessening or limitation of the adverse impacts of hazards and related disasters."
  },
  preparedness: {
    title: "Preparedness",
    description: "The knowledge and capacities developed by governments, professional response and recovery organizations, communities and individuals to effectively anticipate, respond to, and recover from, the impacts of likely, imminent or current hazard events or conditions."
  },
  response: {
    title: "Response",
    description: "The provision of emergency services and public assistance during or immediately after a disaster in order to save lives, reduce health impacts, ensure public safety and meet the basic subsistence needs of the people affected."
  },
  recovery: {
    title: "Recovery",
    description: "The restoration, and improvement where appropriate, of facilities, livelihoods and living conditions of disaster-affected communities, including efforts to reduce disaster risk factors."
  }
}

// Source: https://www.drmd.sc/ - Mitigating Disasters section
export const seychellesHazards = [
  { name: "Flooding", icon: "water", description: "Flood risks and preparedness measures" },
  { name: "Landslides", icon: "mountain", description: "Landslide hazards in hilly terrain" },
  { name: "Fire", icon: "flame", description: "Fire safety and prevention" },
  { name: "Tsunami", icon: "wave", description: "Coastal tsunami preparedness" },
  { name: "Storms", icon: "cloud-lightning", description: "Storm preparedness and safety" },
  { name: "Heavy Wind", icon: "wind", description: "High wind conditions and safety measures" }
]

export const services = [
  {
    id: 1,
    title: "Disaster Preparedness",
    description: "Equipping communities with the knowledge and tools to prepare for disasters.",
    icon: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=300&h=200&fit=crop",
    url: "/services/preparedness",
  },
  {
    id: 2,
    title: "Emergency Response",
    description: "Providing immediate assistance and support during disasters.",
    icon: "Siren",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop",
    url: "/services/response",
  },
  {
    id: 3,
    title: "Rehabilitation and Recovery",
    description: "Helping communities rebuild and recover after disasters.",
    icon: "Building",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=200&fit=crop",
    url: "/services/rehabilitation",
  },
  {
    id: 4,
    title: "Risk Assessment",
    description: "Identifying and assessing disaster risks to inform prevention and mitigation efforts.",
    icon: "Shield",
    image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=300&h=200&fit=crop",
    url: "/services/risk-assessment",
  },
]

// Source: https://www.drmd.sc/
export const newsUpdates = [
  {
    id: 1,
    title: "World Tsunami Awareness Day 2025 Photo Competition",
    excerpt:
      "As part of activities to commemorate World Tsunami Awareness Day 2025, the DRMD launched a 'Get To High Ground' photo competition encouraging public participation.",
    date: "November 14, 2025",
    category: "Awareness",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=300&h=200&fit=crop",
    url: "/news/world-tsunami-awareness-day-2025",
  },
  {
    id: 2,
    title: "IOWAVE2025 Tsunami Preparedness Exercise",
    excerpt:
      "The National Emergency Operations Centre (NEOC) and national key stakeholders participated in the 15th edition of the regional Indian Ocean Wave Exercise.",
    date: "November 7, 2025",
    category: "Exercise",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop",
    url: "/news/iowave2025-exercise",
  },
  {
    id: 3,
    title: "Youth Engagement in Disaster Risk Reduction",
    excerpt:
      "DRMD partnered with the Seychelles Institute of Technology to engage future mechanical engineers in disaster risk reduction as part of IDDRR 2025.",
    date: "October 22, 2025",
    category: "Youth Engagement",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop",
    url: "/news/youth-engagement-iddrr-2025",
  },
]

// Source: https://www.drmd.sc/
export const galleryImages = [
  {
    id: 1,
    title: "IOWAVE2025 Exercise",
    description: "National Emergency Operations Centre participating in the Indian Ocean Wave Exercise.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Flood Response",
    description: "DRMD response team during the December 2023 flooding in Bel Ombre and Beau Vallon.",
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Community Training",
    description: "DRMD personnel conducting disaster preparedness training in Victoria.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
  },
]

// Source: https://www.drmd.sc/
export const contactInfo = {
  address: "Global Village, Suite no 3, Mont Fleuri, Mahe, P.O. Box 113, Victoria, Mahe, Seychelles",
  phone: "+248 4389898",
  email: "info@drmd.sc",
  hours: "Monday to Friday, 8:00 AM to 5:00 PM",
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.624944242483!2d121.0509717148379!3d14.60107878982494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b008720e8efd%3A0x25c0e964919d3c1f!2sDRMD!5e0!3m2!1sen!2sph!4v1684227844834!5m2!1sen!2sph",
}

// Source: https://www.drmd.sc/ - Seychelles-specific hazards
export const disasterAlerts = [
  {
    id: 1,
    title: "Heavy Rainfall Advisory",
    severity: "warning",
    date: "November 2025",
    description: "Heavy rainfall expected across Mahé. Residents in flood-prone areas should remain vigilant.",
    regions: ["Bel Ombre", "Beau Vallon", "Glacis", "St. Louis"],
    actions: "Monitor weather updates, avoid low-lying areas, and prepare emergency supplies.",
  },
  {
    id: 2,
    title: "Monsoon Season Preparedness",
    severity: "info",
    date: "November 2025",
    description: "The northwest monsoon season is approaching. Increased rainfall and occasional storms expected.",
    regions: ["All Mahé Districts", "Praslin", "La Digue"],
    actions: "Secure outdoor items, clear drainage channels, and review family emergency plans.",
  },
  {
    id: 3,
    title: "Coastal Erosion Monitoring",
    severity: "info",
    date: "October 2025",
    description: "Ongoing monitoring of coastal erosion in affected areas. Beach access may be restricted.",
    regions: ["Beau Vallon", "Anse Royale", "Grand'Anse Praslin"],
    actions: "Observe warning signs, avoid unstable coastal areas, and report erosion to authorities.",
  },
]

export const resources = [
  {
    id: 1,
    title: "Disaster Preparedness Guide",
    description: "A comprehensive guide on how to prepare for different types of disasters.",
    type: "Guide",
    icon: "FileText",
    url: "/resources/disaster-preparedness-guide",
  },
  {
    id: 2,
    title: "Emergency Contact Numbers",
    description: "A list of important contact numbers for emergencies.",
    type: "Contact List",
    icon: "Phone",
    url: "/resources/emergency-contacts",
  },
  {
    id: 3,
    title: "Evacuation Center Map",
    description: "A map showing the locations of evacuation centers in your area.",
    type: "Map",
    icon: "Map",
    url: "/resources/evacuation-map",
  },
]

export const statistics = [
  {
    id: 1,
    title: "People Trained in Disaster Preparedness",
    value: "15,000+",
    icon: "Users",
  },
  {
    id: 2,
    title: "Families Provided with Emergency Shelter",
    value: "8,000+",
    icon: "Home",
  },
  {
    id: 3,
    title: "Disaster Alerts Issued",
    value: "250+",
    icon: "AlertTriangle",
  },
]

// Seychelles DRMD partners and international organizations
export const partners = [
  {
    id: 1,
    name: "Seychelles Red Cross Society",
    logo: "/placeholder.svg?height=50&width=100",
    url: "https://www.redcross.sc",
  },
  {
    id: 2,
    name: "United Nations Office for Disaster Risk Reduction (UNDRR)",
    logo: "/placeholder.svg?height=50&width=100",
    url: "https://www.undrr.org",
  },
  {
    id: 3,
    name: "Indian Ocean Commission (IOC)",
    logo: "/placeholder.svg?height=50&width=100",
    url: "https://www.commissionoceanindien.org",
  },
  {
    id: 4,
    name: "UNESCO IOC Tsunami Programme",
    logo: "/placeholder.svg?height=50&width=100",
    url: "https://www.ioc-tsunami.org",
  },
]

// Source: https://www.drmd.sc/disaster/ - Major Historical Disaster Events in Seychelles
export const historicalDisasterEvents = [
  {
    id: 1,
    date: "12 October 1862",
    year: 1862,
    title: "Great Avalasse",
    type: "storm-landslide",
    severity: "catastrophic",
    description: "A storm generated an avalanche, consisting of mudflow mixing rocks, mud, vegetation and trees. Localisation of the mudflow was mainly eastern slopes of the mountain over Port Victoria, Police and Prison yards, Victoria street, Royal Street, Anglican Church, Cluny Orphanage, old cemetery, and Government House. All bridges in Victoria destroyed, all roads severely damaged, houses destroyed, coconut trees blew down, a number of boats sunk.",
    locations: ["Port Victoria", "Victoria Street", "Royal Street", "Anglican Church", "Cluny Orphanage", "Government House"],
    impact: {
      deaths: 70,
      injured: 0,
      missing: 0,
      sheltered: 0,
      damageEstimate: null,
      currency: null,
      affectedBuildings: null,
      affectedPeople: null,
      affectedHouseholds: null
    }
  },
  {
    id: 2,
    date: "January 1975",
    year: 1975,
    title: "Storm on Mahé",
    type: "storm",
    severity: "minor",
    description: "Storm event on the main island of Mahé causing injuries.",
    locations: ["Mahé"],
    impact: {
      deaths: 0,
      injured: 2,
      missing: 0,
      sheltered: 0,
      damageEstimate: null,
      currency: null,
      affectedBuildings: null,
      affectedPeople: null,
      affectedHouseholds: null
    }
  },
  {
    id: 3,
    date: "31 August – 1 September 1985",
    year: 1985,
    title: "Severe Floods/Landslides",
    type: "flood-landslide",
    severity: "major",
    description: "Severe floods on the 3 main islands, and slide at St. Louis, more than 1 million SCR damages. On Mahé, 3 persons dead.",
    locations: ["Mahé", "Praslin", "La Digue", "St. Louis"],
    impact: {
      deaths: 3,
      injured: 0,
      missing: 0,
      sheltered: 0,
      damageEstimate: 1000000,
      currency: "SCR",
      affectedBuildings: null,
      affectedPeople: null,
      affectedHouseholds: null
    }
  },
  {
    id: 4,
    date: "17–23 May 1990",
    year: 1990,
    title: "Cyclone Ikonjo",
    type: "cyclone",
    severity: "major",
    description: "Cyclone Ikonjo hits Desroches island causing significant damage and injuries on Mahé.",
    locations: ["Desroches Island", "Mahé"],
    impact: {
      deaths: 0,
      injured: 2,
      missing: 0,
      sheltered: 0,
      damageEstimate: 1500000,
      currency: "USD",
      affectedBuildings: null,
      affectedPeople: null,
      affectedHouseholds: null
    }
  },
  {
    id: 5,
    date: "January–April 1992",
    year: 1992,
    title: "Landslides",
    type: "landslide",
    severity: "major",
    description: "Multiple landslide events across Praslin and Mahé resulting in fatalities.",
    locations: ["Praslin", "Mahé"],
    impact: {
      deaths: 4,
      injured: 0,
      missing: 0,
      sheltered: 0,
      damageEstimate: null,
      currency: null,
      affectedBuildings: null,
      affectedPeople: null,
      affectedHouseholds: null
    }
  },
  {
    id: 6,
    date: "12–17 August 1997",
    year: 1997,
    title: "ENSO Rainfall Event",
    type: "flood-landslide",
    severity: "major",
    description: "The ENSO (recurring climate pattern involving changes in the temperature of waters) rainfall event caused floods and landslides.",
    locations: ["Mahé"],
    impact: {
      deaths: 5,
      injured: 0,
      missing: 0,
      sheltered: 0,
      damageEstimate: 1700000,
      currency: "USD",
      affectedBuildings: null,
      affectedPeople: null,
      affectedHouseholds: null
    }
  },
  {
    id: 7,
    date: "6–7 September 2002",
    year: 2002,
    title: "Tropical Depression '01S' Storm",
    type: "storm",
    severity: "moderate",
    description: "Damage on Mahé was limited to landslides and some flooding. On Praslin, high winds damaged the roofs of houses and destroyed homes, while the airport was also damaged. The winds damaged power lines, causing an island-wide power outage.",
    locations: ["Mahé", "Praslin"],
    impact: {
      deaths: 0,
      injured: 0,
      missing: 0,
      sheltered: 0,
      damageEstimate: null,
      currency: null,
      affectedBuildings: null,
      affectedPeople: null,
      affectedHouseholds: null
    }
  },
  {
    id: 8,
    date: "26 December 2004",
    year: 2004,
    title: "The Great Indian Ocean Tsunami",
    type: "tsunami",
    severity: "major",
    description: "There were 2 deaths in Seychelles. The damage to coastal infrastructure on both eastern and western shores was most severe where natural coasts had been modified. Damage to public works was greatest in Victoria. Dock structures were damaged in Port Victoria. Washouts and eventual collapse occurred on two bridges of the highway between Victoria and the airport, and coastal roads were damaged in a number of other places. The fisheries sector was the hardest hit as many fishing vessels and equipment were damaged or lost.",
    locations: ["Victoria", "Port Victoria", "Eastern Shore", "Western Shore"],
    impact: {
      deaths: 2,
      injured: 0,
      missing: 0,
      sheltered: 0,
      damageEstimate: null,
      currency: null,
      affectedBuildings: null,
      affectedPeople: null,
      affectedHouseholds: null
    }
  },
  {
    id: 9,
    date: "December 2004 – January 2005",
    year: 2004,
    title: "Vista Do Mar Landslide",
    type: "landslide",
    severity: "moderate",
    description: "The Vista Do Mar Estate in the north of Mahé is being affected by a deep-seated landslide. Sustained heavy rainfall of about 170 mm/day over a two-day period increased the pore pressure enough to cause accelerated movement and damage to property. The slope is presently in an actively unstable stage and moves whenever triggering factors are active. Numerous houses were affected.",
    locations: ["Vista Do Mar Estate", "North Mahé"],
    impact: {
      deaths: 0,
      injured: 0,
      missing: 0,
      sheltered: 0,
      damageEstimate: null,
      currency: null,
      affectedBuildings: null,
      affectedPeople: null,
      affectedHouseholds: null
    }
  },
  {
    id: 10,
    date: "December 2006",
    year: 2006,
    title: "Cyclone Bondo",
    type: "cyclone",
    severity: "major",
    description: "The storm affected Providence and Farquhar islands. The majority of the Farquhar Atoll residents were evacuated. Bondo destroyed most of the buildings and about 60 percent of the coconut trees on Providence, decimating the island's copra industry. Rough seas caused flooding, beach erosion, and coastal damage on Mahé, Praslin, and La Digue. One person was injured on Mahé.",
    locations: ["Providence Island", "Farquhar Atoll", "Mahé", "Praslin", "La Digue"],
    impact: {
      deaths: 0,
      injured: 1,
      missing: 0,
      sheltered: 0,
      damageEstimate: null,
      currency: null,
      affectedBuildings: null,
      affectedPeople: null,
      affectedHouseholds: null
    }
  },
  {
    id: 11,
    date: "27–28 January 2013",
    year: 2013,
    title: "Tropical Cyclone Felleng",
    type: "cyclone",
    severity: "major",
    description: "The storm caused severe flooding and landslides in three districts on the southeast coast of Mahé (Au Cap, Pointe Larue, and Cascade), as well as on the nearby islands of Praslin and La Digue. The rainfall overwhelmed existing natural and constructed drainage systems and retaining walls, causing floods, landslides, and rockfalls, and resulting in serious damage to homes and public buildings, roads, bridges, drainage systems, water and sanitation systems, crops, and farms.",
    locations: ["Au Cap", "Pointe Larue", "Cascade", "Praslin", "La Digue"],
    impact: {
      deaths: 0,
      injured: 0,
      missing: 0,
      sheltered: 0,
      damageEstimate: null,
      currency: null,
      affectedBuildings: null,
      affectedPeople: null,
      affectedHouseholds: null
    }
  },
  {
    id: 12,
    date: "2016",
    year: 2016,
    title: "Tropical Cyclone Fantala",
    type: "cyclone",
    severity: "catastrophic",
    description: "The storm damaged infrastructure in the Farquhar Atoll, the archipelago's outer island. The storm made landfall with winds up to 350 km/h. The effects were estimated at SCR 101 million.",
    locations: ["Farquhar Atoll"],
    impact: {
      deaths: 0,
      injured: 0,
      missing: 0,
      sheltered: 0,
      damageEstimate: 101000000,
      currency: "SCR",
      affectedBuildings: null,
      affectedPeople: null,
      affectedHouseholds: null,
      maxWindSpeed: 350
    }
  },
  {
    id: 13,
    date: "8 August 2018",
    year: 2018,
    title: "SPTC Fire",
    type: "fire",
    severity: "moderate",
    description: "The Seychelles Public Transport Company store located at Latanier Road at the SPTC New Port Depot caught fire at around 1300 hours. Following the fire, a Presidential Order was given to assess the risks in Victoria. The main aim of the assessment was to identify hazardous activities and their related risks.",
    locations: ["Latanier Road", "SPTC New Port Depot", "Victoria"],
    impact: {
      deaths: 0,
      injured: 0,
      missing: 0,
      sheltered: 0,
      damageEstimate: null,
      currency: null,
      affectedBuildings: null,
      affectedPeople: null,
      affectedHouseholds: null
    }
  },
  {
    id: 14,
    date: "19–25 September 2020",
    year: 2020,
    title: "Landfill Fire",
    type: "fire",
    severity: "moderate",
    description: "This was not the first time for a fire to take place at the Land Fill at the Providence Industrial Estate, but it was the most significant. The response operations were officially active for 6 days; the 19th to the 25th September 2020. By 25th September, the Emergency Response tactical strategies were scaled down but a high level of alert and surveillance was maintained during the following week.",
    locations: ["Providence Industrial Estate"],
    impact: {
      deaths: 0,
      injured: 0,
      missing: 0,
      sheltered: 0,
      damageEstimate: null,
      currency: null,
      affectedBuildings: null,
      affectedPeople: null,
      affectedHouseholds: null,
      responseDays: 6
    }
  },
  {
    id: 15,
    date: "2020 – Ongoing",
    year: 2020,
    title: "COVID-19 Global Pandemic",
    type: "pandemic",
    severity: "major",
    description: "The DRDM took the initial lead in the coordination efforts with the health authorities to empower their officers to navigate the pandemic, firstly by setting up the Public Health Emergency Operation Centre (PHEOC), and secondly by providing technical support to health personnel by DRDM's in-house World Health Organisation (WHO) certified trainers. By the time the first case of COVID-19 was detected locally, protocols and resources were in place to respond to the situation.",
    locations: ["Nationwide"],
    impact: {
      deaths: null,
      injured: 0,
      missing: 0,
      sheltered: 0,
      damageEstimate: null,
      currency: null,
      affectedBuildings: null,
      affectedPeople: null,
      affectedHouseholds: null
    }
  },
  {
    id: 16,
    date: "6 December 2023",
    year: 2023,
    title: "Record Breaking Rainfall",
    type: "flood",
    severity: "catastrophic",
    description: "The torrential rain led to widespread flooding concentrated mainly in the Northern region of Mahé namely Bel Ombre, Beau Vallon, Glacis and St. Louis districts. The downpour led to overflowing rivers, embankments collapse, mass flooding, road blockage, power outage and many slope failures affecting many households and businesses. Other regions of Mahé were also affected with flooding. The recorded rainfall on the 6th December 2023 was the highest rainfall recorded within 24 hours and the highest rainfall recorded within a month in Seychelles.",
    locations: ["Bel Ombre", "Beau Vallon", "Glacis", "St. Louis"],
    impact: {
      deaths: 4,
      injured: 0,
      missing: 3,
      sheltered: 350,
      damageEstimate: null,
      currency: null,
      affectedBuildings: null,
      affectedPeople: null,
      affectedHouseholds: 90
    }
  },
  {
    id: 17,
    date: "7 December 2023",
    year: 2023,
    title: "CCCL Explosion",
    type: "explosion",
    severity: "catastrophic",
    description: "At exactly 2:15AM a container containing dynamites exploded at Civil Construction Company Ltd (CCCL), Petite Paris, Cascade. The explosion caused significant structural damage to the Providence industrial estate and the residential homes located in the nearby districts mainly Cascade. The shockwave of the explosion reached as far as the Seychelles International Airport, Point Larue and the Bel Ombre district. The incident was declared as a National Emergency by the President as the affected residents were evacuated to temporary shelters.",
    locations: ["Petite Paris", "Cascade", "Providence Industrial Estate", "Seychelles International Airport", "Pointe Larue", "Bel Ombre"],
    impact: {
      deaths: 0,
      injured: 178,
      missing: 0,
      sheltered: 202,
      damageEstimate: null,
      currency: null,
      affectedBuildings: 345,
      affectedPeople: 621,
      affectedHouseholds: 400,
      affectedBusinesses: 600
    }
  }
]

// Disaster type categories for filtering and visualization
export const disasterTypes = [
  { id: "flood", name: "Flood", color: "#3B82F6", icon: "Droplets" },
  { id: "flood-landslide", name: "Flood & Landslide", color: "#8B5CF6", icon: "Mountain" },
  { id: "landslide", name: "Landslide", color: "#A855F7", icon: "Mountain" },
  { id: "cyclone", name: "Cyclone", color: "#EC4899", icon: "Wind" },
  { id: "storm", name: "Storm", color: "#6366F1", icon: "CloudLightning" },
  { id: "storm-landslide", name: "Storm & Landslide", color: "#7C3AED", icon: "CloudRain" },
  { id: "tsunami", name: "Tsunami", color: "#0EA5E9", icon: "Waves" },
  { id: "fire", name: "Fire", color: "#EF4444", icon: "Flame" },
  { id: "explosion", name: "Explosion", color: "#F97316", icon: "Zap" },
  { id: "pandemic", name: "Pandemic", color: "#10B981", icon: "Activity" }
]

// Severity levels for disaster classification
export const severityLevels = [
  { id: "minor", name: "Minor", color: "#22C55E", description: "Limited impact, few injuries" },
  { id: "moderate", name: "Moderate", color: "#EAB308", description: "Significant local impact" },
  { id: "major", name: "Major", color: "#F97316", description: "Widespread damage and casualties" },
  { id: "catastrophic", name: "Catastrophic", color: "#EF4444", description: "Devastating impact, national emergency" }
]

// Source: https://www.drmd.sc/disaster/ - Statistics for infographics
export const disasterStatistics = {
  overview: {
    totalRecordedEvents: 17,
    timeSpanYears: 161,
    startYear: 1862,
    endYear: 2023,
    totalFatalities: 91,
    totalInjured: 185,
    totalSheltered: 552
  },
  byType: [
    { type: "Cyclone", count: 5, percentage: 29 },
    { type: "Flood/Landslide", count: 4, percentage: 24 },
    { type: "Landslide", count: 2, percentage: 12 },
    { type: "Storm", count: 2, percentage: 12 },
    { type: "Fire", count: 2, percentage: 12 },
    { type: "Tsunami", count: 1, percentage: 6 },
    { type: "Explosion", count: 1, percentage: 6 }
  ],
  byDecade: [
    { decade: "1860s", events: 1, fatalities: 70 },
    { decade: "1970s", events: 1, fatalities: 0 },
    { decade: "1980s", events: 1, fatalities: 3 },
    { decade: "1990s", events: 3, fatalities: 9 },
    { decade: "2000s", events: 4, fatalities: 2 },
    { decade: "2010s", events: 3, fatalities: 0 },
    { decade: "2020s", events: 4, fatalities: 4 }
  ],
  economicImpact: [
    { event: "Cyclone Fantala (2016)", amount: 101000000, currency: "SCR" },
    { event: "ENSO Rainfall (1997)", amount: 1700000, currency: "USD" },
    { event: "Cyclone Ikonjo (1990)", amount: 1500000, currency: "USD" },
    { event: "Severe Floods (1985)", amount: 1000000, currency: "SCR" }
  ],
  recentMajorEvents: {
    lastMajorEvent: "CCCL Explosion",
    lastMajorEventDate: "7 December 2023",
    peopleAffected: 621,
    peopleInjured: 178,
    buildingsDamaged: 745,
    businessesAffected: 600
  }
}

// Source: https://www.drmd.sc/ - Enhanced hazard information
export const seychellesHazardsDetailed = [
  {
    id: "flooding",
    name: "Flooding",
    icon: "Droplets",
    color: "#3B82F6",
    description: "Flood risks affecting low-lying areas, river valleys, and coastal zones. Flash floods can occur during heavy rainfall events.",
    riskAreas: ["Bel Ombre", "Beau Vallon", "Glacis", "St. Louis", "Victoria"],
    preparedness: [
      "Monitor weather alerts and warnings",
      "Know your evacuation routes",
      "Keep emergency supplies ready",
      "Move valuables to higher ground",
      "Never walk or drive through floodwaters"
    ],
    historicalEvents: 5
  },
  {
    id: "landslides",
    name: "Landslides",
    icon: "Mountain",
    color: "#A855F7",
    description: "Landslide hazards in hilly terrain, especially during prolonged rainfall. Deep-seated and shallow landslides can affect residential areas.",
    riskAreas: ["Vista Do Mar", "St. Louis", "Cascade", "Praslin hillsides"],
    preparedness: [
      "Avoid building on steep slopes",
      "Watch for signs of slope movement",
      "Evacuate immediately if warning signs appear",
      "Report cracks in ground or walls",
      "Plant vegetation to stabilize slopes"
    ],
    historicalEvents: 6
  },
  {
    id: "fire",
    name: "Fire",
    icon: "Flame",
    color: "#EF4444",
    description: "Fire safety and prevention for residential, commercial, and industrial areas. Includes bush fires during dry seasons.",
    riskAreas: ["Industrial areas", "Providence Estate", "Victoria", "Residential zones"],
    preparedness: [
      "Install smoke detectors",
      "Keep fire extinguishers accessible",
      "Plan escape routes",
      "Store flammable materials safely",
      "Clear vegetation around buildings"
    ],
    historicalEvents: 2
  },
  {
    id: "tsunami",
    name: "Tsunami",
    icon: "Waves",
    color: "#0EA5E9",
    description: "Coastal tsunami preparedness following the 2004 Indian Ocean Tsunami. Early warning systems now in place through IOWave exercises.",
    riskAreas: ["All coastal areas", "Victoria Harbor", "Fishing communities", "Beach resorts"],
    preparedness: [
      "Know tsunami warning signs",
      "Move to high ground immediately",
      "Stay away from beaches during warnings",
      "Follow official evacuation orders",
      "Participate in tsunami drills"
    ],
    historicalEvents: 1
  },
  {
    id: "storms",
    name: "Storms",
    icon: "CloudLightning",
    color: "#6366F1",
    description: "Storm preparedness and safety including tropical depressions and severe weather events affecting the islands.",
    riskAreas: ["All islands", "Coastal areas", "Outer islands"],
    preparedness: [
      "Secure loose outdoor items",
      "Reinforce windows and doors",
      "Stock emergency supplies",
      "Stay indoors during storms",
      "Avoid using electrical appliances"
    ],
    historicalEvents: 3
  },
  {
    id: "heavy-wind",
    name: "Heavy Wind",
    icon: "Wind",
    color: "#EC4899",
    description: "High wind conditions associated with cyclones and tropical storms. Can cause structural damage and power outages.",
    riskAreas: ["Farquhar Atoll", "Outer Islands", "Exposed coastal areas"],
    preparedness: [
      "Reinforce roofing and structures",
      "Trim trees near buildings",
      "Secure outdoor furniture",
      "Have battery-powered radio ready",
      "Know safe rooms in buildings"
    ],
    historicalEvents: 5
  }
]

// Source: https://www.drmd.sc/ - Latest news from DRMD
export const drmdLatestNews = [
  {
    id: 1,
    title: "World Tsunami Awareness Day 2025 – 'Get To High Ground' Photo Competition Winner!",
    excerpt: "As part of our activities to commemorate World Tsunami Awareness Day 2025, the Disaster Risk Management Division (DRMD) launched a fun and educational social media campaign encouraging members of the public to participate.",
    date: "14 November 2025",
    category: "Awareness",
    url: "/news/world-tsunami-awareness-day-2025"
  },
  {
    id: 2,
    title: "IOWAVE2025 – Tsunami Preparedness Exercise",
    excerpt: "The National Emergency Operations Centre (NEOC) of the Disaster Risk Management Division (DRMD) and national key stakeholders participated in the 15th edition of the regional Indian Ocean Wave Exercise.",
    date: "7 November 2025",
    category: "Exercise",
    url: "/news/iowave2025-exercise"
  },
  {
    id: 3,
    title: "Engaging Future Seychellois Mechanical Engineers in Disaster Risk Reduction",
    excerpt: "As part of this year's youth engagement programme commemorating the International Day for Disaster Risk Reduction (IDDRR), the Disaster Risk Management Division (DRMD) partnered with the Seychelles Institute of Technology.",
    date: "22 October 2025",
    category: "Youth Engagement",
    url: "/news/youth-engagement-iddrr-2025"
  },
  {
    id: 4,
    title: "Fund Resilience, Not Disasters",
    excerpt: "In commemoration of the International Day for Disaster Risk Reduction 2025, held under the global theme 'Fund Resilience, Not Disaster', nations are being urged to invest in proactive measures that reduce risk.",
    date: "17 October 2025",
    category: "International Day",
    url: "/news/fund-resilience-not-disasters"
  },
  {
    id: 5,
    title: "Ongoing Mitigation Works at Des Arpents, Beoliere",
    excerpt: "The Disaster Risk Management Division, in collaboration with key stakeholders, is working intensively to mitigate the residual risks from the rockfall that occurred on Monday, 15th September 2025.",
    date: "2 October 2025",
    category: "Mitigation",
    url: "/news/mitigation-works-beoliere"
  },
  {
    id: 6,
    title: "Stabilisation Project Lives On!",
    excerpt: "The Disaster Risk Management Division (DRMD), in collaboration with the Ministry of Local Government and Community (MLGCA) is moving ahead with critical national stabilisation project at Pointe Conan.",
    date: "26 September 2025",
    category: "Projects",
    url: "/news/stabilisation-project-pointe-conan"
  }
]

// Key metrics for dashboard display
export const keyMetrics = [
  {
    id: 1,
    label: "Historical Events",
    value: 17,
    icon: "Calendar",
    description: "Major disaster events since 1862"
  },
  {
    id: 2,
    label: "Total Fatalities",
    value: 91,
    icon: "Users",
    description: "Lives lost across all recorded events"
  },
  {
    id: 3,
    label: "Years of Records",
    value: 161,
    icon: "Clock",
    description: "From 1862 to present"
  },
  {
    id: 4,
    label: "Hazard Types",
    value: 6,
    icon: "AlertTriangle",
    description: "Main disaster categories in Seychelles"
  }
]

// Affected districts data for mapping
export const affectedDistricts = [
  { name: "Victoria", eventsCount: 5, riskLevel: "high" },
  { name: "Cascade", eventsCount: 4, riskLevel: "high" },
  { name: "Bel Ombre", eventsCount: 3, riskLevel: "high" },
  { name: "Beau Vallon", eventsCount: 3, riskLevel: "high" },
  { name: "Glacis", eventsCount: 2, riskLevel: "medium" },
  { name: "St. Louis", eventsCount: 3, riskLevel: "high" },
  { name: "Praslin", eventsCount: 5, riskLevel: "high" },
  { name: "La Digue", eventsCount: 3, riskLevel: "medium" },
  { name: "Pointe Larue", eventsCount: 2, riskLevel: "medium" },
  { name: "Au Cap", eventsCount: 1, riskLevel: "medium" },
  { name: "Farquhar Atoll", eventsCount: 2, riskLevel: "medium" },
  { name: "Providence Island", eventsCount: 2, riskLevel: "medium" }
]
