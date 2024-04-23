import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { FaSwift, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiKotlin } from 'react-icons/si';
import SlideShow from "./pages/SlideShow.jsx";
import "./service.css"; // Import a common stylesheet for services

const Service = ({ title, imageLinks, technologiesUsed, strengths }) => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);

  const handleResize = () => {
    setIsWideScreen(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="service-container">
      <h2 className={`headername text-4xl mt-10 text-center mx-auto font-bold mb-10 ${isWideScreen ? 'w-50' : ''}`} style={{ fontFamily: 'cursive', fontWeight: '400', letterSpacing: '1px', color: '#333' }}>
  {title}
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
    Why Choose Us for {title}
  </h3>
  <ul className={`list-none text-center pl-0 ml-0 md ${isWideScreen ? 'w-50 mx-auto' : ''}`}>
    {strengths.map((strength, index) => (
      <li key={index} className={`text-lg mb-2 ${index === 0 ? 'text-center' : 'ml-0'}`} style={{ color: '#34495e' }}>
        <span className="mr-2" style={{ color: '#4c99e0' }}>▪</span>{/* Red square */}
        {strength}
      </li>
    ))}
  </ul>
</div>


      <SlideShow imageLinks={imageLinks} />
    </div>
  );
};

export default Service;
