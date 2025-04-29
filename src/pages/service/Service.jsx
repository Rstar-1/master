import React from "react";
import Banner from "./components/Banner";
import Section1 from "./components/Section1";

const Service = () => {
  return (
    <div className="relative section_bg overflow-hidden">
      <Banner />
      <div className="py40 md-py30 sm-py20">
        <Section1 />
      </div>
    </div>
  );
};

export default Service;
