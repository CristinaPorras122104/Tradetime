import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./gethelp.css";
import { FiSearch } from "react-icons/fi";

export default function GetHelp() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/get-help/results");
  };

  return (
    <div>
      <Navbar />

      <div className="help-center">
        <div className="help-card">
          <h2>What do you need help with, Brian?</h2>

          <form className="help-search-row" onSubmit={handleSubmit}>
            <div className="help-search-box">
              <FiSearch className="help-search-icon" />
              <input
                type="text"
                placeholder="Plumbing, Tech ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <button type="submit" className="help-btn">
              Post a Need
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}