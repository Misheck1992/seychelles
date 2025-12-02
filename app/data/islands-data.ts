// app/data/islands-data.ts
// Seychelles Islands Data - Source: Wikipedia
// https://en.wikipedia.org/wiki/List_of_islands_of_Seychelles

export interface Island {
  id: string;
  name: string;
  area: number; // km²
  coastline?: number; // km
  highestPoint?: number; // meters
  highestPointName?: string;
  population: number;
  populationDensity?: number; // per km²
  largestSettlement?: string;
  district?: string;
  group: 'Granitic Seychelles' | 'Outer Islands';
  subGroup: string;
  coordinates: [number, number]; // [lat, lng]
  description: string;
  notableFeatures: string[];
  disasterRisks: string[];
  isInhabited: boolean;
  isUNESCO?: boolean;
}

export const islandsData: Island[] = [
  // Major Inner Islands (Granitic Seychelles)
  {
    id: 'mahe',
    name: 'Mahé',
    area: 155.01,
    coastline: 111.30,
    highestPoint: 905,
    highestPointName: 'Morne Seychellois',
    population: 95000,
    populationDensity: 612.86,
    largestSettlement: 'Victoria',
    district: '22 districts',
    group: 'Granitic Seychelles',
    subGroup: 'Mahé Islands',
    coordinates: [-4.6833, 55.4833],
    description: 'Mahé is the largest island in Seychelles and home to the capital Victoria. It contains 90% of the country\'s population and is the economic and cultural hub. The island features dramatic granite peaks, tropical forests, and over 65 beaches.',
    notableFeatures: [
      'Victoria - smallest capital city in the world',
      'Morne Seychellois National Park',
      'Seychelles International Airport',
      'Victoria Clocktower (Little Ben)',
      'Beau Vallon Beach',
      'Sir Selwyn Selwyn-Clarke Market'
    ],
    disasterRisks: ['Flooding', 'Landslides', 'Tropical cyclones', 'Heavy rainfall'],
    isInhabited: true
  },
  {
    id: 'praslin',
    name: 'Praslin',
    area: 38.00,
    coastline: 46.00,
    highestPoint: 367,
    highestPointName: 'Mont Azore',
    population: 7553,
    populationDensity: 198.76,
    largestSettlement: 'Baie Sainte Anne',
    district: 'Baie Sainte Anne, Grand\'Anse Praslin',
    group: 'Granitic Seychelles',
    subGroup: 'Praslin Islands',
    coordinates: [-4.3167, 55.7333],
    description: 'Praslin is the second-largest island in Seychelles, famous for the UNESCO World Heritage Site Vallée de Mai, home to the endemic Coco de Mer palm. The island offers pristine beaches including Anse Lazio, consistently rated among the world\'s best.',
    notableFeatures: [
      'Vallée de Mai UNESCO World Heritage Site',
      'Coco de Mer palm (largest seed in the world)',
      'Anse Lazio Beach',
      'Praslin National Park',
      'Black Parrot (endemic bird)',
      'Fond Ferdinand Nature Reserve'
    ],
    disasterRisks: ['Coastal flooding', 'Tropical storms', 'Erosion'],
    isInhabited: true,
    isUNESCO: true
  },
  {
    id: 'la-digue',
    name: 'La Digue',
    area: 10.08,
    coastline: 15.40,
    highestPoint: 333,
    highestPointName: 'Belle Vue',
    population: 2800,
    populationDensity: 277.78,
    largestSettlement: 'La Passe',
    district: 'La Digue and Inner Islands',
    group: 'Granitic Seychelles',
    subGroup: 'La Digue',
    coordinates: [-4.3583, 55.8417],
    description: 'La Digue is the fourth-largest inhabited island, famous for Anse Source d\'Argent, one of the most photographed beaches in the world. The island maintains a traditional lifestyle with ox-carts and bicycles as primary transport.',
    notableFeatures: [
      'Anse Source d\'Argent Beach',
      'L\'Union Estate (colonial plantation)',
      'Giant Aldabra tortoises',
      'Veuve Nature Reserve (Paradise Flycatcher)',
      'Traditional ox-cart transport',
      'Granite boulder formations'
    ],
    disasterRisks: ['Sea level rise', 'Coastal erosion', 'Storm surge'],
    isInhabited: true
  },
  {
    id: 'silhouette',
    name: 'Silhouette Island',
    area: 20.10,
    coastline: 21.00,
    highestPoint: 751,
    highestPointName: 'Mont Dauban',
    population: 160,
    populationDensity: 7.62,
    largestSettlement: 'La Passe',
    district: 'La Digue and Inner Islands',
    group: 'Granitic Seychelles',
    subGroup: 'Silhouette',
    coordinates: [-4.4833, 55.2333],
    description: 'Silhouette is the third-largest island, largely undeveloped and covered in primeval forest. It is a nature reserve with exceptional biodiversity, including endemic plants and the critically endangered Seychelles sheath-tailed bat.',
    notableFeatures: [
      'Silhouette National Park',
      'Mont Dauban (second highest peak)',
      'Pristine rainforest ecosystem',
      'Endemic pitcher plants',
      'Seychelles sheath-tailed bat habitat',
      'Historic Dauban Mausoleum'
    ],
    disasterRisks: ['Landslides', 'Flash floods', 'Tropical storms'],
    isInhabited: true
  },
  // Outer Islands
  {
    id: 'aldabra',
    name: 'Aldabra Atoll',
    area: 155.40, // total land area of atoll
    coastline: 106.65,
    highestPoint: 8,
    population: 12,
    largestSettlement: 'La Gigi (research station)',
    group: 'Outer Islands',
    subGroup: 'Aldabra Group',
    coordinates: [-9.4167, 46.3500],
    description: 'Aldabra is the world\'s second-largest coral atoll and a UNESCO World Heritage Site. It is home to the world\'s largest population of giant tortoises (over 100,000) and is virtually untouched by humans.',
    notableFeatures: [
      'UNESCO World Heritage Site (1982)',
      'World\'s largest population of giant tortoises',
      'Largest raised coral atoll',
      'Aldabra rail (only flightless bird in Indian Ocean)',
      'Important seabird breeding site',
      'Pristine marine ecosystem'
    ],
    disasterRisks: ['Sea level rise', 'Climate change', 'Extreme weather'],
    isInhabited: true,
    isUNESCO: true
  },
  {
    id: 'assumption',
    name: 'Assumption Island',
    area: 11.60,
    coastline: 17.23,
    highestPoint: 32,
    highestPointName: 'Southeast Hill',
    population: 20,
    populationDensity: 1.72,
    largestSettlement: 'Assumption',
    group: 'Outer Islands',
    subGroup: 'Aldabra Group',
    coordinates: [-9.7500, 46.5000],
    description: 'Assumption Island is located 27 km south of Aldabra. It was heavily mined for guano in the early 20th century but is now being restored. Plans exist for a joint India-Seychelles naval facility.',
    notableFeatures: [
      'Strategic location near Aldabra',
      'Former guano mining site',
      'Ongoing ecological restoration',
      'Important for regional security'
    ],
    disasterRisks: ['Cyclones', 'Storm surge', 'Sea level rise'],
    isInhabited: true
  },
  {
    id: 'desroches',
    name: 'Desroches Island',
    area: 4.03,
    coastline: 13.10,
    population: 100,
    populationDensity: 24.81,
    largestSettlement: 'Desroches',
    group: 'Outer Islands',
    subGroup: 'Amirante Islands',
    coordinates: [-5.6833, 53.6667],
    description: 'Desroches is the largest island in the Amirante group, featuring a luxury resort and an airstrip. It offers world-class diving and fishing opportunities.',
    notableFeatures: [
      'Four Seasons Resort',
      'Desroches Island airstrip',
      'Excellent diving and snorkeling',
      'Deep-sea fishing destination',
      'Coconut plantation'
    ],
    disasterRisks: ['Tropical cyclones', 'Storm surge', 'Coastal erosion'],
    isInhabited: true
  },
  {
    id: 'alphonse',
    name: 'Alphonse Island',
    area: 1.71,
    coastline: 5.50,
    population: 82,
    populationDensity: 47.95,
    largestSettlement: 'Alphonse',
    group: 'Outer Islands',
    subGroup: 'Alphonse Group',
    coordinates: [-7.0167, 52.7333],
    description: 'Alphonse is a coral island known for world-class fly fishing, particularly for bonefish, permit, and giant trevally. It features an eco-lodge and is a premier fishing destination.',
    notableFeatures: [
      'World-class fly fishing',
      'Alphonse Island Lodge',
      'Pristine coral flats',
      'Turtle nesting beaches',
      'Bird sanctuary'
    ],
    disasterRisks: ['Cyclones', 'Sea level rise', 'Coral bleaching'],
    isInhabited: true
  },
  {
    id: 'bird-island',
    name: 'Bird Island',
    area: 0.94,
    coastline: 4.46,
    population: 38,
    populationDensity: 40.43,
    largestSettlement: 'Bird Island Village',
    district: 'La Digue and Inner Islands',
    group: 'Granitic Seychelles',
    subGroup: 'Northern Coral Group',
    coordinates: [-3.7167, 55.2000],
    description: 'Bird Island is the northernmost island of Seychelles, famous for its massive colonies of sooty terns (up to 1.5 million birds) and home to Esmeralda, one of the world\'s largest and oldest tortoises.',
    notableFeatures: [
      'Esmeralda - giant tortoise (over 170 years old)',
      'Sooty tern colony (1.5 million birds)',
      'Important seabird breeding site',
      'Hawksbill turtle nesting',
      'Eco-lodge accommodation'
    ],
    disasterRisks: ['Storm surge', 'Sea level rise', 'Tropical storms'],
    isInhabited: true
  },
  {
    id: 'denis-island',
    name: 'Denis Island',
    area: 1.40,
    coastline: 5.20,
    population: 80,
    populationDensity: 57.14,
    largestSettlement: 'St. Denis',
    district: 'La Digue and Inner Islands',
    group: 'Granitic Seychelles',
    subGroup: 'Northern Coral Group',
    coordinates: [-3.8000, 55.6667],
    description: 'Denis Island is a private coral island with an exclusive eco-lodge. It is known for its conservation efforts, including the reintroduction of endemic species and sustainable tourism practices.',
    notableFeatures: [
      'Denis Private Island resort',
      'Conservation and rewilding programs',
      'Organic farm',
      'Excellent diving and fishing',
      'Turtle nesting beaches'
    ],
    disasterRisks: ['Tropical cyclones', 'Storm surge', 'Coastal erosion'],
    isInhabited: true
  },
  {
    id: 'fregate',
    name: 'Frégate Island',
    area: 2.07,
    coastline: 6.35,
    highestPoint: 125,
    highestPointName: 'Mount Signal',
    population: 214,
    populationDensity: 103.38,
    largestSettlement: 'Frégate village',
    district: 'La Digue and Inner Islands',
    group: 'Granitic Seychelles',
    subGroup: 'Frégate',
    coordinates: [-4.5833, 55.9333],
    description: 'Frégate is a private island with an ultra-luxury resort. It is famous for its conservation success, having saved the Seychelles magpie-robin from extinction and hosting a large population of giant tortoises.',
    notableFeatures: [
      'Frégate Island Private resort',
      'Seychelles magpie-robin conservation',
      'Over 2,000 giant tortoises',
      'Seven pristine beaches',
      'Historic pirate connections'
    ],
    disasterRisks: ['Tropical storms', 'Coastal erosion', 'Landslides'],
    isInhabited: true
  },
  {
    id: 'north-island',
    name: 'North Island',
    area: 2.01,
    coastline: 6.66,
    highestPoint: 180,
    highestPointName: 'Grand Paloss',
    population: 152,
    populationDensity: 75.62,
    largestSettlement: 'North village',
    district: 'La Digue and Inner Islands',
    group: 'Granitic Seychelles',
    subGroup: 'Silhouette',
    coordinates: [-4.4000, 55.2500],
    description: 'North Island is an exclusive private island resort known for its environmental rehabilitation program. It was the honeymoon destination of Prince William and Catherine Middleton in 2011.',
    notableFeatures: [
      'North Island Lodge (ultra-luxury)',
      'Royal honeymoon destination (2011)',
      'Noah\'s Ark conservation project',
      'Pristine beaches',
      'Turtle nesting site'
    ],
    disasterRisks: ['Tropical cyclones', 'Storm surge', 'Erosion'],
    isInhabited: true
  }
];

// Island groups summary
export const islandGroups = {
  'Granitic Seychelles': {
    name: 'Inner Islands (Granitic)',
    totalIslands: 45,
    totalArea: 244.0, // km²
    population: 98000,
    description: 'The Inner Islands are granitic islands clustered around Mahé, Praslin, and La Digue. They contain 99% of the population and are the main tourist destinations.'
  },
  'Outer Islands': {
    name: 'Outer Islands (Coralline)',
    totalIslands: 70,
    totalArea: 211.8, // km²
    population: 503,
    description: 'The Outer Islands are low-lying coral islands and atolls scattered across the Indian Ocean, including the UNESCO World Heritage Site of Aldabra Atoll.'
  }
};

export default islandsData;

