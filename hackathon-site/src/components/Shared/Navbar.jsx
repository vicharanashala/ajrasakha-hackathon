import React from 'react';

/**
 * CipherNavbar Component - Mint & White Edition
 * 1. Logo: Replaced text with the provided image URL
 * 2. Background: Translucent White with Backdrop Filter
 * 3. Primary Accent: Mint Green oklch(0.8348 0.1302 160.908)
 * 4. Typography: Outfit Sans-Serif
 */
export default function App() {
  return (
    <nav className="cipher-navbar">
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
          --radius: 0.75rem;
        }

        .cipher-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 8%;
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          font-family: var(--font-sans);
          transition: all 0.3s ease;
        }

        /* Logo Styling */
        .cipher-logo-container {
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .cipher-logo-container:hover {
          transform: scale(1.05);
        }

        .navbar-logo-img {
          height: 45px;
          width: auto;
          display: block;
          object-fit: contain;
        }

        /* Menu / Links Styling */
        .navbar-menu {
          display: flex;
          align-items: center;
          gap: 48px; /* High-end architectural spacing */
        }

        .nav-link {
          color: var(--muted-foreground);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          position: relative;
          padding: 8px 0;
          cursor: pointer;
        }

        /* Elegant Hover Underline */
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: var(--primary);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-50%);
        }

        .nav-link:hover {
          color: var(--foreground);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* Action Button Styling */
        .navbar-btn {
          padding: 12px 28px;
          border: 1px solid var(--primary);
          background: transparent;
          color: var(--primary);
          border-radius: var(--radius);
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: inherit;
        }

        .navbar-btn:hover {
          background-color: var(--primary);
          color: var(--primary-foreground);
          box-shadow: 0 10px 25px oklch(0.83 0.13 160 / 0.3);
          transform: translateY(-2px);
        }

        /* Responsive Adjustments */
        @media (max-width: 1024px) {
          .cipher-navbar {
            padding: 12px 5%;
          }
          .navbar-menu {
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .navbar-menu {
            display: none;
          }
          .navbar-logo-img {
            height: 38px;
          }
        }
      `}</style>

      {/* Brand Logo with Image */}
      <div className="cipher-logo">
        <a href="/" className="cipher-logo-container">
          <img 
            src="https://storage.googleapis.com/annam-temp-images/logo-icon.png" 
            alt="AjraSakha Logo" 
            className="navbar-logo-img"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          {/* Fallback text if image fails */}
          <span style={{ display: 'none' }} className="logo-cipher">
            Ajra<span style={{ color: 'var(--primary)' }}>Sakha</span>
          </span>
        </a>
      </div>

      {/* Navigation Links */}
      <div className="navbar-menu">
        <a href="/problems" className="nav-link">Problems</a>
        <a href="/terms" className="nav-link">Terms & Conditions</a>
        <a href="/guidelines" className="nav-link">Guidelines</a>
      </div>

      {/* Call to Action */}
      <div className="navbar-actions">
        <a href="/register" style={{ textDecoration: 'none' }}>
          <button className="navbar-btn">Get Started</button>
        </a>
      </div>
    </nav>
  );
}