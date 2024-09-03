import React from 'react';
import Layout from '../components/Layout';
import Filters from '../components/Filters';
import Header from '../components/Header';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Services from '../components/Services';
import Aside from '../components/Aside.jsx';
import Carousel from '../components/Carousal';
import SlideShow from '../components/SlideShow';
import Testimonials from '../components/Testimonials/Testimonials';
import CaseStudy from '../components/CaseStudy';
import CaseStudy1 from '../components/CaseStudy1.jsx';
import CaseStudy2 from '../components/CaseStudy2.jsx';
import CaseStudy3 from '../components/CaseStudy3.jsx';
import CaseStudy4 from '../components/CaseStudy4.jsx';
// import './global.css';
const images = [
    '/whymedgloss.png',
    '/Your, Study Buddy.png',
    '/forthemedicos.png',
    // Add more image URLs here
  ];
const Home = () => {
    const imageLinks = [
        '/1.png',
        '/2.png',
        '/3.png',
      ];

    return (
        <Layout>
         
            <div className=''>
            <SlideShow imageLinks={imageLinks} />
            {/* <Carousel images={images} /> */}
                {/* Filters */}
                
                <Services />
               <Testimonials />
               <CaseStudy />
               <CaseStudy1 />
               {/* <CaseStudy2/>
               <CaseStudy3 />
               <CaseStudy4 /> */}
               {/* <div className="page-links">
                    <a href="/search-by-university" className="page-link">Search by University</a>
                    <a href="/search-by-examination-type" className="page-link">Search by Examination Type</a>
                    <a href="/search-by-course-subject" className="page-link">Search by Course/Subject</a>
                    <a href="/search-by-year" className="page-link">Search by Year</a>
                    <a href="/combination-of-filters" className="page-link">Combination of Filters</a>
                </div> */}
            </div>
        </Layout>
    );
};

export default Home;
