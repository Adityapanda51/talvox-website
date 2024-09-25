import React from "react";
import "./WhatWeOfferSection.css";


import itImage from "../../../assets/it2.jpg";
import hrImage from "../../../assets/hr2.jpeg";
import digitalmarketingImage from "../../../assets/digitalmarketing2.webp";

const WhatWeOfferSection = () => {
  return (
    <section id="what-we-offer" className="what-we-offer">
      <div className="heading-container">
        <h1>What We Offer</h1>
      </div>
      <div className="offer-container">
        <div className="offer-card">
          <div className="card-image">
            <img src={itImage} alt="IT Services" />
          </div>
          <div className="card-content">
            <h3>IT Services</h3>
            <p>
              From software development and IT consulting to cloud solutions and
              cybersecurity, our IT services are designed to enhance your
              operational efficiency and ensure your business is always ahead of
              the curve. We leverage the latest technologies to deliver
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
  );
};

export default WhatWeOfferSection;
