import { Link } from "react-router-dom";
import "./Navbar.css";
import logoIcon from "../assets/logo1.svg";  
import logoText from "../assets/logo2.svg";  
import { FiSearch } from "react-icons/fi";
export default function Navbar() {
  return (
    <div className="nav-wrapper">
      <div className="nav-container">

        {/* LEFT LOGO (ICON + TEXT) */}
        <div className="nav-left">
          <img src={logoIcon} alt="Logo Icon" className="nav-logo-icon" />
          <img src={logoText} alt="TradeTime" className="nav-logo-text" />
        </div>

        {/* SEARCH */}
       <div className="nav-search">
  <div className="search-box">
    <FiSearch className="search-icon" />
    <input type="text" placeholder="Search..." />
  </div>
</div>

        {/* RIGHT LINKS */}
        <div className="nav-right">
          <Link to="/how-it-works" className="nav-link">How It Works</Link>
          <Link to="/explore" className="nav-link">Explore Skills</Link>
          <Link to="/signup" className="nav-link">Join for free</Link>
          <Link to="/login" className="nav-btn">Log In</Link>
        </div>

      </div>
    </div>
  );
}