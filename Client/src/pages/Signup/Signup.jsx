import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    age: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", form);
  };

  const handleGoogleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log("Google User Info:", decoded);
    // You can also auto-fill form or auto-register/login based on decoded.email
  };

  const handleGoogleError = () => {
    console.log("Google Sign-Up Failed");
  };

  return (
    <div className="signup-container">
      {/* Left Side */}
      <div className="signup-left">
        <div className="logo">🩺NeuroFlex</div>
        <div className="signup-card">
          <h2>Create an account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your mail"
              required
              onChange={handleChange}
            />
            <select
              name="role"
              required
              defaultValue=""
              onChange={handleChange}
            >
              <option value="" disabled>
                Select your role
              </option>
              <option value="patient">Patient</option>
              <option value="therapist">Therapist</option>
            </select>
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              onChange={handleChange}
            />

            <label>
              <input type="checkbox" required /> I agree to all the{" "}
              <a href="#" className="terms-link">
                Terms & Conditions
              </a>
            </label>

            <button type="submit" className="signup-btn">
              Sign up
            </button>
          </form>

          <div className="auth-socials">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
            />
          </div>

          <p className="bottom-link">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="signup-right">
        <img
          src="https://i.ibb.co/vCjydVyr/lsimg-2.png"
          alt="Signup Illustration"
        />
      </div>
    </div>
  );
}
