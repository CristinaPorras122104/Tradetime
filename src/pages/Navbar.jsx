import { Link } from "react-router-dom";
import "./Navbar.css";
import logoTop from "../assets/logo2.png";

export default function Navbar() {
  return (
    <header className="nav-bar">
      <div className="nav-left">
        <img src={logoTop} alt="TradeTime" className="nav-logo" />
      </div>

      <div className="nav-search">
        <span className="nav-search-icon">🔍</span>
        <input type="text" />
      </div>

      <div className="nav-links">
    <Link to="/how-it-works" className="nav-link">How It Works</Link>
        <span className="nav-link">Explore Skills</span>
      </div>

      <div className="nav-actions">
        <Link to="/signup" className="nav-join">Join for free</Link>
        <Link to="/login" className="nav-login">Log In</Link>
      </div>
    </header>
  );
}
