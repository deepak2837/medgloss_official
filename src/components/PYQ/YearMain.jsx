"use client";
import React, { useState, useEffect } from "react";
import mbbsCollegeList from "@/lib/mbbs_college_list.json"; // Your JSON data
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation"; // To get dynamic slug
import { Download, Eye } from "lucide-react";
import styles from './Year.module.css';
const YearCards = ({ name, universityName, coursename, subjectName }) => {

  const router = useRouter();
  console.log(universityName,name,coursename,subjectName);
  const handleClick = () => {
    
    // Convert the university name to a URL-friendly format
    
    
    const universitySlug = universityName
      .replace(/,/g, "") // Remove commas
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .toLowerCase(); // Convert to lowercase
    const courseSlug = coursename
      .replace(/,/g, "") // Remove commas
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .toLowerCase(); // Convert to lowercase

      const subSlug = subjectName
      .replace(/,/g, "") // Remove commas
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .toLowerCase(); // Convert to lowercas
      const yearSlug = name
      .replace(/,/g, "") // Remove commas
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .toLowerCase(); // Convert to lowercas

    // Navigate to /universityname/course
    router.push(`/pyq/${encodeURIComponent(universitySlug)}/${courseSlug}/${subSlug}/${yearSlug}/download`);
  };

  return (
    <div className={styles.card}>
    <h2 className={styles.title}>{name}</h2>
    <div className={styles.buttonContainer}>
      <button onClick={handleClick}><Eye /></button>
      <button><Download /></button>
    </div>
  </div>
  );
};

const YearMain = () => {
  const [years, setYears] = useState([]);
  const router = useRouter();
  const params = useParams(); // Get dynamic slug from URL
  const selectedSubject = params.subject; // Assume the slug format is subjectSlug
  // console.log(selectedSubject);
  // console.log(params)  
  const handleClick = ()=>{
    router.back()
  }


  useEffect(() => {
    // Find the college based on the subjectSlug
    const collegeData = mbbsCollegeList.find((college) =>
      college.subjects
        .map((subjectName) => subjectName.toLowerCase().replace(/\s+/g, "-"))
        .includes(selectedSubject)
    );
    // console.log(collegeData,"data");
    
    // If college and subject are found, set the yearsArray from the JSON data
    if (collegeData && collegeData.years) {
      setYears(collegeData.years); // Set the array of years for the selected subject
    }
  }, [selectedSubject]);

  return (
    <div className="bg-white h-full md:mb-20 mb-5">
      <div className="">
        <div className="flex flex-col md:flex-row justify-start items-center mt-5 mx-4 gap-5">
        <button className="px-3 py-3 bg-custom-gradient  rounded-3xl text-white text-sm"> Download All Papers</button>
       
        <button onClick={handleClick} className="px-3 py-3 border-2 border-[#FE6B8B] rounded-3xl text-[#FE6B8B] text-sm">Search another subject </button>
        
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 py-8 bg-white">
          {years.length > 0 ? (
            years.map((year, index) => (
              <YearCards key={index} name={year} universityName={params.universityname} coursename={params.coursename} subjectName={params.subject} />
            ))
          ) : (
            <p>No years available for this subject.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default YearMain;