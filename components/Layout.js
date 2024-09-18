import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import styles from './Layout.module.css';
import NewFooter from './PYQ/NewFooter';
import TopAdSection from './AdSection/TopAdSection';
import BottomAdSection from './AdSection/BottomAdSection';

const Layout = ({ children }) => {
  return (
    <div >
      <Header />
      <Aside />
      {/* <div className={styles.mainContainer}> 
  <main className={styles.mainContent}>{children}</main>
</div> */}
      <TopAdSection/>
<main >{children}</main>
      <BottomAdSection/>
<footer className='z-10 relative'><NewFooter/> </footer>
     
    </div>
  );
};

export default Layout;
