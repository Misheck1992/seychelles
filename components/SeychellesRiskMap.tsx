'use client';

import React, { useEffect } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

// Seychelles districts with risk data
const seychellesDistricts = [
  { name: 'Anse Boileau', coordinates: [-4.7167, 55.4833] as [number, number], risk: 'high', affected: 1200 },
  { name: 'Baie Lazare', coordinates: [-4.7500, 55.4833] as [number, number], risk: 'medium', affected: 800 },
  { name: 'Beau Vallon', coordinates: [-4.6167, 55.4333] as [number, number], risk: 'low', affected: 150 },
  { name: 'Glacis', coordinates: [-4.5833, 55.4167] as [number, number], risk: 'high', affected: 1500 },
  { name: 'Grand Anse Mahé', coordinates: [-4.6833, 55.4667] as [number, number], risk: 'medium', affected: 950 },
  { name: 'La Digue', coordinates: [-4.3500, 55.8333] as [number, number], risk: 'medium', affected: 2000 },
  { name: 'Praslin', coordinates: [-4.3167, 55.7333] as [number, number], risk: 'low', affected: 500 },
  { name: 'Victoria', coordinates: [-4.6167, 55.4500] as [number, number], risk: 'high', affected: 3000 },
];

const getRiskColor = (risk: string): string => {
  switch (risk) {
    case 'high':
      return '#ff6e40';
    case 'medium':
      return '#ffa726';
    case 'low':
      return '#66bb6a';
    default:
      return '#9e9e9e';
  }
};

const getRiskRadius = (affected: number): number => {
  // Scale radius based on affected population
  return Math.sqrt(affected) * 50;
};

const SeychellesRiskMap: React.FC = () => {
  // Fix Leaflet icon issue
  useEffect(() => {
    // Fix Leaflet default icon issue
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);

  // Center on Seychelles (Mahé island)
  const center: [number, number] = [-4.6167, 55.4500];
  const zoom = 11;

  return (
    <MapContainer
      center={center as LatLngExpression}
      zoom={zoom}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%', minHeight: '400px', zIndex: 1 }}
      className="leaflet-map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Add risk zones as circles */}
      {seychellesDistricts.map((district, index) => (
        <Circle
          key={index}
          center={district.coordinates as LatLngExpression}
          radius={getRiskRadius(district.affected)}
          pathOptions={{
            color: getRiskColor(district.risk),
            fillColor: getRiskColor(district.risk),
            fillOpacity: 0.4,
            weight: 2,
          }}
        >
          <Popup>
            <div style={{ minWidth: '150px' }}>
              <h6 style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>{district.name}</h6>
              <p style={{ margin: '4px 0', fontSize: '14px' }}>
                <strong>Risk Level:</strong> <span style={{ 
                  color: getRiskColor(district.risk), 
                  textTransform: 'capitalize',
                  fontWeight: 'bold'
                }}>{district.risk}</span>
              </p>
              <p style={{ margin: '4px 0', fontSize: '14px' }}>
                <strong>Affected:</strong> {district.affected.toLocaleString()} people
              </p>
            </div>
          </Popup>
        </Circle>
      ))}
    </MapContainer>
  );
};

export default SeychellesRiskMap;

