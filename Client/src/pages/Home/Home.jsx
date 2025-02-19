import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Navbar from "../../components/Navbar";
import HeroSection from "./HeroSection";
import Health from "./Health";
import AboutUs from "./AboutUs";
import Reviews from "./Reviews";
import FAQSection from "./FAQSection";
import Appointment from "./Appointment";
import Footer from "../../components/Footer";
import "./home.css";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.section) {
      scroller.scrollTo(location.state.section, {
        smooth: true,
        duration: 500,
        offset: -70, // Adjust this based on your navbar height
      });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <div className="page-content">
        <HeroSection />
        <Health />
        <AboutUs />
        <Reviews />
        <FAQSection />
        <Appointment />
        
      </div>
      <Footer />
    </>
  );
};

export default Home;

