"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import EmergencyModal from "@/components/EmergencyModal";
import CookieConsent from "@/components/CookieConsent";
import { CouncilActivityTabs } from "../council-activity-tabs";
import councilData, { CouncilKey, CouncilDataType } from '../council-data';
import PageTransition from "@/components/PageTransition";
import { useLoading } from "@/contexts/LoadingContext";

const CouncilDetails: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const councilId = params.council as string;
  const { startLoading, stopLoading } = useLoading();

  // Use refs to track initialization and prevent unnecessary updates
  const isInitialMount = useRef(true);
  const isNavigating = useRef(false);

  // State for loading
  const [isLoading, setIsLoading] = useState(true);

  // State for currently selected council and data
  const [councilState, setCouncilState] = useState<{
    selectedCouncil: CouncilKey;
    councilData: CouncilDataType;
  }>(() => {
    // Initialize with URL param or default to agriculture
    const validCouncilId = councilId && councilData[councilId as CouncilKey]
      ? councilId as CouncilKey
      : 'agriculture';

    return {
      selectedCouncil: validCouncilId,
      councilData: councilData[validCouncilId]
    };
  });

  // State for filters - Initialize filters with 'all' values
  const [filters, setFilters] = useState({
    years: ['all'] as string[],
    categories: ['all'] as string[],
    ministries: ['all'] as string[],
    council: 'all' as string, // Start with 'all', not the current council
    partners: ['all'] as string[],
    disasterTypes: ['all'] as string[],
    populations: ['all'] as string[]
  });

  // State for modals
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  // Handle initial load and URL changes
  useEffect(() => {
    // Skip if we're already navigating to prevent loops
    if (isNavigating.current) {
      isNavigating.current = false;
      return;
    }

    // Skip if the URL already matches the selected council
    if (councilId === councilState.selectedCouncil) {
      return;
    }

    startLoading();
    setIsLoading(true);

    // Process council ID from URL
    if (councilId && councilData[councilId as CouncilKey]) {
      setCouncilState({
        selectedCouncil: councilId as CouncilKey,
        councilData: councilData[councilId as CouncilKey]
      });
    } else if (councilId && !councilData[councilId as CouncilKey]) {
      // Redirect to default council if invalid council ID
      router.push('/councils/agriculture');
      return;
    }

    // Clear loading state after a delay
    const timer = setTimeout(() => {
      stopLoading();
      setIsLoading(false);
    }, 800);

    return () => {
      clearTimeout(timer);
      stopLoading();
    };
  }, [councilId, councilState.selectedCouncil, router, startLoading, stopLoading]);

  // Initialize modals on component mount
  useEffect(() => {
    // Only run once on mount
    if (!isInitialMount.current) return;
    isInitialMount.current = false;

    // Check if emergency alert should be shown
    if (!sessionStorage.getItem('alertShown')) {
      setTimeout(() => {
        setShowEmergencyModal(true);
        sessionStorage.setItem('alertShown', 'true');
      }, 3000);
    }

    // Check cookie consent
    if (!localStorage.getItem('cookieConsent')) {
      setShowCookieConsent(true);
    }
  }, []);

  // Filter change handlers
  const handleFilterChange = (filterType: 'years' | 'categories' | 'ministries' | 'partners' | 'disasterTypes' | 'populations', value: string) => {
    setFilters(prev => {
      if (value === 'all') {
        return { ...prev, [filterType]: ['all'] };
      } else {
        const currentValues = prev[filterType];
        const newValues = currentValues.includes('all')
          ? [value]
          : currentValues.includes(value)
            ? currentValues.filter(v => v !== value).length > 0
              ? currentValues.filter(v => v !== value)
              : ['all']
            : [...currentValues, value];

        return { ...prev, [filterType]: newValues };
      }
    });
  };

  // Apply filters
  const applyFilters = () => {
    // If council filter is set and different from current, navigate to it
    if (filters.council !== 'all' && filters.council !== councilState.selectedCouncil) {
      isNavigating.current = true; // Set flag to prevent useEffect loop
      router.push(`/councils/${filters.council}`, { scroll: false });
    }

    // Log filter application (would be API call in real app)
    console.log('Applying filters:', {
      years: filters.years,
      categories: filters.categories,
      ministries: filters.ministries,
      council: filters.council,
      partners: filters.partners,
      disasterTypes: filters.disasterTypes,
      populations: filters.populations
    });
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      years: ['all'],
      categories: ['all'],
      ministries: ['all'],
      council: 'all',
      partners: ['all'],
      disasterTypes: ['all'],
      populations: ['all']
    });
  };

  // Handle council dropdown change
  const handleCouncilChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCouncil = e.target.value as CouncilKey;
    if (newCouncil && councilData[newCouncil] && newCouncil !== councilState.selectedCouncil) {
      isNavigating.current = true; // Set flag to prevent useEffect loop
      router.push(`/councils/${newCouncil}`, { scroll: false });
    }
  };

  return (
    <PageTransition forceLoading={isLoading}>
      <div className="content">
        {/* Council Header Section */}
        <section className="breadcrumb-wrap br-1">
          <div className="overlay op-6"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-title text-center">
                  <h2>{councilState.councilData.title}</h2>
                  <ul className="breadcrumb-menu list-style">
                    <li><a href="/">Home</a></li>
                    <li><a href="/councils">Councils</a></li>
                    <li>{councilState.councilData.name}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      <section className="ptb-100 bg-sand">
        <div className="container">
          {/* New Layout: Filter on Left, Content on Right */}
          <div className="row">
            {/* Left Side: Filters */}
            <div className="col-lg-3 col-md-4">
              <div className="council-filter-sidebar p-3 rounded shadow-sm" style={{ top: '90px', backgroundColor: 'white' }}>
                <h5 className="border-bottom pb-2 mb-3">Filter Council Data</h5>

                {/* Councils Filter */}
                <div className="filter-section mb-3">
                  <div className="filter-header" data-bs-toggle="collapse" data-bs-target="#councilFilters" aria-expanded="true">
                    <h6 className="d-flex justify-content-between align-items-center mb-0">
                      Councils
                      <i className="ri-arrow-down-s-line"></i>
                    </h6>
                  </div>
                  <div id="councilFilters" className="collapse show">
                    <div className="filter-body pt-2">
                      <div className="form-check mb-2">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="council-all"
                          checked={filters.council === 'all'}
                          onChange={() => {
                            // Only proceed if not already on agriculture council
                            if (councilState.selectedCouncil !== 'agriculture') {
                              setFilters(prev => ({ ...prev, council: 'all' }));
                              // Set the navigation flag to prevent the useEffect from resetting
                              isNavigating.current = true;
                              // Navigate to the default council when "All Councils" is selected
                              router.push('/councils/agriculture', { scroll: false });
                            }
                          }}
                        />
                        <label className="form-check-label" htmlFor="council-all">
                          All Councils
                        </label>
                      </div>
                      {/* Dynamically generate radio buttons for all councils */}
                      {Object.entries(councilData).map(([key, council]) => (
                        <div className="form-check mb-2" key={key}>
                          <input
                            type="radio"
                            className="form-check-input"
                            id={`council-${key}`}
                            checked={councilState.selectedCouncil === key}
                            onChange={() => {
                              // Only navigate if we're not already on this council
                              if (councilState.selectedCouncil !== key) {
                                setFilters(prev => ({ ...prev, council: key }));
                                // Set the navigation flag to prevent the useEffect from resetting
                                isNavigating.current = true;
                                // Update the URL to match the selected council
                                router.push(`/councils/${key}`, { scroll: false });
                              }
                            }}
                          />
                          <label className="form-check-label" htmlFor={`council-${key}`}>
                            {council.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Year Filter */}
                <div className="filter-section mb-3">
                  <div className="filter-header" data-bs-toggle="collapse" data-bs-target="#yearFilters" aria-expanded="true">
                    <h6 className="d-flex justify-content-between align-items-center mb-0">
                      Year
                      <i className="ri-arrow-down-s-line"></i>
                    </h6>
                  </div>
                  <div id="yearFilters" className="collapse show">
                    <div className="filter-body pt-2">
                      <div className="form-check mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="year-all"
                          checked={filters.years.includes('all')}
                          onChange={() => handleFilterChange('years', 'all')}
                        />
                        <label className="form-check-label" htmlFor="year-all">
                          All Years
                        </label>
                      </div>
                      {['2025', '2024', '2023', '2022'].map(year => (
                        <div className="form-check mb-2" key={year}>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`year-${year}`}
                            checked={filters.years.includes(year)}
                            onChange={() => handleFilterChange('years', year)}
                          />
                          <label className="form-check-label" htmlFor={`year-${year}`}>
                            {year}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>



                {/* Ministry Filter */}
                <div className="filter-section mb-3">
                  <div className="filter-header" data-bs-toggle="collapse" data-bs-target="#ministryFilters" aria-expanded="true">
                    <h6 className="d-flex justify-content-between align-items-center mb-0">
                      Ministry
                      <i className="ri-arrow-down-s-line"></i>
                    </h6>
                  </div>
                  <div id="ministryFilters" className="collapse show">
                    <div className="filter-body pt-2">
                      <div className="form-check mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="ministry-all"
                          checked={filters.ministries.includes('all')}
                          onChange={() => handleFilterChange('ministries', 'all')}
                        />
                        <label className="form-check-label" htmlFor="ministry-all">
                          All Ministries
                        </label>
                      </div>
                      {['Infrastructure', 'Environment', 'Health', 'Defense'].map(ministry => (
                        <div className="form-check mb-2" key={ministry}>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`ministry-${ministry.toLowerCase()}`}
                            checked={filters.ministries.includes(ministry.toLowerCase())}
                            onChange={() => handleFilterChange('ministries', ministry.toLowerCase())}
                          />
                          <label className="form-check-label" htmlFor={`ministry-${ministry.toLowerCase()}`}>
                            {ministry}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Partner Organization Filter */}
                <div className="filter-section mb-3">
                  <div className="filter-header" data-bs-toggle="collapse" data-bs-target="#partnerFilters" aria-expanded="false">
                    <h6 className="d-flex justify-content-between align-items-center mb-0">
                      Partner Organizations
                      <i className="ri-arrow-down-s-line"></i>
                    </h6>
                  </div>
                  <div id="partnerFilters" className="collapse">
                    <div className="filter-body pt-2">
                      <div className="form-check mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="partner-all"
                          checked={filters.partners.includes('all')}
                          onChange={() => handleFilterChange('partners', 'all')}
                        />
                        <label className="form-check-label" htmlFor="partner-all">
                          All Partners
                        </label>
                      </div>
                      {['USAID', 'UNDP', 'Red Cross', 'World Bank'].map(partner => (
                        <div className="form-check mb-2" key={partner}>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`partner-${partner.toLowerCase().replace(' ', '-')}`}
                            checked={filters.partners.includes(partner.toLowerCase().replace(' ', '-'))}
                            onChange={() => handleFilterChange('partners', partner.toLowerCase().replace(' ', '-'))}
                          />
                          <label className="form-check-label" htmlFor={`partner-${partner.toLowerCase().replace(' ', '-')}`}>
                            {partner}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Disaster Type Filter */}
                <div className="filter-section mb-3">
                  <div className="filter-header" data-bs-toggle="collapse" data-bs-target="#disasterTypeFilters" aria-expanded="false">
                    <h6 className="d-flex justify-content-between align-items-center mb-0">
                      Disaster Types
                      <i className="ri-arrow-down-s-line"></i>
                    </h6>
                  </div>
                  <div id="disasterTypeFilters" className="collapse">
                    <div className="filter-body pt-2">
                      <div className="form-check mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="disaster-all"
                          checked={filters.disasterTypes.includes('all')}
                          onChange={() => handleFilterChange('disasterTypes', 'all')}
                        />
                        <label className="form-check-label" htmlFor="disaster-all">
                          All Disaster Types
                        </label>
                      </div>
                      {['Cyclone', 'Flood', 'Drought', 'Earthquake', 'Tsunami'].map(disasterType => (
                        <div className="form-check mb-2" key={disasterType}>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`disaster-${disasterType.toLowerCase()}`}
                            checked={filters.disasterTypes.includes(disasterType.toLowerCase())}
                            onChange={() => handleFilterChange('disasterTypes', disasterType.toLowerCase())}
                          />
                          <label className="form-check-label" htmlFor={`disaster-${disasterType.toLowerCase()}`}>
                            {disasterType}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Affected Population Filter */}
                <div className="filter-section mb-3">
                  <div className="filter-header" data-bs-toggle="collapse" data-bs-target="#populationFilters" aria-expanded="false">
                    <h6 className="d-flex justify-content-between align-items-center mb-0">
                      Affected Population
                      <i className="ri-arrow-down-s-line"></i>
                    </h6>
                  </div>
                  <div id="populationFilters" className="collapse">
                    <div className="filter-body pt-2">
                      <div className="form-check mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="population-all"
                          checked={filters.populations.includes('all')}
                          onChange={() => handleFilterChange('populations', 'all')}
                        />
                        <label className="form-check-label" htmlFor="population-all">
                          All Populations
                        </label>
                      </div>
                      {['Elderly', 'Children', 'Disabilities', 'Pregnant'].map(population => (
                        <div className="form-check mb-2" key={population}>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`population-${population.toLowerCase()}`}
                            checked={filters.populations.includes(population.toLowerCase())}
                            onChange={() => handleFilterChange('populations', population.toLowerCase())}
                          />
                          <label className="form-check-label" htmlFor={`population-${population.toLowerCase()}`}>
                            {population === 'Disabilities' ? 'Persons with Disabilities' :
                             population === 'Pregnant' ? 'Pregnant Women' :
                             population === 'Elderly' ? 'Elderly People' :
                             population === 'Children' ? 'Children' : population}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Filter Buttons */}
                <div className="filter-buttons mt-4">
                  <button className="btn style1 w-100 mb-2" onClick={applyFilters}>Apply Filters</button>
                  <button className="btn btn-outline-secondary w-100" onClick={resetFilters}>Reset Filters</button>
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="col-lg-9 col-md-8">
                  {/* Council Overview */}
                  <div className="row mb-5">
                    <div className="col-lg-8">
                      <div className="section-title style3 mb-30">
                        <div className="row align-items-center">
                          <div className="col-lg-7 col-md-6">
                            <span>Department Profile</span>
                          </div>
                          <div className="col-lg-5 col-md-6">
                            <div className="council-dropdown-wrapper text-md-end mb-30">
                              <select
                                id="council-dropdown"
                                className="form-select dropdown-select"
                                value={councilState.selectedCouncil}
                                onChange={handleCouncilChange}
                                disabled={isLoading}
                              >
                                <option value="" disabled>Change Council</option>
                                <option value="agriculture">Agriculture</option>
                                <option value="civil-service">Civil Service</option>
                                <option value="education">Education</option>
                                <option value="external-affairs">External Affairs</option>
                                <option value="disaster-management">Disaster Management</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <h2>{councilState.councilData.name} Overview</h2>
                      </div>
                      <div className="about-content fade-in">
                        <p>{councilState.councilData.description}</p>
                        <div className="row mt-4">
                          <div className="col-md-6">
                            <ul className="content-feature-list list-style">
                              <li><i className="ri-checkbox-circle-line"></i>Established: {councilState.councilData.established}</li>
                              <li><i className="ri-checkbox-circle-line"></i>Total Members: {councilState.councilData.memberCount}</li>
                              <li><i className="ri-checkbox-circle-line"></i>Ministerial Representation: {councilState.councilData.ministerialRepresentation}</li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <ul className="content-feature-list list-style">
                              <li><i className="ri-checkbox-circle-line"></i>Coordination Centers: {councilState.councilData.coordinationCenters}</li>
                              <li><i className="ri-checkbox-circle-line"></i>Response Teams: {councilState.councilData.responseTeams}</li>
                              <li><i className="ri-checkbox-circle-line"></i>Annual Budget: {councilState.councilData.annualBudget}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card h-100 bg-white p-3 shadow-sm">
                        <h5 className="card-title p-2 border-bottom">Department leadership</h5>
                        <div className="text-center mb-3">
                          <img
                            src={councilState.councilData.leadership.image}
                            alt={councilState.councilData.leadership.name}
                            className="rounded-circle mb-3"
                            width={150}
                            height={150}
                            style={{ objectFit: 'cover' }}
                          />
                          <h6>{councilState.councilData.leadership.name}</h6>
                          <p className="text-muted">{councilState.councilData.leadership.position}</p>
                        </div>
                        <ul className="list-unstyled">
                          <li><strong>Background:</strong> {councilState.councilData.leadership.background}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

              {/* Council Activity Tabs */}
              <CouncilActivityTabs
                councilId={councilState.selectedCouncil}
                yearFilters={filters.years}
                partnerFilters={filters.partners}
                disasterTypeFilters={filters.disasterTypes}
                populationFilters={filters.populations}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Modal and Cookie Consent */}
      {showEmergencyModal && <EmergencyModal show={true} onClose={() => setShowEmergencyModal(false)} />}
      {showCookieConsent && <CookieConsent />}
    </div>
    </PageTransition>
  );
};

export default CouncilDetails;