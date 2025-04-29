import React from 'react'
import HeadSec from '../../../components/common/HeadSec';
import Images from '../../../components/common/Images';
import ParaText from '../../../components/common/ParaText';
import HeadText from '../../../components/common/HeadText';

const Section1 = () => {
    const data = [
      {
        title: "Select Projects",
        img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_1.svg",
        desc: "Continua scale empowered metrics with cost effective innovation.",
      },
      {
        title: "Project analysis",
        img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_2.svg",
        desc: "Continua scale empowered metrics with cost effective innovation.",
      },
      {
        title: "Plan Execute",
        img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_3.svg",
        desc: "Continua scale empowered metrics with cost effective innovation.",
      },
      {
        title: "Select Projects",
        img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_4.svg",
        desc: "Continua scale empowered metrics with cost effective innovation.",
      },
      {
        title: "Select Projects",
        img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_5.svg",
        desc: "Continua scale empowered metrics with cost effective innovation.",
      },
      {
        title: "Select Projects",
        img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_6.svg",
        desc: "Continua scale empowered metrics with cost effective innovation.",
      },
    ];
  return (
    <div className="container mx-auto">
      <div>
        <HeadSec
          text="Service"
          text2="Features"
          text3="View All"
          version="v1"
        />
        <div className="grid-cols-3 md-grid-cols-2 sm-grid-cols-1 gap-12 mtpx25">
          {data.map((e, index) => {
            return (
              <div
                className="border-ec bgwhite rounded-5 py26 px25"
                key={index}
              >
                <Images
                  source={e?.img}
                  imgfit="v1"
                  imgHeight="v6"
                  imgScale="v1"
                  imgRound="v1"
                  custom={true}
                  className="icon_img flex"
                  alt="new"
                />
                <HeadText
                  text={e?.title}
                  text2=""
                  text3=""
                  secid="SP1002"
                  spc=""
                  heading="head4"
                  size="card"
                  color="gray"
                  custom={false}
                  brs={false}
                  className="mtpx16"
                />
                <ParaText
                  text={e?.desc}
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
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Section1
