import React from "react";
import "./ContactPage.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1>Get in touch with us!</h1>
          <p>
            Have a question, feedback, or project in mind?
            Fill out the form and we’ll get back to you within 24 hours.
          </p>

          <div className="contact-illustration">
            📩
          </div>

          <div className="contact-info">
            <p>📍 123 Main Street, New York, NY</p>
            <p>📞 +1 (234) 567-890</p>
            <p>✉ support@nexora.com</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <form
            action="https://formspree.io/f/mlgwpbgw" 
            method="POST"
          >
            <label>Full Name:</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              required
            />

            <label>Email Address:</label>
            <input
              type="email"
              name="email"
              placeholder="e.g. johndoe@gmail.com"
              required
            />

            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              placeholder="e.g. Collaboration Request"
              required
            />

            <label>Message:</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message here..."
              required
            ></textarea>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;