
import Aside from "@/components/AdSection/Aside";
import BottomAdSection from "@/components/AdSection/BottomAdSection";
import TopAdSection from "@/components/AdSection/TopAdSection";
import SubjectHeader from "@/components/PYQ/SubjectHeader";
import SubjectMain from "@/components/PYQ/SubjectMain";


const Page = () => {
  return (
    <>
     <Aside/> 
     <TopAdSection/> 
    <div className="main">
      <div className="md:mt-10">
      <SubjectHeader/>
      <SubjectMain/>
      </div>
    </div>
    <BottomAdSection/> 
    </>
  );
};

export default Page;