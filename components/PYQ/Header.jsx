"use client"
import React from 'react';
import SearchBar from '../SearchByUniversity';

const Header = () => {
  return (
    <div className='bg-white'>
    <header className="lg:mx-[243px] md:mx-28 mx-3 bg-custom-gradient p-4 flex items-center justify-between rounded-2xl">
      <div className="relative w-full max-w-full mx-auto">
        <SearchBar/>
      </div>
    </header>
    </div>
  );
};

export default Header;
