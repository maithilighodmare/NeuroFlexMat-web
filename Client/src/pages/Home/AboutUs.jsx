import React from "react";
import "./Home.css"; // Import CSS file

const AboutUs = () => {
  return (
    <div id="about" className="about-container">
      {/* Left Section */}
      <div className="about-text">
        <p className="highlight-text">How It Started</p>
        <h1 className="about-title">
          Our Dream is <br /> Transforming Wellness with NeuroFlex Mat
        </h1>
        <p className="about-description">
          NeuroFlex Mat USA was founded by visionary experts dedicated to revolutionizing wellness. 
          Their dream was to create a scientifically backed, accessible solution for mind-body relaxation. 
          Through innovation and research, they launched NeuroFlex Mat, empowering individuals 
          to enhance their well-being through advanced technology and holistic healing.
        </p>
      </div>

      {/* Right Section */}
      <div className="about-media">
        <img 
          src="/assets/images/logo.jpg" 
          alt="Wellness with NeuroFlex Mat" 
          className="about-image" 
        />
        <div className="stats-grid">
          <div className="stat-box">
            <h2>5+</h2>
            <p>Years of Research</p>
          </div>
          <div className="stat-box">
            <h2>30+</h2>
            <p>Scientific Studies</p>
          </div>
          <div className="stat-box">
            <h2>1K+</h2>
            <p>Positive Reviews</p>
          </div>
          <div className="stat-box">
            <h2>50K+</h2>
            <p>Happy Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
