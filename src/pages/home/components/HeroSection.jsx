import React from "react";
import HeadText from "../../../components/common/HeadText";
import ParaText from "../../../components/common/ParaText";
import Buttons from "../../../components/common/Buttons";
import Images from "../../../components/common/Images";
import SmallText from "../../../components/common/SmallText";

const HeroSection = () => {
  return (
    <div className="bg_hero py80 md-py50 sm-py40">
      <div className="container mx-auto">
        <SmallText
          text="Our Service"
          text2=""
          text3=""
          secid="HR1001"
          spc=""
          size="xxl"
          color="primary"
          custom={false}
          brs={false}
          className="font-500 flex justify-center sm-justify-start"
        />
        <HeadText
          text="Designing"
          text2="Better world"
          text3="and Care"
          secid="HR1002"
          spc="v1"
          heading="head2"
          size="xlsm"
          color="gray"
          custom={false}
          brs={false}
          className="text-center sm-text-left"
        />
        <ParaText
          text="Lorem ipsum is a text graphic design, publishing, and web development to fill dummy or placeholder text commonly used in graphic design."
          text2=""
          text3=""
          secid="HR1002"
          spc=""
          size="md"
          color="gray"
          custom={false}
          brs={false}
          className="text-center sm-text-left mtpx20 md-mtpx16 sm-mtpx8 w-70 md-w-80 sm-w-full mx-auto"
        />
        <div className="flex justify-center sm-justify-start items-center gap-12 mtpx28 md-mtpx20 sm-mtpx18">
          <Buttons
            text="Know More"
            color="primary"
            round="sm"
            size="lg"
            animation="v8"
            className="font-400"
          />
          <Buttons
            text="How It Works"
            color="primary"
            round="sm"
            size="lg"
            animation="v11"
            className="font-400"
          />
        </div>
        <Images
          source="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75"
          imgfit="v2"
          imgHeight="v1"
          imgScale="v1"
          imgRound="v2"
          className="mtpx40 sm-mtpx20 flex mx-auto flex w-80 sm-w-full"
          alt="Hersection"
        />
      </div>
      {/* <div className="container mx-auto">
        <div className="flex sm-block gap-12 items-center">
          <div className="w-50 md-w-50 sm-w-full prpx10 md-prpx8 sm-prpx1">
            <SmallText
              text="Our Service"
              text2=""
              text3=""
              secid="HR2001"
              spc=""
              size="xxl"
              color="primary"
              custom={false}
              brs={false}
              className="font-500"
            />
            <HeadText
              text="Designing world"
              text2="Better care"
              text3=""
              secid="HR2002"
              spc="v2"
              heading="head2"
              size="xlsm"
              color="gray"
              custom={false}
              brs={true}
              className=""
            />
            <ParaText
              text="Lorem ipsum is a text graphic design, publishing, and web development to fill dummy or placeholder text commonly used in graphic design."
              text2=""
              text3=""
              secid="HR2003"
              spc=""
              size="md"
              color="gray"
              custom={false}
              brs={false}
              className="mtpx16 sm-mtpx10"
            />
            <div className="flex items-center gap-12 mtpx28 md-mtpx20 sm-mtpx16">
              <Buttons
                text="Know More"
                color="primary"
                round="sm"
                size="lg"
                animation="v5"
                className="font-400"
              />
              <Buttons
                text="How It Works"
                color="primary"
                round="sm"
                size="lg"
                animation="v11"
                className="font-400"
              />
            </div>
          </div>
          <div className="w-50 md-w-50 sm-w-full plpx10 md-prlpx8 sm-plpx1 sm-mtpx20">
            <Images
              source="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75"
              imgfit="v2"
              imgHeight="v1"
              imgScale="v1"
              imgRound="v2"
              alt="Hersection"
              className="w-full"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;
