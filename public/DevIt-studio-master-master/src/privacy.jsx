import React from 'react';
import "./privacy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h2 className="privacy-header">Privacy Policy</h2>

      <section className="privacy-section">
        <h3>1. Introduction</h3>
        <p>Welcome to New Light Associates ("we," "our," or "us").</p>
      </section>

      <section className="privacy-section">
        <h3>2. Information We Collect</h3>
        <p>
          We collect information that you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This information may include:
        </p>
        <ul className="privacy-list">
          <li>Your name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Payment information</li>
          <li>Any other information you choose to provide</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h3>3. How We Use Your Information</h3>
        <p>
          We use the information we collect for various purposes, including to:
        </p>
        <ul className="privacy-list">
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send transaction confirmations</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Send you marketing and promotional communications</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h3>4. Information Sharing</h3>
        <p>We do not sell, trade, or otherwise transfer your personally identifiable information to third parties.</p>
      </section>

      <section className="privacy-section">
        <h3>5. Cookies</h3>
        <p>
          We use cookies and similar tracking technologies to analyze trends, administer the website, track users' movements around the website, and gather demographic information about our user base.
        </p>
      </section>

      <section className="privacy-section">
        <h3>6. Your Choices</h3>
        <p>You can control cookies through your browser settings and opt-out of receiving promotional communications by following the instructions in those communications.</p>
      </section>

      <section className="privacy-section">
        <h3>7. Security</h3>
        <p>We take reasonable measures to help protect your information from loss, theft, misuse, and unauthorized access.</p>
      </section>

      <section className="privacy-section">
        <h3>8. Changes to This Privacy Policy</h3>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      </section>

      <section className="privacy-section">
        <h3>9. Contact Us</h3>
        <p>If you have any questions about this Privacy Policy, please contact us at [your email address].</p>
      </section>

      <p className="privacy-last-updated">Last Updated: [Date]</p>
    </div>
  );
};

export default PrivacyPolicy;
