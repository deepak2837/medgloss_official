import React from 'react';


import styles from './CaseStudy.module.css';
import { FiArrowUpRight } from 'react-icons/fi';

import Headings from './Headings/Headings';
import IconScroll from './IconScroll/IconScroll.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../constant/data';



import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



const CaseStudies = () => {

  const imageLinks = [
    '/1.png',
    '/2.png',
    '/3.png',
  ];
  return (
<Carousel centerMode={true} responsive={responsive}>
<img width="190px" height="300" src='/4.png' />
<img width="190px" height="300" src='/5.png' />
<img width="190px" height="300" src='/7.png' />

  {/* <div>Item 3</div>
  <div>Item 4</div> */}
</Carousel>
  );
};

export default CaseStudies;
