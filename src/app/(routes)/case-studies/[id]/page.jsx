
// File: app/case-studies/[id]/page.jsx (Detail page)
"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Aside from "@/components/AdSection/Aside";
import BottomAdSection from "@/components/AdSection/BottomAdSection";
import TopAdSection from "@/components/AdSection/TopAdSection";
import LineLoader from "@/components/common/Loader";
import caseStudyDumyData from "@/lib/caseStudyDumyData.js";

export default function CaseStudyDetail({ params }) {
  const [loading, setLoading] = useState(true);
  const [caseStudy, setCaseStudy] = useState(null);
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    // Simulate data loading
    setLoading(true);
    
    // Find the case study by ID
    const study = caseStudyDumyData.find(item => item.id.toString() === id);
    
    if (study) {
      setCaseStudy(study);
      // Simulate loading delay
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } else {
      // Redirect to main page if case study not found
      router.push('/case-studies');
    }
  }, [id, router]);

  const handleBackClick = () => {
    router.back();
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
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Back button */}
          <button 
            onClick={handleBackClick}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-6 group"
          >
            <svg 
              className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Case Studies
          </button>

          {/* Case study header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{caseStudy.title}</h1>
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <span className="mr-6">Published: {caseStudy.date}</span>
              {caseStudy.subject && <span className="mr-6">Subject: {caseStudy.subject}</span>}
              {caseStudy.disease && <span>Disease: {caseStudy.disease}</span>}
            </div>
          </div>

          {/* Featured image */}
          <div className="mb-8 rounded-lg overflow-hidden h-64 md:h-96 relative">
            <Image 
              src={caseStudy.image} 
              alt={caseStudy.title}
              layout="fill"
              objectFit="cover"
              className="w-full"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Short description */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">Summary</h2>
              <p className="text-gray-800">{caseStudy.description}</p>
            </div>

            {/* Full content */}
            <div className="space-y-6">
              {caseStudy.fullContent ? (
                <div dangerouslySetInnerHTML={{ __html: caseStudy.fullContent }} />
              ) : (
                <>
                  <h2>Background</h2>
                  <p>
                    {caseStudy.background || 
                      "This is where detailed background information about the case would be presented. This section typically covers the initial patient presentation, medical history, and context leading up to the case."}
                  </p>
                  
                  <h2>Methods and Approach</h2>
                  <p>
                    {caseStudy.methods || 
                      "This section details the diagnostic methods, tests performed, and treatment approaches considered. It provides insight into the clinical decision-making process and the rationale behind chosen interventions."}
                  </p>
                  
                  <h2>Results</h2>
                  <p>
                    {caseStudy.results || 
                      "The results section presents outcomes of the interventions, patient response to treatment, and any complications or unexpected developments. Data, charts, or images might be included here to illustrate key findings."}
                  </p>
                  
                  <h2>Conclusion</h2>
                  <p>
                    {caseStudy.conclusion || 
                      "The conclusion summarizes the key learnings from this case, implications for clinical practice, and recommendations for similar cases in the future. It might also suggest areas for further research or investigation."}
                  </p>
                </>
              )}
            </div>

            {/* References section */}
            {caseStudy.references && (
              <div className="mt-12 pt-6 border-t border-gray-200">
                <h2 className="text-xl font-semibold mb-4">References</h2>
                <ul className="list-decimal pl-5 space-y-2">
                  {caseStudy.references.map((ref, index) => (
                    <li key={index} className="text-sm text-gray-700">{ref}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Related case studies */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Related Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudyDumyData
                .filter(study => study.id !== caseStudy.id && 
                  (study.subject === caseStudy.subject || study.disease === caseStudy.disease))
                .slice(0, 2)
                .map(study => (
                  <div 
                    key={study.id}
                    onClick={() => handleCardClick(study.id)}
                    className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-40 relative">
                      <Image 
                        src={study.image} 
                        alt={study.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{study.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{study.date}</p>
                      <p className="text-gray-700 line-clamp-2">{study.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <BottomAdSection />
    </>
  );
}