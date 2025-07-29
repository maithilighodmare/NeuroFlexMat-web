import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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

  const handleForgotSubmit = () => {
    if (forgotEmail.trim() === "") {
      alert("Please enter your email.");
      return;
    }
    alert(`Password reset link sent to ${forgotEmail}`);
    setShowForgotPopup(false);
    setForgotEmail("");
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="login-left">
          <Link to="/">
            <div className="sp cursor-pointer"> Login </div>
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

            <p className="bottom-link">
              Don’t have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>

        <div className="login-right">
          <img src="login.png" alt="login" />
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
                <button onClick={() => setShowForgotPopup(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
