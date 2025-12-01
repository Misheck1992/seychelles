"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { drmdHistory } from '@/lib/data';

// Source: https://www.drmd.sc/about-us/
export default function HistoryPage() {
  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold">Our History</h1>
              <p className="lead">The evolution of disaster risk management in Seychelles</p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link href="/" className="text-white">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/about" className="text-white">About Us</Link></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">History</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* History Timeline - Source: https://www.drmd.sc/about-us/ */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4">Our Journey Through Time</h2>
              <p className="lead">Despite having being lawfully established in 2014 by enactment of the Disaster Risk Management Act, disaster risk management as a government pre-occupation started decades prior.</p>
            </div>
          </div>

          <div className="timeline position-relative">
            {/* Timeline Item 1 - 1995 */}
            <div className="row timeline-item mb-5">
              <div className="col-lg-6 order-lg-1 order-2">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h3 className="h4 mb-3">National Disaster Committee (NDC)</h3>
                    <p>A National Disaster Committee (NDC) was created and its mandate was to study the different natural disasters which may strike the islands of Seychelles.</p>
                    <p>Its prime objectives were prevention and preparation of National Disaster Response Plan (NDPR).</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0 d-flex align-items-center">
                <div className="timeline-date bg-primary text-white p-3 rounded text-center">
                  <h4 className="mb-0">1995</h4>
                </div>
                <div className="timeline-image ms-4">
                  <Image
                    src="/placeholder.svg"
                    alt="National Disaster Committee"
                    width={400}
                    height={250}
                    className="img-fluid rounded shadow"
                  />
                </div>
              </div>
            </div>

            {/* Timeline Item 2 - 2004 */}
            <div className="row timeline-item mb-5">
              <div className="col-lg-6 order-lg-2">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h3 className="h4 mb-3">National Disaster Secretariat</h3>
                    <p>In October 2004 the National Disaster Secretariat for the NDC was established.</p>
                    <p>Two months later on 26th December 2004 a tsunami that was triggered by an earthquake with the epicentre off the west coast of Sumatra, Indonesia, impacted Seychelles.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1 mb-4 mb-lg-0 d-flex align-items-center justify-content-end">
                <div className="timeline-image me-4">
                  <Image
                    src="/placeholder.svg"
                    alt="National Disaster Secretariat"
                    width={400}
                    height={250}
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="timeline-date bg-primary text-white p-3 rounded text-center">
                  <h4 className="mb-0">2004</h4>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 - 2006 */}
            <div className="row timeline-item mb-5">
              <div className="col-lg-6 order-lg-1 order-2">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h3 className="h4 mb-3">Department of Risk and Disaster Management</h3>
                    <p>The Department of Risk and Disaster Management was established under the Vice President&apos;s Office.</p>
                    <p>This marked a significant step in formalizing disaster risk management within the government structure.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0 d-flex align-items-center">
                <div className="timeline-date bg-primary text-white p-3 rounded text-center">
                  <h4 className="mb-0">2006</h4>
                </div>
                <div className="timeline-image ms-4">
                  <Image
                    src="/placeholder.svg"
                    alt="Department of Risk and Disaster Management"
                    width={400}
                    height={250}
                    className="img-fluid rounded shadow"
                  />
                </div>
              </div>
            </div>

            {/* Timeline Item 4 - 2010 */}
            <div className="row timeline-item mb-5">
              <div className="col-lg-6 order-lg-2">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h3 className="h4 mb-3">Division Split</h3>
                    <p>The organisation was split into 2 divisions; i.e.; the Disaster and Risk Management and the Operation, Education and Communication divisions with two directors general at the helm of each.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1 mb-4 mb-lg-0 d-flex align-items-center justify-content-end">
                <div className="timeline-image me-4">
                  <Image
                    src="/placeholder.svg"
                    alt="Division Split"
                    width={400}
                    height={250}
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="timeline-date bg-primary text-white p-3 rounded text-center">
                  <h4 className="mb-0">2010</h4>
                </div>
              </div>
            </div>

            {/* Timeline Item 5 - 2012 */}
            <div className="row timeline-item mb-5">
              <div className="col-lg-6 order-lg-1 order-2">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h3 className="h4 mb-3">Divisions Merged</h3>
                    <p>The two divisions were merged into one with one director general as the head.</p>
                    <p>This consolidation improved coordination and efficiency in disaster risk management operations.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0 d-flex align-items-center">
                <div className="timeline-date bg-primary text-white p-3 rounded text-center">
                  <h4 className="mb-0">2012</h4>
                </div>
                <div className="timeline-image ms-4">
                  <Image
                    src="/placeholder.svg"
                    alt="Divisions Merged"
                    width={400}
                    height={250}
                    className="img-fluid rounded shadow"
                  />
                </div>
              </div>
            </div>

            {/* Timeline Item 6 - 2014 */}
            <div className="row timeline-item">
              <div className="col-lg-6 order-lg-2">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h3 className="h4 mb-3">Disaster Risk Management Act</h3>
                    <p>In August 2014, the Disaster Risk Management Act was assented and established the Disaster Risk Management Division as a division within the government of Seychelles.</p>
                    <p>The Division was established for effective management of disaster through a comprehensive and integrated all hazard approach and for matters connected therewith or incidents thereto.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1 mb-4 mb-lg-0 d-flex align-items-center justify-content-end">
                <div className="timeline-image me-4">
                  <Image
                    src="/placeholder.svg"
                    alt="Disaster Risk Management Act 2014"
                    width={400}
                    height={250}
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="timeline-date bg-primary text-white p-3 rounded text-center">
                  <h4 className="mb-0">2014</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Milestones - Source: https://www.drmd.sc/about-us/ */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Key Milestones</h2>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3">
                      <i className="flaticon-calendar text-primary" style={{ fontSize: '36px' }}></i>
                    </div>
                    <h3 className="h5 mb-0">1995</h3>
                  </div>
                  <h4 className="h6 mb-3">National Disaster Committee Created</h4>
                  <p>A National Disaster Committee (NDC) was created with the mandate to study the different natural disasters which may strike the islands of Seychelles.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3">
                      <i className="flaticon-calendar text-primary" style={{ fontSize: '36px' }}></i>
                    </div>
                    <h3 className="h5 mb-0">2004</h3>
                  </div>
                  <h4 className="h6 mb-3">2004 Indian Ocean Tsunami</h4>
                  <p>On 26th December 2004 a tsunami that was triggered by an earthquake with the epicentre off the west coast of Sumatra, Indonesia, impacted Seychelles.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3">
                      <i className="flaticon-calendar text-primary" style={{ fontSize: '36px' }}></i>
                    </div>
                    <h3 className="h5 mb-0">2014</h3>
                  </div>
                  <h4 className="h6 mb-3">Disaster Risk Management Act</h4>
                  <p>In August 2014, the Disaster Risk Management Act was assented and established the Disaster Risk Management Division within the government of Seychelles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="mb-2">Learn more about our work</h2>
              <p className="lead mb-0">Discover how we're building on our history to create a safer future.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link href="/resources" className="btn btn-light btn-lg">
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
