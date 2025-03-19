"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = ["/Doc.png", "/Doc.png", "/Doc.png"];

export default function Doctors() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white max-w-[80%] flex justify-center items-center mx-auto">
      <div className="mx-auto px-4 py-12 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-2xl md:text-4xl font-serif tracking-tight text-gray-900">
              Unlock growth opportunities with{" "}
              <span className="block">Medgloss</span>
            </h1>
            <p className="text-base text-gray-600 max-w-xl">
              In the competitive world of healthcare, technology is your
              competitive edge. Osso Enterprise is a scalable XR solution for
              healthcare companies designed to deliver impactful results and
              position you as a market leader.
            </p>
            <button className="bg-main text-white md:px-8 md:py-6 px-4 py-3  rounded-full md:text-lg text-base">
              Learn more
            </button>
          </div>

          <div className="relative h-[300px] md:h-[600px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="relative h-full">
                  <Image
                    src={images[currentImageIndex] || "/placeholder.svg"}
                    alt="Medical professional"
                    className="object-cover h-full w-full"
                    width={500}
                    height={300}
                  />

                  <div>
                    <span className="text-gray-600">Guidewire placement:</span>{" "}
                    <span className="font-semibold">A</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Best time:</span>{" "}
                    <span className="font-semibold">9 minutes 13 seconds</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
