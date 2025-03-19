import Aside from "@/components/AdSection/Aside";
import BottomAdSection from "@/components/AdSection/BottomAdSection";
import TopAdSection from "@/components/AdSection/TopAdSection";
import CourseMain from "@/components/PYQ/CourseMain";

const Page = () => {
  return (
    <>
     <Aside/> 
     <TopAdSection/> 
    <div className="md:mt-24 main">
      
      <div className="lg:mx-[243px] md:mx-28 mx-5  md:py-10 py-6 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          Courses Offered by Your University
        </h1>
       
      </div>

      {/* Courses Section */}
      <CourseMain />
    </div>
    <BottomAdSection/> 
    </>
  );
};

export default Page;