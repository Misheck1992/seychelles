"use client"

import React from 'react';
import Link from 'next/link';

// Source: https://www.drmd.sc/ - Mitigating Disasters section
const DisasterTypesSection: React.FC = () => {
  return (
    <section className="py-12 bg-light">
      <div className="container">
        <div className="section-title style3 text-center mb-40">
          <span>Mitigating Disasters</span>
          <h2>Hazards in Seychelles</h2>
          <p>Learn about different types of hazards and how to prepare for them</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="disaster-type-card text-center p-4 mb-4 rounded shadow-sm">
              <div className="disaster-icon mb-3">
                <i className="flaticon-health-care text-primary" style={{ fontSize: '48px' }}></i>
              </div>
              <h3 className="h5 mb-3">Flooding</h3>
              <p className="mb-3">Flood risks and preparedness measures for Seychelles communities</p>
              <Link href="/disasters/flooding" className="link style1">
                Learn More <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="disaster-type-card text-center p-4 mb-4 rounded shadow-sm">
              <div className="disaster-icon mb-3">
                <i className="flaticon-share text-primary" style={{ fontSize: '48px' }}></i>
              </div>
              <h3 className="h5 mb-3">Landslides</h3>
              <p className="mb-3">Landslide hazards in hilly terrain and safety measures</p>
              <Link href="/disasters/landslides" className="link style1">
                Learn More <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="disaster-type-card text-center p-4 mb-4 rounded shadow-sm">
              <div className="disaster-icon mb-3">
                <i className="flaticon-support text-primary" style={{ fontSize: '48px' }}></i>
              </div>
              <h3 className="h5 mb-3">Fire</h3>
              <p className="mb-3">Fire safety, prevention, and emergency response procedures</p>
              <Link href="/disasters/fire" className="link style1">
                Learn More <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="disaster-type-card text-center p-4 mb-4 rounded shadow-sm">
              <div className="disaster-icon mb-3">
                <i className="flaticon-money-box text-primary" style={{ fontSize: '48px' }}></i>
              </div>
              <h3 className="h5 mb-3">Tsunami</h3>
              <p className="mb-3">Coastal tsunami preparedness and early warning systems</p>
              <Link href="/disasters/tsunami" className="link style1">
                Learn More <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="disaster-type-card text-center p-4 mb-4 rounded shadow-sm">
              <div className="disaster-icon mb-3">
                <i className="flaticon-insurance text-primary" style={{ fontSize: '48px' }}></i>
              </div>
              <h3 className="h5 mb-3">Storms</h3>
              <p className="mb-3">Storm preparedness and safety measures for tropical weather events</p>
              <Link href="/disasters/storms" className="link style1">
                Learn More <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="disaster-type-card text-center p-4 mb-4 rounded shadow-sm">
              <div className="disaster-icon mb-3">
                <i className="flaticon-application text-primary" style={{ fontSize: '48px' }}></i>
              </div>
              <h3 className="h5 mb-3">Heavy Wind</h3>
              <p className="mb-3">High wind conditions and safety measures for Seychelles</p>
              <Link href="/disasters/heavy-wind" className="link style1">
                Learn More <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisasterTypesSection;
