




// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../assets/logo1.png';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Navbar.css';

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
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleLinkClick = (path) => {
//     setActiveLink(path);
//     setIsNavOpen(false);
//     setIsDropdownOpen(false);
//   };

//   const handleLogoClick = () => {
//     setActiveLink(null);
//     setIsNavOpen(false);
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
//               <li className="nav-item dropdown">
//                 <button className="btn nav-link dropdown-toggle" onClick={toggleDropdown} aria-expanded={isDropdownOpen}>
//                   Services 
//                   <span className={`dropdown-caret ${isDropdownOpen ? 'open' : ''}`}>
//                     {isDropdownOpen ? '\u25B2' : '\u25BC'}
//                   </span>
//                 </button>
//                 <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
//                   <li>
//                     <Link className="dropdown-item" to="/it-services" onClick={() => handleLinkClick('it-services')}>
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








import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo_talvox.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const CustomNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false); // Track mobile view
  const lastScrollY = useRef(0);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDropdown = () => {
    if (isMobileView) {
      setIsDropdownOpen(!isDropdownOpen); // Toggle only on mobile
    }
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

  // Detect mobile view based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Set mobile view for screen widths <= 768px
    };
    handleResize(); // Set on initial load
    window.addEventListener('resize', handleResize); // Update on resize

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle navbar hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsNavbarHidden(true);
      } else if (currentScrollY < lastScrollY.current && currentScrollY > 100) {
        setIsNavbarHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
              <li className="nav-item dropdown"
                onMouseEnter={() => !isMobileView && setIsDropdownOpen(true)} // Open on hover (desktop)
                onMouseLeave={() => !isMobileView && setIsDropdownOpen(false)} // Close on hover out (desktop)
              >
                <button
                  className="btn nav-link dropdown-toggle"
                  onClick={toggleDropdown} // Open on click (mobile)
                  aria-expanded={isDropdownOpen}
                >
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
                      Digital Marketing Services
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


