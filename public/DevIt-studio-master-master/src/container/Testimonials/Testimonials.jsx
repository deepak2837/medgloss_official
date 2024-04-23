import React from 'react';
import { Headings } from '../../components';
import Slider from 'react-slick';
import './Testimonials.css';
import { data } from '../../constant';

const Testimonials = () => {
console.log(data)

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
    <div className="section-padding" id="testimonials">
      <Headings
        title="Testimonials"
        text="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />

      <div className="testimonial-slider">
        <Slider {...sliderSettings}>
          {data.Testimonials.map((item, index) => (
            <div key={index} className="testimonial-item">
              <div className="speech-bubble">{item.testimonial}</div>
              <div className="carousel-name">{item.name}</div>
              <div className="carousel-position">{item.position}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
