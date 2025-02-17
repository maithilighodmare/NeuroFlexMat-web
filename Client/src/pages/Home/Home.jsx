import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import Reviews from "./Reviews";
import Contact from "./Contact";
import Footer from "../../components/Footer";

import "./Home.css";


const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;




