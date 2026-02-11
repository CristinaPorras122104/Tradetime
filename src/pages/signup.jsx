import { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import logoMiddle from "../assets/logo.png";

export default function Signup() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="su-page">
      <Navbar />

      <main className="su-main">
        <img src={logoMiddle} alt="Center Logo" className="su-floating-logo" />

        <section className="su-card">
          <h1 className="su-title">
            Join our local <br /> TimeBank
          </h1>

          <p className="su-subtitle">
            Trade skills, and build a community
          </p>

          <form className="su-form" onSubmit={onSubmit}>
            <label className="su-label">Email</label>
            <input
              className="su-input"
              name="email"
              placeholder="eg.john123@gmail.com"
              value={form.email}
              onChange={onChange}
            />

            <label className="su-label">Password</label>
            <input
              className="su-input"
              name="password"
              type="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={onChange}
            />
            <div className="su-hint">
              Must be at least 8 characters*
            </div>

            <div className="su-row">
              <div className="su-col">
                <label className="su-label">First Name</label>
                <input
                  className="su-input"
                  name="firstName"
                  placeholder="John"
                  value={form.firstName}
                  onChange={onChange}
                />
              </div>

              <div className="su-col">
                <label className="su-label">Last Name</label>
                <input
                  className="su-input"
                  name="lastName"
                  placeholder="Smith"
                  value={form.lastName}
                  onChange={onChange}
                />
              </div>
            </div>

            <button className="su-btn" type="submit">
              Create Account
            </button>

            <div className="su-footer">
              Already have an account?{" "}
              <Link to="/login" className="su-link">
                Log In
              </Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
