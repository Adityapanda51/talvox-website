import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import Industries from './components/Industries/Industries';
import WhyTalvox from './components/WhyTalvox/WhyTalvox';
import Careers from './components/Careers/Careers';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS
import ITServices from './components/ITServices/ITServices';
import HRDetailPage from './components/HRServices/HRServices';
import DigitalMarketingDetailPage from './components/DigitalMarketingServices/DigitalMarketingServices';
import CustomNavbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';


const App = () => {
  return (
    <Router>
      {/* Navbar is visible on all pages */}
      {/* <Navbar /> */}
      <CustomNavbar />
      <Routes>
        {/* Define routes for each component */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/it-services" element={<ITServices />} />
        <Route path="/hr-services" element={<HRDetailPage />} />
        <Route path="/digital-marketing" element={<DigitalMarketingDetailPage />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/why-talvox" element={<WhyTalvox />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* Footer can be shown on every page */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
