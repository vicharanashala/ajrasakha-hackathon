import React from 'react';
import CipherLayout from '../components/Layout';

/**
 * Guidelines Component
 * A standalone page for CipherThon 2.0 Competition Rules.
 */
export default function Guidelines() {
  const rules = [
    { title: "Team Formation", desc: "Maximum 4 members per team. Individual participation is allowed for solo hackers." },
    { title: "Project Originality", desc: "All code must be written during the 24-hour window. Pre-built libraries and APIs are permitted." },
    { title: "Submission Format", desc: "Teams must submit a working GitHub repository and a 2-minute video demonstration." },
    { title: "Intellectual Property", desc: "Participants retain full ownership of their creations. Sponsors may request follow-up demos." }
  ];

  return (
    <CipherLayout>
    <div className="page-wrapper">
      <style>{`
        :root {
          --bg-black: #050505;
          --accent-orange: #f59e0b;
          --accent-purple: #a855f7;
          --text-main: #ffffff;
          --text-dim: #94a3b8;
          --glass-bg: rgba(255, 255, 255, 0.02);
          --glass-border: rgba(255, 255, 255, 0.08);
        }

        .page-wrapper {
          min-height: 100vh;
          background-color: var(--bg-black);
          color: var(--text-main);
          font-family: 'Space Grotesk', sans-serif;
          padding: 80px 8%;
          position: relative;
        }

        .ambient-glow {
          position: fixed; width: 50vw; height: 50vw; border-radius: 50%;
          filter: blur(140px); z-index: 0; pointer-events: none; opacity: 0.1;
        }
        .glow-purple { top: -10%; left: -10%; background: var(--accent-purple); }

        .content { position: relative; z-index: 10; max-width: 1100px; margin: 0 auto; }
        .header { text-align: center; margin-bottom: 60px; }
        .title { font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 800; margin-bottom: 15px; }
        .highlight { color: var(--accent-orange); }

        .info-grid { display: grid; grid-template-cols: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
        .info-card {
          background: var(--glass-bg); border: 1px solid var(--glass-border); padding: 40px;
          border-radius: 24px; position: relative; transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        .info-card:hover { transform: translateY(-8px); border-color: var(--accent-orange); background: rgba(255,255,255,0.04); }
        .card-node { width: 10px; height: 10px; background: var(--accent-orange); border-radius: 50%; margin-bottom: 20px; box-shadow: 0 0 10px var(--accent-orange); }
        .info-card h4 { margin-bottom: 15px; font-size: 1.4rem; font-weight: 700; }
        .info-card p { color: var(--text-dim); font-size: 1rem; line-height: 1.6; }
      `}</style>

      <div className="ambient-glow glow-purple"></div>

      <div className="content">
        <header className="header">
          <h1 className="title">Hackathon <span className="highlight">Guidelines</span></h1>
          <p style={{ color: 'var(--text-dim)' }}>Follow the protocols to ensure a smooth hacking experience.</p>
        </header>

        <div className="info-grid">
          {rules.map((item, i) => (
            <div key={i} className="info-card">
              <div className="card-node"></div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </CipherLayout>
  );
}