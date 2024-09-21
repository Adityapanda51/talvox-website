// src/components/WhyTalvox.js
// import React from "react";
// import "../Styles/WhyTalvox.css";
// import CubeAnimation from "./CubeAnimation";

// const WhyTalvox = () => {
//   return (
//     <section id="why-talvox" className="why-talvox">
//       <div className="heading-container">
//         <h2>Why Choose Talvox?</h2>
//         <CubeAnimation />
//       </div>

//       <ul>
//         <li>
//           <strong>Customized Solutions:</strong> We tailor our services to meet
//           the specific needs of your industry, ensuring that each solution is
//           perfectly aligned with your business objectives. Our team conducts a
//           thorough analysis of your unique challenges and opportunities,
//           allowing us to craft strategies that deliver measurable results and
//           drive your success.
//         </li>
//         <li>
//           <strong>Expert Team:</strong> Our professionals bring deep expertise
//           across various sectors, combining years of experience with a passion
//           for innovation. We continuously invest in our team's development to
//           ensure they are equipped with the latest knowledge and skills,
//           allowing us to provide insights and solutions that are both innovative
//           and effective.
//         </li>
//         <li>
//           <strong>Innovative Approach:</strong> We leverage the latest
//           technology and best practices to deliver cutting-edge solutions that
//           keep you ahead of the competition. Our approach is proactive and
//           forward-thinking, focusing on continuous improvement to ensure that
//           your business benefits from the most advanced strategies and solutions
//           available.
//         </li>
//         <li>
//           <strong>Commitment to Excellence:</strong> Our commitment to
//           excellence drives everything we do. We are dedicated to delivering
//           exceptional value and support, building long-term relationships based
//           on trust and transparency. Our goal is to not only meet but exceed
//           your expectations, ensuring that every interaction with Talvox is
//           marked by quality and professionalism.
//         </li>
//         <li>
//           <strong>Results-Driven:</strong> At Talvox, we are focused on
//           delivering results that matter. We set clear objectives and use
//           data-driven insights to track progress and measure success. Our
//           commitment to achieving tangible outcomes ensures that your investment
//           in our services translates into real, impactful benefits for your
//           business.
//         </li>
//         <li>
//           <strong>Client-Centric Approach:</strong> Your satisfaction is our top
//           priority. We listen closely to your needs and work collaboratively
//           with you to develop solutions that align with your vision. Our
//           client-centric approach ensures that we are responsive, flexible, and
//           dedicated to providing the support you need to achieve your goals.
//         </li>
//       </ul>
//       <p>
//         Ready to take your business to the next level? Contact us today to learn
//         more about how Talvox can help you achieve your goals. Our team is eager
//         to discuss your needs, answer any questions, and develop a tailored plan
//         that drives success. Let’s embark on this journey together and unlock
//         new opportunities for growth and innovation.
//       </p>
//     </section>
//   );
// };

// export default WhyTalvox;



import React from "react";
import "../Styles/WhyTalvox.css";
import CubeAnimation from "./CubeAnimation";  // Import cube component

const WhyTalvox = () => {
  return (
    <section id="why-talvox" className="why-talvox">
     
      <div className="heading-container">
      <div>
        <CubeAnimation />
      </div>
        <h2>Why Choose Talvox?</h2>
       <div>
        <CubeAnimation />
      </div>
      </div>

      <ul>
        <li>
          <strong>Customized Solutions:</strong> We tailor our services to meet
          the specific needs of your industry, ensuring that each solution is
          perfectly aligned with your business objectives. Our team conducts a
          thorough analysis of your unique challenges and opportunities,
          allowing us to craft strategies that deliver measurable results and
          drive your success.
        </li>
        <li>
          <strong>Expert Team:</strong> Our professionals bring deep expertise
          across various sectors, combining years of experience with a passion
          for innovation. We continuously invest in our team's development to
          ensure they are equipped with the latest knowledge and skills,
          allowing us to provide insights and solutions that are both innovative
          and effective.
        </li>
        <li>
          <strong>Innovative Approach:</strong> We leverage the latest
          technology and best practices to deliver cutting-edge solutions that
          keep you ahead of the competition. Our approach is proactive and
          forward-thinking, focusing on continuous improvement to ensure that
          your business benefits from the most advanced strategies and solutions
          available.
        </li>
        <li>
          <strong>Commitment to Excellence:</strong> Our commitment to
          excellence drives everything we do. We are dedicated to delivering
          exceptional value and support, building long-term relationships based
          on trust and transparency. Our goal is to not only meet but exceed
          your expectations, ensuring that every interaction with Talvox is
          marked by quality and professionalism.
        </li>
        <li>
          <strong>Results-Driven:</strong> At Talvox, we are focused on
          delivering results that matter. We set clear objectives and use
          data-driven insights to track progress and measure success. Our
          commitment to achieving tangible outcomes ensures that your investment
          in our services translates into real, impactful benefits for your
          business.
        </li>
        <li>
          <strong>Client-Centric Approach:</strong> Your satisfaction is our top
          priority. We listen closely to your needs and work collaboratively
          with you to develop solutions that align with your vision. Our
          client-centric approach ensures that we are responsive, flexible, and
          dedicated to providing the support you need to achieve your goals.
        </li>
      </ul>
      <p>
        Ready to take your business to the next level? Contact us today to learn
        more about how Talvox can help you achieve your goals. Our team is eager
        to discuss your needs, answer any questions, and develop a tailored plan
        that drives success. Let’s embark on this journey together and unlock
        new opportunities for growth and innovation.
      </p>
    </section>
  );
};

export default WhyTalvox;







// import React, { useEffect } from "react";
// import "../Styles/WhyTalvox.css";

// const WhyTalvox = () => {
//   useEffect(() => {
//     const cube = document.querySelector(".cube");
//     let rotateX = 0;
//     let rotateY = 0;

//     const rotateCube = () => {
//       rotateX += 1; // Rotate on X-axis
//       rotateY += 1; // Rotate on Y-axis
//       cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//       requestAnimationFrame(rotateCube);
//     };

//     rotateCube();
//   }, []);

//   return (
//     <section id="why-talvox" className="why-talvox-container">
//       <div className="why-talvox-content">
//         <h2>Why Choose Talvox?</h2>
//         <ul className="why-talvox-list">
//           <li>
//             <strong>Customized Solutions:</strong> Tailored services to meet
//             your specific business objectives.
//           </li>
//           <li>
//             <strong>Expert Team:</strong> Professionals with deep expertise and
//             a passion for innovation.
//           </li>
//           <li>
//             <strong>Innovative Approach:</strong> Cutting-edge solutions to keep
//             you ahead of the competition.
//           </li>
//           <li>
//             <strong>Commitment to Excellence:</strong> Dedication to delivering
//             exceptional value.
//           </li>
//           <li>
//             <strong>Results-Driven:</strong> Focused on achieving real,
//             impactful results.
//           </li>
//           <li>
//             <strong>Client-Centric Approach:</strong> We listen and collaborate
//             closely with you.
//           </li>
//         </ul>
//         <p className="cta">
//           Ready to take your business to the next level?
//           <strong>
//             <span className="contact-highlight"> Contact us today </span>
//           </strong>
//           to unlock new opportunities for growth and innovation.
//         </p>
//       </div>
//       <div className="why-talvox-3d">
//         <div className="cube">
//           <div className="face front">T</div>
//           <div className="face back">A</div>
//           <div className="face left">L</div>
//           <div className="face right">V</div>
//           <div className="face top">O</div>
//           <div className="face bottom">X</div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyTalvox;

// import React from 'react';
// import '../Styles/WhyTalvox.css';

// const WhyTalvox = () => {
//   return (
//     <section id="why-talvox" className="why-talvox">
//       <h2>Why Choose Talvox?</h2>

//       {/* 3D Rotating Cube beside the heading */}
//       <div className="cube-container">
//         <div className="cube">
//           <div className="cube-face front">T</div>
//           <div className="cube-face back">A</div>
//           <div className="cube-face left">L</div>
//           <div className="cube-face right">V</div>
//           <div className="cube-face top">O</div>
//           <div className="cube-face bottom">X</div>
//         </div>
//       </div>

//       <ul>
//         <li><strong>Customized Solutions:</strong> We tailor our services to meet the specific needs of your industry, ensuring that each solution is perfectly aligned with your business objectives. Our team conducts a thorough analysis of your unique challenges and opportunities, allowing us to craft strategies that deliver measurable results and drive your success.</li>
//         <li><strong>Expert Team:</strong> Our professionals bring deep expertise across various sectors, combining years of experience with a passion for innovation. We continuously invest in our team's development to ensure they are equipped with the latest knowledge and skills, allowing us to provide insights and solutions that are both innovative and effective.</li>
//         <li><strong>Innovative Approach:</strong> We leverage the latest technology and best practices to deliver cutting-edge solutions that keep you ahead of the competition. Our approach is proactive and forward-thinking, focusing on continuous improvement to ensure that your business benefits from the most advanced strategies and solutions available.</li>
//         <li><strong>Commitment to Excellence:</strong> Our commitment to excellence drives everything we do. We are dedicated to delivering exceptional value and support, building long-term relationships based on trust and transparency. Our goal is to not only meet but exceed your expectations, ensuring that every interaction with Talvox is marked by quality and professionalism.</li>
//         <li><strong>Results-Driven:</strong> At Talvox, we are focused on delivering results that matter. We set clear objectives and use data-driven insights to track progress and measure success. Our commitment to achieving tangible outcomes ensures that your investment in our services translates into real, impactful benefits for your business.</li>
//         <li><strong>Client-Centric Approach:</strong> Your satisfaction is our top priority. We listen closely to your needs and work collaboratively with you to develop solutions that align with your vision. Our client-centric approach ensures that we are responsive, flexible, and dedicated to providing the support you need to achieve your goals.</li>
//       </ul>
//       <p>Ready to take your business to the next level? Contact us today to learn more about how Talvox can help you achieve your goals. Our team is eager to discuss your needs, answer any questions, and develop a tailored plan that drives success. Let’s embark on this journey together and unlock new opportunities for growth and innovation.</p>
//     </section>
//   );
// };

// export default WhyTalvox;






