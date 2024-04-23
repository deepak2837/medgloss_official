import Header from "./pages/Header";
import Industries from "./pages/Industries";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Testimonial from "./container/Testimonials/Testimonials";
import SectionEnd from "./pages/SectionEnd";
import Container from "./components/lib/Container/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoSection from './VideoSection.jsx'; 
import { Testimonials, CaseStudies, Contacts, Hero, Process, Services, Team , CTA} from '../src/container';

const Layout = () => {
  return (
    <Container className="my-container">
      <div className="container">
     {/* <VideoSection /> */}
      <Hero />
    
    <Services />
    <CTA />
    <CaseStudies />
    <Process />
    <Team />
    <Testimonials />
    <Contacts />
    
  </div>
    </Container>
  );
};

export default Layout;
