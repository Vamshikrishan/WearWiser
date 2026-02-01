import React from "react";
import "../styles/landing.css";
import logo from "../assets/landing/logo.jpeg";

import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="navbar">
      <img src={logo} alt="WearWiser Logo" className="logo" />

      <div className="nav-buttons">
        {!user ? (
          <>
            <button
              className="btn-outline"
              onClick={() => signInWithPopup(auth, googleProvider)}
            >
              Login
            </button>

            <button
              className="btn-primary"
              onClick={() => signInWithPopup(auth, googleProvider)}
            >
              Sign Up
            </button>
          </>
        ) : (
          <img
            src={user.photoURL}
            alt="profile"
            className="profile-pic"
            title={user.displayName}
            onClick={() => signOut(auth)}
          />
        )}
      </div>
    </nav>
  );
}
