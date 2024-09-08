"use client"
import React from 'react';
import SearchBar from '../SearchByUniversity';

const Header = () => {
  return (
    <header className="bg-custom-gradient p-4 flex items-center justify-between rounded-2xl">
      <div className="relative w-full max-w-xl mx-auto">
        <SearchBar/>
      </div>
    </header>
  );
};

export default Header;
