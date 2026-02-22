import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* CTA SECTION */}
      <div className="footer-cta">
        <div className="cta-content">
          <div>
            <h2>Ready for a next project?</h2>
            <p>Let’s get started!</p>
          </div>

          <button className="cta-btn">Contact us</button>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="footer-main">

        <div className="footer-col">
          <h3>NEXORA</h3>
          <p>© 2025</p>
        </div>

        <div className="footer-col">
          <h4>Customers</h4>
          <ul>
            <li>Buyer</li>
            <li>Supplier</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Further Information</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow us</h4>
          <div className="social-icons">
            <span>f</span>
            <span>t</span>
            <span>in</span>
            <span>📧</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;