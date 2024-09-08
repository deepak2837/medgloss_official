import CourseMain from "../../../../../../components/PYQ/CourseMain";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      
      <div className="max-w-4xl mx-auto py-10 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          Courses Offered by Your University
        </h1>
       
      </div>

      {/* Courses Section */}
      <CourseMain />
    </div>
  );
};

export default Page;
