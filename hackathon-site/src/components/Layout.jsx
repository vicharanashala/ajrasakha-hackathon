import Footer from "./Footer";
import CipherNavbar from "./Shared/Navbar";

export default function CipherLayout({ children }) {
  return (
    <div className="cipher-container">
      <CipherNavbar />
      {children}
      <Footer/>
    </div>
  );
}
