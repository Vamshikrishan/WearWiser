import React from "react";
import Navbar from "../components/Navbar";
import "../styles/landing.css";

export default function Landing() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>AI Fashion Stylist</h1>
        <p>
          Discover outfits that perfectly match your body type, lifestyle,
          and personality.
        </p>

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
    </>
  );
}
