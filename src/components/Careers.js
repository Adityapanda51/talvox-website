//src/components/Careers.js
// import React from 'react';
// import '../Styles/Careers.css';
// import CubeAnimation from './CubeAnimation';

// const Careers = () => {
//   return (
//     <section id='careers' className="careers">

//       <div className="heading-container">
//       <h1>Join Our Team at Talvox</h1>
//         <CubeAnimation />
//       </div>
//       <p className="intro">
//         Empowering Innovation, Enabling Growth
//       </p>
//       <p>
//         At Talvox, we're not just a startup—we're a community of innovators, problem-solvers, and forward-thinkers. We offer a dynamic environment where creativity and ambition are nurtured, and every team member plays a crucial role in shaping our future. Whether you’re passionate about IT, HR, or Digital Marketing, we invite you to explore opportunities with us and help drive our vision forward.
//       </p>
//       <div className="why-work-with-us">
//         <h2>Why Work with Us?</h2>
//         <ul>
//           <li><strong>Innovative Projects:</strong> Work on cutting-edge projects that challenge the status quo and push the boundaries of technology and digital marketing.</li>
//           <li><strong>Collaborative Culture:</strong> Join a team where your ideas are valued, and collaboration is at the heart of everything we do.</li>
//           <li><strong>Career Growth:</strong> Benefit from continuous learning opportunities and professional development tailored to your career goals.</li>
//           <li><strong>Work-Life Balance:</strong> Enjoy a flexible work environment that supports your personal and professional life.</li>
//           <li><strong>Diverse Teams:</strong> Work with a diverse group of talented individuals who bring unique perspectives and skills to the table.</li>
//         </ul>
//       </div>
//       <div className="how-to-apply">
//         <h2>How to Apply</h2>
//         <ol>
//           <li>Browse our current job openings.</li>
//           <li>Submit your resume and cover letter online.</li>
//           <li>Our HR team will review your application and get in touch if your profile matches our needs.</li>
//         </ol>
//         <p>Have questions or need more information? Contact us at <strong className="contact">praveenkambampati1@gmail.com </strong>or on <strong className="contact">+919959002091</strong>.</p>
//       </div>

//       <div className="join-us">
//         <h2>Join Us on Our Journey</h2>
//         <p>
//           At Talvox, we're not just a service provider – we're your partners in growth. Whether you're looking to optimize your IT infrastructure, build a world-class team, or enhance your online presence, Talvox has the expertise and resources to help you succeed.
//         </p>
//       </div>

//       <div className="stay-connected">
//         <h2>Stay Connected</h2>
//         <p>Even if you don’t see a current opening that fits your skills, we’d still love to hear from you. Connect with us on LinkedIn or sign up for our newsletter to stay updated on future opportunities.</p>
//         <p>Follow us on <a href="https://in.linkedin.com/company/talvox-pvt-ltd" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="[Twitter URL]" target="_blank" rel="noopener noreferrer">Twitter</a> | <a href="[Facebook URL]" target="_blank" rel="noopener noreferrer">Facebook</a></p>
//       </div>
//       <p className="equal-opportunity">
//         Talvox is an Equal Opportunity Employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
//       </p>
//     </section>
//   );
// };

// export default Careers;

import React from "react";
import "../Styles/Careers.css";
import CubeAnimation from "./CubeAnimation";

const Careers = () => {
  return (
    <section id="careers" className="careers">
      <div className="heading-container">
        <div>
          <CubeAnimation />
        </div>
        <h1>Join Our Team at Talvox</h1>
        <CubeAnimation />
      </div>
      <p className="intro">Empowering Innovation, Enabling Growth</p>
      <p className="description">
        At Talvox, we're not just a startup—we're a community of innovators,
        problem-solvers, and forward-thinkers. We offer a dynamic environment
        where creativity and ambition are nurtured, and every team member plays
        a crucial role in shaping our future. Whether you’re passionate about
        IT, HR, or Digital Marketing, we invite you to explore opportunities
        with us and help drive our vision forward.
      </p>

      <div className="card why-work">
        <h2>Why Work with Us?</h2>
        <ul>
          <li>
            <strong>Innovative Projects:</strong> Work on cutting-edge projects
            that challenge the status quo and push the boundaries of technology
            and digital marketing.
          </li>
          <li>
            <strong>Collaborative Culture:</strong> Join a team where your ideas
            are valued, and collaboration is at the heart of everything we do.
          </li>
          <li>
            <strong>Career Growth:</strong> Benefit from continuous learning
            opportunities and professional development tailored to your career
            goals.
          </li>
          <li>
            <strong>Work-Life Balance:</strong> Enjoy a flexible work
            environment that supports your personal and professional life.
          </li>
          <li>
            <strong>Diverse Teams:</strong> Work with a diverse group of
            talented individuals who bring unique perspectives and skills to the
            table.
          </li>
        </ul>
      </div>

      <div className="sections">

        <div className="card how-to-apply">
          <h2>How to Apply</h2>
          <ol>
            <li>Browse our current job openings.</li>
            <li>Submit your resume and cover letter online.</li>
            <li>
              Our HR team will review your application and get in touch if your
              profile matches our needs.
            </li>
          </ol>
          <p>
            Questions? Contact us at{" "}
            <strong className="contact"> <a href="mailto:praveenkambampati1@gmail.com">praveenkambampati1@gmail.com</a></strong> or{" "}
            <strong className="contact"> <a href="tel:+919959002091">+919959002091</a></strong>.
          </p>
        </div>

        <div className="card join-us">
          <h2>Join Us on Our Journey</h2>
          <p>
            At Talvox, we're not just a service provider – we're your partners
            in growth. Whether you're looking to optimize your IT
            infrastructure, build a world-class team, or enhance your online
            presence, Talvox has the expertise and resources to help you
            succeed.
          </p>
        </div>

<div className="card stay-connected">
  <h2>Stay Connected</h2>
  <p>
    Even if you don’t see a current opening that fits your skills, we’d still love to hear from you. Connect with us on LinkedIn or sign up for our newsletter to stay updated on future opportunities.
  </p>
  <p>
    Follow us on{" "}
    <a
      href="https://in.linkedin.com/company/talvox-pvt-ltd"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-linkedin"></i> LinkedIn
    </a>{" "}
    |{" "}
    <a href="https://twitter.com/talvox" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-x"></i> Twitter
    </a>{" "}
    |{" "}
    <a href="https://www.facebook.com/talvox" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook"></i> Facebook
    </a>{" "}
    |{" "}
    <a href="https://www.instagram.com/talvoxpvtltd?igsh=bHk1M2tpd2xuem1u" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i> Instagram
    </a>
  </p>
</div>

      </div>

      <p className="equal-opportunity">
        Talvox is an Equal Opportunity Employer. We celebrate diversity and are
        committed to creating an inclusive environment for all employees.
      </p>
    </section>
  );
};

export default Careers;
