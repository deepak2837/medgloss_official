"use client";
import React, { useState } from "react";
import mbbsCollegeList from "../mbbs_college_list.json"; // Import the JSON data
import Image from "next/image";
import { useRouter } from "next/navigation";

const UniversityCards = ({ name, universityName }) => {
  const router = useRouter();

  const handleClick = () => {
    // Convert the university name to a URL-friendly format
    const universitySlug = universityName
      .replace(/,/g, "") // Remove commas
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .toLowerCase(); // Convert to lowercase

    // Navigate to /universityname/course
    router.push(`/pyq/${encodeURIComponent(universitySlug)}/coursename`);
  };

  return (
    <div
      className="border border-b-4 border-orange-500 p-4 rounded-3xl shadow-md cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 md:w-16 md:h-16 flex-shrink-0">
          <Image
            src={"/college.png"}
            alt="College Image"
            height={100}
            width={100}
            className="object-contain"
          />
        </div>
        <h2 className="text-sm md:text-base font-semibold text-gray-800 flex-1">
          {universityName}
        </h2>
      </div>
    </div>
  );
};

const MainContent = () => {
  const [visibleColleges, setVisibleColleges] = useState(15); // Initially show 9 colleges
  const [colleges, setColleges] = useState(mbbsCollegeList.slice(0, visibleColleges));

  const loadMoreColleges = () => {
    setVisibleColleges((prev) => prev + 9); // Show 9 more colleges on each click
    setColleges(mbbsCollegeList.slice(0, visibleColleges + 9));
  };

  return (
    <div className="bg-white h-full ">
      <div className="lg:mx-56 md:mx-20 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 py-8 bg-white">
          {colleges.map((college, index) => (
            <UniversityCards key={index} name={college.collegeName} universityName={college.universityName} />
          ))}
        </div>
        {visibleColleges < mbbsCollegeList.length && (
          <div className="flex justify-end mt-3 mb-8 ">
            <button
              className="bg-custom-gradient text-white px-6 py-2 rounded-lg shadow hover:bg-red-600 focus:outline-none"
              onClick={loadMoreColleges}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
