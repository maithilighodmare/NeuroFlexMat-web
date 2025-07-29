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
            Neuroflex Mat offers smart neurotherapy to relieve pain, boost
            circulation, and support recovery—all from home.
          </p>
          <div className="heartbeat-wave"></div>
          <div className="services">
            <div className="service-item">
              <img
                src="https://img.icons8.com/ios/100/00bcd4/doctor-male.png"
                alt="Specialist Doctors"
              />
              <p>Neurotherapy Experts</p>
            </div>
            <div className="service-item">
              <img
                src="https://img.icons8.com/ios/100/00bcd4/meeting.png"
                alt="Frequent Visits"
              />
              <p>Smart Pain Relief</p>
            </div>
            <div className="service-item">
              <img
                src="https://img.icons8.com/ios/100/00bcd4/artificial-intelligence.png"
                alt="Cordial Administration"
              />
              <p>Cordial Administration</p>
            </div>
            <div className="service-item">
              <img
                src="https://img.icons8.com/ios/100/00bcd4/pharmacy-shop.png"
                alt="Specialized Pharmacy"
              />
              <p>Home Recovery Support</p>
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
