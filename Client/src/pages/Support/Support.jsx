import React from "react";
import "./Support.css";
import TopBar from "../../components/Topbar";

const Support = () => {
  return (
    <div>
      <TopBar />

      <div className="support-page">
        <h1 className="support-heading">Support & Help</h1>

        <section className="support-section">
          <h2>📋 How the Mat Works</h2>
          <p>
            The smart therapy mat is equipped with pressure sensors that detect
            your movements and postures. These signals are collected and
            processed in real-time to monitor progress and suggest improvements.
            Data is sent wirelessly to your dashboard for analysis and visual
            feedback.
          </p>
        </section>

        <section className="support-section">
          <h2>🎥 Helpful Videos</h2>
          <ul>
            <li>
              <a
                href="https://www.youtube.com/watch?v=your_mat_intro_video"
                target="_blank"
                rel="noreferrer"
              >
                Introduction to Smart Therapy Mat
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=your_exercise_video"
                target="_blank"
                rel="noreferrer"
              >
                Guided Exercises with the Mat
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=your_troubleshoot_video"
                target="_blank"
                rel="noreferrer"
              >
                Troubleshooting & Setup Guide
              </a>
            </li>
          </ul>
        </section>

        <section className="support-section">
          <h2>🛠 What to Do If Mat is Not Working</h2>
          <ol>
            <li>
              Check if the mat is properly connected to power and turned on.
            </li>
            <li>
              Ensure Bluetooth or Wi-Fi is enabled and connected to your system.
            </li>
            <li>Restart the mat and your connected device.</li>
            <li>Refer to the troubleshooting video above.</li>
            <li>
              Still not working? Email us at{" "}
              <strong>support@matcare.com</strong>
            </li>
          </ol>
        </section>

        <section className="support-section">
          <h2>📧 Contact Support</h2>
          <p>
            Email us at: <strong>support@matcare.com</strong>
          </p>
          <p>
            Phone: <strong>+91-9876543210</strong>
          </p>
          <p>Available: Mon - Sat | 10:00 AM - 6:00 PM IST</p>
        </section>
      </div>
    </div>
  );
};

export default Support;
