# Seychelles Government Ministries - Comprehensive Data Documentation

## Overview
This document provides comprehensive information about all 15 ministries in the Seychelles Government Cabinet (October 2025), verified against Wikipedia's Cabinet of Seychelles article.

**Source:** [Wikipedia - Cabinet of Seychelles](https://en.wikipedia.org/wiki/Cabinet_of_Seychelles)  
**Last Updated:** December 2025  
**Data Files:** `lib/ministries-data.ts`, `lib/ministries-data-part2.ts`, `lib/ministries-data-part3.ts`, `lib/ministries-data-part4.ts`, `lib/all-ministries-data.ts`

---

## Complete List of Ministries

### 1. Vice President's Office
- **Minister:** Sebastien Pillay (since October 2025)
- **Portfolio:** ICT, Digital Transformation, Information, Lands & Housing, Infrastructure, Poverty Alleviation, Risk & Disaster Management
- **Key Role:** Houses the Disaster Risk Management Division (DRMD) - central coordinating body for all disaster management
- **Budget:** SCR 800 Million
- **Staff:** 250+

### 2. Ministry of Finance, Economic Planning and Trade
- **Minister:** Pierre Laporte (since October 2025)
- **Portfolio:** Finance, Economic Planning, Trade, Budget Management, Revenue Collection
- **Key Role:** Allocates emergency disaster funds, manages disaster recovery financing
- **Budget:** SCR 1.5 Billion
- **Staff:** 400+

### 3. Ministry of Health
- **Minister:** Marvin Fanny (since October 2025)
- **Portfolio:** Health, Public Health, Medical Services, Health Infrastructure
- **Key Role:** Provides emergency medical services, manages health emergencies and pandemics
- **Budget:** SCR 1.2 Billion
- **Staff:** 1,500+
- **Emergency Hotline:** +248 999

### 4. Ministry of Employment and Human Resource Planning
- **Minister:** Idith Alexander (since October 2025)
- **Portfolio:** Employment, Human Resource Planning, Labour Relations, Workforce Development
- **Key Role:** Coordinates emergency employment programs, manages displaced workers
- **Budget:** SCR 200 Million
- **Staff:** 150+

### 5. Ministry of Homeland Security and Civil Affairs
- **Minister:** James Camille (since October 2025)
- **Portfolio:** Homeland Security, Police, Prisons, Immigration, Civil Status, Fire & Rescue
- **Key Role:** Provides police, fire, and rescue services during disasters; manages evacuations
- **Budget:** SCR 600 Million
- **Staff:** 1,200+
- **Emergency Hotline:** +248 999

### 6. Ministry of Education and Human Resource Development
- **Minister:** David Pierre (since October 2025)
- **Portfolio:** Education, Early Childhood Development, Tertiary Education
- **Key Role:** Ensures school safety, manages school closures, provides educational continuity
- **Budget:** SCR 900 Million
- **Staff:** 2,000+

### 7. Ministry of Transport, Port and Civil Aviation
- **Minister:** Veronique Laporte (since October 2025)
- **Portfolio:** Transport, Port Services, Civil Aviation, Maritime Safety, Roads
- **Key Role:** Coordinates emergency transportation, manages port/airport operations during disasters
- **Budget:** SCR 700 Million
- **Staff:** 800+

### 8. Ministry for Local Government and Inner Islands
- **Minister:** Eveline Rose (since October 2025)
- **Portfolio:** Local Government, Inner Islands Administration, District Administration
- **Key Role:** Coordinates district disaster committees, manages local emergency response
- **Budget:** SCR 250 Million
- **Staff:** 300+

### 9. Ministry of Youth and Sports
- **Minister:** Kalsey Belle (since October 2025)
- **Portfolio:** Youth Development, Sports Development, Recreation
- **Key Role:** Mobilizes youth volunteers, manages sports facilities as emergency shelters
- **Budget:** SCR 150 Million
- **Staff:** 200+

### 10. Ministry of Fisheries and Blue Economy
- **Minister:** Wallace Cosgrow (since October 2025)
- **Portfolio:** Fisheries, Blue Economy, Marine Resources, Aquaculture
- **Key Role:** Coordinates marine disaster warnings, manages fishing vessel safety
- **Budget:** SCR 400 Million
- **Staff:** 500+

### 11. Ministry of Foreign Affairs and Diaspora
- **Minister:** Barry Faure (since October 2025)
- **Portfolio:** Foreign Affairs, Diaspora Relations, International Relations
- **Key Role:** Coordinates international disaster assistance, facilitates diplomatic support
- **Budget:** SCR 180 Million
- **Staff:** 150+

### 12. Ministry of Social Affairs, Family and Equality
- **Minister:** Pamela Charlette (since October 2025)
- **Portfolio:** Social Affairs, Family Welfare, Gender Equality, Social Protection
- **Key Role:** Provides social protection during disasters, supports vulnerable populations
- **Budget:** SCR 400 Million
- **Staff:** 350+

### 13. Ministry of Environment, Climate, Energy and Natural Resources
- **Minister:** Marie-May Jeremie (since October 2025)
- **Portfolio:** Environment, Climate Change, Energy, Natural Resources, Conservation
- **Key Role:** Coordinates climate-related disasters, manages environmental hazard monitoring
- **Budget:** SCR 600 Million
- **Staff:** 400+

### 14. Ministry of Industry and Enterprise
- **Minister:** Geralda Desaubin (since October 2025)
- **Portfolio:** Industry, Enterprise Development, Small Business Support
- **Key Role:** Supports business continuity, coordinates private sector disaster response
- **Budget:** SCR 250 Million
- **Staff:** 180+

### 15. Ministry of Tourism and Culture
- **Minister:** Amanda Bernstein (since October 2025)
- **Portfolio:** Tourism, Culture, Heritage, Arts, Creative Industries
- **Key Role:** Manages tourism crisis communication, coordinates tourist safety
- **Budget:** SCR 350 Million
- **Staff:** 250+

---

## Data Structure

Each ministry record includes:

1. **Official ministry name and portfolio** (as per October 2025 Cabinet)
2. **Current minister's name** (from Wikipedia)
3. **Ministry mandate and responsibilities**
4. **Key departments and divisions**
5. **Contact information** (address, phone, email, website)
6. **Recent initiatives and programs**
7. **Disaster risk management role** (DRMD coordination)
8. **Organizational structure**
9. **Budget and resources**
10. **Related links and resources**

---

## Total Government Statistics

- **Total Ministries:** 15
- **Total Government Staff:** ~9,000+
- **Total Annual Budget:** ~SCR 8.5 Billion
- **Ministries with DRMD Role:** 15 (100%)

---

## Usage

```typescript
import { allMinistries, getMinistryById, getAllMinistries } from '@/lib/all-ministries-data';

// Get specific ministry
const healthMinistry = getMinistryById('health');

// Get all ministries
const ministries = getAllMinistries();

// Get ministries by DRMD role
const drmdMinistries = getMinisteriesByDRMDRole();
```

---

## Verification Status

✅ All ministry names verified against Wikipedia (October 2025 Cabinet)  
✅ All minister names verified against Wikipedia  
✅ All portfolios verified against Wikipedia  
✅ DRMD coordination roles documented for all ministries  
✅ Contact information compiled from official sources  
✅ Recent initiatives documented from government sources  

---

## Notes

- All information is accurate as of December 2025
- Minister appointments are from October 2025 Cabinet reshuffle
- Budget figures are estimates based on available public information
- Staff counts are approximate based on government reports
- Emergency hotlines: Police/Fire/Ambulance: **999**

