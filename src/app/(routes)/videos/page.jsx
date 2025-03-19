"use client";

import Aside from "@/components/AdSection/Aside";
import TopAdSection from "@/components/AdSection/TopAdSection";
import React, { useState } from "react";
import Videos from "@/lib/videosDummyData";
import VideoCard from "@/components/videos/VideoCard";
import { useRouter } from "next/navigation"; // ✅ FIXED: Use from "next/navigation"

function Page() {
  const [subjectFilter, setSubjectFilter] = useState("all");
  const router = useRouter(); // ✅ Now it works correctly in Next.js 13+

  const subjects = [
    ...new Set(Videos.map((card) => card.subject || "Uncategorized")),
  ];

  const handleSubjectChange = (event) => {
    setSubjectFilter(event.target.value);
  };

  const handleCardClick = (id) => {
    router.push(`/videos/${id}`);
  };

  return (
    <>
      <Aside />
      <TopAdSection />
      <div className="flex flex-col items-center">
        {/* Filter Dropdown */}
        <div className="flex flex-col md:flex-row gap-4 px-10 py-4  w-full md:w-[70%] justify-start">
          <div className="w-full md:w-auto">
            <label
              htmlFor="subject-filter"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Filter by Subject:
            </label>
            <select
              id="subject-filter"
              value={subjectFilter}
              onChange={handleSubjectChange}
              className="w-full md:w-48 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Subjects</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Video Cards Container */}
        <div className="w-[80%] px-4">
          <div className="flex flex-wrap gap-4 justify-center overflow-auto max-h-[80vh] p-4">
            {Videos.map((val, ind) => (
              <div
                key={ind}
                className="w-full sm:w-[300px] md:w-[250px] lg:w-[280px] cursor-pointer"
                onClick={() => handleCardClick(val.id)}
              >
                <VideoCard post={val} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
