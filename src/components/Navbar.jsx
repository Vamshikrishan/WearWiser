import React from "react";
import "../styles/landing.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">WearWiser</h2>

      <div className="nav-buttons">
        <button className="btn-outline">Login</button>
        <button className="btn-primary">Sign Up</button>
      </div>
    </nav>
  );
}
