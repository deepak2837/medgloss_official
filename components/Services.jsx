import React from 'react';
import Headings from './Headings/Headings.jsx';
import { ServicesData} from '../constant/data.js';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

// import './Services.css';
import styles from './Services.module.css'

const Services = () => {

  return (
    
      <div id="services"  className="d-block pt-md-4 container ">
        <Headings title="Free For U" text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include" />
  
        <div  className="row pr-5  border" >
          {ServicesData.map(({ titleone, titletwo, link, itemclass, imgURL }, index) => (
            <div  style={{border:"10px solid white ", width:"100%"}}  className="col-lg-6 col-12" key={index}> {/* Adjusted column classes */}
              <div  style={{ marginLeft:"-0px",width:"100%"}}  className={`${styles[itemclass]}`}>
                <div className={`col-md-6 ${styles.box}`}>
                  <div className="mb-30">
                    <span>{titleone} </span>
                    <span>{titletwo}</span>
                  </div>
                  <a href={link} alt={titleone} className={`${styles.readmore}`}> <BsFillArrowUpRightCircleFill /> Learn more </a>
                </div>
                <div className="col-md-6 text-end"><img src={imgURL.src} alt={titleone} style={{marginTop:"-15px",marginBottom:"-15px"}}  className="img-fluid img-services" /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
   
  );}
export default Services