import React from "react";
import "./Home.css"; // Import CSS file

const AboutUs = () => {
  return (
    <section id="about"className="about-section">
      <h2>About Us</h2>
      <div className="about-content">
        <h3>Who We Are?</h3>
        <p>
          At NeuroFlex, we are committed to revolutionizing physiotherapy and neuromuscular 
          recovery through cutting-edge technology...
        </p>

        <h3>Our Mission</h3>
        <p>
          We strive to bridge the gap between science and movement, helping individuals regain 
          strength, improve mobility, and prevent injuries...
        </p>

        <h3>Our Vision</h3>
        <p>
          We envision a future where personalized recovery and performance enhancement 
          are accessible to everyone...
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
