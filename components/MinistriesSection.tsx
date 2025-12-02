import React from 'react';

interface Ministry {
  id: number;
  image: string;
  name: string;
  description: string;
  socialLinks: {
    website: string;
    phone: string;
    email: string;
  };
}

const MinistriesSection: React.FC = () => {
  // Source: Wikipedia - Cabinet of Seychelles (October 2025)
  // https://en.wikipedia.org/wiki/Cabinet_of_Seychelles
  const ministries: Ministry[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      name: "Vice President's Office",
      description: "ICT, Digital Transformation, Information, Lands & Housing, Poverty Alleviation, Risk & Disaster Management",
      socialLinks: {
        website: "https://www.statehouse.gov.sc/",
        phone: "+248 4295000",
        email: "statehouse@gov.sc"
      }
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      name: "Ministry of Finance, Economic Planning & Trade",
      description: "Economic Planning, Trade, Financial Management",
      socialLinks: {
        website: "https://www.finance.gov.sc/",
        phone: "+248 4293000",
        email: "info@finance.gov.sc"
      }
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop",
      name: "Ministry of Health",
      description: "Policy, Planning & Regulation, Public Health, Emergency Medical Services",
      socialLinks: {
        website: "https://www.health.gov.sc/",
        phone: "+248 4388000",
        email: "info@health.gov.sc"
      }
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop",
      name: "Ministry of Employment & Human Resource Planning",
      description: "Labour Relations and Regulations, Human Resource Development",
      socialLinks: {
        website: "https://www.employment.gov.sc/",
        phone: "+248 4293000",
        email: "info@employment.gov.sc"
      }
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop",
      name: "Ministry of Homeland Security & Civil Affairs",
      description: "Security, Civil Protection, Public Safety",
      socialLinks: {
        website: "https://www.homeaffairs.gov.sc/",
        phone: "+248 4286000",
        email: "info@homeaffairs.gov.sc"
      }
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      name: "Ministry of Education & Human Resource Development",
      description: "Educational Support and Projects, Human Resource Development",
      socialLinks: {
        website: "https://www.education.gov.sc/",
        phone: "+248 4283000",
        email: "info@education.gov.sc"
      }
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=400&h=300&fit=crop",
      name: "Ministry of Transport, Port & Civil Aviation",
      description: "Transportation, Maritime & Aviation Safety",
      socialLinks: {
        website: "https://www.transport.gov.sc/",
        phone: "+248 4384777",
        email: "info@transport.gov.sc"
      }
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
      name: "Ministry for Local Government & Inner Islands",
      description: "District Administration, Community Affairs, Inner Islands Development",
      socialLinks: {
        website: "https://www.lgci.gov.sc/",
        phone: "+248 4225566",
        email: "info@lgci.gov.sc"
      }
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop",
      name: "Ministry of Youth & Sports",
      description: "Youth Development, Sports Programs, Recreation",
      socialLinks: {
        website: "https://www.youth.gov.sc/",
        phone: "+248 4225000",
        email: "info@youth.gov.sc"
      }
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      name: "Ministry of Fisheries & Blue Economy",
      description: "Marine Resources, Ocean Management, Blue Economy Development",
      socialLinks: {
        website: "https://www.fisheries.gov.sc/",
        phone: "+248 4670300",
        email: "info@fisheries.gov.sc"
      }
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      name: "Ministry of Foreign Affairs & Diaspora",
      description: "International Relations, Diplomatic Affairs, Diaspora Engagement",
      socialLinks: {
        website: "https://www.mfa.gov.sc/",
        phone: "+248 4283000",
        email: "info@mfa.gov.sc"
      }
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
      name: "Ministry of Social Affairs, Family & Equality",
      description: "Social Protection, Family Affairs, Gender Equality, Humanitarian Affairs",
      socialLinks: {
        website: "https://www.socialaffairs.gov.sc/",
        phone: "+248 4282400",
        email: "info@socialaffairs.gov.sc"
      }
    },
    {
      id: 13,
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop",
      name: "Ministry of Environment, Climate, Energy & Natural Resources",
      description: "Climate Change, Environmental Protection, Energy, Natural Resources",
      socialLinks: {
        website: "https://www.environment.gov.sc/",
        phone: "+248 4670500",
        email: "info@environment.gov.sc"
      }
    },
    {
      id: 14,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      name: "Ministry of Industry & Enterprise",
      description: "Industrial Development, Enterprise Support, Business Innovation",
      socialLinks: {
        website: "https://www.industry.gov.sc/",
        phone: "+248 4224030",
        email: "info@industry.gov.sc"
      }
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop",
      name: "Ministry of Tourism & Culture",
      description: "Tourism Development, Cultural Heritage, Arts & Culture",
      socialLinks: {
        website: "https://www.tourism.gov.sc/",
        phone: "+248 4671300",
        email: "info@tourism.gov.sc"
      }
    }
  ];

  return (
    <section className="team-wrap ptb-100 bg-sand">
      <div className="container">
        <div className="section-title style1 text-center mb-40">
          <span>Government of Seychelles</span>
          <h2>Key Ministries & Offices</h2>
          <p>Our integrated disaster management approach brings together multiple ministries to coordinate prevention, preparedness, response, and recovery activities across all sectors of government.</p>
        </div>
        <div className="team-slider-two owl-carousel">
          {ministries.map(ministry => (
            <div className="team-card style2" key={ministry.id}>
              <img src={ministry.image} alt={ministry.name} />
              <div className="team-info-wrap">
                <div className="team-info">
                  <h3><a href={`ministries/${ministry.id}.html`}>{ministry.name}</a></h3>
                  <span>{ministry.description}</span>
                </div>
                <div className="social-link">
                  <span><i className="ri-add-line"></i></span>
                  <ul className="social-profile style1 list-style">
                    <li>
                      <a href={ministry.socialLinks.website} target="_blank" rel="noopener noreferrer">
                        <i className="ri-global-line"></i>
                      </a>
                    </li>
                    <li>
                      <a href={`tel:${ministry.socialLinks.phone}`}>
                        <i className="ri-phone-line"></i>
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${ministry.socialLinks.email}`}>
                        <i className="ri-mail-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinistriesSection;