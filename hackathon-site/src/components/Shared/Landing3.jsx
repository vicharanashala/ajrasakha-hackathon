import React from 'react';

/**
 * PrizeCards Component
 * A premium, almost-black themed rewards section for a Hackathon.
 * Updated:
 * 1. Forced 3-column layout (single line) for compact space usage.
 * 2. Icon rotation increased to 180 degrees on hover.
 * 3. Reduced vertical padding for a more efficient footprint.
 */
export default function App() {
  const prizes = [
    {
      position: 2,
      title: "Silver Runner Up",
      cash: "$300",
      icon: "🥈",
      color: "#94a3b8",
      glow: "rgba(148, 163, 184, 0.3)",
      perks: ["Premium Credits", "Digital Certificate", "Swag Kit"]
    },
    {
      position: 1,
      title: "Grand Champion",
      cash: "$400",
      icon: "🏆",
      color: "#fbbf24",
      glow: "rgba(251, 191, 36, 0.4)",
      perks: ["VIP Access", "Mentor Support", "Trophy & Kit"],
      featured: true
    },
    {
      position: 3,
      title: "Bronze Finalist",
      cash: "$200",
      icon: "🥉",
      color: "#d97706",
      glow: "rgba(217, 119, 6, 0.3)",
      perks: ["Basic Credits", "Participation NFT", "E-Badge"]
    },
  ];

  return (
    <div className="prize-app-container">
      {/* Embedded CSS for single-file portability */}
      <style>{`
        :root {
          --bg-dark: #050505; /* Almost Black */
          --card-bg: rgba(15, 23, 42, 0.6);
          --card-hover-bg: rgba(30, 41, 59, 0.8);
          --text-primary: #ffffff;
          --text-secondary: #94a3b8;
          --accent-purple: #a855f7;
        }

        .prize-app-container {
          min-height: 100vh;
          background-color: var(--bg-dark);
          color: var(--text-primary);
          font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
          overflow-x: hidden;
          position: relative;
        }

        .background-effects {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .glow-top {
          position: absolute;
          top: -10%;
          left: -10%;
          width: 50%;
          height: 50%;
          background: radial-gradient(circle, rgba(88, 28, 135, 0.1) 0%, transparent 70%);
          filter: blur(80px);
        }

        .glow-bottom {
          position: absolute;
          bottom: -10%;
          right: -10%;
          width: 50%;
          height: 50%;
          background: radial-gradient(circle, rgba(30, 58, 138, 0.1) 0%, transparent 70%);
          filter: blur(80px);
        }

        .content-wrapper {
          position: relative;
          z-index: 10;
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 20px; /* Reduced vertical padding */
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .header-section {
          text-align: center;
          margin-bottom: 60px; /* Reduced margin */
        }

        .header-subtitle {
          color: var(--accent-purple);
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-size: 0.75rem;
          margin-bottom: 8px;
        }

        .header-main-title {
          font-size: clamp(1.8rem, 5vw, 3rem); /* Slightly smaller for efficiency */
          font-weight: 900;
          background: linear-gradient(to bottom, #ffffff, #94a3b8);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 16px;
          font-style: italic;
          line-height: 1.1;
        }

        .header-description {
          color: var(--text-secondary);
          max-width: 550px;
          margin: 0 auto;
          font-size: 1rem;
          line-height: 1.5;
        }

        .prize-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);   /* 👈 correct property */
  gap: 16px;
  width: 100%;
  align-items: stretch;
  padding-top: 40px;
}

        /* Mobile specific adjustments to maintain visibility in single line */
        @media (max-width: 768px) {
          .prize-grid {
            gap: 10px;
          }
          .card-title { font-size: 1rem; }
          .cash-value { font-size: 1.5rem; }
          .badge-icon-box { width: 60px; height: 60px; }
          .badge-emoji { font-size: 1.8rem; }
          .badge-anchor { top: -30px; }
        }

        .prize-card-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .prize-card-wrapper:hover {
          transform: translateY(-8px);
        }

        .badge-anchor {
          position: absolute;
          top: -40px;
          z-index: 20;
        }

        .badge-icon-box {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: #0f172a;
          border: 2px solid transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          transition: transform 0.4s ease;
        }

        .badge-emoji {
          font-size: 2.5rem;
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Icon rotates 180 degrees on hover */
        .prize-card-wrapper:hover .badge-emoji {
          transform: rotate(180deg);
        }

        .badge-number-label {
          position: absolute;
          bottom: -4px;
          right: -4px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid transparent;
          background-color: #1e293b;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.9rem;
        }

        .card-body {
          width: 100%;
          height: 100%;
          background-color: var(--card-bg);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 1.5rem; /* Slightly smaller radius for compact look */
          padding: 50px 16px 24px 16px;
          text-align: center;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
        }

        .featured-ring {
          border-color: rgba(251, 191, 36, 0.3);
          box-shadow: 0 0 30px rgba(251, 191, 36, 0.1);
        }

        .prize-card-wrapper:hover .card-body {
          background-color: var(--card-hover-bg);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .cash-container {
          margin-bottom: 16px;
        }

        .cash-value {
          font-size: 2rem;
          font-weight: 900;
          letter-spacing: -0.05em;
        }

        .currency-label {
          color: #64748b;
          font-size: 0.75rem;
          margin-left: 4px;
          text-transform: uppercase;
        }

        .perks-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 24px;
          font-size: 0.75rem;
          color: var(--text-secondary);
          flex-grow: 1;
        }

        .perk-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .perk-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background-color: var(--accent-purple);
          opacity: 0.6;
        }

        .details-button {
          width: 100%;
          padding: 10px 0;
          border-radius: 0.75rem;
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .details-button:hover {
          background-color: white;
          color: black;
          transform: scale(1.02);
        }

        .floor-shadow {
          margin-top: 12px;
          width: 50%;
          height: 4px;
          background-color: rgba(0, 0, 0, 0.8);
          filter: blur(4px);
          border-radius: 100%;
          transition: all 0.5s ease;
          opacity: 0.3;
        }

        .prize-card-wrapper:hover .floor-shadow {
          width: 70%;
          opacity: 0.6;
        }
      `}</style>

      {/* Background Ambient Glows */}
      <div className="background-effects">
        <div className="glow-top"></div>
        <div className="glow-bottom"></div>
      </div>

      <div className="content-wrapper">
        {/* Header Section */}
        <header className="header-section">
          <h2 className="header-subtitle">Hackathon Finale</h2>
          <h1 className="header-main-title">
            PRIZE MONEY FOR THE HACKATHON
          </h1>
          <p className="header-description">
            Celebrate innovation and excellence. Top participants receive the following rewards for their hard work.
          </p>
        </header>

        {/* Prize Grid - Forced 3-column single line */}
        <div className="prize-grid">
          {prizes.map((prize) => (
            <div 
              key={prize.position} 
              className={`prize-card-wrapper ${prize.featured ? 'is-featured' : ''}`}
            >
              {/* Prize Badge */}
              <div className="badge-anchor">
                <div 
                  className="badge-icon-box"
                  style={{ 
                    borderColor: prize.color, 
                    boxShadow: `0 0 25px ${prize.glow}` 
                  }}
                >
                  <span className="badge-emoji">{prize.icon}</span>
                </div>
                <div 
                  className="badge-number-label"
                  style={{ borderColor: prize.color, color: prize.color }}
                >
                  {prize.position}
                </div>
              </div>

              {/* Main Card Body */}
              <div className={`card-body ${prize.featured ? 'featured-ring' : ''}`}>
                <h3 className="card-title">{prize.title}</h3>
                <div className="cash-container">
                   <span className="cash-value" style={{ color: prize.color }}>
                     {prize.cash}
                   </span>
                   <span className="currency-label">USD</span>
                </div>

                <div className="perks-list">
                  {prize.perks.map((perk, i) => (
                    <div key={i} className="perk-item">
                      <div className="perk-dot" />
                      {perk}
                    </div>
                  ))}
                </div>

                <button className="details-button">
                  View Prize Details
                </button>
              </div>

              {/* Floor Shadow */}
              <div className="floor-shadow" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}