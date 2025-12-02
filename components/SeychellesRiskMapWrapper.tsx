'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the map component with no SSR
const SeychellesRiskMapNoSSR = dynamic(() => import('./SeychellesRiskMap'), {
  ssr: false,
  loading: () => (
    <div className="d-flex justify-content-center align-items-center bg-light" style={{ height: '400px', borderRadius: '4px' }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading map...</span>
      </div>
    </div>
  )
});

const SeychellesRiskMapWrapper: React.FC = () => {
  return (
    <div className="map-container position-relative" style={{ height: '400px', width: '100%', padding: '0' }}>
      <SeychellesRiskMapNoSSR />
    </div>
  );
};

export default SeychellesRiskMapWrapper;

