import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import "./styles.css";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="footer">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo">🩺NeuroFlex
</div>
          <p>
            NeuroFlex Mat is designed to enhance balance, posture, and overall
            well-being through intelligent physiotherapy technology. Trusted by
            experts and loved by users, it brings innovation to everyday health
            and rehabilitation.
          </p>
          <div className="footer-social">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Middle Links */}
        <div className="footer-middle">
          <div>
            <h3>Quick Link</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Doctor</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Quick Link</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Cardiology</a>
              </li>
              <li>
                <a href="#">Neurology</a>
              </li>
              <li>
                <a href="#">Gastroenterology</a>
              </li>
              <li>
                <a href="#">Routine Checkup</a>
              </li>
              <li>
                <a href="#">Orthopedics</a>
              </li>
              <li>
                <a href="#">Dental Surgery</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section (Google Maps) */}
        <div className="footer-location">
          <h3>Medical Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2741292364243!2d-122.418689984681!3d37.76177587975869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e4c1f32c6df%3A0xd071f2b74878d96c!2sMission%20District%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1614764746945!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        Designed and Developed By Team NeuroFlex
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button className="scroll-top" onClick={scrollToTop}>
          ⬆
        </button>
      )}
    </footer>
  );
};

export default Footer;
