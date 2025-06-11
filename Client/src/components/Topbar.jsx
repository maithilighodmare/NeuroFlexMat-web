import React from "react";
import { FaCog, FaSignOutAlt, FaComments, FaSun } from "react-icons/fa";
import "./TopBar.css";

const TopBar = () => {
  // Safely get user data from localStorage
  let user = { email: "user@example.com", name: "User" };
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

  return (
    <div className="topbar">
      <div className="topbar-left">
        <div className="initials-circle">
          {getInitials(user.email || user.name)}
        </div>
        <div className="user-info">
          <div className="username">{user.email || user.name}</div>
          <div className="user-role">User</div>
        </div>
      </div>

      <div className="topbar-right">
        <button className="topbar-btn">
          <FaCog className="icon" />
          <span>Setting</span>
        </button>
        <button className="topbar-btn">
          <FaComments className="icon" />
          <span>Support</span>
        </button>
        <button className="topbar-btn" onClick={() => alert("Logged out!")}>
          <FaSignOutAlt className="icon" />
          <span>Logout</span>
        </button>
        <button className="topbar-btn">
          <FaSun className="icon" />
          <span>Light Mode</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
