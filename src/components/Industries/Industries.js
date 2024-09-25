import React from 'react';
import './Industries.css';

// Import images
import techImage from '../../assets/technology.jpeg';
import healthcareImage from '../../assets/health.jpeg';
import financeImage from '../../assets/finance.webp';
import retailImage from '../../assets/retail.jpg';
import educationImage from '../../assets/education.jpeg';
import manufacturingImage from '../../assets/manufacturing.webp';
import realEstateImage from '../../assets/realestate.jpg';
import energyImage from '../../assets/energy.jpeg';
import travelImage from '../../assets/travel.jpg';
// import CubeAnimation from './CubeAnimation';

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
  }
];

const Industries = () => {
  return (
    <div id='industries' className="industries-page-container">
        {/* <div className="heading-container">
        <h1>Industries We Serve</h1>
        <CubeAnimation />
      </div> */}

      <div className="heading-container">
      {/* <div>
        <CubeAnimation />
      </div> */}
      <h1>Industries We Serve</h1>
       {/* <div>
        <CubeAnimation />
      </div> */}
      </div>
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
