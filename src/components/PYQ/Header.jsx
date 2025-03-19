"use client";
import React from 'react';
import SearchBar from '@/components/Search/SearchByUniversity';
import styles from './Header.module.css'; // Importing the CSS module

const Header = () => {
  return (
    <div className={styles.bgWhite}>
      <header className={styles.header}>
        <div className={styles.searchContainer}>
          <SearchBar />
        </div>
      </header>
    </div>
  );
};

export default Header;
