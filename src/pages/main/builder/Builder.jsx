import React from "react";
import ParaText from "../../../components/common/ParaText";
import HeadText from "../../../components/common/HeadText";

const Builder = () => {
  const MainData = [
    { href: "/mine", label: "Dashboard" },
    { href: "/builder", label: "Analytics" },
  ];
  const MainDatas = [
    { href: "/frontend", label: "Schemas" },
    { href: "/backend", label: "Controller" },
    { href: "/backend", label: "Services" },
    { href: "/section", label: "Routes" },
  ];
  return (
    <div className="bg_hero py20 px40">
      <div className="flex items-start w-full gap-12">
        <div className="w-20 bgwhite b-shadow rounded-5">
          <div className="px17 py15">
            <div className="grid-cols-1 gap-8">
              <ParaText
                text="Projects"
                text2=""
                text3=""
                secid="HR1002"
                spc=""
                size="md"
                color="primary"
                custom={false}
                brs={false}
                className="font-500"
              />
              {MainData.map((e, index) => (
                <div
                  className={
                    index === 0
                      ? "flex items-center gap-8 bgprimary py8 px15 rounded-5"
                      : "flex items-center gap-8 py6 px12"
                  }
                  key={index}
                >
                  <div className="">
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      stroke={index === 0 ? "white" : "gray"}
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="flex"
                    >
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <p
                    className={
                      index === 0
                        ? "textwhite font-400 fsize15"
                        : "textgray font-400 fsize15"
                    }
                  >
                    {e?.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid-cols-1 gap-8 mtpx12">
              <ParaText
                text="My Admin"
                text2=""
                text3=""
                secid="HR1002"
                spc=""
                size="md"
                color="primary"
                custom={false}
                brs={false}
                className="font-500"
              />
              {MainDatas.map((e, index) => (
                <div
                  className={
                    index === 4
                      ? "flex items-center gap-8 bgprimary py8 px15 rounded-5"
                      : "flex items-center gap-8 py6 px12"
                  }
                  key={index}
                >
                  <div className="">
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      stroke={index === 4 ? "white" : "gray"}
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="flex"
                    >
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <p
                    className={
                      index === 4
                        ? "textwhite font-400 fsize15"
                        : "textgray font-400 fsize15"
                    }
                  >
                    {e?.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-80">
          <HeadText
            text="Builder"
            text2="BaraSingha"
            text3=""
            secid="HR1002"
            spc="v1"
            heading="head5"
            size="sm"
            color="gray"
            custom={false}
            brs={false}
            className=""
          />
          <div className="grid-cols-4 gap-12 mtpx12">
            <div className="bgwhite b-shadow p70 rounded-5"></div>
            <div className="bgwhite b-shadow p70 rounded-5"></div>
            <div className="bgwhite b-shadow p70 rounded-5"></div>
            <div className="bgwhite b-shadow p70 rounded-5"></div>
          </div>
          <div className="grid-cols-3 gap-12 mtpx20">
            <div className="bgwhite b-shadow p100 rounded-5"></div>
            <div className="bgwhite b-shadow p100 rounded-5"></div>
            <div className="bgwhite b-shadow p100 rounded-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
