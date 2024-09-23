import React, { useState } from "react";
import "../Styles/ContactUs.css";
// import CubeAnimation from "./CubeAnimation";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await fetch("http://localhost:5000/send", {

        const response = await fetch ("https://talvox-website.onrender.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Error sending email. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send email.");
    }
  };

  return (
    <div id="contact" className="contact-uss">
      <div className="contact-content">
        {/* Contact Information and Business Hours */}
        <div className="contact-business">
          <div className="contact-info">
            <div className="heading-container">
              {/* <div>
                <CubeAnimation />
              </div> */}
              <h2>Contact Information</h2>
              {/* <div>
                <CubeAnimation />
              </div> */}
            </div>
            {/* <h2>Contact Information</h2> */}
            <p>
              <strong>Office Address:</strong> Siri Gajjela Towers, Mothi Nagar,
              <br></br>Vengal Rao Nagar, Ameerpet, Hyderabad, 500038
            </p>
            <p>
              <strong>Phone:</strong> 040-45011686
            </p>
            <p>
              <strong>Email:</strong>
            </p>
            <ul>
              <li>For IT Services: hr@talvox.com</li>
              <li>For HR Services: hr@talvox.com</li>
              <li>General Inquiries: hr@talvox.com</li>
            </ul>
          </div>

          <div className="business-hours">
            {/* <h2>Business Hours</h2> */}
            <div className="heading-container">
              {/* <div>
                <CubeAnimation />
              </div> */}
              <h2>Business Hours</h2>
              {/* <div>
                <CubeAnimation />
              </div> */}
            </div>
            <p>Monday - Friday: 9:30 AM - 6:30 PM</p>
            <p>Saturday - Sunday: Closed</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          {/* <h2>Contact Us</h2> */}
          <div className="heading-container">
              {/* <div>
                <CubeAnimation />
              </div> */}
              <h2>Contact Us</h2>
              {/* <div>
                <CubeAnimation />
              </div> */}
            </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Extra Content */}
      <div className="get-in-touch">
        <h1>Get in Touch with Us</h1>
        <p>
          We’d love to hear from you! Whether you have questions about our IT,
          HR, or Digital Marketing services, need support, or just want to
          connect, feel free to reach out to us. Our team is here to help you
          with all your needs. Reach out to us through any of the following
          methods:
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
