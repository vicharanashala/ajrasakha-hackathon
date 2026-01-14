import React from 'react';

/**
 * Footer Component
 * A standalone, premium footer for CipherThon 2.0.
 * Features: Glassmorphism background, neon highlights, and responsive layout.
 */
export default function Footer() {
  return (
    <footer className="cipher-footer">
      <style>{`
        .cipher-footer {
          width: 100%;
          padding: 40px 8%;
          background: rgba(5, 5, 5, 0.8);
          backdrop-filter: blur(12px);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          position: relative;
          z-index: 10;
        }

        .footer-contact {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .contact-item {
          color: #94a3b8;
          font-size: 0.9rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: color 0.3s ease;
        }

        .contact-item:hover {
          color: #ffffff;
        }

        .contact-icon {
          color: #f59e0b;
          font-size: 1.1rem;
        }

        .footer-divider {
          width: 50px;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
        }

        .footer-credits {
          font-size: 0.85rem;
          color: rgba(148, 163, 184, 0.6);
          text-align: center;
          letter-spacing: 0.05em;
        }

        .credits-brand {
          color: #f59e0b;
          font-weight: 800;
          text-shadow: 0 0 10px rgba(245, 158, 11, 0.3);
        }

        @media (max-width: 640px) {
          .footer-contact {
            flex-direction: column;
            gap: 12px;
            align-items: center;
          }
          
          .cipher-footer {
            padding: 30px 20px;
          }
        }
      `}</style>

      <div className="footer-contact">
        <div className="contact-item">
          <span className="contact-icon">📞</span>
          <span>+91 00000 00000</span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">📞</span>
          <span>+91 00000 00000</span>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-credits">
        © 2026 all credits reserved. <span className="credits-brand">Annam.Ai</span>
      </div>
    </footer>
  );
}