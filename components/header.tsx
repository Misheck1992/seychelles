// components/Header.jsx
"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLoading } from '@/contexts/LoadingContext';

export function Header() {
  const pathname = usePathname();
  const { startLoading, stopLoading } = useLoading();

  // Function to check if a link is active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Stop loading when pathname changes and content is rendered
  useEffect(() => {
    // Use requestAnimationFrame to wait for the browser to paint the new content
    // This ensures the new page content is visible before hiding the loader
    let rafId: number;
    let timeoutId: NodeJS.Timeout;

    const stopLoadingAfterRender = () => {
      rafId = requestAnimationFrame(() => {
        // Wait for one more frame to ensure content is painted
        rafId = requestAnimationFrame(() => {
          // Add a small delay to ensure all content is visible and settled
          timeoutId = setTimeout(() => {
            stopLoading();
          }, 600); // 600ms delay after content is painted
        });
      });
    };

    stopLoadingAfterRender();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [pathname, stopLoading]);

  // Handle navigation link clicks
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Don't handle if it's a dropdown trigger (has onClick preventDefault)
    if (href === '#' || !href) {
      return;
    }

    // Don't show loading if we're already on this page
    if (pathname === href || (href !== '/' && pathname.startsWith(href))) {
      return;
    }

    // Start loading indicator
    startLoading();

    // Let Next.js Link handle the navigation
  };

  return (
    <header className="header-wrap">
      <div className="header-bottom">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link href="/" className="navbar-brand">
              <img className="logo-light" src="/img/logosey.png" alt="DRMD - Disaster Risk Management Division" style={{ maxHeight: '60px', width: 'auto', objectFit: 'contain' }} />
            </Link>
            <div className="collapse navbar-collapse main-menu-wrap" id="navbarSupportedContent">
              <div className="menu-close d-lg-none">
                <a href="javascript:void(0)"> <i className="ri-close-line" /></a>
              </div>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/')}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/councils/agriculture" className={`nav-link ${pathname.startsWith('/councils') ? 'active' : ''}`} onClick={(e) => e.preventDefault()}>
                    Ministries
                    <i className="ri-add-line" />
                  </Link>
                  <ul className="dropdown-menu ministry-dropdown">
                    <div className="row g-0">
                      <div className="col-md-3">
                        <li className="nav-item">
                          <Link href="/councils/agriculture" className={`nav-link ${isActive('/councils/agriculture') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/councils/agriculture')}>Agriculture & Climate Change</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/education" className={`nav-link ${isActive('/councils/education') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/councils/education')}>Education</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/employment" className={`nav-link ${isActive('/councils/employment') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/councils/employment')}>Employment & Social Affairs</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/environment" className={`nav-link ${isActive('/councils/environment') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/councils/environment')}>Environment & Energy</Link>
                        </li>
                      </div>
                      <div className="col-md-3">
                        <li className="nav-item">
                          <Link href="/councils/finance" className={`nav-link ${isActive('/councils/finance') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/councils/finance')}>Finance, Trade & Economy</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/fisheries" className={`nav-link ${isActive('/councils/fisheries') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/councils/fisheries')}>Fisheries & Blue Economy</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/foreign-affairs" className={`nav-link ${isActive('/councils/foreign-affairs') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/councils/foreign-affairs')}>Foreign Affairs & Tourism</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/health" className={`nav-link ${isActive('/councils/health') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/councils/health')}>Health</Link>
                        </li>
                      </div>
                      <div className="col-md-3">
                        <li className="nav-item">
                          <Link href="/councils/home-affairs" className={`nav-link ${isActive('/councils/home-affairs') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/councils/home-affairs')}>Internal Affairs</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/habitat" className={`nav-link ${isActive('/councils/habitat') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/councils/habitat')}>Habitat & Land Transport</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/local-government" className={`nav-link ${isActive('/councils/local-government') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/councils/local-government')}>Local Government</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/sports" className={`nav-link ${isActive('/councils/sports') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/councils/sports')}>Youth, Sports & Culture</Link>
                        </li>
                      </div>
                      <div className="col-md-3">
                        <li className="nav-item">
                          <Link href="/councils/disaster-management" className={`nav-link ${isActive('/councils/disaster-management') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/councils/disaster-management')}>Disaster Risk Management</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/transport" className={`nav-link ${isActive('/councils/transport') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/councils/transport')}>Transport & Civil Aviation</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/investment" className={`nav-link ${isActive('/councils/investment') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/councils/investment')}>Investment & Industry</Link>
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
                          <Link href="/districts/victoria" className={`nav-link ${isActive('/districts/victoria') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/districts/victoria')}>Victoria</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/beau-vallon" className={`nav-link ${isActive('/districts/beau-vallon') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/districts/beau-vallon')}>Beau Vallon</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/anse-aux-pins" className={`nav-link ${isActive('/districts/anse-aux-pins') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/districts/anse-aux-pins')}>Anse aux Pins</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/anse-boileau" className={`nav-link ${isActive('/districts/anse-boileau') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/districts/anse-boileau')}>Anse Boileau</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/anse-etoile" className={`nav-link ${isActive('/districts/anse-etoile') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/districts/anse-etoile')}>Anse Etoile</Link>
                        </li>
                      </div>
                      <div className="col-md-4">
                        <li className="nav-item">
                          <Link href="/districts/anse-royale" className={`nav-link ${isActive('/districts/anse-royale') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/districts/anse-royale')}>Anse Royale</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/baie-lazare" className={`nav-link ${isActive('/districts/baie-lazare') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/districts/baie-lazare')}>Baie Lazare</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/cascade" className={`nav-link ${isActive('/districts/cascade') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/districts/cascade')}>Cascade</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/glacis" className={`nav-link ${isActive('/districts/glacis') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/districts/glacis')}>Glacis</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/grand-anse-mahe" className={`nav-link ${isActive('/districts/grand-anse-mahe') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/districts/grand-anse-mahe')}>Grand Anse Mahé</Link>
                        </li>
                      </div>
                      <div className="col-md-4">
                        <li className="nav-item">
                          <Link href="/districts/mont-fleuri" className={`nav-link ${isActive('/districts/mont-fleuri') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/districts/mont-fleuri')}>Mont Fleuri</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/plaisance" className={`nav-link ${isActive('/districts/plaisance') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/districts/plaisance')}>Plaisance</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/port-glaud" className={`nav-link ${isActive('/districts/port-glaud') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/districts/port-glaud')}>Port Glaud</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/takamaka" className={`nav-link ${isActive('/districts/takamaka') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/districts/takamaka')}>Takamaka</Link>
                        </li>
                      </div>
                    </div>
                    <div className="dropdown-divider" />
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="#" className={`nav-link ${pathname.includes('/districts/baie-sainte-anne') || pathname.includes('/districts/grand-anse-praslin') || pathname.includes('/districts/la-digue') || pathname.includes('/districts/outer-islands') ? 'active' : ''}`} onClick={(e) => e.preventDefault()}>
                   Islands
                    <i className="ri-add-line" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/districts/baie-sainte-anne" className={`nav-link ${isActive('/districts/baie-sainte-anne') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/districts/baie-sainte-anne')}>Baie Sainte Anne (Praslin)</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/districts/grand-anse-praslin" className={`nav-link ${isActive('/districts/grand-anse-praslin') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/districts/grand-anse-praslin')}>Grand'Anse Praslin</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/districts/la-digue" className={`nav-link ${isActive('/districts/la-digue') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/districts/la-digue')}>La Digue</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/districts/outer-islands" className={`nav-link ${isActive('/districts/outer-islands') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/districts/outer-islands')}>Outer Islands</Link>
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
                      <Link href="/resources/infographics" className={`nav-link ${isActive('/resources/infographics') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/resources/infographics')}>Infographics</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/resources/documents" className={`nav-link ${isActive('/resources/documents') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/resources/documents')}>Documents</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/resources/maps" className={`nav-link ${isActive('/resources/maps') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/resources/maps')}>Interactive Maps</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/resources/forms" className={`nav-link ${isActive('/resources/forms') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/resources/forms')}>Forms</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/resources/manuals" className={`nav-link ${isActive('/resources/manuals') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/resources/manuals')}>User Manuals</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/weather" className={`nav-link ${isActive('/weather') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/weather')}>Weather</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="/weather" className={`nav-link ${isActive('/weather') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/weather')}>
                     Weather
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/contact')}>
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
              <img src="/img/seychelles-emblem.svg" className="other-options md-none" width={70} height={70} alt="Seychelles National Emblem" style={{ objectFit: 'contain' }} />
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