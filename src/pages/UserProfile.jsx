import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/profile.css";
import Navbar from "../components/Navbar";


export default function UserProfile() {
  const { user } = useAuth();

  /* =======================
     PERSONAL INFORMATION
     (Saved + Auto-filled)
  ======================= */
  const [personalInfo, setPersonalInfo] = useState({
    nickname: "",
    gender: "",
    ageGroup: "",
    heightCm: "",
    bodyType: "",
    image: null,
    imagePreview: null
  });

  /* =======================
     STYLE PREFERENCES
     (Not saved)
  ======================= */
  const [stylePreferences, setStylePreferences] = useState({
    preferredStyle: "",
    occasion: "",
    accessories: "",
    Shoe: "",
    description: ""
  });

  if (!user) {
    return <div className="profile-guard">Please login</div>;
  }

  /* ===== Handlers ===== */

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStyleChange = (e) => {
    const { name, value } = e.target;
    setStylePreferences(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPersonalInfo(prev => ({
      ...prev,
      image: file,
      imagePreview: URL.createObjectURL(file)
    }));
  };

  return (
    <>
    <Navbar />
  <div className="profile-container">

    {/* PAGE TITLE */}
    <h1 className="brand-title">WearWiser</h1>
    <h2 className="profile-title">Discover Your Perfect Style</h2>

    <p className="profile-subtitle">
      Tell WearWiser about you to get personalized outfits.
    </p>

    {/* USER HEADER */}
    {/* TWO CARD LAYOUT */}
    <div className="profile-cards">

      {/* =======================
          PERSONAL INFORMATION
          (Saved + Auto-filled)
      ======================= */}
      <div className="profile-form glass">
        <h3>Personal Information</h3>

        <input
          type="text"
          name="nickname"
          placeholder="Nick Name"
          value={personalInfo.nickname}
          onChange={handlePersonalChange}
          required
        />

        <select
          name="gender"
          value={personalInfo.gender}
          onChange={handlePersonalChange}
          required
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>

        {/* IMAGE UPLOAD */}
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg, image/webp"
          onChange={handleImageUpload}
          required
        />

        {personalInfo.imagePreview && (
          <img
            src={personalInfo.imagePreview}
            alt="preview"
            className="image-preview"
          />
        )}

        <select
          name="ageGroup"
          value={personalInfo.ageGroup}
          onChange={handlePersonalChange}
          required
        >
          <option value="">Age Group</option>
          <option value="teen">Teen (13–19)</option>
          <option value="young-adult">Young Adult (20–29)</option>
          <option value="adult">Adult (30–49)</option>
          <option value="senior">Senior (50+)</option>
        </select>

        <input
          type="number"
          name="heightCm"
          placeholder="Height (cm)"
          value={personalInfo.heightCm}
          onChange={handlePersonalChange}
          required
        />

        <select
          name="bodyType"
          value={personalInfo.bodyType}
          onChange={handlePersonalChange}
          required
        >
          <option value="">Body Type</option>
          <option value="slim">Slim / Lean</option>
          <option value="fit">Fit / Muscular</option>
          <option value="medium">Medium Build</option>
          <option value="broad">Broad / Heavy Build</option>
        </select>
      </div>

      {/* =======================
          STYLE PREFERENCES
          (Not Saved)
      ======================= */}
      <div className="profile-form glass">
        <h3>Style Preferences</h3>

        <select
          name="preferredStyle"
          value={stylePreferences.preferredStyle}
          onChange={handleStyleChange}
          required
        >
          <option value="">Preferred Style</option>
          <option value="casual">Casual Wear</option>
          <option value="formal">Formal</option>
          <option value="streetwear">Streetwear</option>
          <option value="smart-casual">Smart Casual</option>
          <option value="minimal">Minimal / Classic</option>
          <option value="luxury">Luxury</option>
          <option value="sporty">Sporty</option>
          <option value="traditional">Traditional</option>
          <option value="trendy">Trendy</option>
        </select>

        <select
          name="occasion"
          value={stylePreferences.occasion}
          onChange={handleStyleChange}
          required
        >
          <option value="">Occasion</option>
          <option value="daily">Daily Wear</option>
          <option value="office">Office</option>
          <option value="party">Party Wear</option>
          <option value="wedding">Wedding Style</option>
          <option value="festive">Festive</option>
          <option value="travel">Travel</option>
          <option value="date">Date Night</option>
          <option value="college">College</option>
          <option value="gym">Gym / Sports</option>
        </select>

        <select
          name="accessories"
          value={stylePreferences.accessories}
          onChange={handleStyleChange}
          required
        >
          <option value="">Add Accessories?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <select
          name="Shoe"
          value={stylePreferences.Shoe}
          onChange={handleStyleChange}
          required
        >
          <option value="">Shoe?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <textarea
          name="description"
          placeholder="Describe your style, colors you like, preferences..."
          value={stylePreferences.description}
          onChange={handleStyleChange}
          required
        />
      </div>

    </div>
    {/* GENERATE BUTTON */}
    <button className="generate-btn center-btn">
      Generate Outfit
    </button>
  </div>
   </>
);
}
