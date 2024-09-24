// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import AboutUs from './components/AboutUs';
// import Services from './components/Services';
// import Industries from './components/Industries';
// import WhyTalvox from './components/WhyTalvox';
// import Careers from './components/Careers';
// import ContactUs from './components/ContactUs';
// import Footer from './components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <AboutUs />
//       <Services />
//       <Industries />
//       <WhyTalvox />
//       <Careers />
//       <ContactUs />
//       <Footer />
//     </div>
//   )
// }

// export default App



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Services from './components/Services';
import Industries from './components/Industries';
import WhyTalvox from './components/WhyTalvox';
import Careers from './components/Careers';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS
import ITServices from './components/ITServices';
import HRDetailPage from './components/HRServices';
import DigitalMarketingDetailPage from './components/DigitalMarketingServices';
import CustomNavbar from './components/Navbar';


const App = () => {
  return (
    <Router>
      {/* Navbar is visible on all pages */}
      {/* <Navbar /> */}
      <CustomNavbar />
      <Routes>
        {/* Define routes for each component */}
        <Route path="/" element={<Home />} />
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
