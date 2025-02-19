import React from "react";
import "./styles.css"; // Import the external CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          
          {/* Logo & Social Icons */}
          <div className="footer-logo">
            <h2 className="footer-title">
              <span className="logo-icon">💧</span> NeuroFlex
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy eirmod.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-container">
            <div className="footer-links">
              <h3>Quick Link</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Doctor</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h3>Quick Link</h3>
              <ul>
                <li><a href="#">Cardiology</a></li>
                <li><a href="#">Neurology</a></li>
                <li><a href="#">Gastroenterology</a></li>
                <li><a href="#">Routine Checkup</a></li>
                <li><a href="#">Orthopedics</a></li>
                <li><a href="#">Dental Surgery</a></li>
              </ul>
            </div>
          </div>

          {/* Medical Location */}
          <div className="footer-map">
            <h3>Medical Location</h3>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086469483794!2d-122.41941568468146!3d37.77492977975992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e9f1b4b1b0b%3A0xa4b8f4f8d9f8b9f4!2sMission%20District%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1645604410123!5m2!1sen!2sus"
              width="250"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          Designed and Developed By <span className="developer-name">Uldeck</span>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="scroll-top"
      >
        ⬆
      </button>
    </footer>
  );
};

export default Footer;
