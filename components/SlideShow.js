import React, { useState, useEffect } from "react";
import styles from './Styles.module.css';

const SlideShow = ({ imageLinks }) => {
  const totalSlides = imageLinks.length;
  const SLIDE_CHANGE_INTERVAL = 3000;

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, SLIDE_CHANGE_INTERVAL);

    return () => clearInterval(timerId);
  }, [totalSlides]);

  const slideStyle = {
    width: "100%", // Set your desired width
    borderRadius: "30px", // Set your desired border-radius
  };

  return (
    <div className={`${styles.slideshow} ` }>
      {imageLinks.map((imageLink, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
          style={slideStyle}
        >
          <img src={imageLink} alt={`Slide ${index + 1}`} style={{ width: "100%" ,
          }}  />
        </div>
      ))}
    </div>
  );
};

export default SlideShow;
