import Aside from "@/components/AdSection/Aside";
import BottomAdSection from "@/components/AdSection/BottomAdSection";
import TopAdSection from "@/components/AdSection/TopAdSection";
import YearHeader from "@/components/PYQ/YearHeader";
import YearMain from "@/components/PYQ/YearMain";

const Page = () => {
  return (
    <> 
    <Aside/> 
    <TopAdSection/> 
    <div className="main">
      <div className="md:mt-10">
      <YearHeader/>
      <YearMain/>
      </div>
    </div>
    <BottomAdSection/> 
    </>
  );
};

export default Page;