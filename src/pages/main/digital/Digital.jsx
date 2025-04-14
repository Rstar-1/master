import React from "react";
import ParaText from "../../../components/common/ParaText";

const Digigtal = () => {
  return (
    <div className="bg_hero py20 px40">
      <div className="bgwhite b-shadow rounded-5 py10 px20">
        <div className="flex items-center justify-between">
          <ParaText
            text="Barasingha >"
            text2="Digital"
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
      <div className="grid-cols-2 gap-12 mtpx20">
        <div className="bgwhite b-shadow rounded-5 h-450px"></div>
        <div className="bgwhite b-shadow rounded-5 h-450px"></div>
      </div>
    </div>
  );
};

export default Digigtal;
