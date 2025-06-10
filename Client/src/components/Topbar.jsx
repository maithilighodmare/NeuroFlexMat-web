import React from "react";
import { FaCog, FaSignOutAlt, FaComments, FaSun } from "react-icons/fa";
import "./TopBar.css";

const TopBar = () => {
  const user = {
    name: "Jakob Workman",
    age: 20,
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="topbar">
      <div className="topbar-left">
        <div className="initials-circle">{getInitials(user.name)}</div>
        <div className="user-info">
          <div className="username">{user.name}</div>
          <div className="user-role">{user.age} years old</div>
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
