import UniversityCards from "./UniversityCards";

const MainContent = () => {
  const universities = ['University Name 1', 'University Name 2', 'University Name 3', 'University Name 4', 'University Name 5', 'University Name 6','University Name 7','University Name 8','University Name 9'];

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

export default MainContent;
