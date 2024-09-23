import React from "react";
import "../Styles/Home.css";

// import techImage from "../assets/automotive-tech.webp";
// import healthcareImage from "../assets/health.jpeg";
// import BfsiImage from "../assets/bfsi.webp";
// import SemiconductorImage from "../assets/semiconductor.jpeg";
// import HitechProductImage from "../assets/hitechproduct.jpg";
// import StartupHiringImage from "../assets/startup-hiring.webp";
// import whoWeImage from "../assets/whoweare.jpg";
import logo1 from "../assets/whoweare.jpg";
import logo2 from "../assets/mission.jpg";
import logo3 from "../assets/vision.jpg";

import itImage from "../assets/it2.jpg";
import hrImage from "../assets/hr2.jpeg";
import digitalmarketingImage from "../assets/digitalmarketing2.webp";
import Industries from "./Industries";
// import CubeAnimation from "./CubeAnimation";

const aboutUsData = [
  {
    title: "Who We Are",
    description:
      "Welcome to Talvox, where innovation meets excellence. Founded with a vision to bridge the gap between technology, human resources, and digital marketing, Talvox is a dynamic startup committed to delivering comprehensive solutions that empower businesses to thrive in today's fast-paced world.",
    // backgroundImage: `url(${whoWeImage})`,
    logo: `${logo1}`,
  },
  {
    title: "Our Mission",
    description:
      "At Talvox, our mission is to provide top-tier IT solutions, HR services, and Digital Marketing strategies that drive growth and foster innovation. We believe in creating value for our clients by offering customized solutions that meet their unique needs and help them achieve their business goals.",
    // backgroundImage: `url(${techImage})`,
    logo: `${logo2}`,
  },
  {
    title: "Our Vision",
    description:
      "At Talvox, we envision a future where businesses integrate cutting-edge IT, HR, and digital marketing solutions to drive remarkable growth, engagement, and success. Our aim is to deliver impactful services that enhance operational efficiency, collaboration, and achieve long-term success in the digital era. ",
    // backgroundImage: `url(${techImage})`,
    logo: `${logo3}`,
  },
];

// const specialitiesData = [
//   {
//     title: "Automotive Tech",
//     description:
//       "Embedded ADAS, Equipment Manufacturing, Automotive Body Design, MATLAB E-Mobility, Computer Vision, Physical Design, AI Tech Hiring ...",
//     backgroundImage: `url(${techImage})`,
//   },
//   {
//     title: "PHL & Pharma Tech",
//     description:
//       "Pharma, Healthcare, Lifesciences, Deep Imaging, Medical Devices Technology, Molecule Development, API Development, Formulations Specialist Hiring ...",
//     backgroundImage: `url(${healthcareImage})`,
//   },
//   {
//     title: "BFSI Tech",
//     description:
//       "Core Banking, Financial, Insurance & Services, Payments, DS, Broking & Investment Fintech GSC, Non-Tech, Financial & Functional ...",
//     backgroundImage: `url(${BfsiImage})`,
//   },
//   {
//     title: "Semiconductor",
//     description:
//       "5G, Chip Design, Physical Design, Embedded C++, GPU, Pre-silicon Verification, SoC, Mixed Signal systems, Embedded AI ...",
//     backgroundImage: `url(${SemiconductorImage})`,
//   },
//   {
//     title: "HiTech Product Engineering",
//     description:
//       "IOT, Bigdata, Data Sciences, Platform Engineering, HDFS, NFS, Storage File Systems, Cloud ERP, Artificial Intelligence Engineering, MDM, Digital Mobility ...",
//     backgroundImage: `url(${HitechProductImage})`,
//   },
//   {
//     title: "Start-up Hiring Solutions",
//     description:
//       "Platform Engineering, SAAS, PAAS, IAAS, Cloud, Large Scale Distributed File Systems, HDFS, Data Sciences & Analytics in varied domains ...",
//     backgroundImage: `url(${StartupHiringImage})`,
//   },
// ];

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

      <section id="about-us" className="about-page-container">
        {/* <h1>About Us</h1> */}

        <div className="heading-container">
        {/* <div>
        <CubeAnimation />
      </div> */}
          <h1>About Us</h1>
          {/* <div>
            <CubeAnimation />
          </div> */}
        </div>
        <p>
          At Talvox, we are more than just a service provider; we are your
          strategic partner in navigating the complexities of today’s business
          landscape. With our comprehensive suite of IT, HR, and Digital
          Marketing solutions, we help you unlock new opportunities, streamline
          operations, and drive sustainable growth.
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
                />{" "}
                {/* Logo */}
                <h2>{about.title}</h2>
              </div>
              {/* <h2>{about.title}</h2> */}
              <p>{about.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="what-we-offer" className="what-we-offer">
        {/* <h2>What We Offer</h2> */}

        <div className="heading-container">
        {/* <div>
        <CubeAnimation />
      </div> */}
          <h1>What We Offer</h1>
          {/* <div>
            <CubeAnimation />
          </div> */}
        </div>
        <div className="offer-container">
          <div className="offer-card">
            <div className="card-image">
              <img src={itImage} alt="IT Services" />
            </div>
            <div className="card-content">
              <h3>IT Services</h3>
              <p>
                From software development and IT consulting to cloud solutions
                and cybersecurity, our IT services are designed to enhance your
                operational efficiency and ensure your business is always ahead
                of the curve. We leverage the latest technologies to deliver
                solutions that are scalable, secure, and tailored to your
                specific requirements.
              </p>
            </div>
          </div>

          <div className="offer-card">
            <div className="card-image">
              <img src={hrImage} alt="HR Services" />
            </div>
            <div className="card-content">
              <h3>HR Services</h3>
              <p>
                People are the backbone of any successful organization. At
                Talvox, we offer a range of HR services, including recruitment,
                talent management, and employee engagement, to help you build a
                motivated and productive workforce.
              </p>
            </div>
          </div>

          <div className="offer-card">
            <div className="card-image">
              <img src={digitalmarketingImage} alt="Digital Marketing" />
            </div>
            <div className="card-content">
              <h3>Digital Marketing</h3>
              <p>
                In today’s digital landscape, having a strong online presence is
                crucial. Talvox provides comprehensive digital marketing
                services, including SEO, social media management, content
                marketing, and pay-per-click advertising.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section id="why-talvox" className="why-talvox-section">
        {/* <h2>Why Choose Talvox?</h2> */}


        <div className="heading-container">
        {/* <div>
        <CubeAnimation />
      </div> */}
        <h1>Why Choose Talvox?</h1>
          {/* <div>
            <CubeAnimation />
          </div> */}
        </div>
        <ul className="why-talvox-list">
          <li>
            <strong>Holistic Approach:</strong> We understand that every
            business is unique, which is why we offer tailored solutions that
            address your specific needs across IT, HR, and Digital Marketing.
          </li>
          <li>
            <strong>Expert Team:</strong> Our team is composed of seasoned
            professionals with deep industry knowledge and a passion for
            innovation.
          </li>
          <li>
            <strong>Customer-Centric:</strong> Your success is our priority. We
            work closely with you to ensure that our solutions not only meet but
            exceed your expectations.
          </li>
          <li>
            <strong>Innovation-Driven:</strong> At Talvox, we are constantly
            exploring new technologies and strategies to stay ahead of industry
            trends and deliver cutting-edge solutions.
          </li>
        </ul>
      </section>

      {/* <section id="specialities" className="specialities-page-container">
        <h1>Industry Specialities</h1>
          Mapping is Our DNA and Acquisition is our Expertise.
        <div className="specialities-list">
          {specialitiesData.map((speciality, index) => (
            <div
              className="speciality-card"
              key={index}
              style={{ backgroundImage: speciality.backgroundImage }}>
              <h2>{speciality.title}</h2>
              <p>{speciality.description}</p>
              <a href={speciality.link} className="know-more-link">
                Know More
              </a>
            </div>
          ))}
        </div>
      </section> */}

      <Industries />
    </div>
  );
};

export default Home;
