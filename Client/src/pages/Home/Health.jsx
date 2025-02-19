import React from "react";
import "./Home.css";

const Health = () => {
  return (
    <section className="about-us">
       <div className="health-section">
      <div className="container">
        <h4 className="section-subtitle">What We Do</h4>
        <h2 className="section-title">What We Provide for Your Health</h2>
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed dinonumy eirmod tempor 
          invidunt ut labore et dolore magn.
        </p>
        <div className="heartbeat-wave">
          {/* <img src="https://source.unsplash.com/1600x400/?heartbeat" alt="Heartbeat Wave" /> */}
        </div>
        <div className="services">
          <div className="service-item">
            <img src="https://img.icons8.com/ios/100/00bcd4/doctor-male.png" alt="Specialist Doctors" />
            <p>Specialist Doctors</p>
          </div>
          <div className="service-item">
            <img src="https://img.icons8.com/ios/100/00bcd4/meeting.png" alt="Frequent Visits" />
            <p>Frequent Visits</p>
          </div>
          <div className="service-item">
            <img src="https://img.icons8.com/ios/100/00bcd4/artificial-intelligence.png" alt="Cordial Administration" />
            <p>Cordial Administration</p>
          </div>
          <div className="service-item">
            <img src="https://img.icons8.com/ios/100/00bcd4/pharmacy-shop.png" alt="Specialized Pharmacy" />
            <p>Specialized Pharmacy</p>
          </div>
        </div>
        <div className="scroll-up">
          <button>
            <span>&#8593;</span>
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Health;
