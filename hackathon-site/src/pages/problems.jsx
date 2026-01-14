import React from 'react';
import CipherNavbar from '../components/Shared/Navbar';
import CipherLayout from '../components/Layout';

/**
 * Problems Component
 * A standalone page for CipherThon 2.0 Problem Statements.
 */
export default function Problems() {
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
          overflow: hidden;
        }

        .ambient-glow {
          position: fixed; width: 50vw; height: 50vw; border-radius: 50%;
          filter: blur(140px); z-index: 0; pointer-events: none; opacity: 0.15;
        }
        .glow-1 { top: -20%; left: -10%; background: var(--accent-purple); }
        .glow-2 { bottom: -10%; right: -10%; background: var(--accent-orange); }

        .content { position: relative; z-index: 10; max-width: 1100px; margin: 0 auto; }
        .header { text-align: center; margin-bottom: 60px; }
        .title { font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 800; margin-bottom: 15px; }
        .highlight { color: var(--accent-orange); }
        .subtitle { color: var(--text-dim); font-size: 1.1rem; }

        .empty-state-card {
          background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 24px;
          padding: 80px 40px; text-align: center; backdrop-filter: blur(10px);
        }
        .empty-icon { font-size: 4rem; margin-bottom: 20px; opacity: 0.5; }
        .shimmer-bar {
          width: 200px; height: 4px; background: linear-gradient(90deg, transparent, var(--accent-orange), transparent);
          margin: 30px auto 0; animation: shimmerX 2s infinite;
        }
        @keyframes shimmerX { from { transform: translateX(-100%); } to { transform: translateX(100%); } }
      `}</style>
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <div className="content">
        <header className="header">
          <h1 className="title">Problem <span className="highlight">Statements</span></h1>
          <p className="subtitle">Innovative challenges for the next generation of builders.</p>
        </header>

        <div className="empty-state-card">
          <div className="empty-icon">📂</div>
          <h3>Encrypted Data</h3>
          <p>Problem statements will be revealed 24 hours before the hackathon begins. Stay tuned!</p>
          <div className="shimmer-bar"></div>
        </div>
      </div>
    </div>
    </CipherLayout>
  );
}