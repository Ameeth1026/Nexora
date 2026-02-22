import React, { useEffect, useState } from "react";
import "./TestimonialPage.css";
import Feedback from "../../Components/Feedback/Feedback";
import Footer from "../../Components/Footer/Footer";

const TestimonialPage = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const savedFeedback =
      JSON.parse(localStorage.getItem("feedbacks")) || [];

    setTestimonials(savedFeedback);
  }, []);

  return (
    <>
    <div className="testimonials">

      <p className="subtitle">TESTIMONIALS</p>

      <h2>
        Customer said <br />
        about <span>Nexora</span>
      </h2>

      {/* 🔥 If no feedback yet */}
      {testimonials.length === 0 && (
        <p className="no-feedback">No feedback available yet.</p>
      )}

      {/* 🔥 ROW 1 — Right → Left */}
      {testimonials.length > 0 && (
        <>
          <div className="marquee">
            <div className="marquee-content scroll-left">
              {[...testimonials, ...testimonials].map((item, index) => (
                <div className="card" key={index}>
                  <div className="profile">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h4>{item.name}</h4>
                      <p className="role">{item.role || "Customer"}</p>
                    </div>
                  </div>

                  <p className="description">{item.message}</p>

                  <div className="stars">
  {"★".repeat(Number(item.rating) || 0)}
  {"☆".repeat(5 - (Number(item.rating) || 0))}
  <span className="emoji">{item.emoji || ""}</span>
</div>
                </div>
              ))}
            </div>
          </div>

          {/* 🔥 ROW 2 — Left → Right */}
          <div className="marquee">
            <div className="marquee-content scroll-right">
              {[...testimonials, ...testimonials].map((item, index) => (
                <div className="card" key={index + "second"}>
                  <div className="profile">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h4>{item.name}</h4>
                      <p className="role">{item.role || "Customer"}</p>
                    </div>
                  </div>

                  <p className="description">{item.message}</p>

                 <div className="stars">
  {"★".repeat(Number(item.rating) || 0)}
  {"☆".repeat(5 - (Number(item.rating) || 0))}
  <span className="emoji">{item.emoji || ""}</span>
</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* 🔥 Feedback Section Below Testimonials */}
      

    </div>
    <Feedback />
      <Footer/>
      </>
  );
};

export default TestimonialPage;