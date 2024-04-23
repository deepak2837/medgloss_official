// TelecommunicationSoftwareComponent.js
import React from 'react';
import './TelecommunicationSoftwareComponent.css';

const TelecommunicationSoftwareComponent = () => {
  return (
    <div className="telecommunication-software-component">
      <section className="hero">
        <div className="hero-content">
          <div className="section-title">
            <h1 style={{fontFamily:"cursive" , fontSize:"120%" }}>Telecommunication Software Development</h1>
          </div>
          <p className="section-description">
            New Light is an accomplished telecom development company that builds tailored software solutions for internet, landline, and media service providers, broadcasting companies, mobile and satellite network operators. We help them maintain their business and networks, expand service coverage, and enhance customer engagement.
          </p>
        </div>
      </section>

      <section className="section-card">
        <div className="card">
          <h2 style={{fontFamily:"cursive" , fontSize:"190%" }}>Whom We Serve</h2>
          <p>
            New Light serves various entities in the telecom industry, including ISVs, Mobile carriers, Landline service providers, ISPs, VoIP service providers, Broadcasting companies, and Operations support systems (OSS).
          </p>
        </div>
      </section>

      <section className="section-card">
        <div className="card">
          <h2 style={{fontFamily:"cursive" , fontSize:"190%" }}>Operations Support Systems (OSS)</h2>
          <p>
            We develop suites of back-office applications aimed at supporting telecom services, maintaining the operability of physical equipment and logical assets, and ensuring the prompt resolution of occurring network disruptions.
          </p>
        </div>
      </section>

      <section className="section-card">
        <div className="card">
          <h2 style={{fontFamily:"cursive" , fontSize:"190%" }}>Telecom Inventory Software</h2>
          <p>
            Our team can design an intuitive platform for supervising the lifecycle of physical and logical network assets, tracking their exact locations, and aiding in monitoring equipment statuses, evaluating the technical capacity of the operations center and remote sites.
          </p>
        </div>
      </section>

      <section className="section-card">
        <div className="card">
          <h2 style={{fontFamily:"cursive" , fontSize:"190%" }}>Telecom SLA Monitoring Software</h2>
          <p>
            New Light builds dedicated applications for maintaining telecom agency service scope and individual technical and operational parameters. Our applications help align services with SLAs, monitor their fulfillment, and automatically alert to bugs and glitches threatening to hinder SLA execution.
          </p>
        </div>
      </section>

      {/* Additional sections can be added based on your needs */}

    </div>
  );
};

export default TelecommunicationSoftwareComponent;
