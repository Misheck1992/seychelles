// Consolidated Ministry Data for all 15 Seychelles Government Ministries
// Source: Wikipedia - Cabinet of Seychelles (October 2025)
// https://en.wikipedia.org/wiki/Cabinet_of_Seychelles
// Last Updated: December 2025

import { Ministry, ministriesData } from './ministries-data';
import { ministriesDataPart2 } from './ministries-data-part2';
import { ministriesDataPart3 } from './ministries-data-part3';
import { ministriesDataPart4 } from './ministries-data-part4';

// Merge all ministry data
export const allMinistriesData: Record<string, Ministry> = {
  ...ministriesData,
  ...ministriesDataPart2,
  ...ministriesDataPart3,
  ...ministriesDataPart4
};

// Export all ministries as an array
export const allMinistries: Ministry[] = [
  // 1. Vice President's Office
  allMinistriesData['vice-president'],
  // 2. Ministry of Finance, Economic Planning and Trade
  allMinistriesData['finance'],
  // 3. Ministry of Health
  allMinistriesData['health'],
  // 4. Ministry of Employment and Human Resource Planning
  allMinistriesData['employment'],
  // 5. Ministry of Homeland Security and Civil Affairs
  allMinistriesData['homeland-security'],
  // 6. Ministry of Education and Human Resource Development
  allMinistriesData['education'],
  // 7. Ministry of Transport, Port and Civil Aviation
  allMinistriesData['transport'],
  // 8. Ministry for Local Government and Inner Islands
  allMinistriesData['local-government'],
  // 9. Ministry of Youth and Sports
  allMinistriesData['youth-sports'],
  // 10. Ministry of Fisheries and Blue Economy
  allMinistriesData['fisheries'],
  // 11. Ministry of Foreign Affairs and Diaspora
  allMinistriesData['foreign-affairs'],
  // 12. Ministry of Social Affairs, Family and Equality
  allMinistriesData['social-affairs'],
  // 13. Ministry of Environment, Climate, Energy and Natural Resources
  allMinistriesData['environment'],
  // 14. Ministry of Industry and Enterprise
  allMinistriesData['industry'],
  // 15. Ministry of Tourism and Culture
  allMinistriesData['tourism']
];

// Helper functions
export function getMinistryById(id: string): Ministry | undefined {
  return allMinistriesData[id];
}

export function getAllMinistries(): Ministry[] {
  return allMinistries.filter(m => m !== undefined);
}

export function getMinisteriesByDRMDRole(): Ministry[] {
  return getAllMinistries().filter(ministry => ministry.drmdRole && ministry.drmdRole.length > 0);
}

export function getMinistryByMinisterName(ministerName: string): Ministry | undefined {
  return getAllMinistries().find(ministry => ministry.minister === ministerName);
}

export function getMinistriesByPortfolio(portfolio: string): Ministry[] {
  return getAllMinistries().filter(ministry => 
    ministry.portfolio.some(p => p.toLowerCase().includes(portfolio.toLowerCase()))
  );
}

// Export ministry names for navigation
export const ministryNames = allMinistries.map(m => ({
  id: m.id,
  name: m.name,
  shortName: m.shortName,
  minister: m.minister
}));

// Export ministers list
export const ministersList = allMinistries.map(m => ({
  name: m.minister,
  ministry: m.name,
  since: m.ministerSince,
  image: m.leadership.image
}));

// Statistics
export const ministryStatistics = {
  totalMinistries: allMinistries.length,
  totalStaff: allMinistries.reduce((sum, m) => {
    const staff = m.staffCount?.replace(/[^0-9]/g, '') || '0';
    return sum + parseInt(staff);
  }, 0),
  totalBudget: allMinistries.reduce((sum, m) => {
    const budget = m.annualBudget?.replace(/[^0-9]/g, '') || '0';
    return sum + parseInt(budget);
  }, 0),
  ministriesWithDRMDRole: getMinisteriesByDRMDRole().length
};

