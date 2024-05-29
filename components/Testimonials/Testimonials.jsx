import React from 'react';

import Slider from 'react-slick';
import styles from './Testimonials.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Headings from '../Headings/Headings';
import data from '../../constant/data';

const Testimonials = () => {
  console.log(data);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={`${styles['section-padding']} ${styles['testimonial-slider']}`} id="testimonials">
      <Headings
        title="Medicos Says"
       
      />
      <div className={styles['testimonial-slider']}>
        <Slider {...sliderSettings}>
          {data.Testimonials.map((item, index) => (
            <div key={index} className={styles['testimonial-item']}>
              <div className={styles['speech-bubble']}>{item.testimonial}</div>
              <div className={styles['carousel-name']}>{item.name}</div>
              <div className={styles['carousel-position']}>{item.position}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;