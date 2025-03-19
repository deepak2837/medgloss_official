'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';

const buttons = [
  { label: 'Heart Disease', color: 'bg-red-500 hover:bg-red-600' },
  { label: 'Eye Health', color: 'bg-blue-500 hover:bg-blue-600' },
  { label: 'Cancer Treatment', color: 'bg-green-500 hover:bg-green-600' },
  { label: 'Pregnancy', color: 'bg-yellow-500 hover:bg-yellow-600' },
  { label: 'Back Pain', color: 'bg-purple-500 hover:bg-purple-600' },
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001440] to-black text-white px-3 md:px-20 py-12">
      <div>
        <button
          onClick={() => router.push('/3Dmodels/category')} 
          className="flex items-center gap-2 px-4 py-2 mb-12 md:mb-0 rounded bg-[#002060] hover:bg-[#002880] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Explore
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-[55%] text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Visualize anatomy, disease, and treatments in interactive 3D
          </h2>

          <div className="relative w-full">
          <div className="relative w-full">
  <input
    type="text"
    placeholder="Search 3D models by term, subject, or phrase"
    className="w-full rounded-lg bg-white text-gray-700 pl-5 pr-14 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <svg
    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-4.35-4.35M16 10.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
    />
  </svg>
</div>

          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {buttons.map((btn, index) => (
              <button
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#002060] hover:bg-[#002880] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <FaSearch />
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="md:w-[45%] mt-8 md:mt-0">
          <Image
            src="/model1.png"
            alt="3D Model"
            width={500}
            height={300}
            className="w-full max-h-auto object-cover rounded-lg min-h-[300px]"
          />
        </div>
      </div>
    </div>
  );
}


// 'use client';



// 'use client';
