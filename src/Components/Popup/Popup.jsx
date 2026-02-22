import React from "react";
import "./Popup.css";

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="thankyou-card">

        <h1 className="thankyou-title">Thank You!</h1>
        <p className="thankyou-subtitle">
          Your feedback has been successfully submitted.
        </p>

        <div className="popup-buttons">
          <button className="primary-btn" onClick={onClose}>
            OK
          </button>
          <button className="secondary-btn" onClick={onClose}>
            Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default Popup;