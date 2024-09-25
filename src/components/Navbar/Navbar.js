// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo1.png';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../Styles/Navbar.css';

// const CustomNavbar = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState(null); // Track active link

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const handleLinkClick = (path) => {
//     setActiveLink(path);
//     setIsNavOpen(false);
//   };

//   const handleLogoClick = () => {
//     setActiveLink(null); // Reset active link when logo is clicked
//     setIsNavOpen(false);
//   };

//   return (
//     <header className="navbar-container">
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/" onClick={handleLogoClick}>
//             <img src={logo} alt="Logo" className="logo" />
//           </Link>

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

//           <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link 
//                   className={`nav-link ${activeLink === '/' ? 'active' : ''}`} 
//                   to="/" 
//                   onClick={() => handleLinkClick('/')}
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link 
//                   className={`nav-link ${activeLink === '/about' ? 'active' : ''}`} 
//                   to="/about" 
//                   onClick={() => handleLinkClick('/about')}
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link 
//                   className={`nav-link ${activeLink === '/services' ? 'active' : ''}`} 
//                   to="/services" 
//                   onClick={() => handleLinkClick('/services')}
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link 
//                   className={`nav-link ${activeLink === '/industries' ? 'active' : ''}`} 
//                   to="/industries" 
//                   onClick={() => handleLinkClick('/industries')}
//                 >
//                   Industries
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link 
//                   className={`nav-link ${activeLink === '/why-talvox' ? 'active' : ''}`} 
//                   to="/why-talvox" 
//                   onClick={() => handleLinkClick('/why-talvox')}
//                 >
//                   Why Talvox
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link 
//                   className={`nav-link ${activeLink === '/careers' ? 'active' : ''}`} 
//                   to="/careers" 
//                   onClick={() => handleLinkClick('/careers')}
//                 >
//                   Careers
//                 </Link>
//               </li>
//             </ul>
//             <ul className="navbar-nav navbar-contact">
//               <li className="nav-item">
//                 <Link 
//                   className={`nav-link contact-link ${activeLink === '/contact' ? 'active' : ''}`} 
//                   to="/contact" 
//                   onClick={() => handleLinkClick('/contact')}
//                 >
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


















import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const CustomNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const lastScrollY = useRef(0); // Use useRef to persist lastScrollY

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsNavOpen(false);
    setIsDropdownOpen(false);
  };

  const handleLogoClick = () => {
    setActiveLink(null);
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show or hide the navbar based on the scroll direction and threshold
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsNavbarHidden(true); // Hide on scroll down
      } else if (currentScrollY < lastScrollY.current && currentScrollY > 100) {
        setIsNavbarHidden(false); // Show on scroll up
      }

      lastScrollY.current = currentScrollY; // Update lastScrollY
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array

  return (
    <header className={`navbar-container ${isNavbarHidden ? 'navbar-hidden' : ''}`}>
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
                <Link className={`nav-link ${activeLink === '/' ? 'active' : ''}`} to="/" onClick={() => handleLinkClick('/')}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeLink === '/about' ? 'active' : ''}`} to="/about" onClick={() => handleLinkClick('/about')}>
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <button className="btn nav-link dropdown-toggle" onClick={toggleDropdown} aria-expanded={isDropdownOpen}>
                  Services 
                  <span className={`dropdown-caret ${isDropdownOpen ? 'open' : ''}`}>
                    {isDropdownOpen ? '\u25B2' : '\u25BC'}
                  </span>
                </button>
                <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                  <li>
                    <Link className="dropdown-item" to="/it-services" onClick={() => handleLinkClick('it-services')}>
                      IT Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/hr-services" onClick={() => handleLinkClick('/hr-services')}>
                      HR Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/digital-marketing" onClick={() => handleLinkClick('/digital-marketing')}>
                      Digital Marketing <br /> Services
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeLink === '/industries' ? 'active' : ''}`} to="/industries" onClick={() => handleLinkClick('/industries')}>
                  Industries
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeLink === '/why-talvox' ? 'active' : ''}`} to="/why-talvox" onClick={() => handleLinkClick('/why-talvox')}>
                  Why Talvox
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeLink === '/careers' ? 'active' : ''}`} to="/careers" onClick={() => handleLinkClick('/careers')}>
                  Careers
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav navbar-contact">
              <li className="nav-item">
                <Link className={`nav-link contact-link ${activeLink === '/contact' ? 'active' : ''}`} to="/contact" onClick={() => handleLinkClick('/contact')}>
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








// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo1.png';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../Styles/Navbar.css';

// const CustomNavbar = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState(null);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isNavbarHidden, setIsNavbarHidden] = useState(false);
//   const lastScrollY = useRef(0); // Use useRef to persist lastScrollY

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   const handleLinkClick = (path) => {
//     setActiveLink(path);
//     setIsNavOpen(false);
//     setIsDropdownOpen(false); // Close dropdown on link click
//   };

//   const handleLogoClick = () => {
//     setActiveLink(null);
//     setIsNavOpen(false);
//     setIsDropdownOpen(false); // Close dropdown when logo is clicked
//   };

//   const handleMouseEnter = () => {
//     setIsDropdownOpen(true); // Open dropdown on hover
//   };

//   const handleMouseLeave = () => {
//     setIsDropdownOpen(false); // Close dropdown when not hovering
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       // Show or hide the navbar based on the scroll direction and threshold
//       if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
//         setIsNavbarHidden(true); // Hide on scroll down
//       } else if (currentScrollY < lastScrollY.current && currentScrollY > 100) {
//         setIsNavbarHidden(false); // Show on scroll up
//       }

//       lastScrollY.current = currentScrollY; // Update lastScrollY
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []); // Empty dependency array

//   return (
//     <header className={`navbar-container ${isNavbarHidden ? 'navbar-hidden' : ''}`}>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/" onClick={handleLogoClick}>
//             <img src={logo} alt="Logo" className="logo" />
//           </Link>

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

//           <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className={`nav-link ${activeLink === '/' ? 'active' : ''}`} to="/" onClick={() => handleLinkClick('/')}>
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className={`nav-link ${activeLink === '/about' ? 'active' : ''}`} to="/about" onClick={() => handleLinkClick('/about')}>
//                   About Us
//                 </Link>
//               </li>

//               <li className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//                 <button
//                   className="btn nav-link dropdown-toggle"
//                   onClick={toggleDropdown}
//                   aria-expanded={isDropdownOpen}
//                 >
//                   Services 
//                   <span className={`dropdown-caret ${isDropdownOpen ? 'open' : ''}`}>
//                     {isDropdownOpen ? '\u25B2' : '\u25BC'}
//                   </span>
//                 </button>
//                 <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
//                   <li>
//                     <Link className="dropdown-item" to="/it-services" onClick={() => handleLinkClick('/it-services')}>
//                       IT Services
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/hr-services" onClick={() => handleLinkClick('/hr-services')}>
//                       HR Services
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/digital-marketing" onClick={() => handleLinkClick('/digital-marketing')}>
//                       Digital Marketing <br /> Services
//                     </Link>
//                   </li>
//                 </ul>
//               </li>

//               <li className="nav-item">
//                 <Link className={`nav-link ${activeLink === '/industries' ? 'active' : ''}`} to="/industries" onClick={() => handleLinkClick('/industries')}>
//                   Industries
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className={`nav-link ${activeLink === '/why-talvox' ? 'active' : ''}`} to="/why-talvox" onClick={() => handleLinkClick('/why-talvox')}>
//                   Why Talvox
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className={`nav-link ${activeLink === '/careers' ? 'active' : ''}`} to="/careers" onClick={() => handleLinkClick('/careers')}>
//                   Careers
//                 </Link>
//               </li>
//             </ul>
//             <ul className="navbar-nav navbar-contact">
//               <li className="nav-item">
//                 <Link className={`nav-link contact-link ${activeLink === '/contact' ? 'active' : ''}`} to="/contact" onClick={() => handleLinkClick('/contact')}>
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




