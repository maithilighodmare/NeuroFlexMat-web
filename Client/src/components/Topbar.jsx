import React, { useState, useEffect } from "react";
import { FaCog, FaSignOutAlt, FaComments, FaSun, FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./TopBar.css";

const TopBar = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleSupportClick = () => {
    // Scroll to contact section (if exists)
    window.location.href = "/#contact";
  };

  // Get user from localStorage
  let user = { email: "newuser@gmail.com", name: "Ray Clayton" };
  try {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      user = JSON.parse(storedUser);
    }
  } catch (e) {
    console.warn("Failed to parse user from localStorage:", e);
  }

  const getInitials = (value) => {
    return value?.split("@")[0]?.slice(0, 2)?.toUpperCase() || "US";
  };

  // Apply theme class to body
  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  return (
    <div className="topbar">
      <div className="topbar-left">
        <div className="initials-circle">{getInitials(user.email)}</div>
        <div className="user-info">
          <div className="username">{user.email}</div>
          <div className="user-role">User</div>
        </div>
      </div>

      <div className="topbar-right">
        {/* Settings Button */}
        <button
          className="topbar-btn"
          onClick={() => setShowSettings(!showSettings)}
        >
          <FaCog className="icon" />
          <span>Setting</span>
        </button>

        {/* Settings Popup */}
        {showSettings && (
          <div className="settings-popup">
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <button
              onClick={() => {
                localStorage.clear();
                alert("User data cleared.");
                window.location.reload();
              }}
            >
              Clear Data
            </button>
          </div>
        )}

        {/* Support */}
        <button className="topbar-btn" onClick={handleSupportClick}>
          <FaComments className="icon" />
          <span>Support</span>
        </button>

        {/* Light Mode Toggle */}
        <button
          className="topbar-btn"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? (
            <>
              <FaSun className="icon" />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <FaMoon className="icon" />
              <span>Dark Mode</span>
            </>
          )}
        </button>

        {/* Logout */}
        <button
          className="topbar-btn"
          onClick={() => {
            const confirmLogout = window.confirm(
              "Are you sure you want to logout?"
            );
            if (confirmLogout) {
              window.location.href = "/";
            }
          }}
        >
          <FaSignOutAlt className="icon" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
