import React from 'react';
import Headings from '@/components/Headings/Headings.jsx';
import { ServicesData } from '@/constant/data.js';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import Image from 'next/image';

const Services = () => {
  return (
    <div id="services" className="container py-8">
      {/* Heading Section */}
      <Headings
        title="Free For U"
        text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto border-0 place-items-center">
        {ServicesData.map(({ titleone, titletwo, link, itemclass, imgURL }, index) => (
          <a
            key={index}
            href={link}
            className={`w-[90%] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-b-4 border-[#e48551] ${
              index % 2 === 0
                ? 'bg-gradient-to-r from-pink-500 via-yellow-500 to-orange-500' // Gradient background for dark card
                : 'bg-white border border-gray-300' // White card
            } no-underline`} 
            style={{
               borderRadius: '45px',
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 w-full space-y-2">
                <div className="text-black text-xl font-semibold">
                  <span className="block">{titleone}</span>
                  <span className="block">{titletwo}</span>
                </div>
                <div className={`flex items-center gap-2 font-medium ${index % 2 === 0 ? 'text-white' : 'text-black'}`}>
                  <BsFillArrowUpRightCircleFill /> Learn more
                </div>
              </div>
              <div className="w-1/3 md:w-1/2 text-center md:text-right">
                <Image
                  src={imgURL.src}
                  alt={titleone}
                  width={100}
                  height={100}
                  className="img-fluid w-full h-auto object-cover rounded-lg transform hover:scale-105 transition duration-300 ease-in-out"
                  style={{ marginTop: '-15px', marginBottom: '-15px' }}
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Services;
