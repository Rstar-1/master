import React from "react";
import HeroSection from "./components/HeroSection";
import Section2 from "./components/Section2";

const Home = () => {
  return (
    <div className="relative">
      <HeroSection />
      <div className="container mx-auto">
        <Section2 />
      </div>
    </div>
  );
};

export default Home;
