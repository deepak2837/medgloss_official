"use client"
import React from 'react';
import SearchByYear from '@/components/Search/SearchByYear.js';
import styles from './Header.module.css';


const YearHeader = () => {
  return (
    <div className={styles.bgWhite}>
    <header className={styles.header}>
      <div className={styles.searchContainer}>
        <SearchByYear/>
      </div>
    </header>
    </div>
  );
};

export default YearHeader;