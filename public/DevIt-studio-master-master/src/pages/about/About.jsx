import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Comp from "../../components/lib/three/Comp";
import Container from "../../components/lib/Container/Container";
import { headerColor } from "../../constant/colors";

const About = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-col lg:flex-row mx-auto text-center">
        {/* Content Section */}
        <div className="md:w-full">
          <h1 className="text-5xl pt-20 md:pt-20 lg:pt-20 lg:z-1 text-center font-bold" style={{ color: headerColor }}>
            Empowering the World Through Code
          </h1>
          <p className="font-extralight text-l pt-10">
 We are the developers who code the world. With mastery and finesse,
  we intricately weave complex lines of code to savor the taste of a delightful solution.

  As a passionate and creative team, we harness the power of advanced technologies
  to shape the digital realm. We push the boundaries to inspire the innovations of tomorrow.
 
  The challenges we encounter each day fuel our motivation to build a better future.
  Our mission is to transform the world into a more sustainable, accessible, and intelligent place.
 
  Through strong partnerships with our clients, we strive to understand their needs
  and provide them with tailored solutionsBeing a part of the change excites us,
  and it propels us to grow with every project.
 
  While exploring the endless possibilities technology offers, we not only solve problems
  but also focus on enhancing user experiences and adding value to people's lives.
  
  We believe that each line of code tells a story, and together, we work to present that story
  in the best possible way.
</p><div>
          {/* New content */}
       
       
          <h2 className="text-3xl pt-8 text-center font-bold" style={{ color: headerColor }}>
            MAKING A DIFFERENCE
          </h2>
          <p className="font-extralight text-l pt-6">
            Our story
            The company’s three founders used to work as frontline software developers.
            They started the Software House in 2012, knowing that flexibility and collaboration make Agile great,
            but only when employees are cared for.
            That assumption allowed the company to deliver custom development projects for 24 countries, growing to a number of 220 employees.
          </p>
          <p className="font-extralight text-l pt-2">
            Who do we help?
            Companies that rely on technology for business growth.
            Our clients see us as a long-term strategic partner and trusted adviser for product design, development, DevOps, and cloud computing work.
          </p>
          <p className="font-extralight text-l pt-2">
            Our philosophy
            Do good and the good will come to you.
            Each software project we select we treat as our own because our client’s success fuels ours.
          </p>
        </div>

        </div>


        {/* Visual Section */}
        <div className="w-full pt-20 sm:pt-24 lg:pt-30 pl-0 sm:pl-0 md:pl-0 lg:pl-20" style={{ maxHeight: "50vh" }}>
          {/* Responsive container for Three.js canvas */}
          <div style={{ position: "relative", paddingTop: "100%", marginBottom: "-150px" }}>
            {/* Three.js Canvas */}
            <Canvas camera={{ position: [0, 0, 8], near: 0.01, far: 100 }} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
              {/* OrbitControls for camera navigation */}
              <OrbitControls enableZoom={false} autoRotate={true} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} />

              {/* Lighting and 3D model */}
              <ambientLight intensity={1} />
              <directionalLight position={[0, 1, 1]} />
              <Comp />
            </Canvas>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
