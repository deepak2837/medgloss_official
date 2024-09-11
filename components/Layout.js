import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div >
      <Header />
      {/* <div className={styles.mainContainer}>
  <Aside />
  <main className={styles.mainContent}>{children}</main>
</div> */}
<main >{children}</main>
<footer> <Footer /></footer>
     
    </div>
  );
};

export default Layout;
