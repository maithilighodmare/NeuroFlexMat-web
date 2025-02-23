import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./styles.css";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <span><FaPhoneAlt className="icon" /> +463281626556</span>
          <span><FaEnvelope className="icon" /> hellomedic@gmail.com</span>
        </div>
        <div className="social-icons">
          <a id="icon" href="#"><FaFacebookF /></a>
          <a id="icon" href="#"><FaTwitter /></a>
          <a id="icon" href="#"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className="logo">🩺NeuroFlex</div>
        <ul className="nav-links">
          <li>
            <ScrollLink to="hero" smooth={true} duration={500} offset={-70}>
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="health" smooth={true} duration={500} offset={-70}>
              Reviews
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="faq" smooth={true} duration={500} offset={-70}>
              FAQs
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
