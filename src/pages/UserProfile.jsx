import React from "react";
import { useAuth } from "../context/AuthContext";

export default function UserProfile() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div style={{ color: "white", textAlign: "center", marginTop: "100px" }}>
        Please login to access this page.
      </div>
    );
  }

  return (
    <div style={{ color: "white", padding: "40px" }}>
      <h2>User Profile</h2>

      <img
        src={user.photoURL}
        alt="profile"
        style={{ width: "80px", borderRadius: "50%" }}
      />

      <p><strong>Name:</strong> {user.displayName}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}
