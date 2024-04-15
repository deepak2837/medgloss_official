import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Head>
                <title>My Question Paper Website</title>
                {/* Add meta tags for SEO */}
            </Head>
            <header>
              hi i am the header 
            </header>
            <main>{children}</main>
            <footer>
               hi i am the footer 
            </footer>
        </div>
    );
};

export default Layout;
