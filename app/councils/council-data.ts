// app/councils/council-data.ts
// Mock data for councils

// Council data with profiles and information
const councilData = {
  'agriculture': {
    name: 'Agriculture',
    title: 'Agriculture Council',
    description: 'The Agriculture Council is responsible for coordinating disaster management efforts related to agricultural sectors, including crop protection, livestock safety, and food security during emergencies.',
    established: '2016',
    memberCount: '18',
    ministerialRepresentation: '5',
    coordinationCenters: '3',
    responseTeams: '6',
    annualBudget: '₨ 75 Million',
    partnerOrganizations: ['usaid', 'world-bank'],
    disasterTypes: ['drought', 'flood'],
    affectedPopulations: ['elderly', 'children'],
    leadership: {
      name: 'Dr. Anand Ramkissoon',
      position: 'Chairperson',
      appointment: 'June 2022',
      tenure: '3 Years',
      background: 'Agricultural Sciences'
    },
    members: [
      {
        id: 'agr-mem-1',
        name: 'Dr. Anand Ramkissoon',
        position: 'Chairperson',
        organization: 'Ministry of Agriculture',
        contact: 'a.ramkissoon@agriculture.gov.mu'
      },
      {
        id: 'agr-mem-2',
        name: 'Mrs. Leela Devi Sobnauth',
        position: 'Deputy Chair',
        organization: 'Agricultural Research Institute',
        contact: 'l.sobnauth@ari.gov.mu'
      },
      {
        id: 'agr-mem-3',
        name: 'Mr. Vikram Gopaul',
        position: 'Secretary',
        organization: 'Farmers Association',
        contact: 'v.gopaul@farmersassoc.mu'
      }
    ]
  },
  'civil-service': {
    name: 'Civil Service',
    title: 'Civil Service Council',
    description: 'The Civil Service Council coordinates disaster management efforts across all government departments, ensuring continuity of essential public services during emergencies and disasters.',
    established: '2016',
    memberCount: '22',
    ministerialRepresentation: '12',
    coordinationCenters: '5',
    responseTeams: '8',
    annualBudget: '₨ 90 Million',
    partnerOrganizations: ['undp', 'world-bank'],
    disasterTypes: ['cyclone', 'flood', 'earthquake'],
    affectedPopulations: ['elderly', 'children', 'disabilities'],
    leadership: {
      name: 'Mrs. Shanti Bhushan',
      position: 'Chairperson',
      appointment: 'August 2023',
      tenure: '4 Years',
      background: 'Public Administration'
    },
    members: [
      {
        id: 'cs-mem-1',
        name: 'Mrs. Shanti Bhushan',
        position: 'Chairperson',
        organization: 'Public Service Commission',
        contact: 's.bhushan@psc.gov.mu'
      },
      {
        id: 'cs-mem-2',
        name: 'Mr. Raj Gopee',
        position: 'Deputy Chair',
        organization: 'Ministry of Public Service',
        contact: 'r.gopee@publicservice.gov.mu'
      },
      {
        id: 'cs-mem-3',
        name: 'Dr. Meena Ramgoolam',
        position: 'Secretary',
        organization: 'Civil Service College',
        contact: 'm.ramgoolam@csc.gov.mu'
      }
    ]
  },
  'education': {
    name: 'Education',
    title: 'Education Council',
    description: 'The Education Council focuses on disaster management in educational institutions, ensuring student safety, school infrastructure resilience, and continuity of education during and after disasters.',
    established: '2016',
    memberCount: '20',
    ministerialRepresentation: '4',
    coordinationCenters: '4',
    responseTeams: '10',
    annualBudget: '₨ 85 Million',
    partnerOrganizations: ['undp', 'usaid'],
    disasterTypes: ['cyclone', 'earthquake'],
    affectedPopulations: ['children', 'disabilities'],
    leadership: {
      name: 'Prof. Dhiren Parbhoo',
      position: 'Chairperson',
      appointment: 'July 2022',
      tenure: '3 Years',
      background: 'Educational Administration'
    },
    members: [
      {
        id: 'edu-mem-1',
        name: 'Prof. Dhiren Parbhoo',
        position: 'Chairperson',
        organization: 'Ministry of Education',
        contact: 'd.parbhoo@education.gov.mu'
      },
      {
        id: 'edu-mem-2',
        name: 'Dr. Amina Fatima',
        position: 'Deputy Chair',
        organization: 'University of Seychelles',
        contact: 'a.fatima@uom.ac.mu'
      },
      {
        id: 'edu-mem-3',
        name: 'Mr. Jean-Paul Laval',
        position: 'Secretary',
        organization: 'Private Schools Association',
        contact: 'jp.laval@psa.mu'
      }
    ]
  },
  'external-affairs': {
    name: 'External Affairs',
    title: 'External Affairs Council',
    description: 'The External Affairs Council coordinates international disaster assistance, manages foreign aid during emergencies, and represents Seychelles in international disaster management forums.',
    established: '2016',
    memberCount: '15',
    ministerialRepresentation: '6',
    coordinationCenters: '2',
    responseTeams: '4',
    annualBudget: '₨ 65 Million',
    leadership: {
      name: 'Ambassador Reza Uteem',
      position: 'Chairperson',
      appointment: 'September 2023',
      tenure: '4 Years',
      background: 'International Relations'
    },
    members: [
      {
        id: 'ea-mem-1',
        name: 'Ambassador Reza Uteem',
        position: 'Chairperson',
        organization: 'Ministry of Foreign Affairs',
        contact: 'r.uteem@foreignaffairs.gov.mu'
      },
      {
        id: 'ea-mem-2',
        name: 'Ms. Nadia Daby',
        position: 'Deputy Chair',
        organization: 'International Cooperation Department',
        contact: 'n.daby@icd.gov.mu'
      },
      {
        id: 'ea-mem-3',
        name: 'Mr. Kamal Rughoobur',
        position: 'Secretary',
        organization: 'Diplomatic Corps',
        contact: 'k.rughoobur@diplomacy.gov.mu'
      }
    ]
  },
  'disaster-management': {
    name: 'Disaster Management',
    title: 'Disaster Management Council',
    description: 'The Disaster Management Council is the primary coordinating body for all disaster-related activities in Seychelles, overseeing prevention, preparedness, response, and recovery efforts nationwide.',
    established: '2016',
    memberCount: '25',
    ministerialRepresentation: '20+',
    coordinationCenters: '6',
    responseTeams: '12',
    annualBudget: '₨ 250 Million',
    partnerOrganizations: ['usaid', 'undp', 'red-cross', 'world-bank'],
    disasterTypes: ['cyclone', 'flood', 'drought', 'earthquake', 'tsunami'],
    affectedPopulations: ['elderly', 'children', 'disabilities', 'pregnant'],
    leadership: {
      name: 'Dr. Rajesh Ramphul',
      position: 'Chairperson',
      appointment: 'April 2022',
      tenure: '4 Years',
      background: 'Public Infrastructure'
    },
    members: [
      {
        id: 'dm-mem-1',
        name: 'Dr. Rajesh Ramphul',
        position: 'Chairperson',
        organization: 'Ministry of Public Infrastructure',
        contact: 'r.ramphul@drmd.gov.mu'
      },
      {
        id: 'dm-mem-2',
        name: 'Gen. Vimal Sharma',
        position: 'Deputy Chair',
        organization: 'National Security Council',
        contact: 'v.sharma@nsc.gov.mu'
      },
      {
        id: 'dm-mem-3',
        name: 'Dr. Amina Cassim',
        position: 'Secretary',
        organization: 'DRMD Secretariat',
        contact: 'a.cassim@drmd.gov.mu'
      }
    ]
  },
  'health': {
    name: 'Health',
    title: 'Health Council',
    description: 'The Health Council coordinates disaster management efforts in the health sector, ensuring the safety and well-being of the population during emergencies and disasters.',
    established: '2016',
    memberCount: '20',
    ministerialRepresentation: '5',
    coordinationCenters: '3',
    responseTeams: '8',
    annualBudget: '₨ 100 Million',
    partnerOrganizations: ['undp', 'red-cross'],
    disasterTypes: ['cyclone', 'flood', 'earthquake'],
    affectedPopulations: ['elderly', 'children', 'disabilities', 'pregnant'],
    leadership: {
      name: 'Dr. Anjali Ramgoolam',
      position: 'Chairperson',
      appointment: 'January 2023',
      tenure: '4 Years',
      background: 'Public Health'
    },
    members: [
      {
        id: 'health-mem-1',
        name: 'Dr. Anjali Ramgoolam',
        position: 'Chairperson',
        organization: 'Ministry of Health',
        contact: 'a.ramgoolam@health.gov.mu'
      },
      {
        id: 'health-mem-2',
        name: 'Dr. Amina Cassim',
        position: 'Deputy Chair',
        organization: 'DRMD Secretariat',
        contact: 'a.cassim@drmd.gov.mu'
      },
      {
        id: 'health-mem-3',
        name: 'Dr. Rajesh Ramphul',
        position: 'Secretary',
        organization: 'Ministry of Health',
        contact: 'r.ramphul@health.gov.mu'
      }
    ]
  },
  'external-communications': {
    name: 'External Communications',
    title: 'External Communications Council',
    description: 'The External Communications Council is responsible for managing the flow of information during disasters, ensuring that accurate and timely information reaches the public, media, and international partners.',
    established: '2016',
    memberCount: '15',
    ministerialRepresentation: '3',
    coordinationCenters: '2',
    responseTeams: '4',
    annualBudget: '₨ 50 Million',
    leadership: {
      name: 'Dr. Amina Cassim',
      position: 'Chairperson',
      appointment: 'March 2023',
      tenure: '3 Years',
      background: 'Public Relations'
    },
    members: [
      {
        id: 'ext-comm-mem-1',
        name: 'Dr. Amina Cassim',
        position: 'Chairperson',
        organization: 'DRMD Secretariat',
        contact: 'a.cassim@drmd.gov.mu'
      },
      {
        id: 'ext-comm-mem-2',
        name: 'Dr. Rajesh Ramphul',
        position: 'Deputy Chair',
        organization: 'Ministry of Health',
        contact: 'r.ramphul@health.gov.mu'
      },
      {
        id: 'ext-comm-mem-3',
        name: 'Mrs. Leela Devi Sobnauth',
        position: 'Secretary',
        organization: 'Ministry of External Affairs',
        contact: 'l.sobnauth@externalaffairs.gov.mu'
      }
    ]
  },
  'finance': {
    name: 'Finance',
    title: 'Finance Council',
    description: 'The Finance Council is responsible for managing the financial aspects of disaster management, including budget allocation, resource mobilization, and financial planning for disaster response and recovery.',
    established: '2016',
    memberCount: '12',
    ministerialRepresentation: '4',
    coordinationCenters: '2',
    responseTeams: '3',
    annualBudget: '₨ 60 Million',
    leadership: {
      name: 'Dr. Rajesh Ramphul',
      position: 'Chairperson',
      appointment: 'April 2023',
      tenure: '3 Years',
      background: 'Finance'
    },
    members: [
      {
        id: 'finance-mem-1',
        name: 'Dr. Rajesh Ramphul',
        position: 'Chairperson',
        organization: 'Ministry of Finance',
        contact: 'r.ramphul@finance.gov.mu'
      },
      {
        id: 'finance-mem-2',
        name: 'Dr. Amina Cassim',
        position: 'Deputy Chair',
        organization: 'DRMD Secretariat',
        contact: 'a.cassim@drmd.gov.mu'
      },
      {
        id: 'finance-mem-3',
        name: 'Mr. Anand Ramkissoon',
        position: 'Secretary',
        organization: 'Ministry of Agriculture',
        contact: 'a.ramkissoon@agriculture.gov.mu'
      }
    ]
  },
  'fisheries': {
    name: 'Fisheries',
    title: 'Fisheries Council',
    description: 'The Fisheries Council is responsible for coordinating disaster management efforts related to fisheries, including aquaculture, fishing communities, and marine ecosystems during emergencies.',
    established: '2016',
    memberCount: '14',
    ministerialRepresentation: '4',
    coordinationCenters: '2',
    responseTeams: '3',
    annualBudget: '₨ 40 Million',
    partnerOrganizations: ['usaid', 'world-bank'],
    disasterTypes: ['drought', 'flood'],
    affectedPopulations: ['elderly', 'children'],
    leadership: {
      name: 'Dr. Anand Ramkissoon',
      position: 'Chairperson',
      appointment: 'May 2023',
      tenure: '3 Years',
      background: 'Fisheries Management'
    },
    members: [
      {
        id: 'fisheries-mem-1',
        name: 'Dr. Anand Ramkissoon',
        position: 'Chairperson',
        organization: 'Ministry of Fisheries',
        contact: 'a.ramkissoon@fisheries.gov.mu'
      },
      {
        id: 'fisheries-mem-2',
        name: 'Dr. Rajesh Ramphul',
        position: 'Deputy Chair',
        organization: 'Ministry of Health',
        contact: 'r.ramphul@health.gov.mu'
      },
      {
        id: 'fisheries-mem-3',
        name: 'Mrs. Leela Devi Sobnauth',
        position: 'Secretary',
        organization: 'Ministry of External Affairs',
        contact: 'l.sobnauth@externalaffairs.gov.mu'
      }
    ]
  },
  'gender-equality': {
    name: 'Gender Equality',
    title: 'Gender Equality Council',
    description: 'The Gender Equality Council is responsible for ensuring that disaster management policies and practices are gender-responsive, protecting the rights and needs of women, girls, boys, and men during emergencies.',
    established: '2016',
    memberCount: '16',
    ministerialRepresentation: '4',
    coordinationCenters: '2',
    responseTeams: '3',
    annualBudget: '₨ 50 Million',
    partnerOrganizations: ['usaid', 'world-bank'],
    disasterTypes: ['drought', 'flood'],
    affectedPopulations: ['elderly', 'children'],
    leadership: {
      name: 'Mrs. Leela Devi Sobnauth',
      position: 'Chairperson',
      appointment: 'July 2023',
      tenure: '3 Years',
      background: 'Gender Equality'
    },
    members: [
      {
        id: 'gender-mem-1',
        name: 'Mrs. Leela Devi Sobnauth',
        position: 'Chairperson',
        organization: 'Ministry of Gender Equality',
        contact: 'l.sobnauth@genderequality.gov.mu'
      },
      {
        id: 'gender-mem-2',
        name: 'Dr. Rajesh Ramphul',
        position: 'Deputy Chair',
        organization: 'Ministry of Health',
        contact: 'r.ramphul@health.gov.mu'
      },
      {
        id: 'gender-mem-3',
        name: 'Mr. Anand Ramkissoon',
        position: 'Secretary',
        organization: 'Ministry of Agriculture',
        contact: 'a.ramkissoon@agriculture.gov.mu'
      }
    ]
  },
  'home-affairs': {
    name: 'Home Affairs',
    title: 'Home Affairs Council',
    description: 'The Home Affairs Council is responsible for coordinating disaster management efforts related to internal security, law enforcement, and public order during emergencies.',
    established: '2016',
    memberCount: '15',
    ministerialRepresentation: '4',
    coordinationCenters: '2',
    responseTeams: '3',
    annualBudget: '₨ 45 Million',
    partnerOrganizations: ['usaid', 'world-bank'],
    disasterTypes: ['drought', 'flood'],
    affectedPopulations: ['elderly', 'children'],
    leadership: {
      name: 'Mr. Anand Ramkissoon',
      position: 'Chairperson',
      appointment: 'September 2023',
      tenure: '3 Years',
      background: 'Home Affairs'
    },
    members: [
      {
        id: 'home-mem-1',
        name: 'Mr. Anand Ramkissoon',
        position: 'Chairperson',
        organization: 'Ministry of Home Affairs',
        contact: 'a.ramkissoon@homeaffairs.gov.mu'
      },
      {
        id: 'home-mem-2',
        name: 'Mrs. Leela Devi Sobnauth',
        position: 'Deputy Chair',
        organization: 'Ministry of Gender Equality',
        contact: 'l.sobnauth@genderequality.gov.mu'
      },
      {
        id: 'home-mem-3',
        name: 'Dr. Rajesh Ramphul',
        position: 'Secretary',
        organization: 'Ministry of Health',
        contact: 'r.ramphul@health.gov.mu'
      }
    ]
  },
  'housing-lands': {
    name: 'Housing and Lands',
    title: 'Housing and Lands Council',
    description: 'The Housing and Lands Council is responsible for coordinating disaster management efforts related to housing, land use, and infrastructure during emergencies.',
    established: '2016',
    memberCount: '14',
    ministerialRepresentation: '4',
    coordinationCenters: '2',
    responseTeams: '3',
    annualBudget: '₨ 40 Million',
    partnerOrganizations: ['usaid', 'world-bank'],
    disasterTypes: ['drought', 'flood'],
    affectedPopulations: ['elderly', 'children'],
    leadership: {
      name: 'Mrs. Leela Devi Sobnauth',
      position: 'Chairperson',
      appointment: 'October 2023',
      tenure: '3 Years',
      background: 'Housing and Lands'
    },
    members: [
      {
        id: 'housing-mem-1',
        name: 'Mrs. Leela Devi Sobnauth',
        position: 'Chairperson',
        organization: 'Ministry of Housing and Lands',
        contact: 'l.sobnauth@housing.gov.mu'
      },
      {
        id: 'housing-mem-2',
        name: 'Mr. Anand Ramkissoon',
        position: 'Deputy Chair',
        organization: 'Ministry of Home Affairs',
        contact: 'a.ramkissoon@homeaffairs.gov.mu'
      },
      {
        id: 'housing-mem-3',
        name: 'Dr. Rajesh Ramphul',
        position: 'Secretary',
        organization: 'Ministry of Health',
        contact: 'r.ramphul@health.gov.mu'
      }
    ]
  },
  'local-government': {
    name: 'Local Government',
    title: 'Local Government Council',
    description: 'The Local Government Council coordinates disaster management efforts at the local level, ensuring effective response and recovery in districts and municipalities during emergencies.',
    established: '2016',
    memberCount: '16',
    ministerialRepresentation: '4',
    coordinationCenters: '3',
    responseTeams: '4',
    annualBudget: '₨ 50 Million',
    partnerOrganizations: ['usaid', 'world-bank'],
    disasterTypes: ['drought', 'flood'],
    affectedPopulations: ['elderly', 'children'],
    leadership: {
      name: 'Mr. Anand Ramkissoon',
      position: 'Chairperson',
      appointment: 'November 2023',
      tenure: '3 Years',
      background: 'Local Government'
    },
    members: [
      {
        id: 'local-mem-1',
        name: 'Mr. Anand Ramkissoon',
        position: 'Chairperson',
        organization: 'Ministry of Local Government',
        contact: 'a.ramkissoon@localgov.gov.mu'
      },
      {
        id: 'local-mem-2',
        name: 'Mrs. Leela Devi Sobnauth',
        position: 'Deputy Chair',
        organization: 'Ministry of Housing and Lands',
        contact: 'l.sobnauth@housing.gov.mu'
      },
      {
        id: 'local-mem-3',
        name: 'Dr. Rajesh Ramphul',
        position: 'Secretary',
        organization: 'Ministry of Health',
        contact: 'r.ramphul@health.gov.mu'
      }
    ]
  },
  'public-infrastructure': {
    name: 'Public Infrastructure',
    title: 'Public Infrastructure Council',
    description: 'The Public Infrastructure Council coordinates disaster management efforts related to public infrastructure, including transportation, utilities, and public facilities during emergencies.',
    established: '2016',
    memberCount: '14',
    ministerialRepresentation: '4',
    coordinationCenters: '3',
    responseTeams: '4',
    annualBudget: '₨ 50 Million',
    partnerOrganizations: ['usaid', 'world-bank'],
    disasterTypes: ['drought', 'flood'],
    affectedPopulations: ['elderly', 'children'],
    leadership: {
      name: 'Mr. Anand Ramkissoon',
      position: 'Chairperson',
      appointment: 'November 2023',
      tenure: '3 Years',
      background: 'Public Infrastructure'
    },
    members: [
      {
        id: 'pub-inf-mem-1',
        name: 'Mr. Anand Ramkissoon',
        position: 'Chairperson',
        organization: 'Ministry of Public Infrastructure',
        contact: 'a.ramkissoon@publicinfrastructure.gov.mu'
      },
      {
        id: 'pub-inf-mem-2',
        name: 'Dr. Rajesh Ramphul',
        position: 'Deputy Chair',
        organization: 'Ministry of Health',
        contact: 'r.ramphul@health.gov.mu'
      },
      {
        id: 'pub-inf-mem-3',
        name: 'Dr. Amina Cassim',
        position: 'Secretary',
        organization: 'DRMD Secretariat',
        contact: 'a.cassim@drmd.gov.mu'
      }
    ]
  },
  'public-utilities': {
    name: 'Public Utilities',
    title: 'Public Utilities Council',
    description: 'The Public Utilities Council coordinates disaster management efforts related to public utilities, including water supply, electricity, and telecommunications during emergencies.',
    established: '2016',
    memberCount: '12',
    ministerialRepresentation: '3',
    coordinationCenters: '2',
    responseTeams: '3',
    annualBudget: '₨ 40 Million',
    partnerOrganizations: ['usaid', 'world-bank'],
    disasterTypes: ['drought', 'flood'],
    affectedPopulations: ['elderly', 'children'],
    leadership: {
      name: 'Dr. Rajesh Ramphul',
      position: 'Chairperson',
      appointment: 'November 2023',
      tenure: '3 Years',
      background: 'Public Utilities'
    },
    members: [
      {
        id: 'pub-ut-mem-1',
        name: 'Dr. Rajesh Ramphul',
        position: 'Chairperson',
        organization: 'Ministry of Public Utilities',
        contact: 'r.ramphul@publicutilities.gov.mu'
      },
      {
        id: 'pub-ut-mem-2',
        name: 'Dr. Amina Cassim',
        position: 'Deputy Chair',
        organization: 'DRMD Secretariat',
        contact: 'a.cassim@drmd.gov.mu'
      },
      {
        id: 'pub-ut-mem-3',
        name: 'Mr. Anand Ramkissoon',
        position: 'Secretary',
        organization: 'Ministry of Public Infrastructure',
        contact: 'a.ramkissoon@publicinfrastructure.gov.mu'
      }
    ]
  },
  'social-security': {
    name: 'Social Security',
    title: 'Social Security Council',
    description: 'The Social Security Council coordinates disaster management efforts related to social security, including welfare programs, social protection, and community resilience during emergencies.',
    established: '2016',
    memberCount: '16',
    ministerialRepresentation: '4',
    coordinationCenters: '3',
    responseTeams: '4',
    annualBudget: '₨ 60 Million',
    partnerOrganizations: ['usaid', 'world-bank'],
    disasterTypes: ['drought', 'flood'],
    affectedPopulations: ['elderly', 'children'],
    leadership: {
      name: 'Dr. Amina Cassim',
      position: 'Chairperson',
      appointment: 'November 2023',
      tenure: '3 Years',
      background: 'Social Security'
    },
    members: [
      {
        id: 'soc-sec-mem-1',
        name: 'Dr. Amina Cassim',
        position: 'Chairperson',
        organization: 'DRMD Secretariat',
        contact: 'a.cassim@drmd.gov.mu'
      },
      {
        id: 'soc-sec-mem-2',
        name: 'Dr. Rajesh Ramphul',
        position: 'Deputy Chair',
        organization: 'Ministry of Health',
        contact: 'r.ramphul@health.gov.mu'
      },
      {
        id: 'soc-sec-mem-3',
        name: 'Mr. Anand Ramkissoon',
        position: 'Secretary',
        organization: 'Ministry of Public Utilities',
        contact: 'a.ramkissoon@publicutilities.gov.mu'
      }
    ]
  },
  'tourism': {
    name: 'Tourism',
    title: 'Tourism Council',
    description: 'The Tourism Council coordinates disaster management efforts related to the tourism industry, including resorts, hotels, and tourist attractions during emergencies.',
    established: '2016',
    memberCount: '14',
    ministerialRepresentation: '4',
    coordinationCenters: '2',
    responseTeams: '3',
    annualBudget: '₨ 50 Million',
    partnerOrganizations: ['usaid', 'world-bank'],
    disasterTypes: ['drought', 'flood'],
    affectedPopulations: ['elderly', 'children'],
    leadership: {
      name: 'Mrs. Leela Devi Sobnauth',
      position: 'Chairperson',
      appointment: 'November 2023',
      tenure: '3 Years',
      background: 'Tourism'
    },
    members: [
      {
        id: 'tourism-mem-1',
        name: 'Mrs. Leela Devi Sobnauth',
        position: 'Chairperson',
        organization: 'Ministry of Tourism',
        contact: 'l.sobnauth@tourism.gov.mu'
      },
      {
        id: 'tourism-mem-2',
        name: 'Dr. Rajesh Ramphul',
        position: 'Deputy Chair',
        organization: 'Ministry of Health',
        contact: 'r.ramphul@health.gov.mu'
      },
      {
        id: 'tourism-mem-3',
        name: 'Mr. Anand Ramkissoon',
        position: 'Secretary',
        organization: 'Ministry of Public Utilities',
        contact: 'a.ramkissoon@publicutilities.gov.mu'
      }
    ]
  }
};

// Define types
export type CouncilKey = keyof typeof councilData;
export type CouncilDataType = typeof councilData[CouncilKey];

export default councilData;