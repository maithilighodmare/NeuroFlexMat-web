import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Progress from "./pages/Progress/Progress";
import Report from './pages/Report/Report';
import Doctordashboard from "./pages/DoctorDashboard/Doctordashboard";
import Rewards from "./pages/Rewards/Rewards";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/progress" element={<Progress/>} />
      <Route path="/report" element={<Report/>}/>
      <Route path="/rewards" element={<Rewards/>} />
      <Route path="/doctordashboard" element={<Doctordashboard />}/>
      </Routes>
    </Router>
  );
};

export default App;
