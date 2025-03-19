"use client";
import React from "react";
import Header from "@/components/PYQ/Header";
import MainContent from "@/components/PYQ/MainContent";
import Aside from "@/components/AdSection/Aside";
import TopAdSection from "@/components/AdSection/TopAdSection";
import BottomAdSection from "@/components/AdSection/BottomAdSection";

const Pyq = () => {
  return (
    <>
      <Aside />
      <TopAdSection />
      <div className="main">
        {/* Fixed header container */}
        {/* <div className="lg:fixed top-15 lg:top-21 left-6 right-6 lg:left-[260px] lg:right-[260px]  z-50 bg-white">
        
        </div> */}

        <div className=" lg:pt-5">
          {/* <Filters /> */}
          <MainContent />
        </div>
      </div>
      <BottomAdSection />
    </>
  );
};

export default Pyq;
