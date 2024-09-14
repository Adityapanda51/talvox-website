import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Industries from './components/Industries';
import WhyTalvox from './components/WhyTalvox';
import Careers from './components/Careers';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
      <Industries />
      <WhyTalvox />
      <Careers />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App


