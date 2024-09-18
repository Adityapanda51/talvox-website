import React from "react";
import "../Styles/Home.css";




const backgroundColors = [
  "#f8b400", // Color for 1, 3, 5
  "#1e88e5", // Color for 2, 4, 6
];

const Home = () => {
  return (
    <div>
      <section id="home" className="home-section">
        <div className="hero-content">
          <h1>
            Empowering Businesses with IT, HR, and Digital Marketing Solutions
          </h1>
          <p>Your Partner in Innovation, Talent, and Growth</p>
          <div className="cta-buttons">
            <a href="services" className="cta-btn secondary">
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      <section id="about-us" className="about-us-section">
        <div className="container">
          <section>
            <p>
              At Talvox, we are more than just a service provider; we are your
              strategic partner in navigating the complexities of today’s
              business landscape. With our comprehensive suite of IT, HR, and
              Digital Marketing solutions, we help you unlock new opportunities,
              streamline operations, and drive sustainable growth.
            </p>
          </section>

          <section>
            <h2>What We Offer</h2>
            <ul>
              <li>
                <strong>IT Services:</strong> From software development and IT
                consulting to cloud solutions and cybersecurity, our IT services
                are designed to enhance your operational efficiency and ensure
                your business is always ahead of the curve. We leverage the
                latest technologies to deliver solutions that are scalable,
                secure, and tailored to your specific requirements.
              </li>
              <li>
                <strong>HR Services:</strong> People are the backbone of any
                successful organization. At Talvox, we offer a range of HR
                services, including recruitment, talent management, and employee
                engagement, to help you build a motivated and productive
                workforce. Our HR experts are dedicated to aligning your human
                resources with your business objectives, ensuring you have the
                right talent to drive success.
              </li>
              <li>
                <strong>Digital Marketing:</strong> In today’s digital
                landscape, having a strong online presence is crucial. Talvox
                provides comprehensive digital marketing services, including
                SEO, social media management, content marketing, and
                pay-per-click advertising. Our goal is to help you reach your
                target audience, increase brand awareness, and drive conversions
                with data-driven strategies.
              </li>
            </ul>
          </section>

          <section>
            <h2>Why Choose Talvox?</h2>
            <ul>
              <li>
                <strong>Holistic Approach:</strong> We understand that every
                business is unique, which is why we offer tailored solutions
                that address your specific needs across IT, HR, and Digital
                Marketing.
              </li>
              <li>
                <strong>Expert Team:</strong> Our team is composed of seasoned
                professionals with deep industry knowledge and a passion for
                innovation.
              </li>
              <li>
                <strong>Customer-Centric:</strong> Your success is our priority.
                We work closely with you to ensure that our solutions not only
                meet but exceed your expectations.
              </li>
              <li>
                <strong>Innovation-Driven:</strong> At Talvox, we are constantly
                exploring new technologies and strategies to stay ahead of
                industry trends and deliver cutting-edge solutions.
              </li>
            </ul>
          </section>
        </div>
      </section>


      <section id="industry-specialities" className="industry-specialities-section">
        <h2>Industry Specialities</h2>
        <div className="industry-cards-container">
          {[1, 2, 3, 4, 5, 6].map((card, index) => (
            <div
              key={index}
              className="industry-card"
              style={{
                backgroundColor: backgroundColors[index % 2], // Alternate colors
              }}
            >
              <div className="industry-content">
                <h3>Industry {card}</h3>
                <p>
                  This is a description for Industry {card}. Here you can provide details about the specific industry and how your services cater to its needs.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>




    </div>
  );
};

export default Home;

