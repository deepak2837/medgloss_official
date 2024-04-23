// HealthcareSoftwareComponent.js
import React from 'react';
import './HealthcareSoftwareComponent.css';

const HealthcareSoftwareComponent = () => {
  return (
    <div className="healthcare-software-component-container">
      <section className="hero">
        <div className="hero-content">
          <div className="section-title">
            <h1 style={{fontFamily:"cursive"}}>Custom Healthcare Software Development</h1>
          </div>
          <p className="section-description">
            Custom healthcare software development enables healthcare interoperability, better patient engagement, and more accurate diagnostics by equipping medical practices with software best suited to their unique workflows and requirements. Our healthcare software development services include consulting, design, development, maintenance, and upgrade of medical apps for hospitals, diagnostic and research centers, long-term care facilities, pharmaceutical companies, medical device manufacturers, health startups, and other healthcare organizations.
          </p>
        </div>
      </section>

      <section className="section-card">
        <div className="card">
          <h2 style={{fontFamily:"cursive",fontSize:"190%"}} >Our Healthcare Software Development Services</h2>
          <div className="service-scope-list" >
            {['Consulting', 'Development', 'Integration', 'Support & Maintenance', 'Legacy Software Reengineering'].map((service, index) => (
              <div key={index} className="service-item card" >
                <h3 style={{fontFamily:"cursive"}} >{service}</h3>
                <p>
                  Our consultants help medical organizations establish optimal digital environments by advising on the technologies that fit into your company’s ecosystem, helping choose solutions most suitable for your business, and drawing up an efficient plan for their implementation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="card">
          <h2 style={{fontFamily:"cursive",fontSize:"190%"}}>Healthcare Solutions We Develop</h2>
          <div className="why-us-list">
            <div className="why-us-item card">
              <h3 style={{fontFamily:"cursive"}}>EMR/EHR Development</h3>
              <p>Delivering electronic health record and medical record software to enhance interoperability, efficiency, and patient care.</p>
            </div>
            <div className="why-us-item card">
              <h3 style={{fontFamily:"cursive"}} >Healthcare Mobile Apps</h3>
              <p>Building mobile applications for healthcare to provide convenient and accessible services.</p>
            </div>
            <div className="why-us-item card">
              <h3 style={{fontFamily:"cursive"}} >Hospital Management Software</h3>
              <p>Developing software solutions to streamline hospital management processes.</p>
            </div>
            {/* Add more healthcare solutions as needed */}
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="card">
          <h2 style={{fontFamily:"cursive",fontSize:"190%"}} >Success Stories</h2>
          <div className="client-spotlight-list">
            {/* Add success stories dynamically */}
            <div className="client-spotlight-item card">
              <h3 style={{fontFamily:"cursive"}}>Pharmaceutical Data Analytics Suite</h3>
              <p>Developed and continuously supported an analytics suite handling over 500 million patient records.</p>
            </div>
            <div className="client-spotlight-item card">
              <h3 style={{fontFamily:"cursive"}} >SaaS Wellness Platform</h3>
              <p>Developed a HIPAA-compliant SaaS platform with over 100,000 registered users.</p>
            </div>
            {/* Add more success stories as needed */}
          </div>
        </div>
      </section>

      {/* Add more sections based on the provided information */}
    </div>
  );
};

export default HealthcareSoftwareComponent;
