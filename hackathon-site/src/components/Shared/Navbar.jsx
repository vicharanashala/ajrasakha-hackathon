
import React, { useEffect, useState } from "react";
import Link from '@docusaurus/Link';
export default function CipherNavbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme") || "light";
    setTheme(current);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = theme === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
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
          -webkit-backdrop-filter: blur(16px);
          background: var(--glass-bg);
          border-bottom: 1px solid var(--glass-border);
          font-family: 'Outfit', sans-serif;
        }

        /* Logo */
        .cipher-logo-container {
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: transform 0.25s ease;
        }

        .cipher-logo-container:hover {
          transform: scale(1.05);
        }

        .navbar-logo-img {
          height: 42px;
          object-fit: contain;
        }

        /* Menu */
        .navbar-menu {
          display: flex;
          gap: 48px;
        }

        .nav-link {
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          position: relative;
          padding: 6px 0;
          transition: color 0.25s ease;
        }

        .nav-link:hover {
          color: var(--text-strong);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 0;
          background: var(--brand-primary);
          transition: width 0.25s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* Right Side */
        .navbar-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        /* CTA Button */
        .navbar-btn {
          padding: 10px 22px;
          border-radius: 10px;
          background: transparent;
          color: var(--brand-primary);
          border: 1px solid var(--brand-primary);
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .navbar-btn:hover {
          background: var(--brand-primary);
          color: var(--text-inverse);
          box-shadow: 0 0 20px color-mix(in oklab, var(--brand-primary) 40%, transparent);
        }

        /* Theme Toggle */
        .theme-toggle {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: 1px solid var(--border-subtle);
          background: var(--surface-2);
          color: var(--text-strong);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }

        .theme-toggle:hover {
          background: var(--surface-3);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .navbar-menu {
            display: none;
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

      {/* Links */}
      <div className="navbar-menu">
        <Link to="/docs/intro" className="nav-link">About</Link>
        <Link href="/docs/category/problem-statements" className="nav-link">Problems</Link>
        <Link href="/docs/guidelines" className="nav-link">Guidelines</Link>
        <Link href="/docs/terms-and-condition" className="nav-link">Terms & conditions</Link>
      </div>

      {/* Right */}
      <div className="navbar-right">
        {/* <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button> */}

        <a href="https://luma.com/event/evt-iJBC4ZfX62dcyh1">
          <button className="navbar-btn">Get Started</button>
        </a>
        {/* <a
  href="https://luma.com/event/evt-iJBC4ZfX62dcyh1"
  class="luma-checkout--button"
  data-luma-action="checkout"
  data-luma-event-id="evt-iJBC4ZfX62dcyh1"
>
  Register
    
</a> */}

<script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js"></script>
      </div>
    </nav>
  );
}
