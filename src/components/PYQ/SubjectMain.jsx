"use client";
import React, { useState, useEffect } from "react";
import mbbsCollegeList from "@/lib/mbbs_college_list.json"; // Your JSON data
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation"; // To get dynamic slug
import styles from './CollegeCard.module.css';
const SubjectCards = ({ name, universityName,coursename }) => {
console.log(universityName,"uni");
const router = useRouter();

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

      const subSlug = name
      .replace(/,/g, "") // Remove commas
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .toLowerCase(); // Convert to lowercas

    // Navigate to /universityname/course
    router.push(`/pyq/${encodeURIComponent(universitySlug)}/${courseSlug}/${subSlug}/year`);
  };

  return (
    <div className={styles.card}
    onClick={handleClick}
    >
      <h2 className="text-lg font-bold text-gray-800">{name}</h2>
    </div>
  );
};

const SubjectMain = () => {
  const [subjects, setSubjects] = useState([]);
 
  const params = useParams(); // Get dynamic slug from URL
  const selectedCourse = params.coursename; // Assume the slug format is courseSlug

  useEffect(() => {
    // Find the course based on the dynamic courseSlug
    const courseData = mbbsCollegeList.find((college) =>
      college.course
        .map((courseName) => courseName.toLowerCase().replace(/\s+/g, "-"))
        .includes(selectedCourse)
    );

    // If course is found, set subjects
    console.log(courseData);
  
    if (courseData) {
      setSubjects(courseData.subjects); // Set the array of subjects (from course)
    }
  }, [selectedCourse]);
  
  return (
    <div className="bg-white h-full md:mb-20 mb-5">
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 py-8 bg-white">
          {subjects.length > 0 ? (
            subjects.map((subject, index) => (
              <SubjectCards key={index} name={subject} universityName={params.universityname} coursename={selectedCourse} />
            ))
          ) : (
            <p>No subjects available for this course.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubjectMain;