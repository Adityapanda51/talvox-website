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








// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo1.png';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../Styles/Navbar.css';

// const CustomNavbar = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState(null); // Track active link
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown state

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleLinkClick = (path) => {
//     setActiveLink(path);
//     setIsNavOpen(false);
//     setIsDropdownOpen(false); // Close dropdown when link is clicked
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
//                   onClick={() => handleLinkClick('/')}>
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link 
//                   className={`nav-link ${activeLink === '/about' ? 'active' : ''}`} 
//                   to="/about" 
//                   onClick={() => handleLinkClick('/about')}>
//                   About Us
//                 </Link>
//               </li>
//               {/* <li className="nav-item">
//                  <Link 
//                    className={`nav-link ${activeLink === '/services' ? 'active' : ''}`} 
//                    to="/services" 
//                    onClick={() => handleLinkClick('/services')}
//                  >
//                    Services
//                  </Link>
//                </li> */}




//               <li className="nav-item dropdown">
//                 <button 
//                   className="btn nav-link dropdown-toggle" 
//                   onClick={toggleDropdown}
//                   aria-expanded={isDropdownOpen}>
//                   Services 
//                   <span className={`dropdown-caret ${isDropdownOpen ? 'open' : ''}`}>
//                   {isDropdownOpen ? '\u25B2' : '\u25BC'} {/* Up and Down arrow */}
//                  </span>
//                 </button>
//                 <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
//                   <li>
//                     <Link 
//                       className="dropdown-item" 
//                       to="/it-services"
//                       onClick={() => handleLinkClick('it-services')}>
//                       IT Services
//                     </Link>
//                   </li>
//                   <li>
//                     <Link 
//                       className="dropdown-item" 
//                       to="/hr-services"
//                       onClick={() => handleLinkClick('/hr-services')}>
//                       HR Services
//                     </Link>
//                   </li>
//                   <li>
//                     <Link 
//                       className="dropdown-item" 
//                       to="/digital-marketing"
//                       onClick={() => handleLinkClick('/digital-marketing')}>
//                       Digital Marketing <br></br>Services
//                     </Link>
//                   </li>
//                 </ul>
//               </li>


//               <li className="nav-item">
//                 <Link 
//                   className={`nav-link ${activeLink === '/industries' ? 'active' : ''}`} 
//                   to="/industries" 
//                   onClick={() => handleLinkClick('/industries')}>
//                   Industries
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link 
//                   className={`nav-link ${activeLink === '/why-talvox' ? 'active' : ''}`} 
//                   to="/why-talvox" 
//                   onClick={() => handleLinkClick('/why-talvox')}>
//                   Why Talvox
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link 
//                   className={`nav-link ${activeLink === '/careers' ? 'active' : ''}`} 
//                   to="/careers" 
//                   onClick={() => handleLinkClick('/careers')}>
//                   Careers
//                 </Link>
//               </li>
//             </ul>
//             <ul className="navbar-nav navbar-contact">
//               <li className="nav-item">
//                 <Link 
//                   className={`nav-link contact-link ${activeLink === '/contact' ? 'active' : ''}`} 
//                   to="/contact" 
//                   onClick={() => handleLinkClick('/contact')}>
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







import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Navbar.css';

const CustomNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null); // Track active link
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown state
  const [isNavbarHidden, setIsNavbarHidden] = useState(false); // Track navbar visibility

  let lastScrollY = window.scrollY;

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsNavOpen(false);
    setIsDropdownOpen(false); // Close dropdown when link is clicked
  };

  const handleLogoClick = () => {
    setActiveLink(null); // Reset active link when logo is clicked
    setIsNavOpen(false);
  };

  // Function to handle navbar visibility based on scroll direction
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setIsNavbarHidden(true);
    } else {
      // Scrolling up
      setIsNavbarHidden(false);
    }
    lastScrollY = window.scrollY;
  };

  // Add and remove scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, );

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
                <Link 
                  className={`nav-link ${activeLink === '/' ? 'active' : ''}`} 
                  to="/" 
                  onClick={() => handleLinkClick('/')}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${activeLink === '/about' ? 'active' : ''}`} 
                  to="/about" 
                  onClick={() => handleLinkClick('/about')}>
                  About Us
                </Link>
              </li>

              <li className="nav-item dropdown">
                <button 
                  className="btn nav-link dropdown-toggle" 
                  onClick={toggleDropdown}
                  aria-expanded={isDropdownOpen}>
                  Services 
                  <span className={`dropdown-caret ${isDropdownOpen ? 'open' : ''}`}>
                  {isDropdownOpen ? '\u25B2' : '\u25BC'} {/* Up and Down arrow */}
                 </span>
                </button>
                <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                  <li>
                    <Link 
                      className="dropdown-item" 
                      to="/it-services"
                      onClick={() => handleLinkClick('it-services')}>
                      IT Services
                    </Link>
                  </li>
                  <li>
                    <Link 
                      className="dropdown-item" 
                      to="/hr-services"
                      onClick={() => handleLinkClick('/hr-services')}>
                      HR Services
                    </Link>
                  </li>
                  <li>
                    <Link 
                      className="dropdown-item" 
                      to="/digital-marketing"
                      onClick={() => handleLinkClick('/digital-marketing')}>
                      Digital Marketing <br></br>Services
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link 
                  className={`nav-link ${activeLink === '/industries' ? 'active' : ''}`} 
                  to="/industries" 
                  onClick={() => handleLinkClick('/industries')}>
                  Industries
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${activeLink === '/why-talvox' ? 'active' : ''}`} 
                  to="/why-talvox" 
                  onClick={() => handleLinkClick('/why-talvox')}>
                  Why Talvox
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${activeLink === '/careers' ? 'active' : ''}`} 
                  to="/careers" 
                  onClick={() => handleLinkClick('/careers')}>
                  Careers
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav navbar-contact">
              <li className="nav-item">
                <Link 
                  className={`nav-link contact-link ${activeLink === '/contact' ? 'active' : ''}`} 
                  to="/contact" 
                  onClick={() => handleLinkClick('/contact')}>
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
