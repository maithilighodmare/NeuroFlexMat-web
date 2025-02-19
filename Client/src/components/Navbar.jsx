import React, { useState, useEffect } from "react";
import { FiHome, FiUser, FiStar, FiPhone } from "react-icons/fi"; // Updated icons
import "./styles.css";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveTab(sectionId);
    }
  };

  return (
    <nav className={`navbar ${isSmallScreen ? "small-navbar" : ""}`}>
      {/* Logo & Title */}
      <div className="logo-container">
        <img src="/assets/images/logo.png" alt="NeuroFlex Logo" className="logo" />
        <span className="title">NeuroFlex</span>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li className={`nav-item ${activeTab === "home" ? "active" : ""}`}>
          <a href="#home" onClick={(e) => handleScroll(e, "home")}>
            <FiHome size={24} />
            <span>Home</span>
          </a>
        </li>
        <li className={`nav-item ${activeTab === "about" ? "active" : ""}`}>
          <a href="#about" onClick={(e) => handleScroll(e, "about")}>
            <FiUser size={24} />
            <span>About</span>
          </a>
        </li>
        <li className={`nav-item ${activeTab === "reviews" ? "active" : ""}`}>
          <a href="#reviews" onClick={(e) => handleScroll(e, "reviews")}>
            <FiStar size={24} />
            <span>Reviews</span>
          </a>
        </li>
        <li className={`nav-item ${activeTab === "contact" ? "active" : ""}`}>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
            <FiPhone size={24} />
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
