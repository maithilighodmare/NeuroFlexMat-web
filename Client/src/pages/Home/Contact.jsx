import React from "react";

const Contact = () =>{
    return(
        <section id="contact" className="contact-section" >
          <div className="contact-container">
        <h2>Contact Us</h2>
        <p>We`d love to hear from you! Reach out to us using the details below.</p>

        {/* Contact Details */}
        <div className="contact-info">
          <div className="info-box">
            <h3>📍 Our Store</h3>
            <p>123 Main Street, Nagpur, India</p>
          </div>

          <div className="info-box">
            <h3>📞 Call Us</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>support@neuroflex.com</p>
          </div>

          <div className="info-box">
            <h3>🕒 Store Hours</h3>
            <p>Mon - Sat: 10 AM - 8 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
    
    );
}

export default Contact ;