import React, { useState, useRef, useEffect } from "react";
import "../styles/landing.css";
import logo from "../assets/landing/logo2.png";

import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="navbar">
      <img src={logo} alt="WearWiser Logo" className="logo" />

      <div className="nav-buttons" ref={dropdownRef}>
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
          <div className="profile-wrapper">
            <img
              src={user.photoURL}
              alt="profile"
              className="profile-pic"
              onClick={() => setOpen(!open)}
            />

            {open && (
              <div className="dropdown">
                <p className="user-name">{user.displayName}</p>
                <button
                  className="logout-btn"
                  onClick={() => signOut(auth)}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
