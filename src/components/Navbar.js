import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Adjust the path if needed
import '../Styles/Navbar.css'; // Ensure this path is correct

const CustomNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="navbar-container">
      <div className="navbar">
        {/* Logo Section */}
        <div className="logo-container">
          <a href="/">
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>
        
        {/* Hamburger Toggle */}
        <button className="navbar-toggle" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navbar Links */}
        <nav className={`nav-links ${isNavOpen ? 'open' : ''}`}>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/industries">Industries</a>
          <a href="/why-talvox">Why Talvox</a>
          <a href="/careers">Careers</a>
          <a href="/contact" className="contact-link">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default CustomNavbar;

