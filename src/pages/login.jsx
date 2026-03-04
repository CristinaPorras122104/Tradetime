import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import logoMiddle from "../assets/logo.png";
import Navbar from "./Navbar";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="li-page">
      <Navbar />

      <main className="li-main">
        <img src={logoMiddle} alt="Logo" className="li-floating-logo" />

        <section className="li-card">
          <h1 className="li-title">Welcome back Neighbor</h1>
          <p className="li-subtitle">Ready to trade some skills today?</p>

          <form className="li-form" onSubmit={onSubmit}>
            <label className="li-label">Email</label>
            <input
              className="li-input"
              name="email"
              type="email"
              placeholder="eg.john123@gmail.com"
              value={form.email}
              onChange={onChange}
            />

            <label className="li-label">Password</label>
            <input
              className="li-input"
              name="password"
              type="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={onChange}
            />

            <div className="li-forgot">
              <span className="li-forgot-link">Forgot password?</span>
            </div>

            <button className="li-btn" type="submit">
              Log In
            </button>

            <div className="li-footer">
              Don’t have an account?{" "}
              <Link to="/signup" className="li-link">
                Sign up
              </Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
