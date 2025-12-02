// app/councils/council-data.ts
// Ministry/Division data for Seychelles Disaster Risk Management
// Source: https://www.drmd.sc/ and Government of Seychelles

// Ministry/Division data with profiles and information
const councilData = {
  'agriculture': {
    name: 'Agriculture',
    title: 'Ministry of Agriculture, Climate Change & Environment',
    description: 'The Ministry of Agriculture, Climate Change & Environment is responsible for coordinating disaster management efforts related to agricultural sectors, including crop protection, livestock safety, and food security during emergencies.',
    established: '2016',
    memberCount: '18',
    ministerialRepresentation: '5',
    coordinationCenters: '3',
    responseTeams: '6',
    annualBudget: 'SCR 75 Million',
    partnerOrganizations: ['fao', 'world-bank'],
    disasterTypes: ['drought', 'flood'],
    affectedPopulations: ['elderly', 'children'],
    leadership: {
      name: 'Principal Secretary',
      position: 'Principal Secretary',
      appointment: 'June 2022',
      tenure: '3 Years',
      background: 'Agricultural Sciences',
      image: '/images/team/placeholder-user.jpg'
    },
    members: [
      {
        id: 'agr-mem-1',
        name: 'Principal Secretary',
        position: 'Principal Secretary',
        organization: 'Ministry of Agriculture, Climate Change & Environment',
        contact: 'info@env.gov.sc'
      },
      {
        id: 'agr-mem-2',
        name: 'Deputy Principal Secretary',
        position: 'Deputy Principal Secretary',
        organization: 'Seychelles Agricultural Agency',
        contact: 'info@saa.gov.sc'
      },
      {
        id: 'agr-mem-3',
        name: 'Coordinator',
        position: 'Coordinator',
        organization: 'Farmers Association of Seychelles',
        contact: 'info@farmers.sc'
      }
    ]
  },
  'civil-service': {
    name: 'Civil Service',
    title: 'Division of Public Administration',
    description: 'The Division of Public Administration coordinates disaster management efforts across all government ministries and divisions, ensuring continuity of essential public services during emergencies and disasters.',
    established: '2016',
    memberCount: '22',
    ministerialRepresentation: '12',
    coordinationCenters: '5',
    responseTeams: '8',
    annualBudget: 'SCR 90 Million',
    partnerOrganizations: ['undp', 'world-bank'],
    disasterTypes: ['cyclone', 'flood', 'tsunami'],
    affectedPopulations: ['elderly', 'children', 'disabilities'],
    leadership: {
      name: 'Director General',
      position: 'Director General',
      appointment: 'August 2023',
      tenure: '4 Years',
      background: 'Public Administration',
      image: '/images/team/placeholder-user.jpg'
    },
    members: [
      {
        id: 'cs-mem-1',
        name: 'Director General',
        position: 'Director General',
        organization: 'Division of Public Administration',
        contact: 'info@dpa.gov.sc'
      },
      {
        id: 'cs-mem-2',
        name: 'Deputy Director',
        position: 'Deputy Director',
        organization: 'Ministry of Employment & Social Affairs',
        contact: 'info@employment.gov.sc'
      },
      {
        id: 'cs-mem-3',
        name: 'Coordinator',
        position: 'Coordinator',
        organization: 'Public Service Bureau',
        contact: 'info@psb.gov.sc'
      }
    ]
  },
  'education': {
    name: 'Education',
    title: 'Ministry of Education',
    description: 'The Ministry of Education focuses on disaster management in educational institutions, ensuring student safety, school infrastructure resilience, and continuity of education during and after disasters.',
    established: '2016',
    memberCount: '20',
    ministerialRepresentation: '4',
    coordinationCenters: '4',
    responseTeams: '10',
    annualBudget: 'SCR 85 Million',
    partnerOrganizations: ['undp', 'unesco'],
    disasterTypes: ['cyclone', 'flood'],
    affectedPopulations: ['children', 'disabilities'],
    leadership: {
      name: 'Principal Secretary',
      position: 'Principal Secretary',
      appointment: 'July 2022',
      tenure: '3 Years',
      background: 'Educational Administration',
      image: '/images/team/placeholder-user.jpg'
    },
    members: [
      {
        id: 'edu-mem-1',
        name: 'Principal Secretary',
        position: 'Principal Secretary',
        organization: 'Ministry of Education',
        contact: 'info@education.gov.sc'
      },
      {
        id: 'edu-mem-2',
        name: 'Deputy Principal Secretary',
        position: 'Deputy Principal Secretary',
        organization: 'University of Seychelles',
        contact: 'info@unisey.ac.sc'
      },
      {
        id: 'edu-mem-3',
        name: 'Coordinator',
        position: 'Coordinator',
        organization: 'Seychelles Institute of Technology',
        contact: 'info@sit.ac.sc'
      }
    ]
  },
  'external-affairs': {
    name: 'External Affairs',
    title: 'Ministry of Foreign Affairs & Tourism',
    description: 'The Ministry of Foreign Affairs & Tourism coordinates international disaster assistance, manages foreign aid during emergencies, and represents Seychelles in international disaster management forums.',
    established: '2016',
    memberCount: '15',
    ministerialRepresentation: '6',
    coordinationCenters: '2',
    responseTeams: '4',
    annualBudget: 'SCR 65 Million',
    leadership: {
      name: 'Principal Secretary',
      position: 'Principal Secretary',
      appointment: 'September 2023',
      tenure: '4 Years',
      background: 'International Relations',
      image: '/images/team/placeholder-user.jpg'
    },
    members: [
      {
        id: 'ea-mem-1',
        name: 'Principal Secretary',
        position: 'Principal Secretary',
        organization: 'Ministry of Foreign Affairs & Tourism',
        contact: 'info@mfa.gov.sc'
      },
      {
        id: 'ea-mem-2',
        name: 'Deputy Principal Secretary',
        position: 'Deputy Principal Secretary',
        organization: 'Ministry of Foreign Affairs & Tourism',
        contact: 'info@dfa.gov.sc'
      },
      {
        id: 'ea-mem-3',
        name: 'Coordinator',
        position: 'Coordinator',
        organization: 'Diplomatic Corps',
        contact: 'info@diplomacy.gov.sc'
      }
    ]
  },
  // Source: https://www.drmd.sc/about-us/ and https://www.drmd.sc/meet-the-team/
  'disaster-management': {
    name: 'Disaster Management',
    title: 'Disaster Risk Management Division',
    description: 'The Disaster Risk Management Division is established for the effective management of disaster through a comprehensive and integrated all-hazard approach and for matters connected therewith or incidental thereto.',
    established: '2014',
    memberCount: '23',
    ministerialRepresentation: 'N/A',
    coordinationCenters: '1',
    responseTeams: '1',
    annualBudget: 'N/A',
    partnerOrganizations: ['undp', 'red-cross'],
    disasterTypes: ['flooding', 'landslides', 'fire', 'tsunami', 'storms', 'heavy-wind'],
    affectedPopulations: ['elderly', 'children', 'disabilities', 'pregnant'],
    leadership: {
      name: 'Robert Ernesta',
      position: 'Director General',
      appointment: 'N/A',
      tenure: 'N/A',
      background: 'Disaster Risk Management',
      image: '/images/team/robert-ernesta.jpg'
    },
    members: [
      {
        id: 'dm-mem-1',
        name: 'Robert Ernesta',
        position: 'Director General',
        organization: "Director General's Secretariat",
        contact: 'info@drmd.sc'
      },
      {
        id: 'dm-mem-2',
        name: 'Doreen Bastienne',
        position: 'Senior Human Resources & Budget Management Officer',
        organization: 'Human Resources, Administration and Finance Section',
        contact: 'info@drmd.sc'
      },
      {
        id: 'dm-mem-3',
        name: 'Daniel Cetoupe',
        position: 'Chief Risk Management Officer',
        organization: 'Operations Section',
        contact: 'info@drmd.sc'
      },
      {
        id: 'dm-mem-4',
        name: 'Cliff Alissop',
        position: 'Chief Response Officer',
        organization: 'National Emergency Operations Centre',
        contact: 'info@drmd.sc'
      }
    ]
  },
  'health': {
    name: 'Health',
    title: 'Ministry of Health',
    description: 'The Ministry of Health coordinates disaster management efforts in the health sector, ensuring the safety and well-being of the population during emergencies and disasters.',
    established: '2016',
    memberCount: '20',
    ministerialRepresentation: '5',
    coordinationCenters: '3',
    responseTeams: '8',
    annualBudget: 'SCR 100 Million',
    partnerOrganizations: ['who', 'red-cross'],
    disasterTypes: ['cyclone', 'flood', 'pandemic'],
    affectedPopulations: ['elderly', 'children', 'disabilities', 'pregnant'],
    leadership: {
      name: 'Principal Secretary',
      position: 'Principal Secretary',
      appointment: 'January 2023',
      tenure: '4 Years',
      background: 'Public Health',
      image: '/images/team/placeholder-user.jpg'
    },
    members: [
      {
        id: 'health-mem-1',
        name: 'Principal Secretary',
        position: 'Principal Secretary',
        organization: 'Ministry of Health',
        contact: 'info@health.gov.sc'
      },
      {
        id: 'health-mem-2',
        name: 'Deputy Principal Secretary',
        position: 'Deputy Principal Secretary',
        organization: 'Seychelles Hospital',
        contact: 'info@health.gov.sc'
      },
      {
        id: 'health-mem-3',
        name: 'Coordinator',
        position: 'Coordinator',
        organization: 'Public Health Authority',
        contact: 'info@health.gov.sc'
      }
    ]
  },
  'external-communications': {
    name: 'External Communications',
    title: 'Division of Information & Communications',
    description: 'The Division of Information & Communications is responsible for managing the flow of information during disasters, ensuring that accurate and timely information reaches the public, media, and international partners.',
    established: '2016',
    memberCount: '15',
    ministerialRepresentation: '3',
    coordinationCenters: '2',
    responseTeams: '4',
    annualBudget: 'SCR 50 Million',
    leadership: {
      name: 'Director General',
      position: 'Director General',
      appointment: 'March 2023',
      tenure: '3 Years',
      background: 'Public Relations',
      image: '/images/team/placeholder-user.jpg'
    },
    members: [
      {
        id: 'ext-comm-mem-1',
        name: 'Director General',
        position: 'Director General',
        organization: 'Division of Information & Communications',
        contact: 'info@nation.sc'
      },
      {
        id: 'ext-comm-mem-2',
        name: 'Deputy Director',
        position: 'Deputy Director',
        organization: 'Seychelles Broadcasting Corporation',
        contact: 'info@sbc.sc'
      },
      {
        id: 'ext-comm-mem-3',
        name: 'Coordinator',
        position: 'Coordinator',
        organization: 'DRMD Communications',
        contact: 'info@drmd.sc'
      }
    ]
  },
  'finance': {
    name: 'Finance',
    title: 'Ministry of Finance, National Planning & Trade',
    description: 'The Ministry of Finance, National Planning & Trade is responsible for managing the financial aspects of disaster management, including budget allocation, resource mobilization, and financial planning for disaster response and recovery.',
    established: '2016',
    memberCount: '12',
    ministerialRepresentation: '4',
    coordinationCenters: '2',
    responseTeams: '3',
    annualBudget: 'SCR 60 Million',
    leadership: {
      name: 'Principal Secretary',
      position: 'Principal Secretary',
      appointment: 'April 2023',
      tenure: '3 Years',
      background: 'Finance',
      image: '/images/team/placeholder-user.jpg'
    },
    members: [
      {
        id: 'finance-mem-1',
        name: 'Principal Secretary',
        position: 'Principal Secretary',
        organization: 'Ministry of Finance, National Planning & Trade',
        contact: 'info@finance.gov.sc'
      },
      {
        id: 'finance-mem-2',
        name: 'Deputy Principal Secretary',
        position: 'Deputy Principal Secretary',
        organization: 'Central Bank of Seychelles',
        contact: 'info@cbs.sc'
      },
      {
        id: 'finance-mem-3',
        name: 'Coordinator',
        position: 'Coordinator',
        organization: 'DRMD Finance Section',
        contact: 'info@drmd.sc'
      }
    ]
  },
  'fisheries': {
    name: 'Fisheries',
    title: 'Ministry of Fisheries & Blue Economy',
    description: 'The Ministry of Fisheries & Blue Economy is responsible for coordinating disaster management efforts related to fisheries, including aquaculture, fishing communities, and marine ecosystems during emergencies. Seychelles has one of the largest Exclusive Economic Zones in the world.',
    established: '2016',
    memberCount: '14',
    ministerialRepresentation: '4',
    coordinationCenters: '2',
    responseTeams: '3',
    annualBudget: 'SCR 40 Million',
    partnerOrganizations: ['fao', 'ioc'],
    disasterTypes: ['tsunami', 'cyclone'],
    affectedPopulations: ['fishing-communities', 'coastal-residents'],
    leadership: {
      name: 'Principal Secretary',
      position: 'Principal Secretary',
      appointment: 'May 2023',
      tenure: '3 Years',
      background: 'Fisheries Management',
      image: '/images/team/placeholder-user.jpg'
    },
    members: [
      {
        id: 'fisheries-mem-1',
        name: 'Principal Secretary',
        position: 'Principal Secretary',
        organization: 'Ministry of Fisheries & Blue Economy',
        contact: 'info@mfa.gov.sc'
      },
      {
        id: 'fisheries-mem-2',
        name: 'Deputy Principal Secretary',
        position: 'Deputy Principal Secretary',
        organization: 'Seychelles Fishing Authority',
        contact: 'info@sfa.sc'
      },
      {
        id: 'fisheries-mem-3',
        name: 'Coordinator',
        position: 'Coordinator',
        organization: 'Seychelles Maritime Safety Authority',
        contact: 'info@smsa.gov.sc'
      }
    ]
  },
  'gender-equality': {
    name: 'Gender Equality',
    title: 'Ministry of Family Affairs',
    description: 'The Ministry of Family Affairs is responsible for ensuring that disaster management policies and practices are gender-responsive, protecting the rights and needs of women, children, elderly, and vulnerable populations during emergencies.',
    established: '2016',
    memberCount: '16',
    ministerialRepresentation: '4',
    coordinationCenters: '2',
    responseTeams: '3',
    annualBudget: 'SCR 50 Million',
    partnerOrganizations: ['undp', 'unicef'],
    disasterTypes: ['flood', 'cyclone'],
    affectedPopulations: ['elderly', 'children', 'women'],
    leadership: {
      name: 'Principal Secretary',
      position: 'Principal Secretary',
      appointment: 'July 2023',
      tenure: '3 Years',
      background: 'Social Affairs',
      image: '/images/team/placeholder-user.jpg'
    },
    members: [
      {
        id: 'gender-mem-1',
        name: 'Principal Secretary',
        position: 'Principal Secretary',
        organization: 'Ministry of Family Affairs',
        contact: 'info@socialaffairs.gov.sc'
      },
      {
        id: 'gender-mem-2',
        name: 'Deputy Principal Secretary',
        position: 'Deputy Principal Secretary',
        organization: 'Agency for Social Protection',
        contact: 'info@asp.gov.sc'
      },
      {
        id: 'gender-mem-3',
        name: 'Coordinator',
        position: 'Coordinator',
        organization: 'National Council for Children',
        contact: 'info@ncc.gov.sc'
      }
    ]
  },
  'home-affairs': {
    name: 'Home Affairs',
    title: 'Ministry of Internal Affairs',
    description: 'The Ministry of Internal Affairs is responsible for coordinating disaster management efforts related to internal security, law enforcement, and public order during emergencies.',
    established: '2016',
    memberCount: '15',
    ministerialRepresentation: '4',
    coordinationCenters: '2',
    responseTeams: '3',
    annualBudget: 'SCR 45 Million',
    partnerOrganizations: ['interpol', 'ioc'],
    disasterTypes: ['civil-emergency', 'flood'],
    affectedPopulations: ['elderly', 'children'],
    leadership: {
      name: 'Principal Secretary',
      position: 'Principal Secretary',
      appointment: 'September 2023',
      tenure: '3 Years',
      background: 'Security & Civil Affairs',
      image: '/images/team/placeholder-user.jpg'
    },
    members: [
      {
        id: 'home-mem-1',
        name: 'Principal Secretary',
        position: 'Principal Secretary',
        organization: 'Ministry of Internal Affairs',
        contact: 'info@homeaffairs.gov.sc'
      },
      {
        id: 'home-mem-2',
        name: 'Deputy Principal Secretary',
        position: 'Deputy Principal Secretary',
        organization: 'Seychelles Police Force',
        contact: 'info@police.gov.sc'
      },
      {
        id: 'home-mem-3',
        name: 'Coordinator',
        position: 'Coordinator',
        organization: 'Seychelles Fire & Rescue Services Agency',
        contact: 'info@sfrsa.gov.sc'
      }
    ]
  },
  'housing-lands': {
    name: 'Housing and Lands',
    title: 'Division of Housing & Land Management',
    description: 'The Division of Housing & Land Management is responsible for coordinating disaster management efforts related to housing, land use, and infrastructure during emergencies. Falls under the Vice President\'s Office.',
    established: '2016',
    memberCount: '14',
    ministerialRepresentation: '4',
    coordinationCenters: '2',
    responseTeams: '3',
    annualBudget: 'SCR 40 Million',
    partnerOrganizations: ['undp', 'world-bank'],
    disasterTypes: ['flood', 'landslide'],
    affectedPopulations: ['elderly', 'children'],
    leadership: {
      name: 'Director General',
      position: 'Director General',
      appointment: 'October 2023',
      tenure: '3 Years',
      background: 'Lands & Housing',
      image: '/images/team/placeholder-user.jpg'
    },
    members: [
      {
        id: 'housing-mem-1',
        name: 'Director General',
        position: 'Director General',
        organization: 'Vice President\'s Office - Lands & Housing',
        contact: 'info@statehouse.gov.sc'
      },
      {
        id: 'housing-mem-2',
        name: 'Deputy Director',
        position: 'Deputy Director',
        organization: 'Property Management Corporation',
        contact: 'info@pmc.gov.sc'
      },
      {
        id: 'housing-mem-3',
        name: 'Coordinator',
        position: 'Coordinator',
        organization: 'Land Survey Division',
        contact: 'info@lands.gov.sc'
      }
    ]
  },
  'local-government': {
    name: 'Local Government',
    title: 'Ministry for Local Government & Community Affairs',
    description: 'The Ministry for Local Government & Community Affairs coordinates disaster management efforts at the local level across all 26 districts of Seychelles, ensuring effective response and recovery during emergencies.',
    established: '2016',
    memberCount: '16',
    ministerialRepresentation: '4',
    coordinationCenters: '3',
    responseTeams: '4',
    annualBudget: 'SCR 50 Million',
    partnerOrganizations: ['undp', 'ioc'],
    disasterTypes: ['flood', 'landslide'],
    affectedPopulations: ['elderly', 'children'],
    leadership: {
      name: 'Principal Secretary',
      position: 'Principal Secretary',
      appointment: 'November 2023',
      tenure: '3 Years',
      background: 'Local Government',
      image: '/images/team/placeholder-user.jpg'
    },
    members: [
      {
        id: 'local-mem-1',
        name: 'Principal Secretary',
        position: 'Principal Secretary',
        organization: 'Ministry for Local Government & Community Affairs',
        contact: 'info@lgci.gov.sc'
      },
      {
        id: 'local-mem-2',
        name: 'Deputy Principal Secretary',
        position: 'Deputy Principal Secretary',
        organization: 'District Administration',
        contact: 'info@districts.gov.sc'
      },
      {
        id: 'local-mem-3',
        name: 'Coordinator',
        position: 'Coordinator',
        organization: 'Community Development',
        contact: 'info@community.gov.sc'
      }
    ]
  },
  'public-infrastructure': {
    name: 'Public Infrastructure',
    title: 'Ministry of Transport',
    description: 'The Ministry of Transport coordinates disaster management efforts related to public infrastructure, including transportation, ports, aviation, and public facilities during emergencies.',
    established: '2016',
    memberCount: '14',
    ministerialRepresentation: '4',
    coordinationCenters: '3',
    responseTeams: '4',
    annualBudget: 'SCR 50 Million',
    partnerOrganizations: ['icao', 'imo'],
    disasterTypes: ['cyclone', 'flood'],
    affectedPopulations: ['elderly', 'children'],
    leadership: {
      name: 'Principal Secretary',
      position: 'Principal Secretary',
      appointment: 'November 2023',
      tenure: '3 Years',
      background: 'Transport & Infrastructure',
      image: '/images/team/placeholder-user.jpg'
    },
    members: [
      {
        id: 'pub-inf-mem-1',
        name: 'Principal Secretary',
        position: 'Principal Secretary',
        organization: 'Ministry of Transport',
        contact: 'info@transport.gov.sc'
      },
      {
        id: 'pub-inf-mem-2',
        name: 'Deputy Principal Secretary',
        position: 'Deputy Principal Secretary',
        organization: 'Seychelles Civil Aviation Authority',
        contact: 'info@scaa.sc'
      },
      {
        id: 'pub-inf-mem-3',
        name: 'Coordinator',
        position: 'Coordinator',
        organization: 'Seychelles Ports Authority',
        contact: 'info@spa.sc'
      }
    ]
  },
  'public-utilities': {
    name: 'Public Utilities',
    title: 'Public Utilities Corporation',
    description: 'The Public Utilities Corporation coordinates disaster management efforts related to public utilities, including water supply, electricity, and telecommunications during emergencies.',
    established: '2016',
    memberCount: '12',
    ministerialRepresentation: '3',
    coordinationCenters: '2',
    responseTeams: '3',
    annualBudget: 'SCR 40 Million',
    partnerOrganizations: ['undp', 'world-bank'],
    disasterTypes: ['cyclone', 'flood'],
    affectedPopulations: ['elderly', 'children'],
    leadership: {
      name: 'Chief Executive Officer',
      position: 'Chief Executive Officer',
      appointment: 'November 2023',
      tenure: '3 Years',
      background: 'Public Utilities',
      image: '/images/team/placeholder-user.jpg'
    },
    members: [
      {
        id: 'pub-ut-mem-1',
        name: 'Chief Executive Officer',
        position: 'Chief Executive Officer',
        organization: 'Public Utilities Corporation',
        contact: 'info@puc.sc'
      },
      {
        id: 'pub-ut-mem-2',
        name: 'Deputy CEO',
        position: 'Deputy CEO',
        organization: 'Seychelles Energy Commission',
        contact: 'info@sec.sc'
      },
      {
        id: 'pub-ut-mem-3',
        name: 'Coordinator',
        position: 'Coordinator',
        organization: 'Cable & Wireless Seychelles',
        contact: 'info@cwseychelles.com'
      }
    ]
  },
  'social-security': {
    name: 'Social Security',
    title: 'Ministry of Employment & Social Affairs',
    description: 'The Ministry of Employment & Social Affairs coordinates disaster management efforts related to social security, including welfare programs, social protection, and community resilience during emergencies.',
    established: '2016',
    memberCount: '16',
    ministerialRepresentation: '4',
    coordinationCenters: '3',
    responseTeams: '4',
    annualBudget: 'SCR 60 Million',
    partnerOrganizations: ['ilo', 'undp'],
    disasterTypes: ['flood', 'cyclone'],
    affectedPopulations: ['elderly', 'children', 'unemployed'],
    leadership: {
      name: 'Principal Secretary',
      position: 'Principal Secretary',
      appointment: 'November 2023',
      tenure: '3 Years',
      background: 'Employment & Social Affairs',
      image: '/images/team/placeholder-user.jpg'
    },
    members: [
      {
        id: 'soc-sec-mem-1',
        name: 'Principal Secretary',
        position: 'Principal Secretary',
        organization: 'Ministry of Employment & Social Affairs',
        contact: 'info@employment.gov.sc'
      },
      {
        id: 'soc-sec-mem-2',
        name: 'Deputy Principal Secretary',
        position: 'Deputy Principal Secretary',
        organization: 'Seychelles Pension Fund',
        contact: 'info@spf.sc'
      },
      {
        id: 'soc-sec-mem-3',
        name: 'Coordinator',
        position: 'Coordinator',
        organization: 'Agency for Social Protection',
        contact: 'info@asp.gov.sc'
      }
    ]
  },
  'tourism': {
    name: 'Tourism',
    title: 'Ministry of Foreign Affairs & Tourism',
    description: 'The Ministry of Foreign Affairs & Tourism coordinates disaster management efforts related to the tourism industry, Seychelles\' main economic sector. Includes resorts, hotels, and tourist attractions during emergencies.',
    established: '2016',
    memberCount: '14',
    ministerialRepresentation: '4',
    coordinationCenters: '2',
    responseTeams: '3',
    annualBudget: 'SCR 50 Million',
    partnerOrganizations: ['unwto', 'ioc'],
    disasterTypes: ['cyclone', 'tsunami'],
    affectedPopulations: ['tourists', 'hospitality-workers'],
    leadership: {
      name: 'Principal Secretary',
      position: 'Principal Secretary',
      appointment: 'November 2023',
      tenure: '3 Years',
      background: 'Tourism & Culture',
      image: '/images/team/placeholder-user.jpg'
    },
    members: [
      {
        id: 'tourism-mem-1',
        name: 'Principal Secretary',
        position: 'Principal Secretary',
        organization: 'Ministry of Foreign Affairs & Tourism',
        contact: 'info@tourism.gov.sc'
      },
      {
        id: 'tourism-mem-2',
        name: 'Deputy Principal Secretary',
        position: 'Deputy Principal Secretary',
        organization: 'Seychelles Tourism Board',
        contact: 'info@seychelles.travel'
      },
      {
        id: 'tourism-mem-3',
        name: 'Coordinator',
        position: 'Coordinator',
        organization: 'Seychelles Hospitality & Tourism Association',
        contact: 'info@shta.sc'
      }
    ]
  }
};

// Define types
export type CouncilKey = keyof typeof councilData;
export type CouncilDataType = typeof councilData[CouncilKey];

export default councilData;