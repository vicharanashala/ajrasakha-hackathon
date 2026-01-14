import Link from "@docusaurus/Link";

export default function CipherNavbar() {
  return (
    <nav className="cipher-navbar">
      <div className="cipher-logo">
        <Link to="/" className="cipher-logo">
          <span className="logo-cipher">Ajra</span>
          <span className="logo-thon">Sakha</span>
        </Link>
      </div>

      <div className="navbar-menu">
        <Link to="/problems" className="nav-link">Problems</Link>
        <Link to="/terms" className="nav-link">Terms & Conditions</Link>
        <Link to="/guidelines" className="nav-link">Guidelines</Link>
      </div>

      <a href=""><button className="navbar-btn">Get Started</button></a>
    </nav>
  );
}
