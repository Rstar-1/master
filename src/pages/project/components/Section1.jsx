import React from "react";
import ParaText from "../../../components/common/ParaText";
import Images from "../../../components/common/Images";

const Section1 = () => {
  const data = [
    {
      image:
        "http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg",
      type: "Website",
    },
    {
      image:
        "http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg",
      type: "Website",
    },
    {
      image:
        "http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg",
      type: "Website",
    },
    {
      image:
        "http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg",
      type: "Website",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="w-full">
        <div className="">
          <ParaText
            text="Website"
            text2=""
            text3=""
            secid="SA1003"
            spc=""
            size="sm"
            color="white"
            custom={false}
            brs={false}
            className="bgprimary w-max px20 py5 flex cust_round"
          />
          <hr className="flex border-0 bgprimary py2 minus_hr" />
        </div>
        <div className="grid-cols-4 md-grid-cols-2 sm-grid-cols-1 gap-12 mtpx15">
          {data.map((e, index) => {
            return (
              <div key={index}>
                {e.type === "Website" ? (
                  <Images
                    source={e?.image}
                    imgfit="v2"
                    imgHeight="v6"
                    imgScale="v1"
                    imgRound="v1"
                    className="w-full flex"
                    alt="new"
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full mtpx30 md-mtpx24 sm-mtpx20">
        <div className="">
          <ParaText
            text="Website"
            text2=""
            text3=""
            secid="SA1003"
            spc=""
            size="sm"
            color="white"
            custom={false}
            brs={false}
            className="bgprimary w-max px20 py5 flex cust_round"
          />
          <hr className="flex border-0 bgprimary py2 minus_hr" />
        </div>
        <div className="grid-cols-4 md-grid-cols-2 sm-grid-cols-1 gap-12 mtpx15">
          {data.map((e, index) => {
            return (
              <div key={index}>
                {e.type === "Website" ? (
                  <Images
                    source={e?.image}
                    imgfit="v2"
                    imgHeight="v6"
                    imgScale="v1"
                    imgRound="v1"
                    className="w-full flex"
                    alt="new"
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section1;
