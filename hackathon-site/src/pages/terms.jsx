import React from 'react';
import CipherLayout from '../components/Layout';

/**
 * Terms Component
 * A standalone page for CipherThon 2.0 Legal Terms and Conditions.
 */
export default function Terms() {
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
          position: fixed; width: 40vw; height: 40vw; border-radius: 50%;
          filter: blur(150px); z-index: 0; pointer-events: none; opacity: 0.12;
          bottom: -10%; right: -5%; background: var(--accent-orange);
        }

        .content { position: relative; z-index: 10; max-width: 900px; margin: 0 auto; }
        .header { text-align: center; margin-bottom: 60px; }
        .title { font-size: 3rem; font-weight: 800; }
        .highlight { color: var(--accent-orange); }

        .legal-card {
          background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 32px;
          padding: 50px; backdrop-filter: blur(20px);
        }
        .terms-section { margin-bottom: 40px; }
        .terms-section:last-child { margin-bottom: 0; }
        .terms-section h3 { color: var(--accent-orange); margin-bottom: 15px; font-size: 1.5rem; font-weight: 700; }
        .terms-section p { color: var(--text-dim); line-height: 1.8; font-size: 1.05rem; }
      `}</style>

      <div className="ambient-glow"></div>

      <div className="content">
        <header className="header">
          <h1 className="title">Terms & <span className="highlight">Conditions</span></h1>
        </header>

        <div className="legal-card">
          <section className="terms-section">
            <h3>1. Agreement</h3>
            <p>Participation in CipherThon 2.0 constitutes full and unconditional agreement to these Terms and Conditions and the Sponsor’s decisions, which are final and binding in all matters related to the hackathon.</p>
          </section>
          
          <section className="terms-section">
            <h3>2. Eligibility</h3>
            <p>Participants must be at least 18 years of age or have parental consent. The event is open to residents of India. Proof of identity may be requested at any stage of the competition.</p>
          </section>

          <section className="terms-section">
            <h3>3. Code of Conduct</h3>
            <p>We are dedicated to providing a harassment-free experience for everyone. We do not tolerate harassment of participants in any form. Plagiarism of any kind will lead to immediate disqualification.</p>
          </section>

          <section className="terms-section">
            <h3>4. Prizes</h3>
            <p>Prizes are non-transferable and no substitution will be made except as provided herein at the Sponsor’s sole discretion. All federal, state, and local taxes are the sole responsibility of the winners.</p>
          </section>
        </div>
      </div>
    </div>
    </CipherLayout>
  );
}