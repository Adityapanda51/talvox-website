import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
