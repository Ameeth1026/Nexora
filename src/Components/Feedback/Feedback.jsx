import React, { useState } from "react";
import "./Feedback.css";
import Popup from "../../Components/Popup/Popup";

const Feedback = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const ratingData = {
    1: { emoji: "😞", text: "Bad" },
    2: { emoji: "😕", text: "Poor" },
    3: { emoji: "😐", text: "Okay" },
    4: { emoji: "🙂", text: "Good" },
    5: { emoji: "🤩", text: "Excellent" },
  };

  const handleChange = (e) => {
    const { placeholder, value } = e.target;

    if (placeholder.includes("Name")) {
      setFormData({ ...formData, name: value });
    } else if (placeholder.includes("Email")) {
      setFormData({ ...formData, email: value });
    } else {
      setFormData({ ...formData, message: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0) {
      return; // no alert anymore
    }

    const existingFeedback =
      JSON.parse(localStorage.getItem("feedbacks")) || [];

    const newFeedback = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      message: formData.message,
      rating,
      emoji: ratingData[rating].emoji,
      role: "Customer",
      image: `https://i.pravatar.cc/100?u=${formData.email}`,
    };

    localStorage.setItem(
      "feedbacks",
      JSON.stringify([...existingFeedback, newFeedback])
    );

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setRating(0);

    // 🔥 SHOW POPUP
    setShowPopup(true);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-wrapper">

        {/* LEFT SIDE */}
        <div className="feedback-left">
          <h3>Nexora</h3>
          <h1>Share Your Experience</h1>
          <p>
            Your feedback helps Nexora grow smarter and better.
            Tell us what you love and what we can improve.
          </p>

          <div className="rating-box">
            <h3>
              Rate Us{" "}
              {rating > 0 && (
                <span className="rating-result">
                  {ratingData[rating].emoji} {ratingData[rating].text}
                </span>
              )}
            </h3>

            <div className="stars">
              {[1, 2, 3, 4, 5].map((value) => (
                <span
                  key={value}
                  className={`star ${rating >= value ? "active" : ""}`}
                  onClick={() => setRating(value)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="feedback-right">
          <form   method="POST" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"

                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <textarea
                rows="5"
                placeholder="Your Message..."
                value={formData.message}
                onChange={handleChange}

                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Feedback
            </button>
          </form>
        </div>

      </div>

      {/* 🔥 POPUP COMPONENT */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}

    </div>
  );
};

export default Feedback;