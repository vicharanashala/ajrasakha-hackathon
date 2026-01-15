
// export default function Footer() {
//   return (
//     <footer className="cipher-footer">
//       <style>{`
//         .cipher-footer {
//           width: 100%;
//           padding: 40px 8%;
//           background: rgba(5, 5, 5, 0.8);
//           backdrop-filter: blur(12px);
//           border-top: 1px solid rgba(255, 255, 255, 0.08);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 20px;
//           position: relative;
//           z-index: 10;
//         }

//         .footer-contact {
//           display: flex;
//           justify-content: center;
//           gap: 40px;
//           flex-wrap: wrap;
//         }

//         .contact-item {
//           color: #94a3b8;
//           font-size: 0.9rem;
//           font-weight: 500;
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           transition: color 0.3s ease;
//         }

//         .contact-item:hover {
//           color: #ffffff;
//         }

//         .contact-icon {
//           color: #f59e0b;
//           font-size: 1.1rem;
//         }

//         .footer-divider {
//           width: 50px;
//           height: 1px;
//           background: rgba(255, 255, 255, 0.1);
//         }

//         .footer-credits {
//           font-size: 0.85rem;
//           color: rgba(148, 163, 184, 0.6);
//           text-align: center;
//           letter-spacing: 0.05em;
//         }

//         .credits-brand {
//           color: #f59e0b;
//           font-weight: 800;
//           text-shadow: 0 0 10px rgba(245, 158, 11, 0.3);
//         }

//         @media (max-width: 640px) {
//           .footer-contact {
//             flex-direction: column;
//             gap: 12px;
//             align-items: center;
//           }
          
//           .cipher-footer {
//             padding: 30px 20px;
//           }
//         }
//       `}</style>

//       <div className="footer-contact">
//         <div className="contact-item">
//           <span className="contact-icon">📞</span>
//           <span>+91 00000 00000</span>
//         </div>
//         <div className="contact-item">
//           <span className="contact-icon">📞</span>
//           <span>+91 00000 00000</span>
//         </div>
//       </div>

//       <div className="footer-divider"></div>

//       <div className="footer-credits">
//         © 2026 all credits reserved. <span className="credits-brand">Annam.Ai</span>
//       </div>
//     </footer>
//   );
// }


import React from 'react';

/**
 * Footer Component - Mint & White Edition
 * 1. Background: Translucent White with Backdrop Blur
 * 2. Primary Accent: Mint Green oklch(0.8348 0.1302 160.908)
 * 3. Typography: Outfit Sans-Serif
 * 4. Credits: Annam.Ai
 */
export default function Footer() {
  return (
    <footer className="cipher-footer">
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

        .cipher-footer {
          width: 100%;
          padding: 60px 8% 40px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          position: relative;
          z-index: 10;
          font-family: var(--font-sans);
        }

        .footer-contact {
          display: flex;
          justify-content: center;
          gap: 48px;
          flex-wrap: wrap;
        }

        .contact-item {
          color: var(--muted-foreground);
          font-size: 0.95rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .contact-item:hover {
          color: var(--foreground);
          transform: translateY(-2px);
        }

        .contact-icon {
          color: var(--primary);
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: oklch(0.96 0.01 160);
          border-radius: 50%;
          border: 1px solid var(--border);
        }

        .footer-divider {
          width: 60px;
          height: 2px;
          background: var(--primary);
          opacity: 0.3;
          border-radius: 2px;
        }

        .footer-credits {
          font-size: 0.9rem;
          color: var(--muted-foreground);
          text-align: center;
          letter-spacing: 0.02em;
          font-weight: 500;
        }

        .credits-brand {
          color: var(--primary);
          font-weight: 800;
          text-shadow: 0 0 15px oklch(0.83 0.13 160 / 0.2);
        }

        @media (max-width: 768px) {
          .footer-contact {
            flex-direction: column;
            gap: 16px;
            align-items: center;
          }
          
          .cipher-footer {
            padding: 40px 24px;
          }
          
          .contact-item {
            font-size: 0.9rem;
          }
        }
      `}</style>

      {/* Contact Section */}
      <div className="footer-contact">
        <a href="tel:+910000000000" className="contact-item">
          <span className="contact-icon">📞</span>
          <span>+91 98765 43210</span>
        </a>
        <a href="tel:+910000000000" className="contact-item">
          <span className="contact-icon">📞</span>
          <span>+91 87654 32109</span>
        </a>
      </div>

      <div className="footer-divider"></div>

      {/* Brand Credits */}
      <div className="footer-credits">
        © 2026 all credits reserved. <span className="credits-brand">Annam.Ai</span>
      </div>
    </footer>
  );
}