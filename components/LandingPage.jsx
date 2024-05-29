import React from 'react';
import styles from './LandingPage.module.css';
import Header from './Header';

const LandingPage = () => {
  return (
    <>
   
<Header/>
    
    <div className={styles.landingPageContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>We're Coming Soon!</h1>
        <p className={styles.subtitle}>Your time is priceless, and we will care for it for free, always.</p>
      </div>
    </div></>
  );
};

export default LandingPage;
