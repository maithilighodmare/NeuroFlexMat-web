import React, { useState } from "react";
import "./FAQSection.css"; // Import CSS file

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "1. How does the NeuroFlex Mat help with balance and posture?",
      answer:
        "Answer : The NeuroFlex Mat stimulates sensory receptors in the feet to activate core and stabilizing muscles, helping improve balance, posture, and coordination over time.",
    },
    {
      question: "2. Is the NeuroFlex Mat suitable for all age groups?",
      answer: "Answer:Yes, the NeuroFlex Mat is designed to be safe and effective for users of all ages, from children developing motor skills to seniors working on mobility and stability.",
    },
    {
      question: "How often should I use the NeuroFlex Mat to see results?",
      answer: "Answer:For best results, use the mat for 10–15 minutes a day, 3–5 times a week. Regular usage can lead to noticeable improvements in balance, focus, and physical therapy outcomes",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="faq-container">
      {/* Left Side - FAQ Section */}
      <div className="faq-content">
        <h3 className="faq-title">Frequently Asked Questions</h3>
        <h2 className="faq-heading">
          Get Every Single Answers <br /> There if you want
        </h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <em>{faq.question}</em>
                <span>{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Image with Play Button */}
      <div className="faq-video">
  <video className="video-placeholder" controls poster="your-thumbnail.jpg">
    <source src="https://streamable.com/icuczq" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="play-button" onClick="document.querySelector('.video-placeholder').play()">▶</div>
</div>

    </div>
  );
};

export default FAQSection;
