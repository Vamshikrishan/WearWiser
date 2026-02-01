import React from "react";
import "../styles/landing.css";
import logo from "../assets/landing/backgroundimg.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="WearWiser Logo" className="logo" />

      <div className="nav-buttons">
        <button className="btn-outline">Login</button>
        <button className="btn-primary">Sign Up</button>
      </div>
    </nav>
  );
}
