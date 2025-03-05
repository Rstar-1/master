import React from "react";
import HeadText from "../../../components/common/HeadText";
import ParaText from "../../../components/common/ParaText";
import Buttons from "../../../components/common/Buttons";
import Images from "../../../components/common/Images";

const HeroSection = () => {
  return (
    <div className="bg_hero py80">
      {/* <div className="container mx-auto">
        <HeadText
          text="Designing"
          text2="Better world"
          text3="and Care"
          spc="v2"
          heading="head2"
          size="lg"
          color="gray"
          className="text-center"
        />
        <ParaText
          text="Lorem ipsum is a text graphic design, publishing, and web development to fill dummy or placeholder text commonly used in graphic design."
          text2=""
          text3=""
          size="lg"
          color="gray"
          className="text-center mtpx20 w-70 mx-auto"
        />
        <div className="flex justify-center items-center gap-12 mtpx28">
          <Buttons
            text="Know More"
            color="primary"
            round="sm"
            size="lg"
            animation="v2"
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
          className="mtpx40 flex mx-auto flex w-80"
          alt="Hersection"
        />
      </div> */}
      <div className="container mx-auto">
        <div className="flex sm-block gap-12 items-center">
          <div className="w-50 md-w-50 sm-w-full prpx10 md-prpx8 sm-prpx1">
            <ParaText
              text="Know More"
              text2=""
              text3=""
              size="xxl"
              color="primary"
              className="font-500"
            />
            <HeadText
              text="Designing a Better world"
              text2="and care"
              text3=""
              spc="v1"
              heading="head2"
              size="lg"
              color="gray"
            />
            <ParaText
              text="Lorem ipsum is a text graphic design, publishing, and web development to fill dummy or placeholder text commonly used in graphic design."
              text2=""
              text3=""
              size="md"
              color="gray"
              className="mtpx8"
            />
            <div className="flex items-center gap-12 mtpx20">
              <Buttons
                text="Know More"
                color="primary"
                round="sm"
                size="md"
                animation=""
                className="font-400"
              />
              <Buttons
                text="How It Works"
                color="primary"
                round="sm"
                size="md"
                animation="v11"
                className="font-400"
              />
            </div>
          </div>
          <div className="w-50 md-w-50 sm-w-full plpx10 md-prlpx8 sm-plpx1">
            <Images
              source="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75"
              imgfit="v2"
              imgHeight="v1"
              imgScale="v1"
              imgRound="v2"
              alt="Hersection"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
