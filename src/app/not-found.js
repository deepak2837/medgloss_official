"use client"; // This makes the component a Client Component

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/${search}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 text-white">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-base sm:text-lg mb-6">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row w-full max-w-md mb-4"
      >
        <input
          type="text"
          placeholder="Search for something..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none text-black focus:outline-none w-full sm:w-72"
        />
        <button
          type="submit"
          className="bg-gray-900 text-white px-4 py-3 rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-gray-700 transition mt-2 sm:mt-0"
        >
          Search
        </button>
      </form>

      {/* Back to Home Button */}
      <Link
        href="/"
        className="bg-white text-gray-800 px-6 py-3 rounded-md text-lg hover:bg-gray-200 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
