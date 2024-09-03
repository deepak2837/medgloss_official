import React from 'react';


import styles from './Aside.module.css';

const Aside = () => {
  return (
  
    <div className={styles.asideContainer}>
      {/* Left Ad Section */}
      <div className={styles.leftAd}>Left Ad Section</div>

      {/* Right Ad Section */}
      <div className={styles.rightAd}>Right Ad Section</div>
    </div>
  );
};

export default Aside;
