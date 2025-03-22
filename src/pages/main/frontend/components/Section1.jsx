import React from "react";
import HeadText from "../../../../components/common/HeadText";
import ParaText from "../../../../components/common/ParaText";

const Section1 = () => {
  return (
    <div className="bg_hero py80 md-py50 sm-py40">
      <div className="container mx-auto">
        <ParaText
          text="All Digitals"
          text2=""
          text3=""
          secid="HR1002"
          spc=""
          size="md"
          color="gray"
          custom={false}
          brs={false}
          className=""
        />
        <HeadText
          text="Digital"
          text2="Systems"
          text3=""
          secid="HR1002"
          spc="v1"
          heading="head4"
          size="sm"
          color="gray"
          custom={false}
          brs={false}
          className=""
        />
        <div className="mtpx20">
          
        </div>
      </div>
    </div>
  );
};

export default Section1;
