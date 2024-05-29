import React from 'react';
import styles from './CaseStudy.module.css';
import { FiArrowUpRight } from 'react-icons/fi';

import Headings from './Headings/Headings';
import IconScroll from './IconScroll/IconScroll.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../constant/data';

const CaseStudies = () => {
  return (
    <div className={styles.sectionPadding} id="use-cases">

      <Headings title="Mock Tests" text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies" />

      <div className={styles.caseStudies}>

      {data.CaseStudies2.map(({ subject, numQuestions, date, difficulty, attempters }, index) => (
          <div key={index} className={styles.caseStudiesItem}>
            <h1>{subject}</h1>
            <h1>{numQuestions}</h1>
            {/* <a alt="Learn more">Learn more <FiArrowUpRight /></a> */}
          </div>
        ))}
      </div>

      <IconScroll />

    </div>
  );
};

export default CaseStudies;
