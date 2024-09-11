"use client";
import React, { useState, useEffect } from "react";
import mbbsCollegeList from "../mbbs_college_list.json"; // Your JSON data
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation"; // To get dynamic slug
import Link from "next/link";
import { Download, Eye } from "lucide-react";

const YearCards = ({ name }) => {
  return (
    <div className="border border-b-4 border-orange-500 p-4 rounded-3xl shadow-md cursor-pointer flex justify-between">
      <h2 className="text-lg font-bold text-gray-800">{name}</h2>
      <div className="flex items-center gap-4">
      <button><Eye /></button>
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
    console.log(collegeData,"data");
    
    // If college and subject are found, set the yearsArray from the JSON data
    if (collegeData && collegeData.years) {
      setYears(collegeData.years); // Set the array of years for the selected subject
    }
  }, [selectedSubject]);

  return (
    <div className="bg-white h-screen">
      <div className="lg:mx-56 md:mx-[90px] mx-auto">
        <div className="flex flex-col md:flex-row justify-start items-center mt-5 mx-4 gap-5">
        <button className="px-3 py-3 bg-custom-gradient  rounded-3xl text-white text-sm"> Download All Papers</button>
       
        <button onClick={handleClick} className="px-3 py-3 border-2 border-[#FE6B8B] rounded-3xl text-[#FE6B8B] text-sm">Search another subject </button>
        
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 py-8 bg-white">
          {years.length > 0 ? (
            years.map((year, index) => (
              <YearCards key={index} name={year} />
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
