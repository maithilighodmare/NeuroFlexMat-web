import React, { useState } from "react";
import { 
  FaUserCircle, FaInstagram, FaFacebook, FaWhatsapp, FaYoutube, 
  FaCog, FaTimes, FaMoon, FaSun, FaHome, FaChartLine, FaCalendarCheck, 
  FaDumbbell, FaFileAlt, FaUserMd 
} from "react-icons/fa";
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle settings panel
  const toggleSettings = () => setSettingsOpen(!settingsOpen);

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`profile-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <h2 className="logo">NeuroFlex</h2>
        <input type="text" className="search-bar" placeholder="Search" />
        
        <nav className="menu">
         
         <Link to='/'> <button className="menu-item active">
            <FaHome className="menu-icon" /> Home
          </button></Link>
          <button className="menu-item">
            <FaChartLine className="menu-icon" /> Dashboard
          </button>
          <button className="menu-item">
            <FaCalendarCheck className="menu-icon" /> Sessions
          </button>
          <button className="menu-item">
            <FaDumbbell className="menu-icon" /> Exercises
          </button>
          <button className="menu-item">
            <FaFileAlt className="menu-icon" /> Reports
          </button>
          <button className="menu-item">
            <FaUserMd className="menu-icon" /> Physiotherapists
          </button>
          <button className="menu-item">
            <FaCog className="menu-icon" /> Settings
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="profile-header">
          <FaUserCircle className="profile-avatar" />
          <div className="profile-info">
            <h1>-</h1>
            <p>NeuroFlex Therapy Participant</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="profile-body">
          {/* Left Section */}
          <section className="profile-details">
            <h3>Completed Sessions</h3>
            <p>You've completed <strong>20</strong> therapy sessions using the NeuroFlex Mat.</p>

            <h3>About NeuroFlex</h3>
            <p>
              The NeuroFlex Mat helps improve balance, flexibility, and neuroplasticity.
              This therapy is designed for individuals recovering from injuries and those 
              looking to enhance mobility through guided exercises.
            </p>

            {/* Social Sharing */}
            <h3>Share Your Progress</h3>
            <div className="social-icons">
              <FaWhatsapp className="social-icon whatsapp" />
              <FaFacebook className="social-icon facebook" />
              <FaInstagram className="social-icon instagram" />
            </div>

            {/* YouTube Tutorials */}
            <h3>Watch Training Videos</h3>
            <button className="youtube-btn">
              <FaYoutube className="menu-icon" /> Watch on YouTube
            </button>
          </section>

          {/* Right Section */}
          <aside className="profile-sidebar">
            <h3>Rewards & Levels</h3>
            <div className="rewards">
              <span>🏅 Beginner</span>
              <span>🥈 Intermediate</span>
              <span>🏆 Pro</span>
            </div>

            <h3>Physiotherapist</h3>
            <p>Dr. Emily Smith</p>

            <h3>Contact</h3>
            <p>Email: neuroflex@support.com</p>
          </aside>
        </div>
      </main>

      {/* Settings Panel */}
      {settingsOpen && (
        <div className="settings-panel">
          <button className="close-settings" onClick={toggleSettings}>
            <FaTimes />
          </button>
          <h2>Settings</h2>
          <div className="setting-item">
            <label>Dark Mode</label>
            <button className="theme-toggle" onClick={toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
