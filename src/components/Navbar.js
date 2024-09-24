// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
// import logo from '../assets/logo1.png'; // Adjust the path if needed
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import '../Styles/Navbar.css'; // Custom styles if needed

// const CustomNavbar = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const location = useLocation(); // Get the current location

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <header className="navbar-container">
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           {/* Logo Section */}
//           <Link className="navbar-brand" to="/">
//             <img src={logo} alt="Logo" className="logo" />
//           </Link>

//           {/* Hamburger Toggle Button */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             onClick={toggleNav}
//             aria-controls="navbarNav"
//             aria-expanded={isNavOpen ? 'true' : 'false'}
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Navbar Links */}
//           <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/" onClick={() => setIsNavOpen(false)}>
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about" onClick={() => setIsNavOpen(false)}>
//                   About Us
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} to="/services" onClick={() => setIsNavOpen(false)}>
//                   Services
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className={`nav-link ${location.pathname === '/industries' ? 'active' : ''}`} to="/industries" onClick={() => setIsNavOpen(false)}>
//                   Industries
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className={`nav-link ${location.pathname === '/why-talvox' ? 'active' : ''}`} to="/why-talvox" onClick={() => setIsNavOpen(false)}>
//                   Why Talvox
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className={`nav-link ${location.pathname === '/careers' ? 'active' : ''}`} to="/careers" onClick={() => setIsNavOpen(false)}>
//                   Careers
//                 </Link>
//               </li>
//             </ul>
//             <ul className="navbar-nav navbar-contact">
//               <li className="nav-item">
//                 <Link className={`nav-link contact-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact" onClick={() => setIsNavOpen(false)}>
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default CustomNavbar;







import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Navbar.css';

const CustomNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null); // Track active link

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsNavOpen(false);
  };

  const handleLogoClick = () => {
    setActiveLink(null); // Reset active link when logo is clicked
    setIsNavOpen(false);
  };

  return (
    <header className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={handleLogoClick}>
            <img src={logo} alt="Logo" className="logo" />
          </Link>

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

          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link 
                  className={`nav-link ${activeLink === '/' ? 'active' : ''}`} 
                  to="/" 
                  onClick={() => handleLinkClick('/')}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${activeLink === '/about' ? 'active' : ''}`} 
                  to="/about" 
                  onClick={() => handleLinkClick('/about')}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${activeLink === '/services' ? 'active' : ''}`} 
                  to="/services" 
                  onClick={() => handleLinkClick('/services')}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${activeLink === '/industries' ? 'active' : ''}`} 
                  to="/industries" 
                  onClick={() => handleLinkClick('/industries')}
                >
                  Industries
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${activeLink === '/why-talvox' ? 'active' : ''}`} 
                  to="/why-talvox" 
                  onClick={() => handleLinkClick('/why-talvox')}
                >
                  Why Talvox
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${activeLink === '/careers' ? 'active' : ''}`} 
                  to="/careers" 
                  onClick={() => handleLinkClick('/careers')}
                >
                  Careers
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav navbar-contact">
              <li className="nav-item">
                <Link 
                  className={`nav-link contact-link ${activeLink === '/contact' ? 'active' : ''}`} 
                  to="/contact" 
                  onClick={() => handleLinkClick('/contact')}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default CustomNavbar;
