import React from "react";
import "../Styles/Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import xIcon from "../assets/twitter.webp";

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
            <strong>Office Address:</strong> Siri Gajjela Towers, Mothi Nagar,
            <br></br>Vengal Rao Nagar,<br></br>Ameerpet,<br></br>Hyderabad,
            500038
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:04045011686">040-45011686</a>
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
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/talvox"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon x-icon"
              >
                <img
                  src={xIcon}
                  alt="X"
                  style={{ width: "44px", height: "32px" }}
                />
                Twitter
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/talvox"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
              >
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/talvoxpvtltd?igsh=bHk1M2tpd2xuem1u"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section footer-map">
          <h3>Our Location</h3>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3781214910005!2d78.4375238755518!3d17.441607083454855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90db46b8b51b%3A0x2cac1d94341055b!2sSiri%20Gajjela%20Towers%2C%20Mothi%20Nagar%2C%20Vengal%20Rao%20Nagar%2C%20Ameerpet%2C%20Hyderabad%2C%20Telangana%20500038!5e0!3m2!1sen!2sin!4v1726255163151!5m2!1sen!2sin"
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen
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
