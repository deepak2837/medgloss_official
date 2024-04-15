import React from 'react';
import Layout from '../components/Layout';
import Filters from '../components/Filters';

const Home = () => {
    return (
        <Layout>
            <div>
                <h1>Welcome to My Question Paper Website!</h1>
                {/* Filters */}
                
                {/* Links to pages */}
                <div className="page-links">
                    <a href="/search-by-university" className="page-link">Search by University</a>
                    <a href="/search-by-examination-type" className="page-link">Search by Examination Type</a>
                    <a href="/search-by-course-subject" className="page-link">Search by Course/Subject</a>
                    <a href="/search-by-year" className="page-link">Search by Year</a>
                    <a href="/combination-of-filters" className="page-link">Combination of Filters</a>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
