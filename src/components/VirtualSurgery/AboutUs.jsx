"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../ui/tracing-beam";

export function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1
          className="font-semibold text-2xl md:text-5xl text-center mb-12 pt-22 bg-gradient-to-r from-[#fe6b8b] to-[#ff8e53] text-transparent bg-clip-text leading-3"
          style={{ lineHeight: "1.5" }}
        >
          About Medgloss
        </h1>
        <TracingBeam className="px-6">
          <div className="max-w-3xl mx-auto antialiased pt-4 relative">
            {aboutContent.map((item, index) => (
              <div key={`content-${index}`} className="mb-20">
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="bg-gradient-to-r from-[#fe6b8b] to-[#ff8e53] text-white rounded-full text-sm w-fit px-6 py-2 font-medium">
                    {item.badge}
                  </h2>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-[#fe6b8b]/20 to-transparent" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {item.title}
                </h3>

                <div className="prose prose-lg dark:prose-invert">
                  {item?.image && (
                    <div className="relative group">
                      <Image
                        src={item.image}
                        alt={item.title}
                        height="600"
                        width="800"
                        className="rounded-xl mb-10 object-cover w-full shadow-lg transition-all duration-300  group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#fe6b8b]/20 to-[#ff8e53]/20 rounded-xl opacity-0   duration-300" />
                    </div>
                  )}
                  <div className="text-gray-600 leading-relaxed space-y-6">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </div>
  );
}

const aboutContent = [
  {
    title: "Pioneering Medical Innovation",
    description: (
      <>
        <p>
          At Medgloss, we&apos;re revolutionizing healthcare through
          cutting-edge technology and innovative solutions. Founded in 2020, our
          mission is to bridge the gap between advanced medical technology and
          everyday healthcare practice, making quality healthcare more
          accessible and efficient than ever before.
        </p>
        <p>
          Our team of medical professionals, technologists, and healthcare
          innovators works tirelessly to develop solutions that address
          real-world healthcare challenges. We believe in the power of
          technology to transform patient care, medical education, and
          healthcare delivery.
        </p>
        <p>
          Through continuous innovation and collaboration with leading medical
          institutions, we&apos;re setting new standards in healthcare
          technology and patient care delivery.
        </p>
      </>
    ),
    badge: "Our Story",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
  },
  {
    title: "Innovation Meets Healthcare",
    description: (
      <>
        <p>
          Our commitment to excellence in healthcare technology has led to
          breakthrough developments in medical imaging, patient care management,
          and healthcare analytics. We leverage artificial intelligence, machine
          learning, and advanced data analytics to provide healthcare providers
          with powerful tools for better decision-making.
        </p>
        <p>
          We&apos;re proud to partner with over 200 healthcare institutions
          worldwide, serving millions of patients through our innovative
          solutions. Our platforms process over 1 million medical images daily,
          helping healthcare providers deliver faster, more accurate diagnoses.
        </p>
        <p>
          The future of healthcare is technology-driven, and we&apos;re at the
          forefront of this transformation, constantly pushing boundaries and
          exploring new possibilities in medical technology.
        </p>
      </>
    ),
    badge: "Our Impact",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
  },
  {
    title: "Building the Future of Healthcare",
    description: (
      <>
        <p>
          Looking ahead, we&apos;re investing heavily in research and
          development to create next-generation healthcare solutions. Our
          upcoming projects include advanced telemedicine platforms, AI-powered
          diagnostic tools, and revolutionary patient monitoring systems.
        </p>
        <p>
          We believe in a future where healthcare is more accessible, efficient,
          and personalized. Through continuous innovation and dedication to
          excellence, we&apos;re working to make this vision a reality. Join us
          on our journey to transform healthcare and improve lives worldwide.
        </p>
        <p>
          Together with our partners, healthcare providers, and patients,
          we&apos;re building a healthier future for everyone. The possibilities
          are endless, and we&apos;re just getting started.
        </p>
      </>
    ),
    badge: "Our Vision",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
  },
];

export default AboutUs;
