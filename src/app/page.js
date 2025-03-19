import dynamic from "next/dynamic";

// Dynamically import components
const Aside = dynamic(() => import("@/components/AdSection/Aside"));
const TopAdSection = dynamic(() =>
  import("@/components/AdSection/TopAdSection")
);
const BottomAdSection = dynamic(() =>
  import("@/components/AdSection/BottomAdSection")
);
const BlogCards = dynamic(() => import("@/components/BlogCards/BlogCards"));
const CaseStudies = dynamic(() => import("@/components/CaseStudy/CaseStudy"));
const Services = dynamic(() => import("@/components/Home/Services/Services"));
const SlideShow = dynamic(() =>
  import("@/components/Home/SlideShow/SlideShow")
);
const Testimonials = dynamic(() =>
  import("@/components/Testimonials/Testimonials")
);
const IconTop = dynamic(() => import("@/components/IconScroll/IconTop"), {
  ssr: false,
});

export default function Home() {
  const imageLinks = ["/1.png", "/2.png", "/3.png"];

  return (
    <>
      <Aside />
      <TopAdSection />
      <div className="main">
        <SlideShow imageLinks={imageLinks} />
        <Services />
        <Testimonials />
        <CaseStudies />
        <BlogCards />
      </div>
      <IconTop /> {/* Scroll to top button */}
      <BottomAdSection />
    </>
  );
}
