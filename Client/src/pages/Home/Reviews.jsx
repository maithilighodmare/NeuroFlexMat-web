import React from "react";
import "./Home.css";

const reviewsData = [
  {
    id: 1,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg", // Placeholder image
    rating: 5,
    text: "Stepped on it once and my balance improved so much that I can now dodge my toddler’s flying toys like a ninja. 10/10 would recommend! 😊",
    bgColor: "#d8f3f0", // Light Teal Background
  },
  {
    id: 2,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
    text: "My physiotherapist is out of a job because this mat does all the work. Sorry, doc!",
    bgColor: "#1e2b4b", // Dark Blue Background
    textColor: "#fff", // White Text
  },
  {
    id: 3,
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
    text: "Felt like a wobbly jellyfish before, but after a few sessions, I walk like I’m on a fashion runway. NeuroFlex should sponsor me! 🔥🔥",
    bgColor: "#d8f3f0",
  },
];

const Reviews = () => {
  return (
    <section id="reviews"className="reviews-section">
      <h2>Reviews</h2>
      <div className="reviews-container">
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="review-card"
            style={{
              backgroundColor: review.bgColor,
              color: review.textColor || "#000",
            }}
          >
            <div className="review-avatar">
              <img src={review.avatar} alt="User" />
            </div>
            <div className="review-stars">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
