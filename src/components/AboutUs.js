import React from "react";
import "../Styles/AboutUs.css";
import itImage from "../assets/it.jpg";
import hrImage from "../assets/hr.png";
import digitalMarketingImage from "../assets/digitalmarketing.png";
// import CubeAnimation from "./CubeAnimation";

const AboutUs = () => {
  return (
    <div id="about" className="about-us">
      <section className="who-we-are">
        <div className="heading-container">
          {/* <div>
            <CubeAnimation />
          </div> */}
          <h2>Who We Are</h2>
          {/* <div>
            <CubeAnimation />
          </div> */}
        </div>
        <h4>Welcome to Talvox, where innovation meets excellence.</h4>
        <p>
          Founded with a vision to bridge the gap between technology, human
          resources, and digital marketing, Talvox is a dynamic startup
          committed to delivering comprehensive solutions that empower
          businesses to thrive in today's fast-paced world.
        </p>
      </section>

      <section className="what-we-do">
        <div className="service it-services">
          <div className="text">
            <h3>IT Services</h3>
            <p>
              From software development and IT consulting to cloud solutions and
              cybersecurity, our IT services are designed to enhance your
              operational efficiency and ensure your business is always ahead of
              the curve. We leverage the latest technologies to deliver
              solutions that are scalable, secure, and tailored to your specific
              requirements.
            </p>
          </div>
          <div className="image">
            <img src={itImage} alt="IT Services" />
          </div>
        </div>

        <div className="service hr-services">
          <div className="text">
            <h3>HR Services</h3>
            <p>
              People are the backbone of any successful organization. At Talvox,
              we offer a range of HR services, including recruitment, talent
              management, and employee engagement, to help you build a motivated
              and productive workforce. Our HR experts are dedicated to aligning
              your human resources with your business objectives, ensuring you
              have the right talent to drive success.
            </p>
          </div>
          <div className="image">
            <img src={hrImage} alt="HR Services" />
          </div>
        </div>

        <div className="service digital-marketing">
          <div className="text">
            <h3>Digital Marketing</h3>
            <p>
              In today’s digital landscape, having a strong online presence is
              crucial. Talvox provides comprehensive digital marketing services,
              including SEO, social media management, content marketing, and
              pay-per-click advertising. Our goal is to help you reach your
              target audience, increase brand awareness, and drive conversions
              with data-driven strategies.
            </p>
          </div>
          <div className="image">
            <img src={digitalMarketingImage} alt="Digital Marketing" />
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="card-container">
          <div className="card">
            <h3>Our Mission</h3>
            <p>
              At Talvox, our mission is to provide top-tier IT solutions, HR
              services, and Digital Marketing strategies that drive growth and
              foster innovation. We believe in creating value for our clients by
              offering customized solutions that meet their unique needs and
              help them achieve their business goals.
            </p>
          </div>
          <div className="card">
            <h3>Our Values</h3>
            <ul>
              <li>
                <strong>Integrity:</strong> We believe in honesty and
                transparency in all our dealings.
              </li>
              <li>
                <strong>Excellence:</strong> We strive for the highest standards
                in everything we do.
              </li>
              <li>
                <strong>Collaboration: </strong> We work as a team, both
                internally and with our clients, to achieve the best outcomes.
              </li>
              <li>
                <strong> Innovation: </strong> We embrace change and
                continuously seek new ways to deliver value.
              </li>
            </ul>
          </div>
          <div className="card">
            <h3>Our Vision</h3>
            <p>
              Our vision is to become a trusted partner for businesses across
              the globe, helping them navigate the complexities of technology,
              human resources, and digital marketing with confidence. We aim to
              set new standards of excellence in the services we provide,
              driving growth and creating lasting value for our clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
