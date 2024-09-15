import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png';
import '../Styles/Navbar.css';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg" className={`custom-navbar ${isNavOpen ? 'active' : ''}`}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Talvox Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav} />
        <Navbar.Collapse id="basic-navbar-nav" className={isNavOpen ? 'show' : ''}>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#industries">Industries</Nav.Link>
            <Nav.Link href="#why-talvox">Why Talvox</Nav.Link>
            <Nav.Link href="#careers">Careers</Nav.Link>
            <Nav.Link href="#contact" className="contact-link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;




