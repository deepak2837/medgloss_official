import UniversityCards from "./UniversityCards";

const SubjectMain = () => {
  const universities = ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5', 'Subject 6','Subject 7','Subject 8','Subject 9'];

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

export default SubjectMain;
