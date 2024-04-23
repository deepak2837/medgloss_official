// SoftwareAndHiTechComponent.js
import React from 'react';
import './SoftwareAndHiTechComponent.css';

const SoftwareAndHiTechComponent = () => {
  return (
    <div className="software-hi-tech-component">
      <section className="hero">
        <div className="hero-content">
          <div className="section-title" >
            <h1 style={{fontFamily:"cursive" , fontSize:"120%" }} >Software & Hi-tech Solutions</h1>
          </div>
          <p className="section-description">
            From product development to quality assurance and maintenance, New Light's  offers comprehensive software engineering services for the software and hi-tech industry, ensuring a seamless journey from concept to completion.
          </p>
        </div>
      </section>

      <section className="section-card">
        <div className="card">
          <h2 style={{fontFamily:"cursive" , fontSize:"190%" }}>Product Development</h2>
          <p>
            From rapid prototyping to software implementation and deployment, New Light's  provides a complete range of product engineering services, offering support at every stage, including product launch.
          </p>
        </div>
      </section>

      <section className="section-card">
        <div className="card">
          <h2 style={{fontFamily:"cursive" , fontSize:"190%" }}>Quality Assurance</h2>
          <p>
            Ensure the delivery of a competitive product with New Light's manual and automated software testing frameworks. Quality assurance services are available as a standalone offering or as part of a holistic project engagement.
          </p>
        </div>
      </section>

      <section className="section-card">
        <div className="card">
          <h2 style={{fontFamily:"cursive" , fontSize:"190%" }}>Maintenance & Support</h2>
          <p>
            New Light's  experts ensure smooth product operation after release, providing flexible support services, from 24/7 troubleshooting to high-level re-engineering, tailored to your specific needs.
          </p>
        </div>
      </section>

      <section className="section-card">
        <div className="card">
          <h2 style={{fontFamily:"cursive" , fontSize:"190%" }} >Product Ecosystems</h2>
          <p>
            New Light's competencies cover the complete range of technologies and methodologies for creating, integrating, and maintaining product ecosystems across platforms. Focus is on interconnectivity at the component level and device-agnostic user experience.
          </p>
        </div>
      </section>

      {/* Include additional sections based on your needs */}
    </div>
  );
};

export default SoftwareAndHiTechComponent;
