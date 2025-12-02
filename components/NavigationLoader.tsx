'use client';

import React from 'react';

interface NavigationLoaderProps {
  isVisible: boolean;
}

const NavigationLoader: React.FC<NavigationLoaderProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="navigation-loader-overlay">
      <div className="navigation-loader-content">
        <div className="navigation-spinner">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <p className="navigation-loader-text">Loading page...</p>
      </div>
    </div>
  );
};

export default NavigationLoader;

