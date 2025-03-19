"use client"; // Ensures this runs only on the client side

import { useEffect } from "react";
import styles from "./AdSection.module.css"; // Ensure you are using CSS modules correctly

const TopAdSection = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, []);

  return (
    <div className={`${styles.adSection} block md:hidden`}>
      <div className="topAd bg-gray-200 mx-4 mt-20 h-[100px]">
        {/* Google AdSense Ad */}
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-5697744162151946"
          data-ad-slot="3794832821"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
};

export default TopAdSection;
