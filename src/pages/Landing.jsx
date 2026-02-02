import React from "react";
import Navbar from "../components/Navbar";
import "../styles/landing.css";
import bgImage from "../assets/landing/backgroundimg1.jpeg";
import hero1 from "../assets/landing/hero1.jpeg";
import hero2 from "../assets/landing/hero2.jpeg";
import hero3 from "../assets/landing/hero3.jpeg";
import heroin1 from "../assets/landing/heroin1.jpeg";
import heroin2 from "../assets/landing/heroin2.jpeg";
import { useAuth } from "../context/AuthContext";


export default function Landing() {
  const { user } = useAuth();
  return (
     <div className="landing-wrapper">
      <Navbar />
      <section className="hero">
        <h1>WearWiser</h1>
        <h4>AI Fashion Stylist</h4>

        <div className="hero-buttons">
        <button className="btn-primary">Get Started</button>

        {!user && (
          <button className="btn-outline">Continue as Guest</button>
        )}
        </div>
      </section>

      <section className="images">
        <img src={hero2} alt="fashion" />
        <img src={hero1} alt="fashion" />
        <img src={heroin1} alt="fashion" />
        <img src={heroin2} alt="fashion" />
      </section>

      <footer>
        <p>Where Fashion Meets Intelligence</p>
        © 2026 WearWiser – AI Fashion Stylist
      </footer>
    </div>
  );
}
