export default function PrizeCards() {
  const prizes = [
    {
      position: 2,
      title: "Silver Runner Up",
      cash: "$300",
      icon: "🥈",
      color: "oklch(0.7 0.01 160)", // Subtle Silver-Mint
      glow: "oklch(0.83 0.13 160 / 0.2)",
      perks: ["Premium Credits", "Digital Certificate", "Swag Kit"]
    },
    {
      position: 1,
      title: "Grand Champion",
      cash: "$400",
      icon: "🏆",
      color: "oklch(0.83 0.13 160)", // Vivid Mint
      glow: "oklch(0.83 0.13 160 / 0.4)",
      perks: ["VIP Access", "Mentor Support", "Trophy & Kit"],
      featured: true
    },
    {
      position: 3,
      title: "Bronze Finalist",
      cash: "$200",
      icon: "🥉",
      color: "oklch(0.6 0.05 160)", // Deep Mint
      glow: "oklch(0.83 0.13 160 / 0.15)",
      perks: ["Basic Credits", "Participation NFT", "E-Badge"]
    },
  ];

  return (
    <div className="prize-app-container">
      {/* Embedded CSS for single-file portability */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700;900&display=swap');

        :root {
          --background: oklch(0.9911 0 0);
          --foreground: oklch(0.2046 0 0);
          --primary: oklch(0.8348 0.1302 160.908);
          --primary-foreground: oklch(0.2626 0.0147 166.4589);
          --border: oklch(0.9037 0 0);
          --muted-foreground: oklch(0.2435 0 0);
          --font-sans: 'Outfit', sans-serif;
        }

        .prize-app-container {
          min-height: auto;
          background-color: var(--background);
          color: var(--foreground);
          font-family: var(--font-sans);
          overflow-x: hidden;
          position: relative;
          padding: 60px 0;
        }

        .background-effects {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .glow-mint {
          position: absolute;
          width: 40%;
          height: 40%;
          background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
          filter: blur(100px);
          opacity: 0.15;
        }
        .glow-top { top: -10%; left: 10%; }
        .glow-bottom { bottom: -10%; right: 10%; }

        .content-wrapper {
          position: relative;
          z-index: 10;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .header-section {
          text-align: center;
          margin-bottom: 60px;
        }

        .header-subtitle {
          color: var(--primary);
          font-weight: 800;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-size: 0.75rem;
          margin-bottom: 12px;
          background: oklch(0.96 0.01 160);
          padding: 4px 12px;
          border-radius: 4px;
          display: inline-block;
        }

        .header-main-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 900;
          color: var(--foreground);
          margin-bottom: 16px;
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .header-description {
          color: var(--muted-foreground);
          max-width: 550px;
          margin: 0 auto;
          font-size: 1rem;
          line-height: 1.6;
        }

        .prize-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          width: 100%;
          align-items: stretch;
          padding-top: 40px;
        }

        .prize-card-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .prize-card-wrapper:hover {
          transform: translateY(-10px);
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
          background-color: white;
          border: 2px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: all 0.4s ease;
        }

        .badge-emoji {
          font-size: 2.5rem;
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .prize-card-wrapper:hover .badge-emoji {
          transform: rotate(180deg);
        }

        .prize-card-wrapper:hover .badge-icon-box {
          border-color: var(--primary);
          box-shadow: 0 15px 35px var(--glow);
        }

        .badge-number-label {
          position: absolute;
          bottom: -4px;
          right: -4px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: var(--background);
          border: 2px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.9rem;
          color: var(--foreground);
        }

        .card-body {
          width: 100%;
          height: 100%;
          background-color: white;
          border: 1px solid var(--border);
          border-radius: 2rem;
          padding: 60px 24px 32px;
          text-align: center;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }

        .featured-ring {
          border-color: var(--primary);
          background: oklch(0.99 0.01 160);
          box-shadow: 0 0 40px oklch(0.83 0.13 160 / 0.08);
        }

        .prize-card-wrapper:hover .card-body {
          border-color: var(--primary);
          box-shadow: 0 20px 50px rgba(0,0,0,0.06);
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 8px;
          color: var(--foreground);
        }

        .cash-container {
          margin-bottom: 20px;
        }

        .cash-value {
          font-size: 2.5rem;
          font-weight: 900;
          letter-spacing: -0.05em;
        }

        .currency-label {
          color: var(--muted-foreground);
          font-size: 0.8rem;
          margin-left: 6px;
          text-transform: uppercase;
          font-weight: 700;
        }

        .perks-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 30px;
          font-size: 0.85rem;
          color: var(--muted-foreground);
          flex-grow: 1;
        }

        .perk-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .perk-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: var(--primary);
        }

        .details-button {
          width: 100%;
          padding: 14px 0;
          border-radius: 1rem;
          background-color: var(--primary);
          border: none;
          color: var(--primary-foreground);
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px oklch(0.83 0.13 160 / 0.2);
        }

        .details-button:hover {
          filter: brightness(0.95);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px oklch(0.83 0.13 160 / 0.3);
        }

        .floor-shadow {
          margin-top: 16px;
          width: 60%;
          height: 6px;
          background-color: oklch(0.2 0.01 160 / 0.1);
          filter: blur(6px);
          border-radius: 100%;
          transition: all 0.5s ease;
        }

        .prize-card-wrapper:hover .floor-shadow {
          width: 80%;
          background-color: oklch(0.2 0.01 160 / 0.2);
        }

        @media (max-width: 900px) {
          .prize-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            gap: 60px;
          }
          .content-wrapper { padding-top: 60px; }
        }
      `}</style>

      <div className="background-effects">
        <div className="glow-mint glow-top"></div>
        <div className="glow-mint glow-bottom"></div>
      </div>

      <div className="content-wrapper">
        <header className="header-section">
          <h2 className="header-subtitle">Grand Finale</h2>
          <h1 className="header-main-title">THE ARCHITECT'S PRIZE POOL</h1>
          <p className="header-description">
            Exceptional engineering deserves exceptional rewards. We've curated a pool of prizes for the top innovators of AjraSakha.
          </p>
        </header>

        <div className="prize-grid">
          {prizes.map((prize) => (
            <div 
              key={prize.position} 
              className="prize-card-wrapper"
              style={{ '--glow': prize.glow }}
            >
              {/* Prize Badge */}
              <div className="badge-anchor">
                <div className="badge-icon-box">
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
                  View Reward Details
                </button>
              </div>

              <div className="floor-shadow" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}