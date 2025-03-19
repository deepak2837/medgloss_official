"use client";
import styles from "./CollegeCard.module.css";
import React, { useState, useEffect } from "react";
import mbbsCollegeList from "@/lib/mbbs_college_list.json";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "./Header";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import SpinnerLoader from "../spinner/SpinnerLoader";

const uniqueCollegeList = Array.from(
  new Set(mbbsCollegeList.map((college) => college.universityName))
).map((universityName) =>
  mbbsCollegeList.find((college) => college.universityName === universityName)
);

const UniversityCards = ({ name, universityName }) => {
  const router = useRouter();

  const handleClick = () => {
    const universitySlug = universityName
      .replace(/,/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();

    router.push(`/pyq/${encodeURIComponent(universitySlug)}/coursename`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.flexContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/college.png"
            alt="College Image"
            height={100}
            width={100}
            className="object-contain"
          />
        </div>
        <h2 className={styles.title}>{universityName}</h2>
      </div>
    </div>
  );
};

const MainContent = () => {
  const [visibleColleges, setVisibleColleges] = useState(15);
  const [colleges, setColleges] = useState(
    uniqueCollegeList.slice(0, visibleColleges)
  );
  const [loading, setLoading] = useState(false);

  const loadMoreColleges = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setVisibleColleges((prev) => prev + 9);
      setColleges(uniqueCollegeList.slice(0, visibleColleges + 9));
      setLoading(false);
    }, 500); // Simulate loading delay
  };

  const scrollRef = useBottomScrollListener(loadMoreColleges);

  useEffect(() => {
    setColleges(uniqueCollegeList.slice(0, visibleColleges));
  }, [visibleColleges]);

  return (
    <>
      <Header />
      <div className="h-screen overflow-y-auto" ref={scrollRef}>
        <div className="bg-white md:mb-20 mb-5">
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 py-8 bg-white">
              {colleges.map((college, index) => (
                <UniversityCards
                  key={index}
                  name={college.collegeName}
                  universityName={college.universityName}
                />
              ))}
            </div>
            {loading && (
              <div className="flex justify-center mt-4">
                <SpinnerLoader />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
