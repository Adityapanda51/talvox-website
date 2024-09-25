// src/components/AboutUsPage/AboutUsSection.js

import React from "react";
import "./AboutUsSection.css";

import logo1 from "../../../assets/whoweare.jpg"
import logo2 from "../../../assets/mission.jpg";
import logo3 from "../../../assets/vision.jpg";

const aboutUsData = [
  {
    title: "Who We Are",
    description:
      "Welcome to Talvox, where innovation meets excellence. Founded with a vision to bridge the gap between technology, human resources, and digital marketing, Talvox is a dynamic startup committed to delivering comprehensive solutions that empower businesses to thrive in today's fast-paced world.",
    logo: `${logo1}`,
  },
  {
    title: "Our Mission",
    description:
      "At Talvox, our mission is to provide top-tier IT solutions, HR services, and Digital Marketing strategies that drive growth and foster innovation. We believe in creating value for our clients by offering customized solutions that meet their unique needs and help them achieve their business goals.",
    logo: `${logo2}`,
  },
  {
    title: "Our Vision",
    description:
      "At Talvox, we envision a future where businesses integrate cutting-edge IT, HR, and digital marketing solutions to drive remarkable growth, engagement, and success. Our aim is to deliver impactful services that enhance operational efficiency, collaboration, and achieve long-term success in the digital era.",
    logo: `${logo3}`,
  },
];

const AboutUsSection = () => {
  return (
    <section id="about-us" className="about-page-container">
      <div className="heading-container">
        <h1>About Us</h1>
      </div>
      <p>
        At Talvox, we are more than just a service provider; we are your
        strategic partner in navigating the complexities of today’s business
        landscape. With our comprehensive suite of IT, HR, and Digital Marketing
        solutions, we help you unlock new opportunities, streamline operations,
        and drive sustainable growth.
      </p>
      <div className="about-list">
        {aboutUsData.map((about, index) => (
          <div
            className="about-card"
            key={index}
            style={{ backgroundImage: about.backgroundImage }}
          >
            <div className="card-header">
              <img
                src={about.logo}
                alt={`${about.title} logo`}
                className="card-logo"
              />
              <h2>{about.title}</h2>
            </div>
            <p>{about.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsSection;
