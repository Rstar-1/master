import React from "react";
import HeroSection from "./components/HeroSection";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

const Home = () => {
  return (
    <div className="relative">
      <HeroSection />
      <div className="container mx-auto">
        <Section2 />
      </div>
      <div className="py40 md-py30 sm-py20 bg-fa">
        <Section3 />
      </div>
    </div>
  );
};

export default Home;
