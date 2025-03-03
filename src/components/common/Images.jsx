import React from "react";
import Image from "next/image";

const Images = ({
  imgclass = "",
  imgHeight = "",
  imgScale = "",
  imgRound = "",
  className = "",
  secID,
  source,
}) => {
  const imgClasses = {
    v1: "object-contain",
    v2: "object-cover",
    v3: "object-fit",
  };
  const imgHeights = {
    v1: "h-450px",
    v2: "h-500px",
    v3: "h-600px",
  };
  const imgscales = {
    v1: "filter-1",
    v2: "filter-2",
    v3: "filter-3",
  };
  const imgrounds = {
    v1: "rounded-5",
    v2: "rounded-10",
    v3: "rounded-full",
  };
  const imgStructure = `${imgClasses[imgclass] || ""} ${
    imgHeights[imgHeight] || ""
  } ${imgscales[imgScale] || ""} ${imgrounds[imgRound] || ""} ${
    className || ""
  }`;

  return (
    <Image
      src={source}
      alt="Banner"
      className={`hero_img ${imgStructure}`}
      id={secID}
    />
  );
};

export default Images;
