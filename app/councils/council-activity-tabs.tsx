"use client";

import React, { useState, useEffect } from 'react';
import activitiesData from '@/app/data/activities.json';

// Define types for activities
interface Partner {
  id: string;
  name: string;
  type: string;
}

interface Council {
  id: string;
  name: string;
  role: string;
}

interface Activity {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  startDate?: string;
  endDate?: string;
  lastUpdated?: string;
  frequency?: string;
  budget: string;
  lead: string;
  year: string;
  councils: Council[];
  districts: string[];
  partners: Partner[];
  disasterTypes: string[];
  affectedPopulations: string[];
  coverage: string;
  beneficiaries: string;
}

interface CouncilActivityTabsProps {
  councilId: string;
  // Optional filter props from parent component
  yearFilters?: string[];
  partnerFilters?: string[];
  disasterTypeFilters?: string[];
  populationFilters?: string[];
}

export function CouncilActivityTabs({
  councilId,
  yearFilters = ['all'],
  partnerFilters = ['all'],
  disasterTypeFilters = ['all'],
  populationFilters = ['all']
}: CouncilActivityTabsProps) {
  // State for activities and filters
  const [activities, setActivities] = useState<Activity[]>([]);
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([]);
  const [districtFilter, setDistrictFilter] = useState<string>('all');
  const [partnerFilter, setPartnerFilter] = useState<string>('all');
  const [disasterTypeFilter, setDisasterTypeFilter] = useState<string>('all');
  const [affectedPopulationFilter, setAffectedPopulationFilter] = useState<string>('all');
  const [yearFilter, setYearFilter] = useState<string>('all');

  // Get unique districts, partners, disaster types, affected populations, and years
  const [districts, setDistricts] = useState<string[]>([]);
  const [partners, setPartners] = useState<{id: string, name: string}[]>([]);
  const [disasterTypes, setDisasterTypes] = useState<string[]>([]);
  const [affectedPopulations, setAffectedPopulations] = useState<string[]>([]);
  const [years, setYears] = useState<string[]>([]);

  // Load activities on component mount
  useEffect(() => {
    // Convert activities from object to array
    const activitiesArray = Object.values(activitiesData) as Activity[];

    // Filter activities for this council
    const councilActivities = activitiesArray.filter(activity =>
      activity.councils.some(council => council.id === councilId)
    );

    setActivities(councilActivities);
    setFilteredActivities(councilActivities);

    // Extract unique districts
    const allDistricts = new Set<string>();
    councilActivities.forEach(activity => {
      activity.districts.forEach(district => allDistricts.add(district));
    });
    setDistricts(Array.from(allDistricts).sort());

    // Extract unique partners
    const allPartners = new Set<string>();
    const partnersMap = new Map<string, string>();
    councilActivities.forEach(activity => {
      activity.partners.forEach(partner => {
        allPartners.add(partner.id);
        partnersMap.set(partner.id, partner.name);
      });
    });
    setPartners(Array.from(allPartners).map(id => ({ id, name: partnersMap.get(id) || id })));

    // Extract unique disaster types
    const allDisasterTypes = new Set<string>();
    councilActivities.forEach(activity => {
      activity.disasterTypes.forEach(type => allDisasterTypes.add(type));
    });
    setDisasterTypes(Array.from(allDisasterTypes).sort());

    // Extract unique affected populations
    const allAffectedPopulations = new Set<string>();
    councilActivities.forEach(activity => {
      activity.affectedPopulations.forEach(population => allAffectedPopulations.add(population));
    });
    setAffectedPopulations(Array.from(allAffectedPopulations).sort());

    // Extract unique years
    const allYears = new Set<string>();
    councilActivities.forEach(activity => {
      allYears.add(activity.year);
    });
    setYears(Array.from(allYears).sort().reverse()); // Sort years in descending order
  }, [councilId]);

  // Apply filters when they change
  useEffect(() => {
    let filtered = activities;

    // Apply district filter
    if (districtFilter !== 'all') {
      filtered = filtered.filter(activity =>
        activity.districts.includes(districtFilter)
      );
    }

    // Apply local partner filter
    if (partnerFilter !== 'all') {
      filtered = filtered.filter(activity =>
        activity.partners.some(partner => partner.id === partnerFilter)
      );
    }

    // Apply local disaster type filter
    if (disasterTypeFilter !== 'all') {
      filtered = filtered.filter(activity =>
        activity.disasterTypes.includes(disasterTypeFilter)
      );
    }

    // Apply local affected population filter
    if (affectedPopulationFilter !== 'all') {
      filtered = filtered.filter(activity =>
        activity.affectedPopulations.includes(affectedPopulationFilter)
      );
    }

    // Apply local year filter
    if (yearFilter !== 'all') {
      filtered = filtered.filter(activity =>
        activity.year === yearFilter
      );
    }

    // Apply parent component filters
    // Year filters from parent
    if (yearFilters.length > 0 && !yearFilters.includes('all')) {
      filtered = filtered.filter(activity =>
        yearFilters.includes(activity.year)
      );
    }

    // Partner filters from parent
    if (partnerFilters.length > 0 && !partnerFilters.includes('all')) {
      filtered = filtered.filter(activity =>
        activity.partners.some(partner => partnerFilters.includes(partner.id))
      );
    }

    // Disaster type filters from parent
    if (disasterTypeFilters.length > 0 && !disasterTypeFilters.includes('all')) {
      filtered = filtered.filter(activity =>
        activity.disasterTypes.some(type => disasterTypeFilters.includes(type))
      );
    }

    // Affected population filters from parent
    if (populationFilters.length > 0 && !populationFilters.includes('all')) {
      filtered = filtered.filter(activity =>
        activity.affectedPopulations.some(population => populationFilters.includes(population))
      );
    }

    setFilteredActivities(filtered);
  }, [
    activities,
    districtFilter,
    partnerFilter,
    disasterTypeFilter,
    affectedPopulationFilter,
    yearFilter,
    yearFilters,
    partnerFilters,
    disasterTypeFilters,
    populationFilters
  ]);

  return (
    <div className="council-activity-tabs">
      {/* Filter Section */}
      <div className="filter-section mb-4 p-3 bg-light rounded">
        <div className="row align-items-center">
          <div className="col-md-3">
            <h5 className="mb-md-0">Filter Council Activities</h5>
          </div>
          <div className="col-md-9">
            <div className="row g-2">
              <div className="col-sm-2">
                <select
                  className="form-select"
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                >
                  <option value="all">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-2">
                <select
                  className="form-select"
                  value={districtFilter}
                  onChange={(e) => setDistrictFilter(e.target.value)}
                >
                  <option value="all">All Districts</option>
                  {districts.map(district => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-3">
                <select
                  className="form-select"
                  value={partnerFilter}
                  onChange={(e) => setPartnerFilter(e.target.value)}
                >
                  <option value="all">All Partners</option>
                  {partners.map(partner => (
                    <option key={partner.id} value={partner.id}>{partner.name}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-2">
                <select
                  className="form-select"
                  value={disasterTypeFilter}
                  onChange={(e) => setDisasterTypeFilter(e.target.value)}
                >
                  <option value="all">All Disaster Types</option>
                  {disasterTypes.map(type => (
                    <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-3">
                <select
                  className="form-select"
                  value={affectedPopulationFilter}
                  onChange={(e) => setAffectedPopulationFilter(e.target.value)}
                >
                  <option value="all">All Affected Populations</option>
                  {affectedPopulations.map(population => (
                    <option key={population} value={population}>{population.charAt(0).toUpperCase() + population.slice(1)}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="nav nav-tabs" id="councilTabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="resilience-tab"
            data-bs-toggle="tab"
            data-bs-target="#resilience"
            type="button"
            role="tab"
            aria-controls="resilience"
            aria-selected="true"
          >
            <i className="ri-shield-check-line me-1" /> Resilience Activities
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="response-tab"
            data-bs-toggle="tab"
            data-bs-target="#response"
            type="button"
            role="tab"
            aria-controls="response"
            aria-selected="false"
            tabIndex={-1}
          >
            <i className="ri-alarm-warning-line me-1" /> Response
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="recovery-tab"
            data-bs-toggle="tab"
            data-bs-target="#recovery"
            type="button"
            role="tab"
            aria-controls="recovery"
            aria-selected="false"
            tabIndex={-1}
          >
            <i className="ri-health-book-line me-1" /> Recovery
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="preparedness-tab"
            data-bs-toggle="tab"
            data-bs-target="#preparedness"
            type="button"
            role="tab"
            aria-controls="preparedness"
            aria-selected="false"
            tabIndex={-1}
          >
            <i className="ri-calendar-check-line me-1" /> Preparedness
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="members-tab"
            data-bs-toggle="tab"
            data-bs-target="#members"
            type="button"
            role="tab"
            aria-controls="members"
            aria-selected="false"
            tabIndex={-1}
          >
            <i className="ri-team-line me-1" /> Council Members
          </button>
        </li>
      </ul>
      <div className="tab-content p-4 bg-white shadow-sm rounded-bottom" id="councilTabContent">
        {/* Resilience Tab */}
        <div className="tab-pane fade show active" id="resilience" role="tabpanel" aria-labelledby="resilience-tab">
          <div className="row mb-4">
            <div className="col-md-8">
              <h4 className="mb-4">Resilience Building Initiatives</h4>
            </div>
          </div>
          <div className="row g-4">
            {filteredActivities.filter(activity => activity.category === 'resilience').map(activity => (
              <div className="col-lg-6" key={activity.id}>
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{activity.title}</h5>
                    <p className="card-text">{activity.description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="badge bg-success">{activity.status}</span>
                      <small className="text-muted">Budget: {activity.budget}</small>
                    </div>
                    <div className="mt-2">
                      <small className="text-muted">Districts: {activity.districts.join(', ')}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {filteredActivities.filter(activity => activity.category === 'resilience').length === 0 && (
              <div className="col-12 text-center py-4">
                <p className="text-muted">No resilience activities found with the selected filters.</p>
              </div>
            )}
          </div>
          {filteredActivities.filter(activity => activity.category === 'resilience').length > 0 && (
            <div className="text-center mt-4">
              <a href="#" className="btn style2">Load More</a>
            </div>
          )}
        </div>

        {/* Response Tab */}
        <div className="tab-pane fade" id="response" role="tabpanel" aria-labelledby="response-tab">
          <h4 className="mb-4">Response Capabilities</h4>
          <div className="row g-4">
            {filteredActivities.filter(activity => activity.category === 'response').map(activity => (
              <div className="col-md-6" key={activity.id}>
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">{activity.title}</h5>
                    <p className="card-text">{activity.description}</p>
                    <div className="mt-3">
                      <span className="badge bg-info">Last Updated: {activity.lastUpdated || 'N/A'}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {filteredActivities.filter(activity => activity.category === 'response').length === 0 && (
              <div className="col-12 text-center py-4">
                <p className="text-muted">No response activities found with the selected filters.</p>
              </div>
            )}
          </div>
          <h4 className="mb-4 mt-5">Recent Response Activities</h4>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>Title</th>
                  <th>Lead</th>
                  <th>Districts</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredActivities.filter(activity => activity.category === 'response').map(activity => (
                  <tr key={activity.id}>
                    <td>{activity.title}</td>
                    <td>{activity.lead}</td>
                    <td>{activity.districts.join(', ')}</td>
                    <td><span className={`badge ${activity.status === 'Active' ? 'bg-success' : 'bg-warning'}`}>{activity.status}</span></td>
                    <td><a href="#" className="btn btn-sm btn-outline-primary">View Details</a></td>
                  </tr>
                ))}
                {filteredActivities.filter(activity => activity.category === 'response').length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center">No response activities found with the selected filters.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recovery Tab */}
        <div className="tab-pane fade" id="recovery" role="tabpanel" aria-labelledby="recovery-tab">
          <h4 className="mb-4">Recovery Programs</h4>
          <div className="row g-4">
            {filteredActivities.filter(activity => activity.category === 'recovery').map(activity => (
              <div className="col-lg-6" key={activity.id}>
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{activity.title}</h5>
                    <p className="card-text">{activity.description}</p>
                    <div className="progress mt-3" style={{ height: '10px' }}>
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <small>Status: {activity.status}</small>
                      <small>Budget: {activity.budget}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {filteredActivities.filter(activity => activity.category === 'recovery').length === 0 && (
              <div className="col-12 text-center py-4">
                <p className="text-muted">No recovery activities found with the selected filters.</p>
              </div>
            )}
          </div>
          {filteredActivities.filter(activity => activity.category === 'recovery').length > 0 && (
            <div className="text-center mt-4">
              <a href="#" className="btn style2">View All Recovery Programs</a>
            </div>
          )}
        </div>

        {/* Preparedness Tab */}
        <div className="tab-pane fade" id="preparedness" role="tabpanel" aria-labelledby="preparedness-tab">
          <h4 className="mb-4">Preparedness Initiatives</h4>
          <div className="row g-4">
            {filteredActivities.filter(activity => activity.category === 'preparedness').map(activity => (
              <div className="col-md-6" key={activity.id}>
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">{activity.title}</h5>
                    <p className="card-text">{activity.description}</p>
                    <ul className="list-unstyled mt-3">
                      <li><i className="ri-check-line text-success me-2"></i> Budget: {activity.budget}</li>
                      <li><i className="ri-check-line text-success me-2"></i> Status: {activity.status}</li>
                      <li><i className="ri-check-line text-success me-2"></i> Lead: {activity.lead}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            {filteredActivities.filter(activity => activity.category === 'preparedness').length === 0 && (
              <div className="col-12 text-center py-4">
                <p className="text-muted">No preparedness activities found with the selected filters.</p>
              </div>
            )}
          </div>
          <h4 className="mb-4 mt-5">Upcoming Preparedness Activities</h4>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>Title</th>
                  <th>Lead</th>
                  <th>Location</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredActivities.filter(activity => activity.category === 'preparedness').map(activity => (
                  <tr key={activity.id}>
                    <td>{activity.title}</td>
                    <td>{activity.lead}</td>
                    <td>{activity.coverage}</td>
                    <td><a href="#" className="btn btn-sm btn-outline-primary">Details</a></td>
                  </tr>
                ))}
                {filteredActivities.filter(activity => activity.category === 'preparedness').length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-center">No preparedness activities found with the selected filters.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Members Tab */}
        <div className="tab-pane fade" id="members" role="tabpanel" aria-labelledby="members-tab">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-header" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
                  <h5 className="mb-0">Council Composition</h5>
                </div>
                {/* Source: https://www.drmd.sc/meet-the-team/ */}
                <div className="card-body">
                  <ul className="list-unstyled">
                    <li className="mb-2"><strong>Director General:</strong> Robert Ernesta</li>
                    <li className="mb-2"><strong>Chief Risk Management Officer:</strong> Daniel Cetoupe</li>
                    <li className="mb-2"><strong>Chief Response Officer:</strong> Cliff Alissop</li>
                    <li><strong>Sections:</strong> Operations, HR & Admin, NEOC</li>
                  </ul>
                  <div className="text-center mt-3">
                    <span className="badge bg-success">Established 2014</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
                  <h5 className="mb-0">Key Council Members</h5>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <thead className="table-light">
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Ministry/Organization</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      {/* Source: https://www.drmd.sc/meet-the-team/ */}
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <img src="/img/placeholder.jpg" alt="Profile" className="rounded-circle me-2" width={40} />
                              <div>Robert Ernesta</div>
                            </div>
                          </td>
                          <td>Director General</td>
                          <td>DRMD</td>
                          <td>
                            <a href="mailto:info@drmd.sc" className="btn btn-sm btn-outline-primary me-1"><i className="ri-mail-line"></i></a>
                            <a href="#" className="btn btn-sm btn-outline-secondary"><i className="ri-profile-line"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <img src="/img/placeholder.jpg" alt="Profile" className="rounded-circle me-2" width={40} />
                              <div>Daniel Cetoupe</div>
                            </div>
                          </td>
                          <td>Chief Risk Management Officer</td>
                          <td>Operations Section</td>
                          <td>
                            <a href="mailto:info@drmd.sc" className="btn btn-sm btn-outline-primary me-1"><i className="ri-mail-line"></i></a>
                            <a href="#" className="btn btn-sm btn-outline-secondary"><i className="ri-profile-line"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <img src="/img/placeholder.jpg" alt="Profile" className="rounded-circle me-2" width={40} />
                              <div>Cliff Alissop</div>
                            </div>
                          </td>
                          <td>Chief Response Officer</td>
                          <td>National Emergency Operations Centre</td>
                          <td>
                            <a href="mailto:info@drmd.sc" className="btn btn-sm btn-outline-primary me-1"><i className="ri-mail-line"></i></a>
                            <a href="#" className="btn btn-sm btn-outline-secondary"><i className="ri-profile-line"></i></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="card border-0 shadow-sm">
                <div className="card-header" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
                  <h5 className="mb-0">Council Functions</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="d-flex mb-3">
                        <div className="me-3">
                          <i className="ri-government-line" style={{ fontSize: 36, color: '#338F7A' }}></i>
                        </div>
                        <div>
                          <h6>Policy Development</h6>
                          <p className="small text-muted">Develop and review disaster management policies.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex mb-3">
                        <div className="me-3">
                          <i className="ri-team-line" style={{ fontSize: 36, color: '#338F7A' }}></i>
                        </div>
                        <div>
                          <h6>Coordination</h6>
                          <p className="small text-muted">Coordinate multi-agency response during emergencies.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex mb-3">
                        <div className="me-3">
                          <i className="ri-community-line" style={{ fontSize: 36, color: '#338F7A' }}></i>
                        </div>
                        <div>
                          <h6>Community Resilience</h6>
                          <p className="small text-muted">Build community-level disaster preparedness.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="btn style1">Download Council Membership Directory</a>
            <a href="#" className="btn style2 ms-2">Council Meeting Calendar</a>
          </div>
        </div>
      </div>
    </div>
  );
}