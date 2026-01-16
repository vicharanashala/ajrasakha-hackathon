
import useBaseUrl from '@docusaurus/useBaseUrl';
export default function CipherThon() {
  return (
    <div className="cipher-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700;900&display=swap');

       

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .cipher-container {
          min-height: 100vh;
          background-color: var(--background);
          color: var(--foreground);
          font-family: var(--font-sans);
          overflow: hidden;
          position: relative;
        }

        /* Ambient Background Glows */
        .ambient-glow {
          position: absolute;
          width: 60vw;
          height: 60vw;
          border-radius: 50%;
          filter: blur(140px);
          z-index: 0;
          pointer-events: none;
          opacity: 0.4;
          animation: pulseGlow 10s ease-in-out infinite alternate;
        }
        .glow-1 { top: -20%; left: -10%; background: var(--primary); }
        .glow-2 { bottom: -10%; right: -10%; background: oklch(0.9 0.05 190); }

        @keyframes pulseGlow {
          from { transform: scale(1); opacity: 0.3; }
          to { transform: scale(1.15); opacity: 0.5; }
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background: 
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(ellipse at center, black, transparent 90%);
          z-index: 1;
          opacity: 0.4;
          pointer-events: none;
        }

        .cipher-main {
          position: relative;
          z-index: 10;
          padding: 80px 8%;
          max-width: 1440px;
          margin: 0 auto;
        }

        .cipher-content {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
          min-height: 70vh;
        }

        .cipher-byline {
          font-size: 0.85rem;
          color: var(--primary-foreground);
          text-transform: uppercase;
          letter-spacing: 0.4em;
          font-weight: 700;
          margin-bottom: 15px;
          display: inline-block;
          background: var(--primary);
          padding: 4px 12px;
          border-radius: 4px;
        }

        .cipher-main-heading {
          font-size: clamp(3rem, 7vw, 4.5rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -2px;
          color: var(--foreground);
          margin-bottom: 10px;
        }

        .cipher-sub-heading {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 900;
          color: var(--primary);
          margin-bottom: 24px;
          letter-spacing: -1px;
        }

        .cipher-description {
          font-size: 1.2rem;
          color: var(--muted-foreground);
          margin-bottom: 40px;
          max-width: 540px;
          line-height: 1.6;
        }

        .cipher-buttons {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .btn-register {
          padding: 16px 36px;
          background: var(--primary);
          color: var(--primary-foreground);
          border: none;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1.05rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 25px -5px oklch(0.83 0.13 160 / 0.4);
        }

        .btn-register:hover {
          transform: translateY(-3px);
          filter: brightness(0.95);
          box-shadow: 0 15px 30px -5px oklch(0.83 0.13 160 / 0.5);
        }

        .btn-problem {
          padding: 16px 36px;
          color: var(--foreground);
          background: var(--secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-problem:hover {
          background: var(--muted);
          border-color: var(--primary);
        }

        /* --- STYLED IMAGE SECTION --- */
        .cipher-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .cipher-illustration-container {
          position: relative;
          width: 100%;
          max-width: 520px;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: var(--radius);
          padding: 12px;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border);
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.1),
            inset 0 0 20px rgba(255, 255, 255, 0.5);
          overflow: hidden;
          z-index: 2;
          animation: floatHero 6s ease-in-out infinite;
        }

        .cipher-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: calc(var(--radius) - 8px);
          display: block;
          transition: transform 0.5s ease;
        }

        .image-frame:hover .cipher-image {
          transform: scale(1.05);
        }

        /* Decorative "Scanner" line effect */
        .image-frame::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
          animation: scannerLine 4s linear infinite;
          opacity: 0.5;
          z-index: 3;
        }

        @keyframes scannerLine {
          0% { top: 0%; }
          100% { top: 100%; }
        }

        .orbital {
          position: absolute;
          border: 1px solid var(--border);
          border-radius: 50%;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .orbit-1 { width: 115%; height: 115%; border-color: var(--primary); opacity: 0.3; animation: rotateCW 30s linear infinite; }
        .orbit-2 { width: 140%; height: 140%; border-style: dashed; opacity: 0.2; animation: rotateCCW 45s linear infinite; }

        @keyframes rotateCW { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
        @keyframes rotateCCW { from { transform: translate(-50%, -50%) rotate(360deg); } to { transform: translate(-50%, -50%) rotate(0deg); } }

        .floating-node {
          position: absolute;
          padding: 8px 16px;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 10px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--foreground);
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .floating-node::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary);
        }

        .node-1 { top: 5%; right: -2%; animation: floatNode 4s ease-in-out infinite; }
        .node-2 { bottom: 10%; left: -5%; animation: floatNode 4s ease-in-out infinite 1s; }

        @keyframes floatHero {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes floatNode {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @media (max-width: 1024px) {
          .cipher-content { grid-template-columns: 1fr; text-align: center; gap: 80px; }
          .cipher-description { margin: 0 auto 40px; }
          .cipher-buttons { justify-content: center; }
          .cipher-illustration-container { max-width: 400px; margin: 0 auto; }
        }
      `}</style>

      {/* Decorative Background */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
      <div className="grid-overlay"></div>

      <main className="cipher-main">
        <div className="cipher-content">
          <div className="cipher-left">
            <div className="cipher-logo-section">
              <span className="cipher-byline">AjraSakha hackathon</span>
            </div>

            <div className="cipher-heading-section">
              <h1 className="cipher-main-heading">Architecting the</h1>
              <h2 className="cipher-sub-heading">Future of Innovation</h2>
            </div>

            <p className="cipher-description">
              A 48-hour hands-on hackathon designed for builders who learn by doing. Work in teams to solve real agricultural challenges and create meaningful features that integrate with a live production system—empowering farmers and strengthening digital agricultural ecosystems.
            </p>

            <div className="cipher-buttons">
              <a href="https://luma.com/event/evt-iJBC4ZfX62dcyh1">
              <button className="btn-register">Register</button>
              </a>
            </div>
          </div>

          <div className="cipher-right">
            <div className="cipher-illustration-container">
              {/* Animated Background Orbits */}
              <div className="orbital orbit-1"></div>
              <div className="orbital orbit-2"></div>
              
              {/* Floating UI Badges */}
              <div className="floating-node node-1">SYSTEM: ACTIVE</div>
              <div className="floating-node node-2">ANNAM.AI</div>

              {/* Styled Image Frame */}
              <div className="image-frame">
                <img
                  // src="/img/Gemini_Generated_Image_mor86gmor86gmor8.png"
                  src={useBaseUrl('/img/Gemini_Generated_Image_mor86gmor86gmor8.png')}
                  alt="Innovation Illustration"
                  className="cipher-image"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
