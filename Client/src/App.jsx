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
import Dashboard from "./pages/Dashboard/Dashboards";
import PatientLeaderboard from "./pages/PatientLeaderboard/PatientLeaderboard";
import Error404 from "./components/Error404";

const App = () => {
  return (
    <Router>
    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/progress" element={<Progress/>} />
      <Route path="/report" element={<Report/>}/>
      <Route path="/rewards" element={<Rewards/>} />
      <Route path="/doctordashboard" element={<Doctordashboard />}/>
      <Route path="/progress" element={<Progress />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/patientleaderboard" element={<PatientLeaderboard/>}/>
      <Route path="*" element={<Error404/>}/>
      </Routes>
    </Router>
  );
};

export default App;
