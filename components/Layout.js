import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.mainContainer}>
  <Aside />
  <main className={styles.mainContent}>{children}</main>
</div>
      <Footer />
    </div>
  );
};

export default Layout;
