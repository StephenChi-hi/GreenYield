import React from "react";
import HeroSection from "./sections/HeroSection";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";

function Overview() {
  return (
    <div>
      <div>
        <HeroSection />
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
}

export default Overview;
