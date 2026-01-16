import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";

export default function CipherNavbar() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme") || "light";
    setTheme(current);
  }, []);

  return (
    <>
      <nav className="navbar cipher-navbar">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700;900&display=swap');

          .cipher-navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 8%;
            position: sticky;
            top: 0;
            z-index: 1000;
            backdrop-filter: blur(16px);
            background: oklch(0.9911 0 0);
            border-bottom: 1px solid var(--glass-border);
            font-family: 'Outfit', sans-serif;
          }

          .cipher-logo-container {
            display: flex;
            align-items: center;
            text-decoration: none;
          }

          .navbar-logo-img {
            height: 42px;
          }

          .navbar-menu {
            display: flex;
            gap: 48px;
          }

          .nav-link {
            color: var(--text-muted);
            font-weight: 600;
            text-decoration: none;
          }

          .navbar-right {
            display: flex;
            align-items: center;
            gap: 14px;
          }

          .navbar-btn {
            padding: 10px 22px;
            border-radius: 10px;
            background: transparent;
            color: var(--brand-primary);
            border: 1px solid var(--brand-primary);
            font-weight: 700;
            cursor: pointer;
          }

          /* Hamburger */
          .hamburger {
            display: none;
            flex-direction: column;
            gap: 5px;
            cursor: pointer;
          }

          .hamburger span {
            width: 24px;
            height: 2px;
            background: var(--text-strong);
            border-radius: 2px;
          }

          /* Mobile Menu */
          .mobile-menu {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            border-top: 1px solid var(--glass-border);
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            transform: translateY(-120%);
            transition: transform 0.35s ease;
            z-index: 999;
          }

          .mobile-menu.open {
            transform: translateY(0);
          }

          .mobile-menu a {
          color: var(--text-strong);
  text-decoration: none;
  font-weight: 600;
  text-align: center;
          }
          .mobile-menu button {
            font-size: 1rem;
            text-align: center;
            
          }

          @media (max-width: 768px) {
            .navbar-menu,
            .navbar-right {
              display: none;
            }

            .hamburger {
              display: flex;
            }
          }
        `}</style>

        {/* Logo */}
        <Link to="/" className="cipher-logo-container">
          <img
            src="https://storage.googleapis.com/annam-temp-images/logo-icon.png"
            alt="AjraSakha"
            className="navbar-logo-img"
          />
        </Link>

        {/* Desktop Links */}
        <div className="navbar-menu">
          <Link to="/docs/intro" className="nav-link">About</Link>
          <Link to="/docs/category/problem-statements" className="nav-link">Problems</Link>
          <Link to="/docs/guidelines" className="nav-link">Guidelines</Link>
          <Link to="/docs/terms-and-condition" className="nav-link">Terms & conditions</Link>
        </div>

        {/* Desktop Right */}
        <div className="navbar-right">
          <a
            href="https://luma.com/event/evt-iJBC4ZfX62dcyh1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="navbar-btn">Register</button>
          </a>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/docs/intro" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/docs/category/problem-statements" onClick={() => setMenuOpen(false)}>Problems</Link>
        <Link to="/docs/guidelines" onClick={() => setMenuOpen(false)}>Guidelines</Link>
        <Link to="/docs/terms-and-condition" onClick={() => setMenuOpen(false)}>
          Terms & conditions
        </Link>

        <a
          href="https://luma.com/event/evt-iJBC4ZfX62dcyh1"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          <button className="navbar-btn">Register</button>
        </a>
      </div>
    </>
  );
}
