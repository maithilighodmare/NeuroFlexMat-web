import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
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
    console.log(form);

    try {
      const res = await axios.post("http://localhost:4000/user/signup", form);
      const userData = {
        name: form.name,
        email: form.email,
        role: form.role,
        age: form.age,
        picture: "https://placehold.co/96x96",
      };
      localStorage.setItem("user", JSON.stringify(userData));
      alert("Signup successful!");
      navigate("/profile");
    } catch (err) {
      const msg = err.response?.data?.message || "Signup failed";
      alert(msg);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="signup-container">
        <div className="signup-left">
          <div className="sp cursor-pointer">Sign Up</div>

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
              <button type="submit" className="signup-btn">
                Sign up
              </button>
            </form>

            <p className="bottom-link">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </div>

        <div className="signup-right">
          <img src="/login.png" alt="Signup Illustration" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
