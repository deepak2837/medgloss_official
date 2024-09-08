"use client";
import React, { useState, useEffect } from "react";
import mbbsCollegeList from "../mbbs_college_list.json"; // Your JSON data
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation"; // To get dynamic slug

const SubjectCards = ({ name }) => {
  return (
    <div className="border border-b-4 border-orange-500 p-4 rounded-3xl shadow-md cursor-pointer">
      <h2 className="text-lg font-bold text-gray-800">{name}</h2>
    </div>
  );
};

const SubjectMain = () => {
  const [subjects, setSubjects] = useState([]);
  const router = useRouter();
  const params = useParams(); // Get dynamic slug from URL
  const selectedCourse = params.coursename; // Assume the slug format is courseSlug
  
  console.log(selectedCourse);
  
  useEffect(() => {
    // Find the course based on the dynamic courseSlug
    const courseData = mbbsCollegeList.find((college) =>
      college.course
        .map((courseName) => courseName.toLowerCase().replace(/\s+/g, "-"))
        .includes(selectedCourse)
    );

    // If course is found, set subjects
    if (courseData) {
      setSubjects(courseData.course); // Set the array of subjects (from course)
    }
  }, [selectedCourse]);

  return (
    <div className="bg-white">
      <div className="lg:mx-28 md:mx-20 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 py-8 bg-white">
          {subjects.length > 0 ? (
            subjects.map((subject, index) => (
              <SubjectCards key={index} name={subject} />
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
