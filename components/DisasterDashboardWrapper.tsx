"use client"

import React from 'react';
import dynamic from 'next/dynamic';

const DisasterDashboard = dynamic(() => import('./DisasterDashboard'), {
  ssr: false,
  loading: () => (
    <div className="disaster-dashboard pt-100 pb-75 bg-sand">
      <div className="container">
        <div className="section-title style3 text-center mb-40">
          <span>Interactive Dashboard</span>
          <h2>Disaster Impact Analysis</h2>
          <p>Loading dashboard...</p>
        </div>
      </div>
    </div>
  )
});

const DisasterDashboardWrapper = () => {
  return <DisasterDashboard />;
};

export default DisasterDashboardWrapper;
