"use client"
import React from 'react';
import SearchBySubject from '../SearchBySubject';


const SubjectHeader = () => {
  return (
    <div className=' bg-white'>
    <header className="lg:mx-56 md:mx-20 mx-auto bg-custom-gradient p-4 flex items-center justify-between rounded-2xl">
      <div className="relative w-full max-w-xl mx-auto">
        <SearchBySubject/>
      </div>
    </header>
    </div>
  );
};

export default SubjectHeader;
