"use client";
import { useEffect, useRef } from "react";

const BioDigitalViewer = ({ sceneId }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src = "https://human.biodigital.com/widget/human.js";
    script.async = true;
    script.onload = () => {
      const human = new window.HumanAPI("human-container", {
        background: "transparent",
      });

      

      human.on("modelLoaded", () => {
        console.log("Model Loaded:", sceneId);
      });

      human.loadScene(sceneId);
    };

    containerRef.current.appendChild(script);
  }, [sceneId]);

  return <div id="human-container" ref={containerRef} style={{ width: "100%", height: "500px" }} />;
};

export default BioDigitalViewer;
