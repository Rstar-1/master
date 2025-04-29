import React from "react";
import HeroSection from "./components/HeroSection";
import Section2 from "./components/Section2";
import Section7 from "./components/Section7";
import Video from "./components/Video";
import CardSection from "./components/CardSection";
import Service from "./components/Service";

const Home = () => {
  return (
    <div className="relative section_bg overflow-hidden">
      <HeroSection />
      <Service />
      <Section2 />
      <Section7 />
      <div className="py40 md-py30 sm-py20 bgwhite">
        <Video />
      </div>
      <CardSection />
    </div>
  );
};

export default Home;
