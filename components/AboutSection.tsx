import React from 'react';


const AboutSection: React.FC = () => {
  return (
    <section className="about-wrap style2 ptb-100 bg-sand">
      <img src="/img/about/about-shape-1.png" alt="Image" className="about-shape-one moveHorizontal" />
      <div className="container">
        <div className="row align-items-center gx-5">
          <div className="col-lg-6">
            <div className="about-img-wrap">
              <div className="about-content">
                <span style={{ fontSize: '1.5rem', color: '#FFA500', fontWeight: 'bold' }}>Welcome to the</span><div className="content-title style3">
                  <h2>Disaster Risk Management Division of Seychelles</h2>
                </div>
              </div>
              <img src="/img/about.png" alt="Disaster Management Center" className="bounce" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              {/* Source: https://www.drmd.sc/about-us/ */}
              <p>The Disaster Risk Management Division is established for the effective management of disaster through a comprehensive and integrated all-hazard approach. Established under the Disaster Risk Management Act 2014, we work to build a culture of safety and resilience through:</p>

              <ul className="content-feature-list list-style">
                <li><i className="ri-checkbox-circle-line" />Implementing the National Strategic Framework and Plan</li>
                <li><i className="ri-checkbox-circle-line" />Coordinating with DRMD, departments, local authorities and communities</li>
                <li><i className="ri-checkbox-circle-line" />Promoting education, training and public awareness</li>
                <li><i className="ri-checkbox-circle-line" />Facilitating the development of Local Disaster Management Plans</li>
                <li><i className="ri-checkbox-circle-line" />Operating 24/7 to monitor risks and support response efforts</li>
                <li><i className="ri-checkbox-circle-line" />Continually improving Early Warning Systems</li>
                <li><i className="ri-checkbox-circle-line" />Deploying Specialized Response Teams when needed</li>
                <li><i className="ri-checkbox-circle-line" />Collaborating with regional and international partners</li>
              </ul>
              <p>Our goal is to ensure that disaster risk reduction becomes an integral part of sustainable development planning in Seychelles. Together, we can create a safer, more resilient nation prepared to face any hazard.</p>
              <a href="about.html" className="btn style2">Learn More About Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;