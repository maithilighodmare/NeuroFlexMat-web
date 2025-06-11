import React, { useState } from "react";
import "./Home.css";

const reviewsData = [
  {
    id: 1,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    text: "Stepped on it once and my balance improved so much that I can now dodge my toddler’s flying toys like a ninja. 10/10 would recommend! 😊",
    bgColor: "#d8f3f0",
  },
  {
    id: 2,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
    text: "My physiotherapist is out of a job because this mat does all the work. Sorry, doc!",
    bgColor: "#1e2b4b",
    textColor: "#fff",
  },
  {
    id: 3,
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
    text: "Felt like a wobbly jellyfish before, but after a few sessions, I walk like I’m on a fashion runway. NeuroFlex should sponsor me! 🔥🔥",
    bgColor: "#d8f3f0",
  },
  {
    id: 4,
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 4,
    text: "Using it twice a day and my lower back pain is almost gone. It’s like standing on science!",
    bgColor: "#fdf1d6",
  },
  {
    id: 5,
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 5,
    text: "I made my grandparents stand on it and now they race up the stairs. What magic is this?!",
    bgColor: "#e0ffe3",
  },
];

const Reviews = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleReviews = reviewsData.slice(startIndex, startIndex + 3);

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex + 3 < reviewsData.length) setStartIndex(startIndex + 1);
  };

  return (
    <section id="reviews" className="reviews-section">
      <h2>Reviews</h2>
      <div className="reviews-wrapper">
        <button className="scroll-btn left" onClick={handlePrev} disabled={startIndex === 0}>
          &#8249;
        </button>

        <div className="reviews-fixed-container">
          {visibleReviews.map((review) => (
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

        <button
          className="scroll-btn right"
          onClick={handleNext}
          disabled={startIndex + 3 >= reviewsData.length}
        >
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Reviews;
