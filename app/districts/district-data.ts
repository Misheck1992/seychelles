// app/districts/district-data.ts
// Source: Wikipedia - Districts of Seychelles (2024 census data)

// District data with risk profiles and coordinates for map
export const districtData = {
  // East Mahé Districts
  'anse-aux-pins': {
    name: 'Anse aux Pins',
    title: 'Anse aux Pins District',
    description: 'Anse aux Pins is located on the southeastern coast of Mahé, Seychelles. Home to the Craft Village and traditional architecture, the district is known for its local crafts and cultural heritage. It faces challenges related to coastal flooding, erosion, and tropical storms.',
    population: '3,673',
    area: '2.2 km²',
    elevation: '0-200m',
    evacuationCenters: '2',
    emergencyTeams: '1',
    riskLevel: 'Medium',
    region: 'East Mahé',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.7167, 55.5167],
    riskData: {
      lowRisk: 30,
      mediumRisk: 50,
      highRisk: 20
    },
    lowRiskAreas: 'Elevated inland areas',
    mediumRiskAreas: 'Residential zones, commercial areas',
    highRiskAreas: 'Coastal areas, low-lying regions'
  },
  'au-cap': {
    name: 'Au Cap',
    title: 'Au Cap District',
    description: 'Au Cap is located on the eastern coast of Mahé between Anse aux Pins and Anse Royale. The district features scenic coastal views and residential areas, facing moderate risks from coastal erosion.',
    population: '3,743',
    area: '8.7 km²',
    elevation: '0-250m',
    evacuationCenters: '2',
    emergencyTeams: '1',
    riskLevel: 'Medium',
    region: 'East Mahé',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.7250, 55.5083],
    riskData: {
      lowRisk: 35,
      mediumRisk: 45,
      highRisk: 20
    },
    lowRiskAreas: 'Elevated residential areas',
    mediumRiskAreas: 'Coastal settlements',
    highRiskAreas: 'Low-lying coastal zones'
  },
  'cascade': {
    name: 'Cascade',
    title: 'Cascade District',
    description: 'Cascade is located on the eastern coast of Mahé. The district is primarily residential and industrial, home to various commercial activities. It faces risks from coastal flooding and urban drainage issues.',
    population: '4,088',
    area: '10.4 km²',
    elevation: '0-350m',
    evacuationCenters: '4',
    emergencyTeams: '2',
    riskLevel: 'Medium',
    region: 'East Mahé',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.6333, 55.4833],
    riskData: {
      lowRisk: 30,
      mediumRisk: 50,
      highRisk: 20
    },
    lowRiskAreas: 'Elevated residential areas',
    mediumRiskAreas: 'Industrial zones, urban areas',
    highRiskAreas: 'Coastal areas, low-lying industrial zones'
  },
  'pointe-larue': {
    name: 'Pointe La Rue',
    title: 'Pointe La Rue District',
    description: 'Pointe La Rue is located on the eastern coast of Mahé, home to the Seychelles International Airport. The district is a key transportation hub facing unique challenges related to aviation safety and coastal flooding.',
    population: '3,245',
    area: '3.9 km²',
    elevation: '0-50m',
    evacuationCenters: '3',
    emergencyTeams: '2',
    riskLevel: 'Medium-High',
    region: 'East Mahé',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.6833, 55.5167],
    riskData: {
      lowRisk: 20,
      mediumRisk: 50,
      highRisk: 30
    },
    lowRiskAreas: 'Airport facilities',
    mediumRiskAreas: 'Residential areas',
    highRiskAreas: 'Low-lying coastal zones, reclaimed land'
  },
  // West Mahé Districts
  'anse-boileau': {
    name: 'Anse Boileau',
    title: 'Anse Boileau District',
    description: 'Anse Boileau is located on the western coast of Mahé. Known for its beautiful beaches and residential areas, it is one of the larger districts on Mahé. It faces moderate risks from coastal erosion and flash floods.',
    population: '4,183',
    area: '12.0 km²',
    elevation: '0-300m',
    evacuationCenters: '3',
    emergencyTeams: '2',
    riskLevel: 'Medium',
    region: 'West Mahé',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.7167, 55.4833],
    riskData: {
      lowRisk: 35,
      mediumRisk: 45,
      highRisk: 20
    },
    lowRiskAreas: 'Elevated regions, inland areas',
    mediumRiskAreas: 'Coastal settlements, residential areas',
    highRiskAreas: 'Beach fronts, low-lying coastal areas'
  },
  'bel-ombre': {
    name: 'Bel Ombre',
    title: 'Bel Ombre District',
    description: 'Bel Ombre is located on the western coast of Mahé. The district features a mix of residential areas and natural landscapes, with risks from flash flooding during heavy rainfall.',
    population: '4,163',
    area: '9.2 km²',
    elevation: '0-350m',
    evacuationCenters: '2',
    emergencyTeams: '1',
    riskLevel: 'Medium',
    region: 'West Mahé',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.6833, 55.4667],
    riskData: {
      lowRisk: 35,
      mediumRisk: 45,
      highRisk: 20
    },
    lowRiskAreas: 'Elevated areas',
    mediumRiskAreas: 'Residential zones',
    highRiskAreas: 'Low-lying areas, stream valleys'
  },
  'grand-anse-mahe': {
    name: 'Grand\'Anse Mahé',
    title: 'Grand\'Anse Mahé District',
    description: 'Grand\'Anse Mahé is located on the western coast of Mahé. The district is known for its scenic beach and faces risks from coastal erosion and flooding during monsoon seasons.',
    population: '2,842',
    area: '15.4 km²',
    elevation: '0-280m',
    evacuationCenters: '2',
    emergencyTeams: '1',
    riskLevel: 'Medium',
    region: 'West Mahé',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.6833, 55.4333],
    riskData: {
      lowRisk: 30,
      mediumRisk: 50,
      highRisk: 20
    },
    lowRiskAreas: 'Inland elevated areas',
    mediumRiskAreas: 'Residential areas, coastal settlements',
    highRiskAreas: 'Beach areas, low-lying coastal zones'
  },
  'port-glaud': {
    name: 'Port Glaud',
    title: 'Port Glaud District',
    description: 'Port Glaud is the largest district on Mahé, located on the western coast. Known for its natural beauty, marine parks, and the Port Launay Marine National Park, the district faces risks from coastal erosion and landslides in hilly terrain.',
    population: '2,378',
    area: '28.7 km²',
    elevation: '0-420m',
    evacuationCenters: '2',
    emergencyTeams: '1',
    riskLevel: 'Medium',
    region: 'West Mahé',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.6500, 55.4333],
    riskData: {
      lowRisk: 35,
      mediumRisk: 45,
      highRisk: 20
    },
    lowRiskAreas: 'Elevated inland areas',
    mediumRiskAreas: 'Coastal settlements, residential zones',
    highRiskAreas: 'Coastal areas, steep slopes'
  },
  // North Mahé Districts
  'anse-etoile': {
    name: 'Anse Etoile',
    title: 'Anse Etoile District',
    description: 'Anse Etoile is located in the northern part of Mahé. A residential district with coastal frontage, it faces risks from coastal flooding and tropical cyclones.',
    population: '5,018',
    area: '5.8 km²',
    elevation: '0-250m',
    evacuationCenters: '3',
    emergencyTeams: '2',
    riskLevel: 'Medium',
    region: 'North Mahé',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.5833, 55.5000],
    riskData: {
      lowRisk: 30,
      mediumRisk: 50,
      highRisk: 20
    },
    lowRiskAreas: 'Central highlands, inland areas',
    mediumRiskAreas: 'Residential zones, commercial areas',
    highRiskAreas: 'Coastal areas, flood-prone regions'
  },
  'beau-vallon': {
    name: 'Beau Vallon',
    title: 'Beau Vallon District',
    description: 'Beau Vallon is located on the northwestern coast of Mahé and is famous for its popular beach - the most visited in Seychelles. The district is a major tourism center facing risks from coastal erosion and tropical storms.',
    population: '4,142',
    area: '4.3 km²',
    elevation: '0-280m',
    evacuationCenters: '3',
    emergencyTeams: '2',
    riskLevel: 'Medium',
    region: 'North Mahé',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.6167, 55.4333],
    riskData: {
      lowRisk: 25,
      mediumRisk: 55,
      highRisk: 20
    },
    lowRiskAreas: 'Inland elevated areas',
    mediumRiskAreas: 'Residential zones, tourism facilities',
    highRiskAreas: 'Beach areas, coastal developments'
  },
  'glacis': {
    name: 'Glacis',
    title: 'Glacis District',
    description: 'Glacis is located in the northern part of Mahé. The district has a mix of residential and commercial areas, facing moderate risks from flooding and coastal erosion.',
    population: '4,157',
    area: '7.0 km²',
    elevation: '0-300m',
    evacuationCenters: '3',
    emergencyTeams: '2',
    riskLevel: 'Medium',
    region: 'North Mahé',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.6000, 55.4833],
    riskData: {
      lowRisk: 35,
      mediumRisk: 45,
      highRisk: 20
    },
    lowRiskAreas: 'Inland elevated areas, central regions',
    mediumRiskAreas: 'Residential zones, commercial areas',
    highRiskAreas: 'Coastal areas, low-lying regions'
  },
  // Greater Victoria Districts (8 districts forming the capital area)
  'bel-air': {
    name: 'Bel Air',
    title: 'Bel Air District',
    description: 'Bel Air is one of the eight districts that make up Greater Victoria, the capital area of Seychelles. A residential district located in the heart of the capital region.',
    population: '3,015',
    area: '4.7 km²',
    elevation: '50-400m',
    evacuationCenters: '2',
    emergencyTeams: '2',
    riskLevel: 'Low-Medium',
    region: 'Greater Victoria',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.6200, 55.4583],
    riskData: {
      lowRisk: 50,
      mediumRisk: 40,
      highRisk: 10
    },
    lowRiskAreas: 'Elevated residential areas',
    mediumRiskAreas: 'Urban zones',
    highRiskAreas: 'Lower elevation drainage areas'
  },
  'english-river': {
    name: 'English River',
    title: 'English River District',
    description: 'English River is located in the Greater Victoria area and is one of the most densely populated districts. Home to commercial activities and the main port area.',
    population: '4,252',
    area: '1.7 km²',
    elevation: '0-50m',
    evacuationCenters: '3',
    emergencyTeams: '3',
    riskLevel: 'Medium-High',
    region: 'Greater Victoria',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.6167, 55.4500],
    riskData: {
      lowRisk: 20,
      mediumRisk: 50,
      highRisk: 30
    },
    lowRiskAreas: 'Elevated commercial areas',
    mediumRiskAreas: 'Urban residential zones',
    highRiskAreas: 'Port area, low-lying commercial districts'
  },
  'les-mamelles': {
    name: 'Les Mamelles',
    title: 'Les Mamelles District',
    description: 'Les Mamelles is part of Greater Victoria, featuring residential areas on the hillsides. The district offers views of the capital and faces moderate landslide risks in hilly terrain.',
    population: '2,537',
    area: '1.8 km²',
    elevation: '100-500m',
    evacuationCenters: '2',
    emergencyTeams: '1',
    riskLevel: 'Medium',
    region: 'Greater Victoria',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.6333, 55.4417],
    riskData: {
      lowRisk: 35,
      mediumRisk: 45,
      highRisk: 20
    },
    lowRiskAreas: 'Stable hillside areas',
    mediumRiskAreas: 'Residential zones',
    highRiskAreas: 'Steep slopes, erosion-prone areas'
  },
  'mont-buxton': {
    name: 'Mont Buxton',
    title: 'Mont Buxton District',
    description: 'Mont Buxton is a hillside district in Greater Victoria, featuring residential neighborhoods on elevated terrain. Generally lower flood risk due to elevation.',
    population: '3,173',
    area: '1.2 km²',
    elevation: '100-450m',
    evacuationCenters: '2',
    emergencyTeams: '1',
    riskLevel: 'Low-Medium',
    region: 'Greater Victoria',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.6250, 55.4583],
    riskData: {
      lowRisk: 55,
      mediumRisk: 35,
      highRisk: 10
    },
    lowRiskAreas: 'Higher elevation residential areas',
    mediumRiskAreas: 'Moderate slopes',
    highRiskAreas: 'Steep drainage channels'
  },
  'mont-fleuri': {
    name: 'Mont Fleuri',
    title: 'Mont Fleuri District',
    description: 'Mont Fleuri is located in Greater Victoria. The district is primarily residential and educational, home to the Botanical Gardens and National Library. It faces moderate risks from urban flooding.',
    population: '3,966',
    area: '6.1 km²',
    elevation: '50-400m',
    evacuationCenters: '3',
    emergencyTeams: '2',
    riskLevel: 'Low-Medium',
    region: 'Greater Victoria',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.6333, 55.4667],
    riskData: {
      lowRisk: 50,
      mediumRisk: 40,
      highRisk: 10
    },
    lowRiskAreas: 'Higher elevation areas, central plateau',
    mediumRiskAreas: 'Residential zones, urban areas',
    highRiskAreas: 'Lower elevation areas, drainage zones'
  },
  'plaisance': {
    name: 'Plaisance',
    title: 'Plaisance District',
    description: 'Plaisance is part of Greater Victoria. The district is primarily residential and faces moderate risks from flash floods during heavy rainfall.',
    population: '3,690',
    area: '3.4 km²',
    elevation: '100-450m',
    evacuationCenters: '3',
    emergencyTeams: '2',
    riskLevel: 'Low-Medium',
    region: 'Greater Victoria',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.6500, 55.4667],
    riskData: {
      lowRisk: 55,
      mediumRisk: 35,
      highRisk: 10
    },
    lowRiskAreas: 'Higher elevation residential areas',
    mediumRiskAreas: 'Moderate elevation zones, urban areas',
    highRiskAreas: 'Water catchment areas, drainage zones'
  },
  'roche-caiman': {
    name: 'Roche Caïman',
    title: 'Roche Caïman District',
    description: 'Roche Caïman is part of Greater Victoria and includes reclaimed land areas. Home to the National Stadium and various facilities, it faces higher flood risks due to low elevation.',
    population: '2,893',
    area: '1.2 km²',
    elevation: '0-20m',
    evacuationCenters: '2',
    emergencyTeams: '2',
    riskLevel: 'Medium-High',
    region: 'Greater Victoria',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.6417, 55.4667],
    riskData: {
      lowRisk: 20,
      mediumRisk: 50,
      highRisk: 30
    },
    lowRiskAreas: 'Elevated structures',
    mediumRiskAreas: 'Commercial and sports facilities',
    highRiskAreas: 'Reclaimed land, low-lying areas'
  },
  'saint-louis': {
    name: 'Saint Louis',
    title: 'Saint Louis District',
    description: 'Saint Louis is the smallest district by area in Greater Victoria. A densely populated urban district facing challenges related to urban flooding and drainage.',
    population: '3,436',
    area: '1.1 km²',
    elevation: '0-100m',
    evacuationCenters: '2',
    emergencyTeams: '2',
    riskLevel: 'Medium',
    region: 'Greater Victoria',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.6250, 55.4500],
    riskData: {
      lowRisk: 30,
      mediumRisk: 50,
      highRisk: 20
    },
    lowRiskAreas: 'Elevated areas',
    mediumRiskAreas: 'Urban residential zones',
    highRiskAreas: 'Low-lying areas, drainage channels'
  },
  // South Mahé Districts
  'anse-royale': {
    name: 'Anse Royale',
    title: 'Anse Royale District',
    description: 'Anse Royale is located on the southeastern coast of Mahé. The district is a mix of residential and tourism areas, home to the University of Seychelles. It faces risks from coastal flooding and erosion.',
    population: '3,818',
    area: '6.6 km²',
    elevation: '0-280m',
    evacuationCenters: '3',
    emergencyTeams: '2',
    riskLevel: 'Medium',
    region: 'South Mahé',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.7333, 55.5167],
    riskData: {
      lowRisk: 30,
      mediumRisk: 50,
      highRisk: 20
    },
    lowRiskAreas: 'Inland elevated areas, central regions',
    mediumRiskAreas: 'Residential areas, coastal settlements',
    highRiskAreas: 'Beach areas, low-lying coastal zones'
  },
  'baie-lazare': {
    name: 'Baie Lazare',
    title: 'Baie Lazare District',
    description: 'Baie Lazare is located on the southwestern coast of Mahé. Named after the French explorer Lazare Picault, the district is known for its scenic beauty and faces moderate risks from coastal flooding and erosion.',
    population: '3,227',
    area: '12.1 km²',
    elevation: '0-320m',
    evacuationCenters: '2',
    emergencyTeams: '1',
    riskLevel: 'Medium-Low',
    region: 'South Mahé',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.7500, 55.4833],
    riskData: {
      lowRisk: 45,
      mediumRisk: 40,
      highRisk: 15
    },
    lowRiskAreas: 'Elevated regions, central areas',
    mediumRiskAreas: 'Coastal settlements, residential zones',
    highRiskAreas: 'Low-lying coastal areas, beach fronts'
  },
  'takamaka': {
    name: 'Takamaka',
    title: 'Takamaka District',
    description: 'Takamaka is located on the southeastern coast of Mahé. The district is known for its natural beauty, rum distillery, and lush vegetation. It faces challenges related to coastal erosion and landslides.',
    population: '2,580',
    area: '14.4 km²',
    elevation: '0-350m',
    evacuationCenters: '2',
    emergencyTeams: '1',
    riskLevel: 'Medium',
    region: 'South Mahé',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.7500, 55.5000],
    riskData: {
      lowRisk: 40,
      mediumRisk: 40,
      highRisk: 20
    },
    lowRiskAreas: 'Higher elevation areas, inland regions',
    mediumRiskAreas: 'Coastal settlements, steep slopes',
    highRiskAreas: 'Coastal areas, landslide-prone slopes'
  },
  // Praslin Districts
  'baie-sainte-anne': {
    name: 'Baie Sainte Anne',
    title: 'Baie Sainte Anne District',
    description: 'Baie Sainte Anne is one of two districts on Praslin Island. Home to the UNESCO World Heritage Site Vallée de Mai and the famous Coco de Mer palm. The district includes the main jetty and ferry terminal.',
    population: '3,626',
    area: '25.1 km²',
    elevation: '0-367m',
    evacuationCenters: '3',
    emergencyTeams: '2',
    riskLevel: 'Medium',
    region: 'Praslin',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.3167, 55.7500],
    riskData: {
      lowRisk: 30,
      mediumRisk: 50,
      highRisk: 20
    },
    lowRiskAreas: 'Central elevated areas, Vallée de Mai',
    mediumRiskAreas: 'Coastal settlements, tourism areas',
    highRiskAreas: 'Low-lying coastal areas, beach zones'
  },
  'grand-anse-praslin': {
    name: 'Grand\'Anse Praslin',
    title: 'Grand\'Anse Praslin District',
    description: 'Grand\'Anse Praslin is the second district on Praslin Island. Known for its beautiful beach and luxury resorts, the district is a major tourism destination. It faces risks from coastal erosion and tropical storms.',
    population: '4,056',
    area: '14.4 km²',
    elevation: '0-350m',
    evacuationCenters: '3',
    emergencyTeams: '2',
    riskLevel: 'Medium',
    region: 'Praslin',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.3250, 55.7083],
    riskData: {
      lowRisk: 30,
      mediumRisk: 50,
      highRisk: 20
    },
    lowRiskAreas: 'Inland elevated areas',
    mediumRiskAreas: 'Resort areas, residential zones',
    highRiskAreas: 'Beach areas, low-lying coastal zones'
  },
  // La Digue and Inner Islands
  'la-digue': {
    name: 'La Digue',
    title: 'La Digue and Inner Islands District',
    description: 'La Digue is the fourth-largest inhabited island in Seychelles. Famous for Anse Source d\'Argent beach, the island maintains a traditional lifestyle with ox-carts and bicycles. The district includes nearby inner islands. It faces significant risks from sea level rise and coastal erosion.',
    population: '3,506',
    area: '41.8 km²',
    elevation: '0-333m',
    evacuationCenters: '3',
    emergencyTeams: '2',
    riskLevel: 'Medium-High',
    region: 'Inner Islands',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.3583, 55.8417],
    riskData: {
      lowRisk: 20,
      mediumRisk: 50,
      highRisk: 30
    },
    lowRiskAreas: 'Central elevated areas, Belle Vue',
    mediumRiskAreas: 'Residential areas, inland settlements',
    highRiskAreas: 'Coastal areas, beach zones, low-lying regions'
  },
  // Outer Islands
  'outer-islands': {
    name: 'Outer Islands',
    title: 'Outer Islands of Seychelles',
    description: 'The Outer Islands district includes over 70 coral islands and atolls scattered across the Indian Ocean, including Aldabra (UNESCO World Heritage Site), Alphonse, Desroches, and Farquhar. These remote islands face extreme risks from climate change, sea level rise, and tropical cyclones.',
    population: '503',
    area: '211.8 km²',
    elevation: '0-9m',
    evacuationCenters: '3',
    emergencyTeams: '1',
    riskLevel: 'Extreme',
    region: 'Outer Islands',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-9.4167, 46.3500],
    riskData: {
      lowRisk: 5,
      mediumRisk: 15,
      highRisk: 80
    },
    lowRiskAreas: 'Limited higher ground on larger islands',
    mediumRiskAreas: 'Central areas of inhabited islands',
    highRiskAreas: 'Most coastal areas, low-lying atolls'
  }
};
