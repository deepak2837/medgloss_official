// File: app/case-studies/[id]/page.jsx (Detail page)
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Aside from "@/components/AdSection/Aside";
import BottomAdSection from "@/components/AdSection/BottomAdSection";
import TopAdSection from "@/components/AdSection/TopAdSection";
import LineLoader from "@/components/common/Loader";
import Videos from "@/lib/videosDummyData";
import UniversalVideoPlayer from "@/components/videos/VideoPlayer";

export default function CaseStudyDetail({ params }) {
  const [loading, setLoading] = useState(true);
  const [videoUrl, setVideoUrl] = useState(null);
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    // Simulate data loading
    setLoading(true);

    // Find the case study by ID
    const video = Videos.find((item) => item.id.toString() === id);

    if (video) {
      setVideoUrl(video.url);
      // Simulate loading delay
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } else {
      // Redirect to main page if case study not found
      router.push("/case-studies");
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
        <UniversalVideoPlayer url={videoUrl} />
      </div>
      <BottomAdSection />
    </>
  );
}
