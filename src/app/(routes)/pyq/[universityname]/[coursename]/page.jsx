import CourseMain from "../../../../../../components/PYQ/CourseMain";

const Page = () => {
  return (
    <div className="">
      
      <div className="lg:mx-[243px] md:mx-28 mx-5  py-10 text-center">
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
