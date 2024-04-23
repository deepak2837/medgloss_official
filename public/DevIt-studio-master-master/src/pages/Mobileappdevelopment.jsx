import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { FaSwift, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiKotlin } from 'react-icons/si';
import SlideShow from "./SlideShow.jsx";
import "./mobileappdevelopment.css";

const MobileAppDevelopment = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);

  const imageLinks = [
    "https://www.tripwire.com/sites/default/files/2022-10/mobile-app-development_0.jpg",
    "https://www.zestminds.com/blog/wp-content/uploads/2021/07/How-to-Choose-the-Right-Mobile-App-Development-Company.png",
    "https://blog.techrev.us/wp-content/uploads/2023/02/why-hybrid-mobile-app-development-is-a-smart-choice-for-businesses.jpg",
  ];

  const technologiesUsed = [
    { name: 'React Native', icon: <FaReact size={50} /> },
    { name: 'Node.js', icon: <FaNodeJs size={50} /> },
    { name: 'Swift', icon: <FaSwift size={50} /> },
    { name: 'Kotlin', icon: <SiKotlin size={50} /> },
    { name: 'Mobile App Development', icon: <FontAwesomeIcon icon={faMobileAlt} size="3x" /> },
    { name: 'Code Quality', icon: <FontAwesomeIcon icon={faCode} size="3x" /> },
  ];

  const agencyStrengths = [
    'Expertise in Cross-platform Development','Agile Development Methodology',
    'Scalable and Secure Solutions',
    'User-Centric Design Approach',
    
  ];

  const handleResize = () => {
    setIsWideScreen(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (<div>
    <div className="mobile-app-development-container">
      <h2 className={`headername text-4xl mt-10 text-center mx-auto font-bold mb-10 ${isWideScreen ? 'w-50' : ''}`}>
        <span style={{  fontFamily: 'cursive' }}>Mobile</span> App <span style={{  fontFamily: 'sans-serif' }}>Development</span>
      </h2>

      <div className="technologies-section mx-auto text-center mb-8">
        <h3 className="text-2xl underline font-bold mb-4">Technologies We Use</h3>
        <div className="flex flex-wrap justify-center">
          {technologiesUsed.map((tech, index) => (
            <div key={index} className="technology-card mb-4 p-4 rounded-lg shadow-md">
              {tech.icon}
              <p className="text-lg font-semibold" style={{ color: "#4c99e0" }}>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ml-4 md:ml-10 strengths-section mb-8">
        <h3 className="text-2xl text-center font-bold mb-4" style={{ color: '#4c99e0', fontFamily: 'monospace' }}>
          Why Choose Us for Mobile App Development
        </h3>
        <ul className={`list-disc ml-0 md text-center list-inside ${isWideScreen ? 'w-50 mx-auto' : ''}`}>
          {agencyStrengths.map((strength, index) => (
            <li key={index} className="text-lg mb-2" style={{ color: '#34495e' }}>{strength}</li>
          ))}
        </ul>
      </div>
<SlideShow imageLinks={imageLinks} />
      
    </div></div>
  );
};

export default MobileAppDevelopment;
