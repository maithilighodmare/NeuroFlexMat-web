import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    role: "",
    age: "",
    password: "",
    confirmPassword: "",
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup Data:", form);
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#e0f7fa",
      padding: "0 10%"
    }}>
      {/* Left Side - Image */}
      <div style={{ flex: 1, textAlign: "center" }}>
        <img 
          src="https://i.pinimg.com/236x/76/43/bb/7643bb9b2377267262cc635b7b3c7b8b.jpg" 
          alt="Medical Illustration"
          style={{ width: "80%", maxWidth: "400px", borderRadius: "10px" }}
        />
      </div>

      {/* Right Side - Signup Form */}
      <div style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        width: "350px",
        textAlign: "center",
        marginLeft: "auto" // Aligns it to the right
      }}>
        <h2 style={{ color: "#004d40", fontSize: "22px", fontWeight: "bold" }}>Create Your Account</h2>
        <p style={{ color: "#00796b" }}>Join Neuro Flex Mat for real-time physiotherapy tracking.</p>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange} 
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #80cbc4" }} required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} 
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #80cbc4" }} required />
          <select name="role" value={form.role} onChange={handleChange} 
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #80cbc4" }}>
            <option value="">Role Selection</option>
            <option value="Patient">Patient</option>
            <option value="Doctor">Doctor</option>
          </select>
          <input type="number" name="age" placeholder="Age" value={form.age} onChange={handleChange} 
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #80cbc4" }} required />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} 
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #80cbc4" }} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} 
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #80cbc4" }} required />
          <label style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "14px", color: "#004d40" }}>
            <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} /> I agree to the terms and privacy policy
          </label>
          <button type="submit" 
            style={{
              background: "#00796b",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s ease"
            }}
            onMouseOver={(e) => e.target.style.background = "#004d40"}
            onMouseOut={(e) => e.target.style.background = "#00796b"}>
            Sign Up
          </button>
        </form>
        <p style={{ marginTop: "10px", fontSize: "14px" }}>Already have an account? 
          <Link to="/login" style={{ color: "#00796b", fontWeight: "bold", textDecoration: "none" }}> Login Here</Link>
        </p>
      </div>
    </div>
  );
}
