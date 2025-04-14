import React from "react";
import ParaText from "../../../components/common/ParaText";

const Backend = () => {
  return (
    <div className="bg_hero py20 px40">
      <div className="bgwhite b-shadow rounded-5 py10 px20">
        <div className="flex items-center justify-between">
          <ParaText
            text="Barasingha > Coding >"
            text2="Website"
            text3=""
            secid="HR1002"
            spc="primary"
            size="md"
            color="gray"
            custom={false}
            brs={false}
            className="font-500 "
          />
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            stroke="gray"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="flex"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        </div>
      </div>
      <div className="grid-cols-4 gap-12 mtpx15">
        <div className="bgwhite b-shadow p100 rounded-5"></div>
        <div className="bgwhite b-shadow p100 rounded-5"></div>
        <div className="bgwhite b-shadow p100 rounded-5"></div>
        <div className="bgwhite b-shadow p100 rounded-5"></div>
        <div className="bgwhite b-shadow p100 rounded-5"></div>
        <div className="bgwhite b-shadow p100 rounded-5"></div>
        <div className="bgwhite b-shadow p100 rounded-5"></div>
        <div className="bgwhite b-shadow p100 rounded-5"></div>
      </div>
    </div>
  );
};

export default Backend;
