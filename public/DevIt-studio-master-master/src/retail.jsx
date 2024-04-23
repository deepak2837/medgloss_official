// RetailSoftwareComponent.js
import React from 'react';
import './RetailSoftwareComponent.css';

const RetailSoftwareComponent = () => {
  return (
    <div className="retail-software-component-container">
      <section className="hero">
        <div className="hero-content">
          <div className="section-title">
            <h1 style={{fontFamily:"cursive" , fontSize:"120%" }}>Retail Software Development</h1>
          </div>
          <p className="section-description">
            New Light's  delivers innovative retail software solutions for brick-and-mortar, online, and hybrid model stores, streamlining sales workflows, enhancing day-to-day operations, and providing seamless customer interactions.
          </p>
        </div>
      </section>

      <section className="section-card">
        <div className="card">
          <h2 style={{fontFamily:"cursive" , fontSize:"210%" }}>Our Service Scope</h2>
          <div className="service-scope-list">
            {['Consulting', 'Development', 'Integration', 'Modernization', 'Support'].map((service, index) => (
              <div key={index} className="service-item card">
                <h3 style={{fontFamily:"cursive" , fontSize:"190%" }}>{service}</h3>
                <p>
                  New Light's ’s experts advise merchants on how to introduce retail technologies to their operations. We can audit your existing software environment, define software requirements, and recommend a suitable out-of-the-box platform or custom development tech stack.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="card">
          <h2 style={{fontFamily:"cursive" , fontSize:"210%" }}>Why Choose Us</h2>
          <div className="why-us-list">
            <div className="why-us-item card">
              <h3 style={{fontFamily:"cursive" , fontSize:"190%" }}>Proven Track Record</h3>
              <p>Over 25 years of successful retail and ecommerce solutions development.</p>
            </div>
            <div className="why-us-item card">
              <h3 style={{fontFamily:"cursive" , fontSize:"190%" }}>Innovative Solutions</h3>
              <p>Crafting innovative retail solutions, staying ahead with the latest technologies.</p>
            </div>
            <div className="why-us-item card">
              <h3 style={{fontFamily:"cursive" , fontSize:"190%" }}>Global Recognition</h3>
              <p>Top Ecommerce Developer with recognition in Forrester's Modern Application Development Services report.</p>
            </div>
            <div className="why-us-item card">
              <h3 style={{fontFamily:"cursive" , fontSize:"190%" }}>Expert Team</h3>
              <p>Certified experts in Adobe, Salesforce, SAP Commerce, and Odoo, ensuring top-notch solutions.</p>
            </div>
            <div className="why-us-item card">
              <h3 style={{fontFamily:"cursive" , fontSize:"190%" }}>Strategic Partnerships</h3>
              <p>IAOP’s Excellence in Strategic Partnerships listing, emphasizing collaborative relationships.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="card">
          <h2 style={{fontFamily:"cursive" , fontSize:"210%" }}>Client Spotlight</h2>
          <div className="client-spotlight-list">
            <div className="client-spotlight-item card">
              <h3 style={{fontFamily:"cursive" , fontSize:"180%" }}>Award-Winning Ecommerce Platform</h3>
              <p>Developed a platform boosting client's sales by 2.5x.</p>
            </div>
            <div className="client-spotlight-item card">
              <h3 style={{fontFamily:"cursive" , fontSize:"180%" }}>Revolutionary Drone Delivery App</h3>
              <p>Created a proof-of-concept app for drone delivery, impressing investors.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RetailSoftwareComponent;
