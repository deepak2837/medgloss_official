import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel Image ${index + 1}`}
            className={`${styles.carouselImage} ${
              index === currentIndex ? styles.active : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;