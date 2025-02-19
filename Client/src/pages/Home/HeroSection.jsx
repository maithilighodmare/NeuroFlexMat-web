import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>Unlock Your Body’s Full Potential with NeuroFlex Mat</h1>
          <p>
          Experience the Power of NeuroFlex Mat – Enhance flexibility, stability, and neuromuscular coordination. Accelerate recovery, prevent injuries, and achieve pain-free movement with advanced technology designed for optimal performance and well-being.
          </p>

          <div className="buttons">
            <button className="btn signup" onClick={() => navigate("/signup")}>
              SignUp
            </button>
            <button className="btn login" onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        </div>
      </div>
    

    </section>
    
  );
};

export default HeroSection;


