import Link from "@docusaurus/Link";
export default function CipherThon() {
  return (
    <div className="cipher-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&display=swap');

        :root {
          --bg-black: #050505;
          --accent-orange: #f59e0b;
          --accent-purple: #a855f7;
          --text-main: #ffffff;
          --text-dim: #94a3b8;
          --glass-bg: rgba(255, 255, 255, 0.02);
          --glass-border: rgba(255, 255, 255, 0.08);
          --font-tech: 'Space Grotesk', sans-serif;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .cipher-container {
          min-height: 100vh;
          background-color: var(--bg-black);
          color: var(--text-main);
          font-family: var(--font-tech);
          overflow-x: hidden;
          position: relative;
        }

        /* Ambient Background Glows */
        .ambient-glow {
          position: absolute;
          width: 50vw;
          height: 50vw;
          border-radius: 50%;
          filter: blur(140px);
          z-index: 0;
          pointer-events: none;
          opacity: 0.15;
          animation: pulseGlow 10s ease-in-out infinite alternate;
        }
        .glow-1 { top: -20%; left: -10%; background: var(--accent-purple); }
        .glow-2 { bottom: -10%; right: -10%; background: var(--accent-orange); }

        @keyframes pulseGlow {
          from { transform: scale(1); opacity: 0.1; }
          to { transform: scale(1.2); opacity: 0.2; }
        }

        /* Particle / Star Field Effect */
        .particles {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0);
          background-size: 40px 40px;
          z-index: 1;
          pointer-events: none;
        }

        /* Perspective Grid */
        .grid-overlay {
          position: absolute;
          inset: 0;
          background: 
            linear-gradient(rgba(168, 85, 247, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at center, black, transparent 80%);
          transform: perspective(1000px) rotateX(60deg) translateY(-100px);
          transform-origin: top;
          z-index: 1;
          opacity: 0.3;
          pointer-events: none;
        }

        /* Navigation Bar */
        .cipher-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 8%;
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(5, 5, 5, 0.7);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--glass-border);
        }

        .cipher-logo {
          font-size: 1.6rem;
          font-weight: 800;
          letter-spacing: -1px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .logo-cipher { color: #fff; }
        .logo-thon { 
          color: var(--accent-orange); 
          position: relative;
        }
        .logo-thon::after {
          content: '1 .0';
          position: absolute;
          top: -10px;
          right: -30px;
          font-size: 0.7rem;
          background: var(--accent-purple);
          color: white;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .navbar-menu {
          display: flex;
          gap: 40px;
        }

        .nav-link {
          color: var(--text-dim);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-orange);
          transition: width 0.3s ease;
        }

        .nav-link:hover { color: white; }
        .nav-link:hover::after { width: 100%; }

        .navbar-btn {
          padding: 10px 24px;
          border: 1px solid var(--accent-orange);
          color: var(--accent-orange);
          background: transparent;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .navbar-btn:hover {
          background-color: var(--accent-orange);
          color: #000;
          box-shadow: 0 0 30px rgba(245, 158, 11, 0.4);
        }

        /* Main Content */
        .cipher-main {
          position: relative;
          z-index: 10;
          padding: 100px 8%;
          max-width: 1440px;
          margin: 0 auto;
        }

        .cipher-content {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: center;
        }

        /* Left Section */
        .cipher-logo-section { margin-bottom: 20px; }

        .cipher-byline {
          font-size: 0.8rem;
          color: var(--accent-purple);
          text-transform: uppercase;
          letter-spacing: 0.5em;
          font-weight: 700;
          display: inline-block;
          border-left: 3px solid var(--accent-purple);
          padding-left: 15px;
        }

        .cipher-main-heading {
          font-size: clamp(3rem, 7vw, 5rem);
          font-weight: 800;
          line-height: 0.9;
          letter-spacing: -3px;
          margin: 15px 0;
          color: #fff;
        }

        .cipher-sub-heading {
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 24px;
          color: transparent;
          -webkit-text-stroke: 1.5px var(--accent-orange);
          opacity: 0.9;
          letter-spacing: 2px;
          animation: glitchText 4s infinite;
        }

        @keyframes glitchText {
          0%, 90%, 100% { transform: skew(0deg); }
          91% { transform: skew(10deg); color: var(--accent-purple); }
          93% { transform: skew(-10deg); color: var(--accent-orange); }
          95% { transform: skew(5deg); }
        }

        .cipher-description {
          font-size: 1.15rem;
          color: var(--text-dim);
          margin-bottom: 48px;
          max-width: 520px;
          line-height: 1.7;
          border-left: 1px solid rgba(255,255,255,0.1);
          padding-left: 20px;
        }

        .cipher-buttons {
          display: flex;
          gap: 24px;
          align-items: center;
        }

        /* Shimmer Button Effect */
        .btn-register {
          padding: 18px 45px;
          background: var(--accent-orange);
          color: #000;
          border: none;
          border-radius: 12px;
          font-weight: 800;
          font-size: 1.1rem;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 10px 40px rgba(245, 158, 11, 0.2);
        }

        .btn-register::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to bottom right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(45deg);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-150%) rotate(45deg); }
          100% { transform: translateX(150%) rotate(45deg); }
        }

        .btn-register:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(245, 158, 11, 0.5);
        }

        .btn-problem {
          padding: 18px 32px;
          color: #fff;
          background: transparent;
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-problem:hover {
          background: var(--glass-bg);
          border-color: #fff;
        }

        /* Right Section Illustration */
        .cipher-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .cipher-illustration-container {
          position: relative;
          width: 100%;
          max-width: 550px;
        }

        /* Rotating Orbitals */
        .orbital {
          position: absolute;
          border: 1px dashed rgba(168, 85, 247, 0.3);
          border-radius: 50%;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .orbit-1 { width: 110%; height: 110%; animation: rotateCW 20s linear infinite; }
        .orbit-2 { width: 130%; height: 130%; animation: rotateCCW 30s linear infinite; }

        @keyframes rotateCW { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
        @keyframes rotateCCW { from { transform: translate(-50%, -50%) rotate(360deg); } to { transform: translate(-50%, -50%) rotate(0deg); } }

        .cipher-svg {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 0 30px rgba(168, 85, 247, 0.2));
          animation: floatHero 6s ease-in-out infinite;
        }

        @keyframes floatHero {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-30px) rotate(2deg); }
        }

        .cipher-glow {
          position: absolute;
          inset: 15%;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.15), transparent 70%);
          filter: blur(80px);
          z-index: -1;
        }

        /* Decorative Floating Elements */
        .floating-node {
          position: absolute;
          padding: 12px;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-orange);
          z-index: 5;
          animation: floatNode 4s ease-in-out infinite;
        }
        .node-1 { top: 10%; right: 0%; animation-delay: 0s; }
        .node-2 { bottom: 20%; left: -5%; animation-delay: 1s; }

        @keyframes floatNode {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @media (max-width: 1024px) {
          .cipher-content { grid-template-columns: 1fr; text-align: center; gap: 80px; }
          .cipher-description { margin-left: auto; margin-right: auto; border-left: none; padding-left: 0; }
          .cipher-buttons { justify-content: center; }
          .navbar-menu { display: none; }
          .cipher-main-heading { letter-spacing: -2px; }
        }
      `}</style>

      {/* Visual Enhancements */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
      <div className="particles"></div>
      <div className="grid-overlay"></div>

      {/* Hero Content */}
      <main className="cipher-main">
        <div className="cipher-content">
          {/* Left Content */}
          <div className="cipher-left">
            <div className="cipher-logo-section">
              <p className="cipher-byline">Elevating Innovation</p>
            </div>

            <div className="cipher-heading-section">
              <h1 className="cipher-main-heading">Code the Future,</h1>
              <h2 className="cipher-sub-heading">AjraSakha Hackathon</h2>
            </div>

            <p className="cipher-description">
              Step into India's most intensive 48-hour innovation sprint. Connect with elite developers, solve global challenges, and claim your share of the massive prize pool.
            </p>

            <div className="cipher-buttons">
              <a href=""><button className="btn-register">Apply for Hackathon</button></a>
              <button className="btn-problem">View Tracks</button>
            </div>
          </div>

          {/* Right Content */}
          <div className="cipher-right">
            <div className="cipher-illustration-container">
              {/* Orbital Rings */}
              <div className="orbital orbit-1"></div>
              <div className="orbital orbit-2"></div>
              
              {/* Floating Status Nodes */}
              <div className="floating-node node-1">STATUS: COMPILING</div>
              <div className="floating-node node-2">UPTIME: 24:00:00</div>

              <svg viewBox="0 0 500 500" className="cipher-svg">
                <defs>
                  <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#0f172a', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                
                {/* Modern Laptop / Console Design */}
                <g>
                  {/* Base Stand */}
                  <path d="M150 400 L350 400 L380 440 L120 440 Z" fill="#1e293b" />
                  <rect x="140" y="430" width="220" height="10" rx="5" fill="#f59e0b" opacity="0.6" />

                  {/* Main Frame */}
                  <rect x="80" y="100" width="340" height="260" rx="20" fill="#1e293b" stroke="#334155" strokeWidth="4" />
                  
                  {/* Internal Screen */}
                  <rect x="100" y="120" width="300" height="220" rx="10" fill="url(#screenGrad)" />
                  
                  {/* Code Elements */}
                  <rect x="130" y="160" width="100" height="12" rx="6" fill="#f59e0b" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
                  </rect>
                  <rect x="130" y="190" width="200" height="12" rx="6" fill="#a855f7" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
                  </rect>
                  <rect x="130" y="220" width="150" height="12" rx="6" fill="#f59e0b" opacity="0.4" />
                  <rect x="130" y="250" width="180" height="12" rx="6" fill="#a855f7" opacity="0.3" />

                  {/* Glowing Dots */}
                  <circle cx="130" cy="135" r="5" fill="#ff5f56" />
                  <circle cx="150" cy="135" r="5" fill="#ffbd2e" />
                  <circle cx="170" cy="135" r="5" fill="#27c93f" />
                </g>
              </svg>
              <div className="cipher-glow"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}