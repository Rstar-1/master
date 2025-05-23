import React from "react";
import useScrollAnimation from "../../../components/animation/gsap";
import HeadText from "../../../components/common/HeadText";
import ParaText from "../../../components/common/ParaText";
import SmallText from "../../../components/common/SmallText";
import Images from "../../../components/common/Images";

const Section2 = () => {
  const triggerSelector = ".scrolls-triggerd";
  const targetSelector = ".newanimated";
  const animationProps = {
    bottom: "0%",
    left: "0%",
    opacity: "1",
    ease: "none",
  };
  const fromProps = {
    bottom: "10%",
    left: "-8%",
    opacity: "0",
    ease: "none",
  };
  useScrollAnimation({
    triggerSelector,
    targetSelector,
    animationProps,
    fromProps,
  });

  return (
    <div className="scrolls-triggerd py50">
      <section className="container mx-auto">
        <div className="w-full flex sm-block items-center">
          <div className="relative h-450px w-50 sm-w-full">
            <Images
              source="http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg"
              imgfit="v2"
              imgHeight="v1"
              imgScale="v1"
              imgRound="v1"
              className="w-full newanimated absolute flex"
              alt="new"
            />
          </div>
          <div className="w-50 sm-w-full plpx40 md-plpx30 sm-plpx1">
            <SmallText
              text="Advanced"
              text2=""
              text3=""
              secid="SA1001"
              spc=""
              size="xxl"
              color="primary"
              custom={false}
              brs={false}
              className="font-500"
            />
            <HeadText
              text="Product Marketers"
              text2=""
              text3=""
              secid="SP1002"
              spc=""
              heading="head3"
              size="md"
              color="gray"
              custom={false}
              brs={false}
              className=""
            />
            <ParaText
              text="Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit. Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit Lorem ipsum dolor sit amet consectetur."
              text2=""
              text3=""
              secid="SA1003"
              spc=""
              size="md"
              color="gray"
              custom={false}
              brs={false}
              className="mtpx8 sm-mtpx5"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
