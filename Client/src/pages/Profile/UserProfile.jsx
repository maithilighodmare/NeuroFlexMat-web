import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

export default function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser && storedUser !== "undefined") {
        setUser(JSON.parse(storedUser));
      }
    } catch (err) {
      console.error("Failed to parse user from localStorage", err);
    }
  }, []);

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="user-profile-center">
          <p>No user logged in</p>
        </div>
      </>
    );
  }

  const initials = user.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <>
      <Navbar />
      <div className="profile-page">
        <div className="profile-card">
          {/* Left Section */}
          <div className="profile-left">
            <div className="profile-initials">{initials}</div>
            <h2>{user.name}</h2>
            <p className="user-role">{user.role || "User"}</p>
            <p className="user-email">{user.email}</p>

          </div>

          {/* Right Section */}
          <div className="profile-right">
            <div className="info-group">
              <label>Username</label>
              <input type="text" value={user.name} readOnly />
            </div>
            <div className="info-group">
              <label>Email</label>
              <input type="email" value={user.email} readOnly />
            </div>
            <div className="info-group">
              <label>Role</label>
              <input type="text" value={user.role || "User"} readOnly />
            </div>
            <div className="info-group">
              <label>Age</label>
              <input type="number" value={user.age || "N/A"} readOnly />
            </div>
            <Link to="/patientdashboard">
              <button className="save-btn">Go to Dashboard</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}