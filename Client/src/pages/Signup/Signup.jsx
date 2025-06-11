import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/user/signup", form);
      const userData = {
        name: form.name,
        email: form.email,
        role: form.role,
        age: form.age,
        picture: "https://placehold.co/96x96", // Placeholder image
      };
      localStorage.setItem("user", JSON.stringify(userData));
      alert("Signup successful!");
      navigate("/profile"); // Replace with your profile route
    } catch (err) {
      const msg = err.response?.data?.message || "Signup failed";
      alert(msg);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log("Google User Info:", decoded);

    const userData = {
      name: decoded.name,
      email: decoded.email,
      role: "patient", // Default role
      age: 0, // Unknown from Google
      picture: decoded.picture,
    };

    try {
      await axios.post("http://localhost:4000/user/signup", {
        name: decoded.name,
        email: decoded.email,
        password: decoded.sub,
        age: 0,
        role: "patient",
      });

      localStorage.setItem("user", JSON.stringify(userData));
      alert("Google signup successful!");
      navigate("/profile"); // Redirect to user profile
    } catch (err) {
      const msg = err.response?.data?.message || "Google signup failed";
      alert(msg);
    }
  };

  const handleGoogleError = () => {
    alert("Google Sign-Up Failed");
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <Link to="/">
          <div className="logo cursor-pointer">🩺NeuroFlex</div>
        </Link>
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
              placeholder="Enter your email"
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

            {/* <label>
              <input type="checkbox" required /> I agree to the{" "}
              <a href="#" className="terms-link">
                Terms & Conditions
              </a>
            </label> */}

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

      <div className="signup-right">
        <img
          src="https://i.ibb.co/vCjydVyr/lsimg-2.png"
          alt="Signup Illustration"
        />
      </div>
    </div>
  );
}
