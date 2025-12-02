"use client";
import React, { useState } from 'react';

const EmergencyPortalSection: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  // Seychelles 26 administrative districts (source: Wikipedia)
  const districts = [
    // Greater Victoria districts
    { value: "bel-air", label: "Bel Air" },
    { value: "english-river", label: "English River" },
    { value: "les-mamelles", label: "Les Mamelles" },
    { value: "mont-buxton", label: "Mont Buxton" },
    { value: "mont-fleuri", label: "Mont Fleuri" },
    { value: "plaisance", label: "Plaisance" },
    { value: "roche-caiman", label: "Roche Caïman" },
    { value: "saint-louis", label: "Saint Louis" },
    // North Mahé districts
    { value: "anse-etoile", label: "Anse Etoile" },
    { value: "beau-vallon", label: "Beau Vallon" },
    { value: "glacis", label: "Glacis" },
    // East Mahé districts
    { value: "anse-aux-pins", label: "Anse aux Pins" },
    { value: "au-cap", label: "Au Cap" },
    { value: "cascade", label: "Cascade" },
    { value: "pointe-larue", label: "Pointe La Rue" },
    // South Mahé districts
    { value: "anse-royale", label: "Anse Royale" },
    { value: "baie-lazare", label: "Baie Lazare" },
    { value: "takamaka", label: "Takamaka" },
    // West Mahé districts
    { value: "anse-boileau", label: "Anse Boileau" },
    { value: "bel-ombre", label: "Bel Ombre" },
    { value: "grand-anse-mahe", label: "Grand'Anse Mahé" },
    { value: "port-glaud", label: "Port Glaud" },
    // Praslin districts
    { value: "baie-sainte-anne", label: "Baie Sainte Anne" },
    { value: "grand-anse-praslin", label: "Grand'Anse Praslin" },
    // Other islands
    { value: "la-digue", label: "La Digue and Inner Islands" },
    { value: "outer-islands", label: "Outer Islands" }
  ];

  return (
    <div className="container mt-100">
      <div className="donate-box ptb-100" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="content-title style2 text-center mb-40">
          <span style={{ color: "#338f7a" }}>Disaster Preparedness</span>
          <h2 style={{ color: "#338f7a" }}>Access Emergency Preparedness Resources</h2>
          <p>Select your district to view location-specific emergency plans, evacuation routes, and resource centers.</p>
        </div>
        <div className="row justify-content-center mb-4">
          <div className="col-md-8">
            <div className="form-group">
              <select 
                className="form-control form-select" 
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                style={{ height: "60px", borderRadius: "10px" }}
              >
                <option value="">Select Your District</option>
                {districts.map(district => (
                  <option key={district.value} value={district.value}>
                    {district.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {selectedDistrict && (
          <div className="row text-center district-resource-buttons" id="district-resources">
            <div className="col-md-4 mb-3">
              <a 
                href={`districts/${selectedDistrict}/evacuation-plans.html`} 
                className="btn style1 w-100"
              >
                Evacuation Plans
              </a>
            </div>
            <div className="col-md-4 mb-3">
              <a 
                href={`districts/${selectedDistrict}/emergency-contacts.html`} 
                className="btn style1 w-100"
              >
                Emergency Contacts
              </a>
            </div>
            <div className="col-md-4 mb-3">
              <a 
                href={`districts/${selectedDistrict}/resource-centers.html`} 
                className="btn style1 w-100"
              >
                Resource Centers
              </a>
            </div>
          </div>
        )}
        <div className="text-center mt-4">
          <a href="preparedness/index.html" className="btn style2">View All Preparedness Resources</a>
        </div>
      </div>
    </div>
  );
};

export default EmergencyPortalSection;