import React from "react";
import "./Home.css";

const AboutUs = () => {
  return (
    <div className="overlay">
      <div id="about" className="about-container ">
        {/* Left Section: Text Content */}
        <div className="about-text ">
          <h4 className="about-subtitle">How It Started</h4>
          <h2 className="about-title">
            Our Dream is Global Therapy <br /> Transformation
          </h2>
          <p className="about-description">
            NeuroFlexMat is an innovative project conceptualized under the
            guidance of Milind Kahile Sir and passionately developed by a team
            of dedicated YCCE students. Born from a shared ambition to transform
            physiotherapy using smart technology, the project combines
            neuroscience with intelligent feedback to aid in faster, more
            effective recovery. The goal was to create a user-friendly mat that
            supports patients in regaining mobility, monitoring progress, and
            improving neuromuscular control. With continuous effort and
            technical creativity, the students brought NeuroFlexMat to
            life—paving the way for accessible, tech-driven rehabilitation that
            empowers users and healthcare professionals alike.
          </p>
        </div>

        {/* Right Section: Image and Stats */}
        <div className="about-right">
          <div className="about-image"></div>

          {/* Stats Cards */}
          <div className="about-stats">
            <div className="stat-box">
              <h3>0.6</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-box">
              <h3>23</h3>
              <p>Project Challenge</p>
            </div>
            <div className="stat-box">
              <h3>10+</h3>
              <p>Positive Reviews</p>
            </div>
            <div className="stat-box">
              <h3>1K</h3>
              <p>Trusted Users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
