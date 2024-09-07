const UniversityCards = ({ name }) => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-lg p-4 max-w-sm flex  items-center mx-auto">
      <div className="bg-white w-full p-4 rounded-lg">

        <div className="flex  items-center space-x-2 md:space-x-3 bg-red">
          <div className="bg-gradient-to-r from-orange-500 to-red-500  rounded-full flex-shrink-0">
            <img src="/university-logo.png" alt="University" className="h-12 w-12 md:h-16 md:w-16"/>
          </div>
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl text-gray-900 font-bold">{name}</h2>
            
          </div>
          </div>
          <p className="text-gray-600 text-sm md:text-base mt-1">
              Discover more about {name} and what they have to offer.
            </p>
            <div className="mt-3 flex flex-row items-center gap-2 w-full">
            <button className=" bg-orange-500 hover:bg-red-500 transition-colors text-white px-3 py-2 rounded-full text-sm md:text-base">
              Read More
            </button>
            <button className=" border border-orange-500   transition-colors text-orange-500 px-3 py-2 rounded-full text-sm md:text-base">
              Download
            </button>
            </div>
        
      </div>
    </div>
  );
};

export default UniversityCards;