"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaMedkit, FaUserMd, FaHandsHelping } from "react-icons/fa";

const features = [
  { title: "Medical Training", icon: <FaMedkit size={32} /> },
  { title: "Patient Therapy", icon: <FaUserMd size={32} /> },
  { title: "Collaborative Tools", icon: <FaHandsHelping size={32} /> },
];

export function FeatureCard() {
  return (
    <div className="h-auto">
      <h1 className="text-center font-semibold text-2xl md:text-5xl">Services</h1>
    <div className="flex flex-wrap md:gap-8 items-center justify-center mx-auto">
      
      {features.map((feature, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="bg-main relative group/card dark:hover:shadow-2xl w-78 md:w-[26rem] h-[200px] rounded-xl p-8  py-10 border text-center flex items-center flex-col justify-evenly">
            <CardItem translateZ="50" className="text-4xl text-neutral-800 dark:text-white text-center ">
              {feature.icon}
            </CardItem>
            <CardItem translateZ="60" className="text-xl font-bold text-neutral-600 dark:text-white text-center">
              {feature.title}
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
    </div>
  );
}
