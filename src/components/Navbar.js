


import React, { useState } from 'react';
import logo from '../assets/logo1.png'; // Adjust the path if needed
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../Styles/Navbar.css'; // Custom styles if needed

const CustomNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Logo Section */}
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" className="logo" />
          </a>

          {/* Hamburger Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            aria-controls="navbarNav"
            aria-expanded={isNavOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/industries">Industries</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/why-talvox">Why Talvox</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/careers">Careers</a>
              </li>
            </ul>
            <ul className="navbar-nav navbar-contact">
              <li className="nav-item">
                <a className="nav-link contact-link" href="/contact">Contact Us</a>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </header>
  );
};

export default CustomNavbar;
