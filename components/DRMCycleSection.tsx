'use client';

import React, { useState } from 'react';
import { disasterRiskManagementCycle } from '@/lib/data';

interface CyclePhase {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  position: { top: string; left: string; transform: string };
}

const phases: CyclePhase[] = [
  {
    id: 'mitigation',
    title: disasterRiskManagementCycle.mitigation.title,
    description: disasterRiskManagementCycle.mitigation.description,
    icon: 'ri-shield-check-line',
    color: '#338F7A',
    position: { top: '10%', left: '50%', transform: 'translateX(-50%)' }
  },
  {
    id: 'preparedness',
    title: disasterRiskManagementCycle.preparedness.title,
    description: disasterRiskManagementCycle.preparedness.description,
    icon: 'ri-book-open-line',
    color: '#F59946',
    position: { top: '50%', left: '72%', transform: 'translate(-50%, -50%)' }
  },
  {
    id: 'response',
    title: disasterRiskManagementCycle.response.title,
    description: disasterRiskManagementCycle.response.description,
    icon: 'ri-alarm-warning-line',
    color: '#E74C3C',
    position: { top: '85%', left: '50%', transform: 'translate(-50%, -50%)' }
  },
  {
    id: 'recovery',
    title: disasterRiskManagementCycle.recovery.title,
    description: disasterRiskManagementCycle.recovery.description,
    icon: 'ri-refresh-line',
    color: '#3498DB',
    position: { top: '50%', left: '28%', transform: 'translate(-50%, -50%)' }
  }
];

const DRMCycleSection: React.FC = () => {
  const [activePhase, setActivePhase] = useState<string | null>(null);

  return (
    <section className="drm-cycle-section ptb-100 ">
      <div className="container">
        <div className="section-title style3 text-center mb-40">
          <span>Our Approach</span>
          <h2>Disaster Risk Management Cycle</h2>
          <p className="mt-3">A comprehensive approach to managing disasters through four key phases</p>
        </div>

        <div className="row align-items-center">
          {/* Cycle Diagram */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="cycle-diagram-container" style={{ position: 'relative', height: '450px' }}>
              {/* Circular background with arrows */}
              <div className="cycle-circle" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                border: '4px dashed rgba(51, 143, 122, 0.3)',
              }}>
                {/* Center text */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  padding: '20px'
                }}>
                  <h4 style={{ color: '#338F7A', fontWeight: 700, marginBottom: '5px' }}>DRM</h4>
                  <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Cycle</p>
                </div>

              </div>

              {/* Arrow indicators - positioned outside the circle div */}
              <svg style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none'
              }}>
                <defs>
                  <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#338F7A" />
                  </marker>
                  <marker id="arrowhead-orange" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#F59946" />
                  </marker>
                  <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#E74C3C" />
                  </marker>
                  <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#3498DB" />
                  </marker>
                </defs>
                {/* Mitigation to Preparedness (top to right) */}
                <path
                  d="M 200 40 A 120 120 0 0 1 280 120"
                  fill="none"
                  stroke="#338F7A"
                  strokeWidth="3"
                  markerEnd="url(#arrowhead-green)"
                  opacity="0.8"
                />
                {/* Preparedness to Response (right to bottom) */}
                <path
                  d="M 280 200 A 120 120 0 0 1 200 280"
                  fill="none"
                  stroke="#F59946"
                  strokeWidth="3"
                  markerEnd="url(#arrowhead-orange)"
                  opacity="0.8"
                />
                {/* Response to Recovery (bottom to left) */}
                <path
                  d="M 120 280 A 120 120 0 0 1 40 200"
                  fill="none"
                  stroke="#E74C3C"
                  strokeWidth="3"
                  markerEnd="url(#arrowhead-red)"
                  opacity="0.8"
                />
                {/* Recovery to Mitigation (left to top) */}
                <path
                  d="M 40 120 A 120 120 0 0 1 120 40"
                  fill="none"
                  stroke="#3498DB"
                  strokeWidth="3"
                  markerEnd="url(#arrowhead-blue)"
                  opacity="0.8"
                />
              </svg>

              {/* Phase nodes */}
              {phases.map((phase) => (
                <div
                  key={phase.id}
                  className={`cycle-node ${activePhase === phase.id ? 'active' : ''}`}
                  style={{
                    position: 'absolute',
                    ...phase.position,
                    zIndex: 10,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={() => setActivePhase(phase.id)}
                  onMouseLeave={() => setActivePhase(null)}
                  onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}
                >
                  <div style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    backgroundColor: activePhase === phase.id ? phase.color : '#fff',
                    border: `3px solid ${phase.color}`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: activePhase === phase.id 
                      ? `0 8px 25px rgba(0,0,0,0.2)` 
                      : '0 4px 15px rgba(0,0,0,0.1)',
                    transform: activePhase === phase.id ? 'scale(1.1)' : 'scale(1)',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className={phase.icon} style={{
                      fontSize: '28px',
                      color: activePhase === phase.id ? '#fff' : phase.color,
                      marginBottom: '5px'
                    }} />
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: activePhase === phase.id ? '#fff' : '#333',
                      textAlign: 'center',
                      lineHeight: 1.2
                    }}>
                      {phase.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phase Cards */}
          <div className="col-lg-6">
            <div className="cycle-cards">
              {phases.map((phase, index) => (
                <div
                  key={phase.id}
                  className={`cycle-card ${activePhase === phase.id ? 'active' : ''}`}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: '20px',
                    marginBottom: '15px',
                    backgroundColor: activePhase === phase.id ? phase.color : '#fff',
                    borderRadius: '10px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                    borderLeft: `4px solid ${phase.color}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: activePhase === phase.id ? 'translateX(10px)' : 'translateX(0)'
                  }}
                  onMouseEnter={() => setActivePhase(phase.id)}
                  onMouseLeave={() => setActivePhase(null)}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: activePhase === phase.id ? 'rgba(255,255,255,0.2)' : `${phase.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px',
                    flexShrink: 0
                  }}>
                    <i className={phase.icon} style={{
                      fontSize: '24px',
                      color: activePhase === phase.id ? '#fff' : phase.color
                    }} />
                  </div>
                  <div>
                    <h5 style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      marginBottom: '8px',
                      color: activePhase === phase.id ? '#fff' : '#333'
                    }}>
                      {index + 1}. {phase.title}
                    </h5>
                    <p style={{
                      fontSize: '14px',
                      lineHeight: 1.6,
                      margin: 0,
                      color: activePhase === phase.id ? 'rgba(255,255,255,0.9)' : '#666'
                    }}>
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cycle-node:hover {
          z-index: 20 !important;
        }
        @media (max-width: 991px) {
          .cycle-diagram-container {
            height: 380px !important;
            margin-bottom: 30px;
          }
          .cycle-circle {
            width: 280px !important;
            height: 280px !important;
          }
        }
        @media (max-width: 576px) {
          .cycle-diagram-container {
            height: 320px !important;
          }
          .cycle-circle {
            width: 220px !important;
            height: 220px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default DRMCycleSection;

