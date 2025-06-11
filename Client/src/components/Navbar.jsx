import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import "./Navbar.css"
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./styles.css";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        if (parsed?.email) {
          setUserData(parsed);
        }
      }
    } catch (err) {
      console.error("Invalid user data in localStorage");
    }
  }, []);

  const getInitials = (email) => {
    return email.split("@")[0].slice(0, 2).toUpperCase();
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <span>
            <FaPhoneAlt className="icon" /> +463281626556
          </span>
          <span>
            <FaEnvelope className="icon" /> hellomedic@gmail.com
          </span>
        </div>
        <div className="social-icons">
          <a id="icon" href="#"><FaFacebookF /></a>
          <a id="icon" href="#"><FaTwitter /></a>
          <a id="icon" href="#"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className="navbar-container">
          <Link to="/">
            <div className="logo cursor-pointer">🩺NeuroFlex</div>
          </Link>
          <ul className="nav-links">
            <li>
              <ScrollLink to="hero" smooth={true} duration={500} offset={-70}>Home</ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} duration={500} offset={-70}>About</ScrollLink>
            </li>
            <li>
              <ScrollLink to="reviews" smooth={true} duration={500} offset={-70}>Reviews</ScrollLink>
            </li>
            <li>
              <ScrollLink to="faq" smooth={true} duration={500} offset={-70}>FAQs</ScrollLink>
            </li>
            <li>
              <ScrollLink to="appointment" smooth={true} duration={500} offset={-70}>Contact</ScrollLink>
            </li>
            {userData && (
              <li>
                <Link to="/profile" className="profile-btn ">
                  Profile
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
