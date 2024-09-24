import React, { useState } from "react";
import "../Styles/Services.css";

// Import images
import itImage from "../assets/itservice.jpeg";
import hrImage from "../assets/hrservice.jpeg";
import digitalMarketingImage from "../assets/digital-marketing.jpeg";
import ITServices from "./ITServices";
import HRServices from "./HRServices"; // Add HRServices component
import DigitalMarketingServices from "./DigitalMarketingServices"; // Add DigitalMarketingServices component
// import CubeAnimation from "./CubeAnimation";

const ServicesPage = () => {
  const [showITDetails, setShowITDetails] = useState(false);
  const [showHRDetails, setShowHRDetails] = useState(false); // New state for HR services
  const [showDigitalMarketingDetails, setShowDigitalMarketingDetails] =
    useState(false); // New state for Digital Marketing

  const handleShowITDetails = () => {
    setShowITDetails(true);
  };

  const handleCloseDetails = () => {
    setShowITDetails(false);
    setShowHRDetails(false);
    setShowDigitalMarketingDetails(false);
  };

  const handleShowHRDetails = () => {
    setShowHRDetails(true);
  };

  const handleShowDigitalMarketingDetails = () => {
    setShowDigitalMarketingDetails(true);
  };

  if (showITDetails) {
    return <ITServices onClose={handleCloseDetails} />;
  }

  if (showHRDetails) {
    return <HRServices onClose={handleCloseDetails} />; // Render HRServices component
  }

  if (showDigitalMarketingDetails) {
    return <DigitalMarketingServices onClose={handleCloseDetails} />; // Render DigitalMarketingServices component
  }

  return (
    <div id="services" className="services-page-container">

      <div className="heading-container">
      {/* <div>
        <CubeAnimation />
      </div> */}
      <h1>Our Services</h1>
       {/* <div>
        <CubeAnimation />
      </div> */}
      </div>
      <p className="services-page-para"> 
        At Talvox, we provide a comprehensive suite of services designed to help
        businesses thrive in today’s competitive landscape. Whether you need
        cutting-edge IT solutions, strategic HR support, or dynamic digital
        marketing strategies, we’ve got you covered.
      </p>
      <div className="services-grid">
        {/* IT Services Card */}
        <div id="it-services" className="service-card">
          <div className="service-image">
            <img src={itImage} alt="IT Services" />
          </div>
          <div className="service-header">
            <h2>IT Services</h2>
            <p className="service-tagline">"Innovate with Confidence"</p>
          </div>
          <p className="service-description">
            From cutting-edge software development to robust IT infrastructure
            management, Talvox empowers your business with the technology it
            needs to stay ahead in a competitive market. Our IT experts are
            dedicated to creating solutions that are not only innovative but
            also scalable and secure.
          </p>
          <button onClick={handleShowITDetails} className="cta-button btn1">
            Learn More About IT Services
          </button>
        </div>

        {/* HR Services Card */}
        <div id="hr-services" className="service-card">
          <div className="service-image">
            <img src={hrImage} alt="HR Services" />
          </div>
          <div className="service-header">
            <h2>HR Services</h2>
            <p className="service-tagline">"Your Talent, Our Priority"</p>
          </div>
          <p className="service-description">
            People are at the heart of every successful business. Talvox
            provides end-to-end HR services that ensure you attract, retain, and
            develop the best talent. Whether you need recruitment support,
            onboarding assistance, or HR management, our team is here to make
            sure your human resources are aligned with your business goals.
          </p>
          <button onClick={handleShowHRDetails} className="cta-button btn2">
            Explore HR Solutions
          </button>
        </div>

        {/* Digital Marketing Services Card */}
        <div id="digital-marketing" className="service-card">
          <div className="service-image">
            <img src={digitalMarketingImage} alt="Digital Marketing Services" />
          </div>
          <div className="service-header">
            <h2>Digital Marketing</h2>
            <p className="service-tagline">"Amplify Your Brand"</p>
          </div>
          <p className="service-description">
            In the digital age, visibility is key. Our Digital Marketing
            services are designed to enhance your online presence and connect
            you with your target audience. From SEO and social media management
            to content marketing and PPC campaigns, Talvox crafts strategies
            that deliver measurable results.
          </p>
          <button
            onClick={handleShowDigitalMarketingDetails}
            className="cta-button btn3"
          >
            Discover Digital Marketing
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
