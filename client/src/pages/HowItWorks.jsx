// src/pages/HowItWorks.jsx
import Navbar from "./Navbar";
import "./howitworks.css";

import heroLogo from "../assets/logo1.svg";
import help1 from "../assets/help1.svg";
import help2 from "../assets/help2.svg";
import help3 from "../assets/help3.svg";

export default function HowItWorks() {
  return (
    <div className="hiw-page">
      <Navbar />

      {/* HERO */}
      <section className="hiw-hero">
        <img className="hiw-hero-logo" src={heroLogo} alt="TradeTime" />

        <h1 className="hiw-hero-title">Trade your time, not your money.</h1>
        <p className="hiw-hero-subtitle">
          Every neighbor has a skill to share. Spend an hour helping someone
          today and bank an hour for when you need it most.
        </p>

        <div className="hiw-hero-actions">
          <button className="hiw-btn primary">Get Help</button>
          <button className="hiw-btn outline">Give Help</button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="hiw-section">
        <h2 className="hiw-section-title">How it Works</h2>

        <div className="hiw-step">
          <div className="hiw-img">
            <img src={help1} alt="Share a Skill" />
          </div>
          <div className="hiw-text right">
            <h3>Share a Skill</h3>
            <p>
              Tell the neighborhood what you’re good at. Your skills are the
              currency that helps you earn time.
            </p>
          </div>
        </div>

        <div className="hiw-step reverse">
          <div className="hiw-img">
            <img src={help2} alt="Help a Neighbor" />
          </div>
          <div className="hiw-text left">
            <h3>Help a Neighbor</h3>
            <p>
              Answer a call for help nearby. Complete the task to automatically
              bank hours in your digital wallet.
            </p>
          </div>
        </div>

        <div className="hiw-step">
          <div className="hiw-img">
            <img src={help3} alt="Get Help Back" />
          </div>
          <div className="hiw-text right">
            <h3>Get Help Back</h3>
            <p>
              Use your banked hours to get help with your own projects. From
              home repairs to tutoring, the community has you covered.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hiw-cta">
        <h2>Ready to have your first hour?</h2>
        <button className="hiw-btn primary small">Join Now</button>
      </section>

      {/* FOOTER */}
      <footer className="hiw-footer">
        <div className="hiw-footer-brand">
          <img src={heroLogo} alt="TradeTime" />
        </div>

        <div className="hiw-footer-links">
          <span>About us</span>
          <span>How it works</span>
          <span>Safety</span>
          <span>FAQ</span>
        </div>

        <div className="hiw-footer-icons">
          <span className="hiw-dot" />
          <span className="hiw-dot" />
          <span className="hiw-dot" />
        </div>
      </footer>
    </div>
  );
}