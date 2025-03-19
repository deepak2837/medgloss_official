"use client"
import React from 'react';
import SearchBySubject from '@/components/Search/SearchBySubject';
import styles from './Header.module.css';

const SubjectHeader = () => {
  return (
    <div  className={styles.bgWhite}>
    <header className={styles.header}>
      <div className={styles.searchContainer}>
        <SearchBySubject/>
      </div>
    </header>
    </div>
  );
};

export default SubjectHeader;