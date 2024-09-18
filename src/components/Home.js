
import React from 'react';
import '../Styles/Home.css';
import AboutUs from './AboutUs';

const Home = () => {
  return (
    <div>
      <section id="home" className="home-section">
        <div className="hero-content">
          <h1>Empowering Businesses with IT, HR, and Digital Marketing Solutions</h1>
          <p>Your Partner in Innovation, Talent, and Growth</p>
          <div className="cta-buttons">
            <a href="services" className="cta-btn secondary">Explore Our Services</a>
          </div>
        </div>
      </section>
      
      {/* Include AboutUs section */}
      <AboutUs />
    </div>
  );
};

export default Home;


