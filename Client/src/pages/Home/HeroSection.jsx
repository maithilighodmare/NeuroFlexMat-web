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
<<<<<<< HEAD
        <strong>Revolutionizing Recovery & Performance</strong>
      </p>
      <p>
        Designed to enhance your flexibility, stability, and neuromuscular
        connection. <br />
=======
        Designed to enhance your flexibility, stability, and neuromuscular connection. <br />
>>>>>>> 4047622c42583f298ebf5ea80a3fb4ab142d9276
        Accelerate healing, prevent injuries, and move pain-free.
      </p>

      <div className="buttons">
<<<<<<< HEAD
        <Link to='/signup'>
          {" "}
          <button className="btn signup">SignUp</button>
        </Link>
        <Link to='/login'>
          {" "}
          <button className="btn login">Login</button>
        </Link>
=======
        <button className="btn signup" onClick={() => navigate("/signup")}>
          SignUp
        </button>
        <button className="btn login" onClick={() => navigate("/login")}>
          Login
        </button>
>>>>>>> 4047622c42583f298ebf5ea80a3fb4ab142d9276
      </div>
    </section>
  );
};

export default HeroSection;
