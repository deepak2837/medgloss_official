"use client"
import React from 'react';
import SearchBar from '../SearchByUniversity';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-red-500 p-4 flex items-center justify-between">
      <div className="relative w-full max-w-xl mx-auto">
        <SearchBar/>
      </div>
    </header>
  );
};

export default Header;
