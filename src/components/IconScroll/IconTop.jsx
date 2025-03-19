"use client"; // This tells Next.js that this component is client-side

import React, { useState, useEffect } from "react";
import ArrowIcon from "../../../public/uparrow.svg";
import Image from "next/image";

const IconTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div className="fixed bottom-10 right-5 z-50">
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative bg-white text-gray-800 p-[10px] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none border border-gray-300"
        >
          <Image src={ArrowIcon} alt="arrow_icon" width={32} />
        </button>

        {/* Tooltip with proper width and positioning */}
        {isHovered && (
          <div className="absolute bottom-14 left-1/3 -translate-x-1/2 w-[100px] bg-gray-800 text-white text-xs text-center px-3 py-1 rounded-md shadow-md">
            Scroll to Top
          </div>
        )}
      </div>
    )
  );
};

export default IconTop;
