import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/4.png", alt: "Colorful flower bouquet in a vase" },
  { src: "/5.png", alt: "Close-up of a red rose" },
  { src: "/7.png", alt: "Lavender flowers against a light background" },
];

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Set to 1 for the second image

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const getOrder = (index) => {
    return (((index - currentIndex) % images.length) + images.length) % images.length;
  };

  return (
    <div className="relative w-full max-w-screen-lg mx-auto p-2 md:p-4">
      <div className="flex items-center justify-center h-64 md:h-96 overflow-hidden">
        {images.map((image, index) => {
          const order = getOrder(index);
          const isCenter = order === 1;

          return (
            <div
              key={index}
              className={`absolute transition-all duration-300 ease-in-out ${
                isCenter ? 'z-30 scale-105 shadow-lg' : 'z-20'
              }`}
              style={{
                opacity: isCenter ? 1 : 0.5,
                transform: `translateX(${(order - (images.length - 1) / 2) * 110}%)`,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-24 h-52 md:w-64 md:h-80 object-cover rounded-lg transition-all duration-300 ${
                  isCenter ? '' : 'brightness-75'
                }`}
              />
            </div>
          );
        })}
      </div>
      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 bg-white/80 text-gray-800 p-2 rounded-full shadow-md hover:bg-white z-40"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 bg-white/80 text-gray-800 p-2 rounded-full shadow-md hover:bg-white z-40"
      >
        <ChevronRight size={24} />
      </button>
      {/* Dots Indicator */}
      <div className="flex justify-center mt-2 md:mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
