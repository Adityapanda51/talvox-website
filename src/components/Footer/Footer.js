import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import xIcon from "../../assets/twitter.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="about">About Us</a>
            </li>
            <li>
              <a href="services">Services</a>
            </li>
            <li>
              <a href="industries">Industries</a>
            </li>
            <li>
              <a href="contact">Contact Us</a>
            </li>
            <li>
              <a href="careers">Careers</a>
            </li>
          </ul>
        </div>

        <div className="footer-section services">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="it-services">IT Services</a>
            </li>
            <li>
              <a href="hr-services">HR Services</a>
            </li>
            <li>
              <a href="digital-marketing">Digital Marketing</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact-us">
          <h3>Contact Us</h3>
          <p>
            <strong>Office Address:</strong>
            <br></br> 8-3-224/11/D/5/1 <br></br>(G-127),
            <br></br>Madhura Nagar,<br></br>Hyderabad, Telangana, India, 500038
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:04031733088">04031733088</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@talvox.com">hr@talvox.com</a>
          </p>
        </div>
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a
                href="https://in.linkedin.com/company/talvox-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/talvox"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon x-icon"
                onClick={(e) => e.preventDefault()} // Prevent click action
              >
                <img
                  src={xIcon}
                  alt="X"
                  style={{ width: "44px", height: "32px" }}
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/talvox"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
                onClick={(e) => e.preventDefault()} // Prevent click action
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/talvoxpvtltd?igsh=bHk1M2tpd2xuem1u"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section footer-map">
          <h3>Our Location</h3>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=17.4386667,78.4320833&z=15&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Talvox. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
