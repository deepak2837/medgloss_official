"use client";
import React from "react";
import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FeatureCard } from "@/components/VirtualSurgery/FeatureCard";
import { AnimatedTestimonialsDemo } from "../../../components/VirtualSurgery/Testimonials";
import Worldwide from "@/components/VirtualSurgery/Worldwide";
import ContactUs from "@/components/VirtualSurgery/ContactUs";
import { AboutUs } from "@/components/VirtualSurgery/AboutUs";
import Doctors from "@/components/VirtualSurgery/Doctors";

const heroVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const featureVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const aboutVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const testimonialsVariants = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: { opacity: 1, rotateY: 0 },
};

const Page = () => {
  return (
    <div className="bg-white text-pink-600 h-auto font-sans">
      {/* Hero Section */}
      
      <section>
  <AuroraBackground>
    <motion.div 
      className="absolute inset-0 opacity-20"
      animate={{ 
        backgroundPosition: ['0% 0%', '100% 100%'],
        scale: [1, 1, 1]
      }}
      transition={{ 
        duration: 20, 
        repeat: Infinity,
        repeatType: "reverse" 
      }}
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        backgroundSize: 'cover'
      }}
    />
    
    <div className="text-center">
      {/* Animated Heading */}
      <motion.div
        className="text-3xl bg-gradient-to-r from-[#fe6b8b] via-[#ff8e53] to-[#fe6b8b] bg-clip-text text-transparent md:text-6xl font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
        }}
      >
        {"Drive excellence in healthcare with VR".split("").map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      {/* Animated Subtext */}
      <motion.div
        className="font-extralight text-base md:text-2xl py-4 bg-gradient-to-r from-[#fe6b8b] via-[#ff8e53] to-[#fe6b8b] bg-clip-text text-transparent"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.03 } },
        }}
      >
        {"Immersive VR solutions for medical training, patient care, and therapy.".split(
          ""
        ).map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      {/* Explore Button */}
      <motion.button
        className="bg-main rounded-full text-white px-4 py-2 mt-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Explore
      </motion.button>
    </div>
  </AuroraBackground>
</section>



     

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        variants={featureVariants}
      >
        <FeatureCard />
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        variants={featureVariants}
      >
       <Doctors/>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="bg-white py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        variants={aboutVariants}
      >
        <AboutUs/>
      </motion.section>

      {/* Worldwide Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        variants={aboutVariants}
      >
        <Worldwide />
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        variants={testimonialsVariants}
      >
        <AnimatedTestimonialsDemo />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        variants={featureVariants}
      >
        <ContactUs />
      </motion.section>
    </div>
  );
};

export default Page;