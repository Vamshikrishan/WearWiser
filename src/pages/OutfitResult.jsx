import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/profile.css";

export default function OutfitResult() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.outfit) {
    return <div>No outfit data found</div>;
  }

  const { outfit } = state;

  return (
    <div className="profile-container">
      <Navbar />

      <h1 className="brand-title">Your Outfit Recommendation</h1>

      <div className="profile-form glass">
        <p><strong>Top:</strong> {outfit.top}</p>
        <p><strong>Bottom:</strong> {outfit.bottom}</p>
        <p><strong>Shoes:</strong> {outfit.shoes}</p>
        <p><strong>Colors:</strong> {outfit.colors.join(", ")}</p>

        <p><strong>Accessories:</strong></p>
        <ul>
          {outfit.accessories.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <a href={outfit.links.shirt} target="_blank">Buy Shirt</a><br />
        <a href={outfit.links.trousers} target="_blank">Buy Trousers</a><br />
        <a href={outfit.links.shoes} target="_blank">Buy Shoes</a>

        <button className="generate-btn" onClick={() => navigate(-1)}>
          Generate Again
        </button>
      </div>
    </div>
  );
}
