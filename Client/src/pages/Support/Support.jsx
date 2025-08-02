import React from "react";
import "./Support.css";
import TopBar from "../../components/Topbar";

const Support = () => {
  return (
    <div className="conatiner">
       <TopBar />
<div className="support-page">
     

      {/* Hero */}
      <section className="hero-section">
        <h1>Support & Help Center</h1>
        <p>
          We're here to make your Smart Therapy Mat experience smooth and easy.
          Whether you need guidance, tips, or troubleshooting — you'll find it
          all here.
        </p>
      </section>

      {/* How the Mat Works */}
      <section className="section">
        <h2 className="section-title">🧠 How the Mat Works</h2>
        <div className="info-card">
          The Smart Therapy Mat is embedded with pressure sensors that detect
          body posture and movements in real time. These signals are sent
          wirelessly to your app dashboard, where you get real-time analytics
          and suggestions for improvement.
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="section">
        <h2 className="section-title">🛠 If the Mat is Not Working</h2>
        <div className="info-card">
          <ol className="troubleshooting-list">
            <li>Ensure the mat is powered and turned on.</li>
            <li>Verify Bluetooth or Wi-Fi connection is active.</li>
            <li>Restart both the mat and your connected device.</li>
            <li>Still not working? Try resetting from the app settings.</li>
            <li>
              Still stuck? Reach us at{" "}
              <strong>support@matcare.com</strong>
            </li>
          </ol>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section pb-12">
        <h2 className="section-title">📞 Contact Support</h2>
        <div className="contact-card">
          <p>
            Email: <strong>support@matcare.com</strong>
          </p>
          <p>
            Phone: <strong>+91-9876543210</strong>
          </p>
          <p>Support Hours: Mon - Sat | 10:00 AM – 6:00 PM IST</p>
        </div>
      </section>
    </div>
    </div>
    
  );
};

export default Support;
