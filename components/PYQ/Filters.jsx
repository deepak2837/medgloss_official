"use client"
import { useRouter } from 'next/navigation';

const Filters = () => {
  const router = useRouter();

  const handleRedirect = (filter) => {
    switch (filter) {
      case 'search by year':
        router.push('/pyq/year');
        break;
      case 'search by course':
        router.push('/pyq/course');
        break;
      case 'search by subject':
        router.push('/pyq/subject');
        break;
      // case 'filters':
      //   router.push('/filters');
      //   break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-wrap justify-around bg-white p-4 items-center ">
      {['search by year', 'search by course', 'search by subject', 'filters'].map((filter) => (
        <button
          key={filter}
          onClick={() => handleRedirect(filter)} // Add onClick handler
          className="bg-pink-200 px-4 py-2 rounded-full text-pink-700 font-semibold my-2 sm:mx-2"
        >
          {filter} 💗
        </button>
      ))}
    </div>
  );
};

export default Filters;
