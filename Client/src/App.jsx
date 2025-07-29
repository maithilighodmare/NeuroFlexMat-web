import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import PatientDashboard from "./pages/Patientdashboard/PatientDashboard"
import Doctordashboard from "./pages/DoctorDashboard/Doctordashboard";
import UserProfile from "./pages/Profile/UserProfile";
import Support from "./pages/Support/Support";
import Error404 from "./components/Error404";

const App = () => {
  return (
    <Router>
    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/doctordashboard" element={<Doctordashboard />}/>
      <Route path="/patientdashboard" element={<PatientDashboard />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/support" element={<Support/>}/>
     
     
      <Route path="*" element={<Error404/>}/>
      </Routes>
    </Router>
  );
};

export default App;
