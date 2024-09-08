"use client";
import React, { useState } from "react";
import mbbsCollegeList from "../mbbs_college_list.json"; // Import the JSON data
import Image from "next/image";
import { useRouter } from "next/navigation";

const UniversityCards = ({ name, universityName }) => {
  const router = useRouter();

  const handleClick = () => {
    // Convert the university name to a URL-friendly format
    const universitySlug = name
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
      <div className="flex items-center gap-2">
        <div className="w-[20%]">
          <Image src={"/college.png"} alt="College Image" height={32} width={32} className="w-full" />
        </div>
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
      </div>
      <p className="text-gray-600 mt-2">University: {universityName}</p>
    </div>
  );
};

const MainContent = () => {
  const [visibleColleges, setVisibleColleges] = useState(9); // Initially show 9 colleges
  const [colleges, setColleges] = useState(mbbsCollegeList.slice(0, visibleColleges));

  const loadMoreColleges = () => {
    setVisibleColleges((prev) => prev + 9); // Show 9 more colleges on each click
    setColleges(mbbsCollegeList.slice(0, visibleColleges + 9));
  };

  return (
    <div className="bg-white">
      <div className="lg:mx-56 md:mx-20 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 py-8 bg-white">
          {colleges.map((college, index) => (
            <UniversityCards key={index} name={college.collegeName} universityName={college.universityName} />
          ))}
        </div>
        {visibleColleges < mbbsCollegeList.length && (
          <div className="flex justify-end my-3 ">
            <button
              className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600 focus:outline-none"
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
