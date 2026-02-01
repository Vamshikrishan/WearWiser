import React from "react";
import Navbar from "../components/Navbar";
import "../styles/landing.css";
import bgImage from "../assets/landing/backgroundimg.png";


export default function Landing() {
  return (
     <div className="landing-wrapper">
      <Navbar />
      <section className="hero">
        <h1>WearWiser</h1>
        <h4>AI Fashion Stylist</h4>

        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-outline">Continue as Guest</button>
        </div>
      </section>

      <section className="images">
        <img src="/hero1.jpg" alt="fashion" />
        <img src="/hero2.jpg" alt="fashion" />
        <img src="/hero3.jpg" alt="fashion" />
      </section>

      <footer>
        © 2026 WearWiser – AI Fashion Stylist
      </footer>
    </div>
  );
}
