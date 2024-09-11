"use client";
import React, { useState, useEffect } from "react";
import mbbsCollegeList from "../mbbs_college_list.json"; // Import the JSON data
import { useParams } from "next/navigation"; // Import useParams for dynamic routes
import Image from "next/image";
import { useRouter } from "next/navigation";

const CourseCards = ({ name, universityName }) => {

  const router = useRouter();
  const handleClick = () => {
    // Convert the university name to a URL-friendly format
    const universitySlug = universityName
      .replace(/,/g, "") // Remove commas
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .toLowerCase(); // Convert to lowercase
    const courseSlug = name
      .replace(/,/g, "") // Remove commas
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .toLowerCase(); // Convert to lowercase

    // Navigate to /universityname/course
    router.push(`/pyq/${encodeURIComponent(universitySlug)}/${courseSlug}/subject`);
  };

  return (
    <div className="border border-b-4 border-orange-500 p-2 md:p-4 rounded-3xl shadow-md"
    onClick={handleClick}
    >
      <div className="flex items-center gap-2">
        <div className="w-12 h-12">
          <Image src={"/college.png"} height={100} width={100} alt="Course Image" />
        </div>
        <h2 className="text-lg font-bold text-gray-800">Course: {name}</h2>
      </div>
      <p className="text-gray-600 mt-2 hidden md:block">University: {universityName}</p>
    </div>
  );
};

const CourseMain = () => {
  const { universityname } = useParams();

  const universitySlug = universityname;
  const [visibleCourses, setVisibleCourses] = useState(9); // Initially show 9 courses
  const [courses, setCourses] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  useEffect(() => {
    // Fetch the university based on the slug
    const universityName = decodeURIComponent(universitySlug.replace(/-/g, " "));
    const university = mbbsCollegeList.find(
      (college) => college.universityName.toLowerCase() === universityName.toLowerCase()
    );

    if (university) {
      setSelectedUniversity(university); // Set the selected university
      setCourses(university.course.slice(0, visibleCourses)); // Show its courses
    }
  }, [universitySlug, visibleCourses]);

  const loadMoreCourses = () => {
    if (selectedUniversity) {
      const newVisibleCount = visibleCourses + 9; // Increase the visible courses count
      setVisibleCourses(newVisibleCount);
      setCourses(selectedUniversity.course.slice(0, newVisibleCount)); // Load more courses
    }
  };

  return (
    <div className="bg-white h-screen">
      <div className="lg:mx-56 md:mx-[90px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 py-8 bg-white">
          {courses.map((course, index) => (
            <CourseCards key={index} name={course} universityName={selectedUniversity?.universityName} />
          ))}
        </div>
        {courses.length < selectedUniversity?.course.length && (
          <div className="flex justify-center my-8">
            <button
              className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-600 focus:outline-none"
              onClick={loadMoreCourses}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseMain;
