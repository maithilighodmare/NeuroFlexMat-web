import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons
import "./styles.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu on mobile after clicking
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={"/assets/images/logo.png"} alt="NeuroFlex Logo" className="logo-img" />

      </div>

      {/* Hamburger Icon - Toggle Menu */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={30} color="black" /> : <FiMenu size={30} color="black" />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={(e) => handleScroll(e, "home")}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleScroll(e, "about")}>About Us</a></li>
        <li><a href="#reviews" onClick={(e) => handleScroll(e, "reviews")}>Reviews</a></li>
        <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
