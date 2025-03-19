"use client"
import { useState } from "react";
import { useRouter } from "next/navigation"
import Aside from "@/components/AdSection/Aside";
import BottomAdSection from "@/components/AdSection/BottomAdSection";
import TopAdSection from "@/components/AdSection/TopAdSection";
import CaseStudyCard from "@/components/CaseStudy/CaseStudyCard";
import LineLoader from "@/components/common/Loader";
import caseStudyDumyData from "@/lib/caseStudyDumyData.js"

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [subjectFilter, setSubjectFilter] = useState("all");
  const [diseaseFilter, setDiseaseFilter] = useState("all");
  const router = useRouter();
  
  // Extract unique subjects and diseases from the data
  const subjects = [...new Set(caseStudyDumyData.map(card => card.subject || "Uncategorized"))];
  const diseases = [...new Set(caseStudyDumyData.map(card => card.disease || "Uncategorized"))];
  
  // Filter case studies based on selected filters
  const filteredCaseStudies = caseStudyDumyData.filter(card => {
    const matchesSubject = subjectFilter === "all" || card.subject === subjectFilter;
    const matchesDisease = diseaseFilter === "all" || card.disease === diseaseFilter;
    return matchesSubject && matchesDisease;
  });
  
  const handleSubjectChange = (e) => {
    setSubjectFilter(e.target.value);
  };
  
  const handleDiseaseChange = (e) => {
    setDiseaseFilter(e.target.value);
  };
  
   // Navigate to case study detail page
   const handleCardClick = (id) => {
    router.push(`/case-studies/${id}`);
  };
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LineLoader />
      </div>
    );
  }
  
  return (
    <>
      <Aside />
      <TopAdSection />
      <div className="main">
        <div className="md:mt-10">
          {/* Filter section */}
          <div className="flex flex-col md:flex-row gap-4 px-6 py-0 items-start md:items-center">
            <div className="w-full md:w-auto">
              <label htmlFor="subject-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Subject:
              </label>
              <select
                id="subject-filter"
                value={subjectFilter}
                onChange={handleSubjectChange}
                className="w-full md:w-48 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Subjects</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
            
            <div className="w-full md:w-auto">
              <label htmlFor="disease-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Disease:
              </label>
              <select
                id="disease-filter"
                value={diseaseFilter}
                onChange={handleDiseaseChange}
                className="w-full md:w-48 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Diseases</option>
                {diseases.map(disease => (
                  <option key={disease} value={disease}>{disease}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Results count */}
          <div className="p-6 pt-3 pb-0">
            <p className="text-sm text-gray-600">
              Showing {filteredCaseStudies.length} of {caseStudyDumyData.length} case studies
            </p>
          </div>
          
          {/* Case studies grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
            {filteredCaseStudies.length > 0 ? (
              filteredCaseStudies.map(card => (
                <div key={card.id} onClick={() => handleCardClick(card.id)} className="cursor-pointer transition-all hover:shadow-lg">
                  <CaseStudyCard
                    image={card.image}
                    title={card.title}
                    date={card.date}
                    description={card.description}
                    readMoreUrl={card.readMoreUrl}
                  />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-gray-500">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="mt-2 text-lg font-medium">No case studies found</p>
                <p className="mt-1">Try changing your filter selections to see more results.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <BottomAdSection />
    </>
  );
}