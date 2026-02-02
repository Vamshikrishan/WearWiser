import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/profile.css";

export default function UserProfile() {
  const { user } = useAuth();

  // form state
  const [formData, setFormData] = useState({
    nickname: "",
    ageGroup: "",
    gender: "",
    height: "",
    bodyType: "",
    topSize: "",
    bottomSize: "",
    shoeSize: "",
    occupation: "",
    occasion: ""
  });

  if (!user) {
    return (
      <div className="profile-guard">
        Please login to access this page.
      </div>
    );
  }

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="profile-page">
      {/* HEADER */}
      <div className="profile-header">
        <img src={user.photoURL} alt="profile" />
        <div>
          <h2>{user.displayName}</h2>
          <p>{user.email}</p>
        </div>
      </div>

      {/* FORM */}
      <div className="profile-form">

        <h3>Basic Information</h3>

        <input
          type="text"
          name="nickname"
          placeholder="Profile Nickname"
          value={formData.nickname}
          onChange={handleChange}
        />

        <select name="ageGroup" value={formData.ageGroup} onChange={handleChange}>
          <option value="">Age Group</option>
          <option value="teen">Teen</option>
          <option value="adult">Adult</option>
          <option value="senior">Senior</option>
        </select>

        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <h3>Body Information</h3>

        <input
          type="number"
          name="height"
          placeholder="Height (cm)"
          value={formData.height}
          onChange={handleChange}
        />

        <select name="bodyType" value={formData.bodyType} onChange={handleChange}>
          <option value="">Body Type</option>
          <option value="slim">Slim</option>
          <option value="athletic">Athletic</option>
          <option value="average">Average</option>
          <option value="heavy">Heavy</option>
        </select>

        <h3>Clothing Sizes</h3>

        <select name="topSize" value={formData.topSize} onChange={handleChange}>
          <option value="">Top Size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>

        <input
          type="text"
          name="bottomSize"
          placeholder="Bottom Size (e.g. 32)"
          value={formData.bottomSize}
          onChange={handleChange}
        />

        <input
          type="number"
          name="shoeSize"
          placeholder="Shoe Size"
          value={formData.shoeSize}
          onChange={handleChange}
        />

        <h3>Lifestyle</h3>

        <input
          type="text"
          name="occupation"
          placeholder="Occupation"
          value={formData.occupation}
          onChange={handleChange}
        />

        <select name="occasion" value={formData.occasion} onChange={handleChange}>
          <option value="">Occasion</option>
          <option value="casual">Casual</option>
          <option value="office">Office</option>
          <option value="party">Party</option>
          <option value="traditional">Traditional</option>
          <option value="gym">Gym</option>
        </select>

        <button className="generate-btn">
          Generate Outfit
        </button>

      </div>
    </div>
  );
}
