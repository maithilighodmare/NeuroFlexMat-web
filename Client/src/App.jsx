import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Progress from "./pages/Progress";
import Report from './pages/Report';
import Doctordashboard from "./pages/Doctordashboard";
import Rewards from "./pages/Rewards";
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/Progress" element={<Progress/>} />
      <Route path="/Report" element={<Report/>}/>
      <Route path="/Rewards" element={<Rewards/>} />
      <Route path="/Doctordashboard" element={<Doctordashboard />}/>
      </Routes>
    </Router>
  );
};

export default App;
