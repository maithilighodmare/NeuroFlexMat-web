import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../../firebase";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", form);
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Firebase Google Login Success:", result.user);
    } catch (error) {
      console.error("Firebase Google Login Error:", error);
    }
  };

  return (
    <div className="login-container">
      {/* Left Side */}
      <div className="login-left">
        <div className="logo">🩺NeuroFlex</div>
        <div className="login-card">
          <h2>Welcome Back!</h2>
          <p>Login to access your dashboard.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <div className="auth-socials">
            {/* Google OAuth Button */}
            <div style={{ marginTop: "15px" }}>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log("Google OAuth Success:", credentialResponse);
                  const decoded = jwtDecode(credentialResponse.credential);
                  console.log("Decoded Google Token:", decoded);
                }}
                onError={() => {
                  console.log("Google OAuth Login Failed");
                }}
              />
            </div>
          </div>

          <p className="bottom-link">
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="login-right">
        <a href="https://ibb.co/ymQvkdv">
          <img
            src="https://i.ibb.co/vCjydVyr/lsimg-2.png"
            alt="lsimg-2"
            border="0"
          />
        </a>
      </div>
    </div>
  );
}
