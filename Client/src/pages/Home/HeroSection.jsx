import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <h1>The Physiotherapy Expert</h1>
      <p>
        <strong>Revolutionizing Recovery & Performance</strong>
      </p>
      <p>
        Designed to enhance your flexibility, stability, and neuromuscular
        connection. <br />
        Accelerate healing, prevent injuries, and move pain-free.
      </p>

      <div className="buttons">
        <Link to='/signup'>
          {" "}
          <button className="btn signup">SignUp</button>
        </Link>
        <Link to='/login'>
          {" "}
          <button className="btn login">Login</button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
