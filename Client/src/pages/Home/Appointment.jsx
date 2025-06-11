import React from "react";
import "./Home.css";

const Appointment = () => {
  return (
    <section className="appointment">
 <div className="appointment-container">
      <div className="appointment-box">
        <h3 className="appointment-title">Contact</h3>
        <h2 className="appointment-heading">Get Virtual Appointment Now</h2>
        <p className="appointment-description">
          Book a virtual consultation to experience the benefits of the Neuroflex Mat and take your first step toward better neurological health.
        </p>
        <form className="appointment-form">
          <div className="form-row">
            <input type="text" placeholder="Name" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
          </div>
          <div className="form-row">
            <select className="form-input">
              <option>Select Doctor</option>
              <option>Dr. John Doe</option>
              <option>Dr. Jane Smith</option>
            </select>
            <input type="date" className="form-input" />
          </div>
          <input type="text" placeholder="Subject" className="form-input" />
          <textarea
            rows="4"
            placeholder="Message"
            className="form-textarea"
          ></textarea>
          <button className="form-button">Send Message</button>
        </form>
      </div>
    </div>
    </section>
  );
};

export default Appointment;
