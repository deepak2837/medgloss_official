import React from 'react';


import styles from './Aside.module.css';

const Aside = () => {
  return (
  
    <div className={styles.asideContainer}>
      {/* Left Ad Section */}
      <div className={styles.leftAd}></div>

      {/* Right Ad Section */}
      <div className={styles.rightAd}></div>
    </div>
  );
};

export default Aside;
