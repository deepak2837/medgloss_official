// FinanceComponent.js
import React from 'react';
import './FinanceComponent.css';

const FinanceComponent = () => {
  return (
    <div className="finance-component-container"> {/* Fix class name here */}
      <section className="hero">
        <div className="hero-content">
          <div className="section-title">
            <h1 className='dummy' style={{fontFamily:"cursive" , fontSize:"130%"}}>Finance Solutions</h1>
          </div>
          <p className="section-description">
            Empower your financial business with innovative solutions tailored for success in the dynamic world of finance.
          </p>
        </div>
      </section>

      <section className="section-card">
        <div className="card">
          <h2 style={{fontFamily:"cursive" , fontSize:"190%"}} >Our Finance Solutions</h2>
          <div className="finance-solutions-list">
            {['Risk Management', 'Financial Analytics', 'Digital Banking Integration'].map((solution, index) => (
              <div key={index} className="solution-item card">
                <h3 style={{fontFamily:"cursive" }} >{solution}</h3>
                <p>
                  Unlock unparalleled efficiency and insights with our {solution.toLowerCase()} designed for financial institutions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="card">
          <h2 style={{fontFamily:"cursive" , fontSize:"190%"}}>Client Success Stories</h2>
          <div className="client-spotlight-list">
            <div className="client-spotlight-item card">
              <h3 style={{fontFamily:"cursive" }} >Transforming Financial Operations</h3>
              <p>
                Discover how our solutions propelled financial organizations to new heights, achieving unparalleled success and efficiency.
              </p>
            </div>
            <div className="client-spotlight-item card">
              <h3 style={{fontFamily:"cursive" }}>Revolutionizing the Finance Landscape</h3>
              <p>
                Join the ranks of industry leaders who witnessed a groundbreaking transformation in finance through our innovative software.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-cta">
        <div className="cta-content">
          <h2 style={{fontFamily:"cursive" , fontSize:"190%"}}>Ready to Elevate Your Financial Business?</h2>
          <p>
            Explore custom solutions designed to address the unique challenges of finance and propel your business towards unprecedented success.
          </p>
      
        </div>
      </section>

      {/* Add more sections based on the provided information */}
    </div>
  );
};

export default FinanceComponent;
