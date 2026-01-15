export default function Footer() {
  return (
    <footer className="cipher-footer">
      <style>{`
        .cipher-footer {
          width: 100%;
          padding: 36px 8% 24px;
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid var(--glass-border);
          box-shadow: var(--shadow-soft);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          font-family: 'Outfit', sans-serif;
        }

        /* Contact Row */
        .footer-contact {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .contact-item {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .contact-item:hover {
          color: var(--text-strong);
          transform: translateY(-2px);
        }

        .contact-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface-2);
          border: 1px solid var(--border-subtle);
          color: var(--brand-primary);
          font-size: 1.1rem;
        }

        /* Divider */
        .footer-divider {
          width: 48px;
          height: 2px;
          background: var(--brand-primary);
          opacity: 0.3;
          border-radius: 2px;
        }

        /* Credits */
        .footer-credits {
          font-size: 0.85rem;
          color: var(--text-muted);
          text-align: center;
          letter-spacing: 0.02em;
          font-weight: 500;
        }

        .credits-brand {
          color: var(--brand-primary);
          font-weight: 800;
          text-shadow: 0 0 15px color-mix(in oklab, var(--brand-primary) 40%, transparent);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .footer-contact {
            flex-direction: column;
            gap: 14px;
            align-items: center;
          }

          .cipher-footer {
            padding: 28px 20px 20px;
          }
        }
      `}</style>

      {/* Contact */}
      {/* <div className="footer-contact">
        <a href="tel:+919876543210" className="contact-item">
          <span className="contact-icon">📞</span>
          <span>+91 98765 43210</span>
        </a>
        <a href="tel:+918765432109" className="contact-item">
          <span className="contact-icon">📞</span>
          <span>+91 87654 32109</span>
        </a>
      </div> */}

      {/* <div className="footer-divider" /> */}

      {/* Credits */}
      <div className="footer-credits">
        © 2026 All rights reserved.{" "}
        <span className="credits-brand">Annam.Ai</span>
      </div>
    </footer>
  );
}
