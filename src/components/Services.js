// import React, { useState } from 'react';
// import '../Styles/Services.css';

// // Import images
// import itImage from '../assets/itservice.jpeg';
// import hrImage from '../assets/hrservice.jpeg';
// import digitalMarketingImage from '../assets/digital-marketing.jpeg';

// const ServicesPage = () => {
//   // State to track which service's details are visible
//   const [activeService, setActiveService] = useState(null);

//   // Handler functions
//   const showDetails = (service) => {
//     setActiveService(service);
//   };

//   const hideDetails = () => {
//     setActiveService(null);
//   };

//   return (
//     <div id='services' className="services-page-container">
//       <h1>Our Services</h1>
//       <div className="services-grid">
//         {/* IT Services Card */}
//         <div id='it-services' className="service-card">
//           <div className="service-image">
//             <img src={itImage} alt="IT Services" />
//           </div>
//           <div className="service-header">
//             <h2>IT Services</h2>
//             <p className="service-tagline">"Innovate with Confidence"</p>
//           </div>
//           <p className="service-description">
//             From cutting-edge software development to robust IT infrastructure management, Talvox empowers your business with the technology it needs to stay ahead in a competitive market. Our IT experts are dedicated to creating solutions that are not only innovative but also scalable and secure.
//           </p>
//           <button className="cta-button" onClick={() => showDetails('IT')}>Learn More About IT Services</button>
//         </div>

//         {/* HR Services Card */}
//         <div id='hr-services' className="service-card">
//           <div className="service-image">
//             <img src={hrImage} alt="HR Services" />
//           </div>
//           <div className="service-header">
//             <h2>HR Services</h2>
//             <p className="service-tagline">"Your Talent, Our Priority"</p>
//           </div>
//           <p className="service-description">
//             People are at the heart of every successful business. Talvox provides end-to-end HR services that ensure you attract, retain, and develop the best talent. Whether you need recruitment support, onboarding assistance, or HR management, our team is here to make sure your human resources are aligned with your business goals.
//           </p>
//           <button className="cta-button" onClick={() => showDetails('HR')}>Explore HR Solutions</button>
//         </div>

//         {/* Digital Marketing Services Card */}
//         <div id='digital-marketing' className="service-card">
//           <div className="service-image">
//             <img src={digitalMarketingImage} alt="Digital Marketing Services" />
//           </div>
//           <div className="service-header">
//             <h2>Digital Marketing</h2>
//             <p className="service-tagline">"Amplify Your Brand"</p>
//           </div>
//           <p className="service-description">
//             In the digital age, visibility is key. Our Digital Marketing services are designed to enhance your online presence and connect you with your target audience. From SEO and social media management to content marketing and PPC campaigns, Talvox crafts strategies that deliver measurable results.
//           </p>
//           <button className="cta-button" onClick={() => showDetails('DigitalMarketing')}>Discover Digital Marketing</button>
//         </div>
//       </div>

//       {/* Details Section */}
//       {activeService === 'IT' && (
//         <div className="service-details">
//           <h2>IT Services</h2>
//       <p>
//         At <strong>Talvox</strong>, we offer a comprehensive suite of IT services designed to meet the dynamic needs of
//         businesses across various industries. Our expertise spans from innovative software development to robust IT
//         infrastructure management, ensuring your business stays ahead in the fast-evolving digital landscape.
//       </p>

//       <h3>Our IT Services</h3>

//       <h4>Software Development</h4>
//       <p>
//         <strong>Custom Software Solutions:</strong> We specialize in developing tailor-made software solutions that align with your business goals. Whether it's a web application, mobile app, or complex enterprise system, our development team delivers high-quality, scalable software that drives results.
//       </p>
//       <p>
//         <strong>Web Development:</strong> Our web development services include the creation of responsive, user-friendly websites and web applications that enhance your online presence and deliver an exceptional user experience.
//       </p>
//       <p>
//         <strong>Mobile App Development:</strong> From concept to deployment, we build intuitive and feature-rich mobile applications for both iOS and Android platforms, helping you reach your customers wherever they are.
//       </p>

//       <h4>IT Consulting</h4>
//       <p>
//         <strong>Technology Strategy:</strong> Our IT consulting services provide you with the expertise needed to develop and implement a technology strategy that supports your business objectives. We help you identify the right technologies to drive efficiency and innovation.
//       </p>
//       <p>
//         <strong>System Integration:</strong> Seamlessly integrate new technologies with your existing systems. Our experts ensure that all your IT components work together efficiently, reducing downtime and enhancing productivity.
//       </p>
//       <p>
//         <strong>Digital Transformation:</strong> We guide businesses through their digital transformation journey, leveraging cutting-edge technologies to modernize operations, improve customer engagement, and unlock new opportunities for growth.
//       </p>

//       <h4>IT Infrastructure Management</h4>
//       <p>
//         <strong>Cloud Solutions:</strong> We offer comprehensive cloud services, including cloud migration, management, and optimization. Whether you're looking to move to the cloud or enhance your current setup, we provide the support needed to maximize your cloud investments.
//       </p>
//       <p>
//         <strong>Network and Security:</strong> Protect your business with our advanced network and security solutions. We design, implement, and manage secure network infrastructures that safeguard your data and ensure business continuity.
//       </p>
//       <p>
//         <strong>Managed IT Services:</strong> Focus on your core business while we manage your IT infrastructure. Our managed services include monitoring, maintenance, and support, ensuring your systems run smoothly around the clock.
//       </p>

//       <h4>Data Analytics</h4>
//       <p>
//         <strong>Business Intelligence:</strong> Transform your data into actionable insights with our business intelligence solutions. We help you analyze data, identify trends, and make informed decisions that drive success.
//       </p>
//       <p>
//         <strong>Data Management:</strong> Ensure the accuracy, security, and accessibility of your data with our comprehensive data management services. We provide data storage, backup, and recovery solutions tailored to your needs.
//       </p>
//       <p>
//         <strong>Advanced Analytics:</strong> Leverage advanced analytics to gain deeper insights into your business operations. Our data scientists use cutting-edge tools and techniques to uncover patterns, predict trends, and optimize performance.
//       </p>

//       <h4>IT Support and Maintenance</h4>
//       <p>
//         <strong>24/7 Support:</strong> Our dedicated support team is available around the clock to address any IT issues you may encounter. We offer fast, reliable support to keep your systems up and running.
//       </p>
//       <p>
//         <strong>Proactive Maintenance:</strong> We take a proactive approach to IT maintenance, identifying and resolving potential issues before they impact your business. Our services include regular system updates, patches, and performance tuning.
//       </p>
//       <p>
//         <strong>End-User Support:</strong> We provide comprehensive support for your end users, ensuring they have the tools and assistance they need to be productive and efficient.
//       </p>

//       <h3>Why Choose Talvox?</h3>
//       <p>
//         <strong>Experienced Team:</strong> Our team of IT professionals brings years of experience across various industries, ensuring we understand your unique needs and deliver solutions that exceed expectations.
//       </p>
//       <p>
//         <strong>Customer-Centric Approach:</strong> We prioritize your business objectives and work closely with you to deliver IT solutions that align with your goals.
//       </p>
//       <p>
//         <strong>Innovative Solutions:</strong> At Talvox, we stay ahead of the curve by leveraging the latest technologies and best practices to provide innovative solutions that drive business success.
//       </p>
//       <p>
//         <strong>Scalable Services:</strong> Whether you’re a startup or an established enterprise, our services are designed to scale with your business, supporting your growth every step of the way.
//       </p>

//       <h3>Get in Touch</h3>
//       <p>
//         Ready to take your IT capabilities to the next level? Contact us today to learn how Talvox can help you achieve your business goals with our comprehensive IT services.
//       </p>
//           <button onClick={hideDetails} className="cta-button">Close Details</button>
//         </div>
//       )}

//       {activeService === 'HR' && (
//         <div className="service-details">
//            <h2>HR Services</h2>
//            <p>
//         At Talvox, we understand that people are the most valuable asset of any organization. Our HR services are designed to help businesses attract, retain, and develop top talent while ensuring compliance and fostering a positive workplace culture. Whether you're a startup or a growing enterprise, our comprehensive HR solutions are tailored to meet your unique needs.
//       </p>
//       <h3>Our HR Solutions</h3>

//       <div>
//         <h4>1. Talent Acquisition</h4>
//         <p>
//           Finding the right talent is crucial for the success of your business. Talvox provides end-to-end recruitment services, from job posting and candidate sourcing to interviews and onboarding. We specialize in matching the best candidates with your company culture and job requirements, ensuring a perfect fit every time.
//         </p>
//         <ul className="no-bullets">
//           <li>Executive Search</li>
//           <li>Volume Hiring</li>
//           <li>Internship Programs</li>
//           <li>Remote Workforce Recruitment</li>
//         </ul>
//       </div>

//       <div>
//         <h4>2. Onboarding and Offboarding</h4>
//         <p>
//           A smooth onboarding process sets the tone for a positive employee experience. Talvox offers structured onboarding programs that integrate new hires quickly and effectively into your team. Similarly, our offboarding services ensure a respectful and compliant exit process.
//         </p>
//         <ul className="no-bullets">
//           <li>Customized Onboarding Plans</li>
//           <li>New Hire Orientation</li>
//           <li>Exit Interviews</li>
//           <li>Knowledge Transfer Support</li>
//         </ul>
//       </div>

//       <div>
//         <h4>3. Performance Management</h4>
//         <p>
//           Unlock the full potential of your workforce with our performance management services. We help you set clear goals, provide regular feedback, and implement performance appraisals that align with your company's objectives.
//         </p>
//         <ul className="no-bullets">
//           <li>Goal Setting and Alignment</li>
//           <li>Continuous Feedback Systems</li>
//           <li>360-Degree Reviews</li>
//           <li>Employee Development Plans</li>
//         </ul>
//       </div>

//       <div>
//         <h4>4. Employee Engagement and Retention</h4>
//         <p>
//           Engaged employees are more productive and loyal. Talvox offers strategies to boost employee engagement through recognition programs, surveys, and personalized career development plans. Our retention strategies focus on creating a positive work environment that encourages long-term commitment.
//         </p>
//         <ul className="no-bullets">
//           <li>Employee Recognition Programs</li>
//           <li>Engagement Surveys</li>
//           <li>Career Pathing</li>
//           <li>Work-Life Balance Initiatives</li>
//         </ul>
//       </div>

//       <div>
//         <h4>5. HR Compliance and Policy Management</h4>
//         <p>
//           Navigating the complex landscape of employment laws and regulations can be challenging. Talvox ensures that your business remains compliant with all relevant laws, reducing the risk of legal issues. We also help you create and maintain HR policies that reflect your company values.
//         </p>
//         <ul className="no-bullets">
//           <li>Policy Development</li>
//           <li>Regulatory Compliance</li>
//           <li>Employee Handbook Creation</li>
//           <li>HR Audits</li>
//         </ul>
//       </div>

//       <div>
//         <h4>6. Learning and Development</h4>
//         <p>
//           Investing in your employees' growth is essential for long-term success. Talvox offers customized training programs that enhance skills, knowledge, and leadership capabilities, ensuring your team is always prepared to meet new challenges.
//         </p>
//         <ul className="no-bullets">
//           <li>Leadership Development</li>
//           <li>Skill Enhancement Workshops</li>
//           <li>E-Learning Platforms</li>
//           <li>Mentorship Programs</li>
//         </ul>
//       </div>

//       <div>
//         <h4>7. Payroll and Benefits Administration</h4>
//         <p>
//           Managing payroll and benefits can be time-consuming and complex. Talvox simplifies the process by providing accurate and timely payroll services, along with comprehensive benefits administration, ensuring your employees are compensated fairly and enjoy the benefits they deserve.
//         </p>
//         <ul className="no-bullets">
//           <li>Payroll Processing</li>
//           <li>Tax Compliance</li>
//           <li>Benefits Enrollment and Management</li>
//           <li>Employee Assistance Programs</li>
//         </ul>
//       </div>

//       <h3>Why Choose Talvox?</h3>
//       <ul className="no-bullets">
//         <li><strong>Tailored Solutions:</strong> We understand that every company is unique. Our services are customized to meet your specific needs.</li>
//         <li><strong>Expert Guidance:</strong> With years of industry experience, our HR experts provide reliable advice and best practices.</li>
//         <li><strong>Technology-Driven:</strong> We leverage the latest HR technologies to streamline processes and enhance efficiency.</li>
//         <li><strong>People-Centric Approach:</strong> We prioritize the well-being and development of your employees, ensuring a motivated and engaged workforce.</li>
//       </ul>

//       <h3>Get in Touch</h3>
//       <p>Ready to take your HR to the next level? Contact Talvox today to learn more about our services and how we can help your business succeed.</p>
//           <button onClick={hideDetails} className="cta-button">Close Details</button>
//         </div>
//       )}

//       {activeService === 'DigitalMarketing' && (
//         <div className="service-details">
//            <h2>Digital Marketing Services: Unlock Your Brand’s Potential with Talvox Digital Marketing</h2>
//       <p>
//         At Talvox, we specialize in crafting personalized digital marketing strategies that drive results. Whether you’re a startup or an established business, our comprehensive range of digital marketing services is designed to enhance your online presence, engage your target audience, and fuel your growth.
//       </p>
//       <h3>Our Services</h3>
//       <div>
//         <h4>1. Search Engine Optimization (SEO)</h4>
//         <p>
//           Maximize your website’s visibility with our SEO services. We conduct in-depth keyword research, on-page optimization, and link-building strategies to ensure your site ranks higher on search engines, driving organic traffic and increasing your brand’s reach.
//         </p>
//       </div>
//       <div>
//         <h4>2. Pay-Per-Click Advertising (PPC)</h4>
//         <p>
//           Drive instant traffic to your website with our targeted PPC campaigns. We create and manage ads on platforms like Google Ads and Bing, focusing on maximizing your ROI through data-driven strategies and continuous optimization.
//         </p>
//       </div>
//       <div>
//         <h4>3. Social Media Marketing</h4>
//         <p>
//           Engage your audience where they spend the most time—on social media. Our social media marketing services include content creation, community management, and paid advertising across platforms like Facebook, Instagram, LinkedIn, and Twitter to build your brand’s online community.
//         </p>
//       </div>
//       <div>
//         <h4>4. Content Marketing</h4>
//         <p>
//           Tell your brand’s story through compelling content. Our content marketing services cover blog posts, articles, infographics, and video content that resonate with your audience, establish your authority, and drive engagement.
//         </p>
//       </div>
//       <div>
//         <h4>5. Email Marketing</h4>
//         <p>
//           Nurture leads and retain customers with our personalized email marketing campaigns. We design and execute targeted email campaigns that deliver the right message at the right time, increasing conversions and customer loyalty.
//         </p>
//       </div>
//       <div>
//         <h4>6. Conversion Rate Optimization (CRO)</h4>
//         <p>
//           Turn more visitors into customers with our CRO services. We analyze user behavior, conduct A/B testing, and optimize your website’s design and content to improve user experience and increase conversion rates.
//         </p>
//       </div>
//       <div>
//         <h4>7. Web Design and Development</h4>
//         <p>
//           Your website is the foundation of your online presence. Our web design and development services focus on creating visually appealing, responsive, and user-friendly websites that align with your brand and meet your business goals.
//         </p>
//       </div>
//       <div>
//         <h4>8. Analytics and Reporting</h4>
//         <p>
//           Make informed decisions with our comprehensive analytics and reporting services. We track, analyze, and report on key performance metrics, providing you with actionable insights to refine your digital marketing strategy.
//         </p>
//       </div>
//       <h3>Why Choose Talvox?</h3>
//       <ul className="no-bullets">
//         <li><strong>Tailored Strategies:</strong> We understand that every business is unique, so we create customized strategies that align with your goals and budget.</li>
//         <li><strong>Results-Driven:</strong> Our focus is on delivering measurable results that contribute to your bottom line.</li>
//         <li><strong>Experienced Team:</strong> Our team of digital marketing experts is dedicated to staying ahead of industry trends and leveraging the latest tools and techniques.</li>
//         <li><strong>Transparent Communication:</strong> We believe in clear and honest communication, keeping you informed at every stage of your campaign.</li>
//       </ul>
//       <h3>Ready to Grow Your Business?</h3>
//       <p>
//         Partner with Talvox to elevate your brand in the digital landscape. Contact us today to learn more about our digital marketing services and how we can help you achieve your business goals.
//       </p>
//           <button onClick={hideDetails} className="cta-button">Close Details</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ServicesPage;

// import React, { useState } from 'react';
// import '../Styles/Services.css';

// // Import images
// import itImage from '../assets/itservice.jpeg';
// import hrImage from '../assets/hrservice.jpeg';
// import digitalMarketingImage from '../assets/digital-marketing.jpeg';
// import ITServices from './ITServices';

// const ServicesPage = () => {
//   const [showITDetails, setShowITDetails] = useState(false);

//   const handleShowITDetails = () => {
//     setShowITDetails(true);
//   };

//   const handleCloseDetails = () => {
//     setShowITDetails(false);
//   };

//   if (showITDetails) {
//     return <ITServices onClose={handleCloseDetails} />;
//   }

//   return (
//     <div id='services' className="services-page-container">
//       <h1>Our Services</h1>
//       <p>
//         At Talvox, we provide a comprehensive suite of services designed to help businesses thrive in today’s competitive landscape. Whether you need cutting-edge IT solutions, strategic HR support, or dynamic digital marketing strategies, we’ve got you covered.
//       </p>
//       <div className="services-grid">
//         {/* IT Services Card */}
//         <div id='it-services' className="service-card">
//           <div className="service-image">
//             <img src={itImage} alt="IT Services" />
//           </div>
//           <div className="service-header">
//             <h2>IT Services</h2>
//             <p className="service-tagline">"Innovate with Confidence"</p>
//           </div>
//           <p className="service-description">
//             From cutting-edge software development to robust IT infrastructure management, Talvox empowers your business with the technology it needs to stay ahead in a competitive market. Our IT experts are dedicated to creating solutions that are not only innovative but also scalable and secure.
//           </p>
//           <button onClick={handleShowITDetails} className="cta-button">Learn More About IT Services</button>
//         </div>

//         {/* HR Services Card */}
//         <div id='hr-services' className="service-card">
//           <div className="service-image">
//             <img src={hrImage} alt="HR Services" />
//           </div>
//           <div className="service-header">
//             <h2>HR Services</h2>
//             <p className="service-tagline">"Your Talent, Our Priority"</p>
//           </div>
//           <p className="service-description">
//             People are at the heart of every successful business. Talvox provides end-to-end HR services that ensure you attract, retain, and develop the best talent. Whether you need recruitment support, onboarding assistance, or HR management, our team is here to make sure your human resources are aligned with your business goals.
//           </p>
//           <button className="cta-button">Explore HR Solutions</button>
//         </div>

//         {/* Digital Marketing Services Card */}
//         <div id='digital-marketing' className="service-card">
//           <div className="service-image">
//             <img src={digitalMarketingImage} alt="Digital Marketing Services" />
//           </div>
//           <div className="service-header">
//             <h2>Digital Marketing</h2>
//             <p className="service-tagline">"Amplify Your Brand"</p>
//           </div>
//           <p className="service-description">
//             In the digital age, visibility is key. Our Digital Marketing services are designed to enhance your online presence and connect you with your target audience. From SEO and social media management to content marketing and PPC campaigns, Talvox crafts strategies that deliver measurable results.
//           </p>
//           <button className="cta-button">Discover Digital Marketing</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;

import React, { useState } from "react";
import "../Styles/Services.css";

// Import images
import itImage from "../assets/itservice.jpeg";
import hrImage from "../assets/hrservice.jpeg";
import digitalMarketingImage from "../assets/digital-marketing.jpeg";
import ITServices from "./ITServices";
import HRServices from "./HRServices"; // Add HRServices component
import DigitalMarketingServices from "./DigitalMarketingServices"; // Add DigitalMarketingServices component
import CubeAnimation from "./CubeAnimation";

const ServicesPage = () => {
  const [showITDetails, setShowITDetails] = useState(false);
  const [showHRDetails, setShowHRDetails] = useState(false); // New state for HR services
  const [showDigitalMarketingDetails, setShowDigitalMarketingDetails] =
    useState(false); // New state for Digital Marketing

  const handleShowITDetails = () => {
    setShowITDetails(true);
  };

  const handleCloseDetails = () => {
    setShowITDetails(false);
    setShowHRDetails(false);
    setShowDigitalMarketingDetails(false);
  };

  const handleShowHRDetails = () => {
    setShowHRDetails(true);
  };

  const handleShowDigitalMarketingDetails = () => {
    setShowDigitalMarketingDetails(true);
  };

  if (showITDetails) {
    return <ITServices onClose={handleCloseDetails} />;
  }

  if (showHRDetails) {
    return <HRServices onClose={handleCloseDetails} />; // Render HRServices component
  }

  if (showDigitalMarketingDetails) {
    return <DigitalMarketingServices onClose={handleCloseDetails} />; // Render DigitalMarketingServices component
  }

  return (
    <div id="services" className="services-page-container">
      {/* <div className="heading-container">
        <h1>Our Services</h1>
        <CubeAnimation />
      </div> */}


      <div className="heading-container">
      <div>
        <CubeAnimation />
      </div>
      <h2>Our Services</h2>
       <div>
        <CubeAnimation />
      </div>
      </div>

      <p>
        At Talvox, we provide a comprehensive suite of services designed to help
        businesses thrive in today’s competitive landscape. Whether you need
        cutting-edge IT solutions, strategic HR support, or dynamic digital
        marketing strategies, we’ve got you covered.
      </p>
      <div className="services-grid">
        {/* IT Services Card */}
        <div id="it-services" className="service-card">
          <div className="service-image">
            <img src={itImage} alt="IT Services" />
          </div>
          <div className="service-header">
            <h2>IT Services</h2>
            <p className="service-tagline">"Innovate with Confidence"</p>
          </div>
          <p className="service-description">
            From cutting-edge software development to robust IT infrastructure
            management, Talvox empowers your business with the technology it
            needs to stay ahead in a competitive market. Our IT experts are
            dedicated to creating solutions that are not only innovative but
            also scalable and secure.
          </p>
          <button onClick={handleShowITDetails} className="cta-button btn1">
            Learn More About IT Services
          </button>
        </div>

        {/* HR Services Card */}
        <div id="hr-services" className="service-card">
          <div className="service-image">
            <img src={hrImage} alt="HR Services" />
          </div>
          <div className="service-header">
            <h2>HR Services</h2>
            <p className="service-tagline">"Your Talent, Our Priority"</p>
          </div>
          <p className="service-description">
            People are at the heart of every successful business. Talvox
            provides end-to-end HR services that ensure you attract, retain, and
            develop the best talent. Whether you need recruitment support,
            onboarding assistance, or HR management, our team is here to make
            sure your human resources are aligned with your business goals.
          </p>
          <button onClick={handleShowHRDetails} className="cta-button btn2">
            Explore HR Solutions
          </button>
        </div>

        {/* Digital Marketing Services Card */}
        <div id="digital-marketing" className="service-card">
          <div className="service-image">
            <img src={digitalMarketingImage} alt="Digital Marketing Services" />
          </div>
          <div className="service-header">
            <h2>Digital Marketing</h2>
            <p className="service-tagline">"Amplify Your Brand"</p>
          </div>
          <p className="service-description">
            In the digital age, visibility is key. Our Digital Marketing
            services are designed to enhance your online presence and connect
            you with your target audience. From SEO and social media management
            to content marketing and PPC campaigns, Talvox crafts strategies
            that deliver measurable results.
          </p>
          <button
            onClick={handleShowDigitalMarketingDetails}
            className="cta-button btn3"
          >
            Discover Digital Marketing
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
