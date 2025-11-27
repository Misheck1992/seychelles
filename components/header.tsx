// components/Header.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  // Function to check if a link is active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="header-wrap">
      <div className="header-bottom">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link href="/" className="navbar-brand">
              <img className="logo-light" src="/img/logosey.png" alt="National Disaster Management Center" />
            </Link>
            <div className="collapse navbar-collapse main-menu-wrap" id="navbarSupportedContent">
              <div className="menu-close d-lg-none">
                <a href="javascript:void(0)"> <i className="ri-close-line" /></a>
              </div>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/councils/agriculture" className={`nav-link ${pathname.startsWith('/councils') ? 'active' : ''}`} onClick={(e) => e.preventDefault()}>
                    Departments
                    <i className="ri-add-line" />
                  </Link>
                  <ul className="dropdown-menu ministry-dropdown">
                    <div className="row g-0">
                      <div className="col-md-3">
                        <li className="nav-item">
                          <Link href="/councils/agriculture" className={`nav-link ${isActive('/councils/agriculture') ? 'active' : ''}`}>Agriculture & Climate Change</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/education" className={`nav-link ${isActive('/councils/education') ? 'active' : ''}`}>Education</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/employment" className={`nav-link ${isActive('/councils/employment') ? 'active' : ''}`}>Employment & Social Affairs</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/environment" className={`nav-link ${isActive('/councils/environment') ? 'active' : ''}`}>Environment & Energy</Link>
                        </li>
                      </div>
                      <div className="col-md-3">
                        <li className="nav-item">
                          <Link href="/councils/finance" className={`nav-link ${isActive('/councils/finance') ? 'active' : ''}`}>Finance, Trade & Economy</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/fisheries" className={`nav-link ${isActive('/councils/fisheries') ? 'active' : ''}`}>Fisheries & Blue Economy</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/foreign-affairs" className={`nav-link ${isActive('/councils/foreign-affairs') ? 'active' : ''}`}>Foreign Affairs & Tourism</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/health" className={`nav-link ${isActive('/councils/health') ? 'active' : ''}`}>Health</Link>
                        </li>
                      </div>
                      <div className="col-md-3">
                        <li className="nav-item">
                          <Link href="/councils/home-affairs" className={`nav-link ${isActive('/councils/home-affairs') ? 'active' : ''}`}>Internal Affairs</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/habitat" className={`nav-link ${isActive('/councils/habitat') ? 'active' : ''}`}>Habitat & Land Transport</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/local-government" className={`nav-link ${isActive('/councils/local-government') ? 'active' : ''}`}>Local Government</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/sports" className={`nav-link ${isActive('/councils/sports') ? 'active' : ''}`}>Youth, Sports & Culture</Link>
                        </li>
                      </div>
                      <div className="col-md-3">
                        <li className="nav-item">
                          <Link href="/councils/disaster-management" className={`nav-link ${isActive('/councils/disaster-management') ? 'active' : ''}`}>Disaster Risk Management</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/transport" className={`nav-link ${isActive('/councils/transport') ? 'active' : ''}`}>Transport & Civil Aviation</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/investment" className={`nav-link ${isActive('/councils/investment') ? 'active' : ''}`}>Investment & Industry</Link>
                        </li>
                      </div>
                    </div>
                    <div className="dropdown-divider" />
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="/districts/victoria" className={`nav-link ${pathname.startsWith('/districts') ? 'active' : ''}`} onClick={(e) => e.preventDefault()}>
                    Districts
                    <i className="ri-add-line" />
                  </Link>
                  <ul className="dropdown-menu district-dropdown">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <li className="nav-item">
                          <Link href="/districts/victoria" className={`nav-link ${isActive('/districts/victoria') ? 'active' : ''}`}>Victoria</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/beau-vallon" className={`nav-link ${isActive('/districts/beau-vallon') ? 'active' : ''}`}>Beau Vallon</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/anse-aux-pins" className={`nav-link ${isActive('/districts/anse-aux-pins') ? 'active' : ''}`}>Anse aux Pins</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/anse-boileau" className={`nav-link ${isActive('/districts/anse-boileau') ? 'active' : ''}`}>Anse Boileau</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/anse-etoile" className={`nav-link ${isActive('/districts/anse-etoile') ? 'active' : ''}`}>Anse Etoile</Link>
                        </li>
                      </div>
                      <div className="col-md-4">
                        <li className="nav-item">
                          <Link href="/districts/anse-royale" className={`nav-link ${isActive('/districts/anse-royale') ? 'active' : ''}`}>Anse Royale</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/baie-lazare" className={`nav-link ${isActive('/districts/baie-lazare') ? 'active' : ''}`}>Baie Lazare</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/cascade" className={`nav-link ${isActive('/districts/cascade') ? 'active' : ''}`}>Cascade</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/glacis" className={`nav-link ${isActive('/districts/glacis') ? 'active' : ''}`}>Glacis</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/grand-anse-mahe" className={`nav-link ${isActive('/districts/grand-anse-mahe') ? 'active' : ''}`}>Grand Anse Mahé</Link>
                        </li>
                      </div>
                      <div className="col-md-4">
                        <li className="nav-item">
                          <Link href="/districts/mont-fleuri" className={`nav-link ${isActive('/districts/mont-fleuri') ? 'active' : ''}`}>Mont Fleuri</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/plaisance" className={`nav-link ${isActive('/districts/plaisance') ? 'active' : ''}`}>Plaisance</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/port-glaud" className={`nav-link ${isActive('/districts/port-glaud') ? 'active' : ''}`}>Port Glaud</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/takamaka" className={`nav-link ${isActive('/districts/takamaka') ? 'active' : ''}`}>Takamaka</Link>
                        </li>
                      </div>
                    </div>
                    <div className="dropdown-divider" />
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="/districts/praslin" className={`nav-link ${pathname.includes('/districts/praslin') || pathname.includes('/districts/la-digue') || pathname.includes('/districts/outer-islands') ? 'active' : ''}`} onClick={(e) => e.preventDefault()}>
                    Inner & Outer Islands
                    <i className="ri-add-line" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/districts/praslin" className={`nav-link ${isActive('/districts/praslin') ? 'active' : ''}`}>Praslin Island</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/districts/la-digue" className={`nav-link ${isActive('/districts/la-digue') ? 'active' : ''}`}>La Digue</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/districts/outer-islands" className={`nav-link ${isActive('/districts/outer-islands') ? 'active' : ''}`}>Outer Islands</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="/resources/documents" className={`nav-link ${pathname.startsWith('/resources') ? 'active' : ''}`} onClick={(e) => e.preventDefault()}>
                    Resources
                    <i className="ri-add-line" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/resources/infographics" className={`nav-link ${isActive('/resources/infographics') ? 'active' : ''}`}>Infographics</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/resources/documents" className={`nav-link ${isActive('/resources/documents') ? 'active' : ''}`}>Documents</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/resources/maps" className={`nav-link ${isActive('/resources/maps') ? 'active' : ''}`}>Interactive Maps</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/resources/forms" className={`nav-link ${isActive('/resources/forms') ? 'active' : ''}`}>Forms</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/resources/manuals" className={`nav-link ${isActive('/resources/manuals') ? 'active' : ''}`}>User Manuals</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/weather" className={`nav-link ${isActive('/weather') ? 'active' : ''}`}>Weather</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="/weather" className={`nav-link ${isActive('/weather') ? 'active' : ''}`}>
                     Weather
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                    Contact Us
                  </Link>
                </li>
              </ul>
              {/* <div className="other-options md-none">
                <div className="option-item">
                  <button className="searchbtn d-xl-none"><i className="ri-search-line" /></button>
                  <div className="searchbox lg-none">
                    <input type="search" placeholder="Search for resources, districts..." />
                    <button><i className="flaticon-search-1" /></button>
                  </div>
                </div>
              </div> */}
              <img src="/img/drdm.png" className="other-options md-none" width={70} />
            </div>
          </nav>
          <div className="search-area">
            <input type="search" placeholder="Search for resources, districts..." />
            <button type="submit"><i className="ri-search-line" /></button>
          </div>
          <div className="mobile-bar-wrap">
            <button className="searchbtn d-lg-none"><i className="ri-search-line" /></button>
            <div className="mobile-menu d-lg-none">
              <a href="javascript:void(0)"><i className="ri-menu-line" /></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}