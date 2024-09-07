import React from 'react';

const Header = () => {
  return (
    <header className="bg-pink-500 p-4 flex items-center justify-between">
      <div className="relative w-full max-w-xl mx-auto">
        <input
          type="text"
          className="w-full bg-white p-2 rounded-md focus:outline-none"
          placeholder="Search"
        />
        <div className="absolute bg-pink right-3 top-2 text-gray-500">
          🔍
        </div>
      </div>
    </header>
  );
};

export default Header;
