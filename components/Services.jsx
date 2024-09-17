import React from 'react';
import Headings from './Headings/Headings.jsx';
import { ServicesData } from '../constant/data.js';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

import styles from './Services.module.css';

const Services = () => {
  return (
    <div id="services" className="container">
      <Headings
        title="Free For U"
        text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include"
      />

      <div className="row mx-auto border">
        {ServicesData.map(({ titleone, titletwo, link, itemclass, imgURL }, index) => (
          <div
            key={index}
            className="w-full sm:w-full md:w-full lg:w-1/2" // Responsive classes
            style={{ border: '10px solid white' }}
          >
            <div className={`${styles[itemclass]} w-full`} style={{ marginLeft: '0px' }}>
              <div className={`col-md-6 ${styles.box}`}>
                <div className="mb-30">
                  <span>{titleone} </span>
                  <span>{titletwo}</span>
                </div>
                <a href={link} alt={titleone} className={`${styles.readmore}`}>
                  <BsFillArrowUpRightCircleFill /> Learn more
                </a>
              </div>
              <div className="col-md-6 text-end">
                <img
                  src={imgURL.src}
                  alt={titleone}
                  style={{ marginTop: '-15px', marginBottom: '-15px' }}
                  className="img-fluid img-services"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
