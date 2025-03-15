import React from "react";
import Buttons from "./Buttons";
import SmallText from "./SmallText";
import HeadText from "./HeadText";

const HeadSec = ({ text = "", text2 = "", text3 = "", version = "" }) => {
  return (
    <div>
      {version === "v1" ? (
        <div className="flex items-center justify-between">
          <div>
            <SmallText
              text={text}
              text2=""
              text3=""
              size="lg"
              spc=""
              color="primary"
              className="font-500"
            />
            <HeadText
              text={text2}
              text2=""
              text3=""
              spc=""
              heading="head6"
              size="sm"
              color="gray"
              className=""
            />
          </div>
          <Buttons
            text={text3}
            color="primary"
            round="sm"
            size="md"
            animation="v8"
            className="font-400"
          />
        </div>
      ) : null}
    </div>
  );
};

export default HeadSec;
