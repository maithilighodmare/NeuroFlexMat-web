import React, { useState } from "react";
import "./FAQSection.css"; // Import CSS file

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is an academic medical center?",
      answer:
        "Lorem ipsum dolor sit amet, consetet Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinonumy eirmod tempor invidunt. sadipscing elitr, sed dinonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetet Lorem ipsum dolor.",
    },
    {
      question: "What is an academic medical center?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
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
    <source src="" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="play-button" onclick="document.querySelector('.video-placeholder').play()">▶</div>
</div>

    </div>
  );
};

export default FAQSection;
