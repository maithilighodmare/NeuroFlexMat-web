import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", form);
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

      {/* Right Side - Login Form */}
      <div style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        width: "350px",
        textAlign: "center",
        marginLeft: "auto"
      }}>
        <h2 style={{ color: "#004d40", fontSize: "22px", fontWeight: "bold" }}>Login to Your Account</h2>
        <p style={{ color: "#00796b" }}>Access your Neuro Flex Mat dashboard.</p>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} 
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #80cbc4" }} required />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} 
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #80cbc4" }} required />
          <label style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "14px", color: "#004d40" }}>
            <input type="checkbox" name="rememberMe" checked={form.rememberMe} onChange={handleChange} /> Remember Me
          </label>
          <a href="#" style={{ color: "#00796b", fontSize: "14px", textAlign: "right", display: "block", marginBottom: "10px" }}>Forgot Password?</a>
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
            Login
          </button>
        </form>
        <p style={{ marginTop: "10px", fontSize: "14px" }}>Don't have an account? 
          <a href="/signup" style={{ color: "#00796b", fontWeight: "bold", textDecoration: "none" }}> Sign Up Here</a>
        </p>
      </div>
    </div>
  );
}
