// AutomotiveSoftwareComponent.js
import React from 'react';
import './AutomotiveSoftwareComponent.css';

const AutomotiveSoftwareComponent = () => {
  return (
    <div className="automotive-software-component">
      <section className="hero">
        <div className="hero-content">
          <div className="section-title">
            <h1 style={{fontFamily:"cursive" , fontSize:"120%" }}>Automotive Software Development</h1>
          </div>
          <p className="section-description" >
            Automotive software development by New Light empowers automakers, OEMs, dealerships, maintenance providers, car sharing services, and automotive tech vendors to streamline operations, enhance productivity, and improve customer experience.
          </p>
        </div>
      </section>

      <section className="section-card">
        <div className="card">
          <h2 style={{fontFamily:"cursive" , fontSize:"190%" }}>Expertise</h2>
          <p>
            As a Zinnov-recognized automotive software developer, New Light delivers corporate and customer-facing solutions covering various automotive business needs. From consulting to post-deployment support, we handle the full cycle of automotive software development.
          </p>
        </div>
      </section>

      <section className="section-card">
        <div className="card">
          <h2 style={{fontFamily:"cursive" , fontSize:"190%" }}>Solutions</h2>
          <p>
            New Light provides various types of automotive software to help enterprises automate operations, make intelligent decisions, optimize work aspects, and scale their business. Our solutions include dealership management, automotive ecommerce, telematics, BI, enterprise management, and logistics.
          </p>
        </div>
      </section>

      <section className="section-card">
        <div className="card">
          <h2 style={{fontFamily:"cursive" , fontSize:"200%" }}>Examples</h2>
          <div className="examples-list">
            {/* Include examples from the provided information */}
            <div className="example-item card">
              <h3 style={{fontFamily:"cursive" , fontSize:"190%" }}>Dealership Management Solutions</h3>
              <p>We customize platform-based software like Salesforce and Odoo, and develop custom DMS to take full control of every dealership management aspect.</p>
            </div>
            <div className="example-item card">
              <h3 style={{fontFamily:"cursive" , fontSize:"190%" }}>Automotive Mobile App</h3>
              <p>We redesigned a support and sales mobile app, resulting in a 25% increase in the customer base.</p>
            </div>
            {/* Include additional examples */}
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="card">
          <h2 style={{fontFamily:"cursive" , fontSize:"200%" }}>Platforms</h2>
          <p>
            New Light helps enterprises leverage off-the-shelf software platforms like Salesforce, Odoo, Enate, and Magento, tailoring them to automotive businesses’ needs.
          </p>
        </div>
      </section>

      {/* Include additional sections based on your needs */}
    </div>
  );
};

export default AutomotiveSoftwareComponent;
