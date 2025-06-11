import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showForgotPopup, setShowForgotPopup] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/user/login",
        form
      );
      const { token, user, message } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      alert(message);
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);

      const googleUser = {
        name: decoded.name,
        email: decoded.email,
        password: decoded.sub,
        age: 0,
        role: "patient",
        picture: decoded.picture,
      };

      try {
        await axios.post("http://localhost:4000/user/login", {
          email: googleUser.email,
          password: googleUser.password,
        });

        localStorage.setItem("user", JSON.stringify(googleUser));
        alert("Google login successful!");
        navigate("/");
      } catch (loginError) {
        await axios.post("http://localhost:4000/user/signup", googleUser);
        localStorage.setItem("user", JSON.stringify(googleUser));
        alert("Google signup successful!");
        navigate("/");
      }
    } catch (err) {
      alert("Google Login Failed");
    }
  };

  const handleForgotSubmit = () => {
    if (forgotEmail.trim() === "") {
      alert("Please enter your email.");
      return;
    }
    // Simulate a reset
    alert(`Password reset link sent to ${forgotEmail}`);
    setShowForgotPopup(false);
    setForgotEmail("");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <Link to="/">
          <div className="logo cursor-pointer">🩺NeuroFlex</div>
        </Link>
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
            <a
              href="#"
              className="forgot-password"
              onClick={(e) => {
                e.preventDefault();
                setShowForgotPopup(true);
              }}
            >
              Forgot Password?
            </a>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <div className="auth-socials" style={{ marginTop: "15px" }}>
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => alert("Google OAuth Login Failed")}
            />
          </div>

          <p className="bottom-link">
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>

      <div className="login-right">
        <img src="https://i.ibb.co/vCjydVyr/lsimg-2.png" alt="login" />
      </div>

      {/* Forgot Password Popup */}
      {showForgotPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Forgot Password</h3>
            <p>Enter your registered email to receive reset link.</p>
            <input
              type="email"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
              placeholder="Enter your email"
              className="popup-input"
            />
            <div className="popup-buttons">
              <button onClick={handleForgotSubmit}>Submit</button>
              <button onClick={() => setShowForgotPopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
