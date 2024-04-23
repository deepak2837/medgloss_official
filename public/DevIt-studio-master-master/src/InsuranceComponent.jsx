// InsuranceComponent.js
import React from 'react';
import './InsuranceComponent.css';

const InsuranceComponent = () => {
  return (
    <div className="insurance-component-container">
      <section className="hero">
        <div className="hero-content">
          <div className="section-title">
            <h1  style={{fontFamily:"cursive",fontSize:"120%"}}>Insurance Solutions</h1>
          </div>
          <p className="section-description">
            With over 25 years of experience in custom software development, we deliver insurance solutions of different complexity and functional scope to meet the needs of companies from various niches.
          </p>
        </div>
      </section>

      <section className="section-card">
        <div className="card">
          <h2 style={{fontFamily:"cursive",fontSize:"190%"}}>Our Insurance Solutions</h2>
          <div className="insurance-solutions-list">
            {['Claim Management Software', 'Underwriting Software', 'Policy Administration Systems', 'Quoting Software', 'Agency Management Software', 'Document Management Software', 'Insurance Portals', 'Customer-Facing Apps', 'CRM', 'ERP', 'Data Analytics and BI'].map((solution, index) => (
              <div key={index} className="solution-item card">
                <h3  style={{fontFamily:"cursive"}}>{solution}</h3>
                <p>
                  Explore our cutting-edge {solution.toLowerCase()} designed to revolutionize the insurance industry and enhance your operational efficiency.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="card">
          <h2 style={{fontFamily:"cursive",fontSize:"200%"}} >Client Success Stories</h2>
          <div className="client-spotlight-list">
            <div className="client-spotlight-item card">
              <h3 style={{fontFamily:"cursive"}}>Salesforce CRM for a US Insurance Buyout Agency</h3>
              <p>
                Experienced a 54% increase in leads by implementing a Salesforce-based CRM system, streamlining client communication, automatic annuity and quote calculations, and marketing planning.
              </p>
            </div>
            <div className="client-spotlight-item card">
              <h3 style={{fontFamily:"cursive"}}>Claim Management Software Development</h3>
              <p>
                Successfully raised £1 million in series A funding for a highly complex microservices-based pay-as-you-use platform for claims and policy management, capable of handling an unlimited number of insurance carriers and processing 400+ new quotes and 20+ purchases per minute.
              </p>
            </div>
            <div className="client-spotlight-item card">
              <h3  style={{fontFamily:"cursive"}}>Insurance Web Portal and Mobile App Upgrade</h3>
              <p>
                Achieved a 50% increase in active users by equipping an insurance web portal and mobile application with features for automating claim management, invoice generation, and financial reporting.
              </p>
            </div>
            {/* Add more success stories as needed */}
          </div>
        </div>
      </section>


      <section className="section-cta">
        <div className="cta-content">
          <h2  style={{fontFamily:"cursive",fontSize:"190%"}} >Transform Your Insurance Operations</h2>
          <p>
            Partner with us to experience innovative insurance solutions that bring efficiency, savings, and success to your business.
          </p>
        
        </div>
      </section>

      {/* Add more sections based on the provided information */}
    </div>
  );
};

export default InsuranceComponent;
