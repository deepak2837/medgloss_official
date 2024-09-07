import UniversityCards from "./UniversityCards";

const CourseMain = () => {
  const universities = ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5', 'Course 6','Course 7','Course 8','Course 9'];

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

export default CourseMain;
