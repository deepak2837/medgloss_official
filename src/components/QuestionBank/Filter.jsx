import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CiSearch } from "react-icons/ci";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// Filter Component
const Filter = ({ filter, onFilterChange, onSearchClick }) => {
    return (
      <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Search by Subject:</label>
          <input
            type="text"
            name="subject"
            value={filter.subject}
            onChange={onFilterChange}
            placeholder="Enter subject"
            className="border border-gray-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Search by Topic:</label>
          <input
            type="text"
            name="topic"
            value={filter.topic}
            onChange={onFilterChange}
            placeholder="Enter topic"
            className="border border-gray-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <button
          onClick={onSearchClick}
          className="bg-main text-white p-2 rounded shadow transition-all md:mt-5"
        >
          <CiSearch className="text-2xl" />
        </button>
      </div>
    );
  };
  
  export default Filter;
  
