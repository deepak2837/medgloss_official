"use client";
import React from "react";
import styles from "./CaseStudy.module.css";
import { FiArrowUpRight } from "react-icons/fi";
import Headings from "@/components/Headings/Headings";
import IconScroll from "../IconScroll/IconScroll";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "@/constant/data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CaseStudies = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className={styles.sectionPadding} id="use-cases">
        <Headings
          title="Case Studies"
          text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />

        <div className={styles.sliderContainer}>
          <Slider {...sliderSettings}>
            {data.CaseStudies.map(({ text, link }, index) => (
              <div key={index} className={styles.slideWrapper}>
                <div className={styles.card}>
                  <p className={styles.cardText}>{text}</p>
                  <a href={link} className={styles.cardLink}>
                    Learn more <FiArrowUpRight className={styles.arrowIcon} />
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* <IconScroll /> */}
      </div>
    </div>
  );
};

export default CaseStudies;
