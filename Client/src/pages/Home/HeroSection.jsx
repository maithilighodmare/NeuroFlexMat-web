import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero">
      <h1>The Physiotherapy Expert</h1>
      <p>
        Designed to enhance your flexibility, stability, and neuromuscular connection. <br />
        Accelerate healing, prevent injuries, and move pain-free.
      </p>

      <div className="buttons">
        <button className="btn signup" onClick={() => navigate("/signup")}>
          SignUp
        </button>
        <button className="btn login" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
