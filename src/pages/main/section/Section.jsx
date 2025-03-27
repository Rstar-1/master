import React from "react";
import ParaText from "../../../components/common/ParaText";

const Section = () => {
  return (
    <div className="bg_hero py20 px40">
      <ParaText
        text="Sections"
        text2=""
        text3=""
        secid="HR1002"
        spc=""
        size="lg"
        color="gray"
        custom={false}
        brs={false}
        className="font-500"
      />
      <div className="grid-cols-4 gap-12 mtpx15">
        <div className="bgwhite b-shadow p75 rounded-5"></div>
        <div className="bgwhite b-shadow p75 rounded-5"></div>
        <div className="bgwhite b-shadow p75 rounded-5"></div>
        <div className="bgwhite b-shadow p75 rounded-5"></div>
        <div className="bgwhite b-shadow p75 rounded-5"></div>
        <div className="bgwhite b-shadow p75 rounded-5"></div>
        <div className="bgwhite b-shadow p75 rounded-5"></div>
        <div className="bgwhite b-shadow p75 rounded-5"></div>
        <div className="bgwhite b-shadow p75 rounded-5"></div>
        <div className="bgwhite b-shadow p75 rounded-5"></div>
        <div className="bgwhite b-shadow p75 rounded-5"></div>
        <div className="bgwhite b-shadow p75 rounded-5"></div>
      </div>
    </div>
  );
};

export default Section;
