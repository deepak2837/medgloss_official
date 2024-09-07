import UniversityCards from "./UniversityCards";

const YearMain = () => {
  const universities = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6','Year 7','Year 8','Year 9'];

  return (
    <div className="bg-white">
    <div className="lg:mx-28 md:mx-20 mx-auto ">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 py-8   bg-white ">
      {universities.map((name, index) => (
        <UniversityCards key={index} name={name} />
      ))}
    </div>
    </div>
    </div>
  );
};

export default YearMain;
