

// import React from 'react';
// import '../Styles/Industries.css';

// const industriesData = [
//   {
//     title: 'Technology',
//     description: `In the fast-paced world of technology, staying ahead requires agility and cutting-edge solutions. Talvox offers bespoke software development, IT consulting, and HR services that drive innovation and efficiency. From startups to established tech giants, we provide the tools and expertise needed to accelerate your growth.`
//   },
//   {
//     title: 'Healthcare',
//     description: `Healthcare organizations demand precision, reliability, and compliance. Our tailored IT solutions, including secure data management and software systems, streamline operations and enhance patient care. We also offer specialized HR services to support your workforce and ensure regulatory compliance.`
//   },
//   {
//     title: 'Finance',
//     description: `In the finance sector, accuracy and security are paramount. Talvox delivers robust IT solutions that safeguard sensitive data and optimize financial processes. Our HR services are designed to attract top talent and manage complex regulatory requirements, helping your organization maintain a competitive edge.`
//   },
//   {
//     title: 'Retail',
//     description: `The retail industry thrives on customer engagement and operational efficiency. Talvox provides digital marketing strategies to enhance your online presence and IT solutions to streamline inventory management and sales processes. Our HR services ensure you have the right team to deliver exceptional customer experiences.`
//   },
//   {
//     title: 'Education',
//     description: `Educational institutions require dynamic solutions to support both administrative functions and student engagement. Talvox offers innovative IT solutions for e-learning platforms, student information systems, and HR services to manage faculty and staff effectively.`
//   },
//   {
//     title: 'Manufacturing',
//     description: `Manufacturing companies benefit from streamlined operations and real-time data insights. Talvox’s IT solutions enhance supply chain management, production processes, and equipment maintenance. Our HR services support workforce management and talent acquisition in this critical sector.`
//   },
//   {
//     title: 'Real Estate',
//     description: `In the real estate industry, effective digital marketing and client management are crucial. Talvox provides customized IT solutions for property management, CRM systems, and targeted marketing strategies to help you reach and engage potential clients.`
//   },
//   {
//     title: 'Energy',
//     description: `The energy sector requires reliable and secure IT solutions to manage complex operations and data. Talvox offers specialized software for project management, data analysis, and regulatory compliance, alongside HR services to support a skilled and knowledgeable workforce.`
//   },
//   {
//     title: 'Travel & Hospitality',
//     description: `For the travel and hospitality industry, enhancing customer experiences and operational efficiency is key. Talvox’s IT solutions streamline booking systems, customer relationship management, and digital marketing efforts to help you stand out in a competitive market.`
//   },
//   {
//     title: 'Legal',
//     description: `Law firms and legal departments need secure, efficient systems to manage casework and client information. Talvox provides IT solutions that ensure data integrity and compliance, along with HR services to manage talent and support your firm's growth.`
//   }
// ];

// const Industries = () => {
//   return (
//     <div id='industries' className="industries-page-container">
//       <h1>Industries We Serve</h1>
//       <p>
//         At Talvox, we pride ourselves on delivering innovative IT, HR, and Digital Marketing solutions tailored to a diverse range of industries. Our team of experts is dedicated to understanding the unique challenges and opportunities within each sector, ensuring that our solutions are precisely aligned with your business needs. Explore the industries we serve and discover how we can help your organization thrive.
//       </p>
//       <div className="industries-list">
//         {industriesData.map((industry, index) => (
//           <div className="industry-card" key={index}>
//             <h2>{industry.title}</h2>
//             <p>{industry.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Industries;



import React from 'react';
import '../Styles/Industries.css';

// Import images
import techImage from '../assets/technology.jpeg';
import healthcareImage from '../assets/health.jpeg';
import financeImage from '../assets/finance.webp';
import retailImage from '../assets/retail.jpg';
import educationImage from '../assets/education.jpeg';
import manufacturingImage from '../assets/manufacturing.webp';
import realEstateImage from '../assets/realestate.jpg';
import energyImage from '../assets/energy.jpeg';
import travelImage from '../assets/travel.jpg';
import legalImage from '../assets/legal.jpeg';

const industriesData = [
  {
    title: 'Technology',
    description: `In the fast-paced world of technology...`,
    backgroundImage: `url(${techImage})`
  },
  {
    title: 'Healthcare',
    description: `Healthcare organizations demand precision...`,
    backgroundImage: `url(${healthcareImage})`
  },
  {
    title: 'Finance',
    description: `In the finance sector, accuracy and security...`,
    backgroundImage: `url(${financeImage})`
  },
  {
    title: 'Retail',
    description: `The retail industry thrives on customer engagement...`,
    backgroundImage: `url(${retailImage})`
  },
  {
    title: 'Education',
    description: `Educational institutions require dynamic solutions...`,
    backgroundImage: `url(${educationImage})`
  },
  {
    title: 'Manufacturing',
    description: `Manufacturing companies benefit from streamlined operations...`,
    backgroundImage: `url(${manufacturingImage})`
  },
  {
    title: 'Real Estate',
    description: `In the real estate industry, effective digital marketing...`,
    backgroundImage: `url(${realEstateImage})`
  },
  {
    title: 'Energy',
    description: `The energy sector requires reliable and secure IT solutions...`,
    backgroundImage: `url(${energyImage})`
  },
  {
    title: 'Travel & Hospitality',
    description: `For the travel and hospitality industry, enhancing customer experiences...`,
    backgroundImage: `url(${travelImage})`
  },
  {
    title: 'Legal',
    description: `Law firms and legal departments need secure, efficient systems...`,
    backgroundImage: `url(${legalImage})`
  }
];

const Industries = () => {
  return (
    <div id='industries' className="industries-page-container">
      <h1>Industries We Serve</h1>
      <p>
        At Talvox, we pride ourselves on delivering innovative IT, HR, and Digital Marketing solutions...
      </p>
      <div className="industries-list">
        {industriesData.map((industry, index) => (
          <div 
            className="industry-card" 
            key={index}
            style={{ backgroundImage: industry.backgroundImage }}
          >
            <h2>{industry.title}</h2>
            <p>{industry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
