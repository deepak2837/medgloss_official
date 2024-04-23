import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from "./Footer"

import styles from './Layout.module.css'
const Layout = ({ children }) => {
    return (<div className={styles.body} >
                  <Header />
                 
            <main>{children}</main>
           <Footer />
            </div>
    );
};

export default Layout;
