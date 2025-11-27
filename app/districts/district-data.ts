// app/districts/district-data.ts

// District data with risk profiles and coordinates for map
export const districtData = {
  'anse-aux-pins': {
    name: 'Anse aux Pins',
    title: 'Anse aux Pins District',
    description: 'Anse aux Pins is located on the southeastern coast of Mahé, Seychelles. The district faces challenges related to coastal flooding, erosion, and tropical storms.',
    population: '3,200',
    area: '5.2 km²',
    elevation: '0-200m',
    evacuationCenters: '2',
    emergencyTeams: '1',
    riskLevel: 'Medium',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.7167, 55.5167], // [latitude, longitude]
    riskData: {
      lowRisk: 30,
      mediumRisk: 50,
      highRisk: 20
    },
    lowRiskAreas: 'Elevated inland areas',
    mediumRiskAreas: 'Residential zones, commercial areas',
    highRiskAreas: 'Coastal areas, low-lying regions'
  },
  'anse-boileau': {
    name: 'Anse Boileau',
    title: 'Anse Boileau District',
    description: 'Anse Boileau is located on the western coast of Mahé. Known for its beautiful beaches and residential areas, it faces moderate risks from coastal erosion and flash floods.',
    population: '4,100',
    area: '6.8 km²',
    elevation: '0-300m',
    evacuationCenters: '3',
    emergencyTeams: '2',
    riskLevel: 'Medium',
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
  'anse-etoile': {
    name: 'Anse Etoile',
    title: 'Anse Etoile District',
    description: 'Anse Etoile is located in the northern part of Mahé. The district faces risks from coastal flooding and tropical cyclones.',
    population: '5,800',
    area: '8.4 km²',
    elevation: '0-250m',
    evacuationCenters: '3',
    emergencyTeams: '2',
    riskLevel: 'Medium',
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
  'victoria': {
    name: 'Victoria',
    title: 'Victoria District',
    description: 'Victoria is the capital city of Seychelles, located on the northeast coast of Mahé. As the major urban and commercial center, it faces unique challenges including urban flooding, coastal threats, and infrastructure stress.',
    population: '26,450',
    area: '12.5 km²',
    elevation: '0-400m',
    evacuationCenters: '8',
    emergencyTeams: '6',
    riskLevel: 'Medium-High',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.6167, 55.4500],
    riskData: {
      lowRisk: 20,
      mediumRisk: 50,
      highRisk: 30
    },
    lowRiskAreas: 'Elevated urban areas, central districts',
    mediumRiskAreas: 'Commercial zones, residential areas',
    highRiskAreas: 'Port area, coastal zones, low-lying commercial districts'
  },
  'beau-vallon': {
    name: 'Beau Vallon',
    title: 'Beau Vallon District',
    description: 'Beau Vallon is located on the northwestern coast of Mahé and is famous for its beach. The district is a major tourism area facing risks from coastal erosion and tropical storms.',
    population: '4,500',
    area: '5.6 km²',
    elevation: '0-280m',
    evacuationCenters: '3',
    emergencyTeams: '2',
    riskLevel: 'Medium',
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
  'takamaka': {
    name: 'Takamaka',
    title: 'Takamaka District',
    description: 'Takamaka is located on the southwestern coast of Mahé. The district is known for its natural beauty and faces challenges related to coastal erosion and landslides.',
    population: '2,800',
    area: '7.2 km²',
    elevation: '0-350m',
    evacuationCenters: '2',
    emergencyTeams: '1',
    riskLevel: 'Medium',
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
  'baie-lazare': {
    name: 'Baie Lazare',
    title: 'Baie Lazare District',
    description: 'Baie Lazare is located on the southwestern coast of Mahé. The district faces moderate risks from coastal flooding and erosion.',
    population: '3,100',
    area: '6.4 km²',
    elevation: '0-320m',
    evacuationCenters: '2',
    emergencyTeams: '1',
    riskLevel: 'Medium-Low',
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
  'grand-anse-mahe': {
    name: 'Grand Anse Mahé',
    title: 'Grand Anse Mahé District',
    description: 'Grand Anse Mahé is located on the western coast of Mahé. The district is known for its beach and faces risks from coastal erosion and flooding.',
    population: '3,600',
    area: '5.8 km²',
    elevation: '0-280m',
    evacuationCenters: '2',
    emergencyTeams: '1',
    riskLevel: 'Medium',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.6833, 55.4667],
    riskData: {
      lowRisk: 30,
      mediumRisk: 50,
      highRisk: 20
    },
    lowRiskAreas: 'Inland elevated areas',
    mediumRiskAreas: 'Residential areas, coastal settlements',
    highRiskAreas: 'Beach areas, low-lying coastal zones'
  },
  'praslin': {
    name: 'Praslin',
    title: 'Praslin Island',
    description: 'Praslin is the second-largest island in Seychelles. Home to the UNESCO World Heritage Site Vallée de Mai, it faces risks from tropical cyclones and coastal erosion.',
    population: '7,500',
    area: '38.5 km²',
    elevation: '0-367m',
    evacuationCenters: '5',
    emergencyTeams: '3',
    riskLevel: 'Medium',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.3167, 55.7333],
    riskData: {
      lowRisk: 30,
      mediumRisk: 50,
      highRisk: 20
    },
    lowRiskAreas: 'Central elevated areas, protected valleys',
    mediumRiskAreas: 'Coastal settlements, tourism areas',
    highRiskAreas: 'Low-lying coastal areas, beach zones'
  },
  'la-digue': {
    name: 'La Digue',
    title: 'La Digue and Inner Islands',
    description: 'La Digue is the third-most populated island in Seychelles. Known for its pristine beaches and traditional lifestyle, the island faces significant risks from sea level rise and coastal erosion.',
    population: '2,800',
    area: '10.08 km²',
    elevation: '0-333m',
    evacuationCenters: '3',
    emergencyTeams: '2',
    riskLevel: 'Medium-High',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-4.3583, 55.8417],
    riskData: {
      lowRisk: 20,
      mediumRisk: 50,
      highRisk: 30
    },
    lowRiskAreas: 'Central elevated areas',
    mediumRiskAreas: 'Residential areas, inland settlements',
    highRiskAreas: 'Coastal areas, beach zones, low-lying regions'
  },
  'mont-fleuri': {
    name: 'Mont Fleuri',
    title: 'Mont Fleuri District',
    description: 'Mont Fleuri is located in the central-eastern part of Mahé, near Victoria. The district is primarily residential and educational, facing moderate risks from urban flooding.',
    population: '5,200',
    area: '4.6 km²',
    elevation: '50-400m',
    evacuationCenters: '3',
    emergencyTeams: '2',
    riskLevel: 'Low-Medium',
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
    description: 'Plaisance is located in the central part of Mahé. The district is primarily residential and faces moderate risks from flash floods during heavy rainfall.',
    population: '4,800',
    area: '5.4 km²',
    elevation: '100-450m',
    evacuationCenters: '3',
    emergencyTeams: '2',
    riskLevel: 'Low-Medium',
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
  'cascade': {
    name: 'Cascade',
    title: 'Cascade District',
    description: 'Cascade is located on the eastern coast of Mahé. The district is primarily residential and industrial, facing risks from coastal flooding and urban drainage issues.',
    population: '6,200',
    area: '7.2 km²',
    elevation: '0-350m',
    evacuationCenters: '4',
    emergencyTeams: '2',
    riskLevel: 'Medium',
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
  'glacis': {
    name: 'Glacis',
    title: 'Glacis District',
    description: 'Glacis is located in the northern part of Mahé. The district has a mix of residential and commercial areas, facing moderate risks from flooding and coastal erosion.',
    population: '4,900',
    area: '6.6 km²',
    elevation: '0-300m',
    evacuationCenters: '3',
    emergencyTeams: '2',
    riskLevel: 'Medium',
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
  'anse-royale': {
    name: 'Anse Royale',
    title: 'Anse Royale District',
    description: 'Anse Royale is located on the southeastern coast of Mahé. The district is a mix of residential and tourism areas, facing risks from coastal flooding and erosion.',
    population: '4,400',
    area: '7.8 km²',
    elevation: '0-280m',
    evacuationCenters: '3',
    emergencyTeams: '2',
    riskLevel: 'Medium',
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
  'port-glaud': {
    name: 'Port Glaud',
    title: 'Port Glaud District',
    description: 'Port Glaud is located on the western coast of Mahé. Known for its natural beauty and marine parks, the district faces risks from coastal erosion and landslides.',
    population: '2,600',
    area: '8.2 km²',
    elevation: '0-420m',
    evacuationCenters: '2',
    emergencyTeams: '1',
    riskLevel: 'Medium',
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
  'outer-islands': {
    name: 'Outer Islands',
    title: 'Outer Islands of Seychelles',
    description: 'The Outer Islands of Seychelles include coral islands and atolls scattered across the Indian Ocean. These remote islands face extreme risks from climate change, sea level rise, and tropical cyclones.',
    population: '200',
    area: '211.3 km²',
    elevation: '0-9m',
    evacuationCenters: '3',
    emergencyTeams: '1',
    riskLevel: 'Extreme',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-5.3500, 53.7667],
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
