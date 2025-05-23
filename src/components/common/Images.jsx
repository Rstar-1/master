import React from "react";

const Images = ({
  imgfit = "",
  imgHeight = "",
  imgScale = "",
  imgRound = "",
  className = "",
  custom = false,
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
    v4: "h-350px",
    v5: "h-300px",
    v6: "h-250px",
  };
  const imgscales = {
    v1: "filter-0",
    v2: "filter-1",
    v3: "filter-2",
    v4: "filter-3",
  };
  const imgrounds = {
    v1: "rounded-5",
    v2: "rounded-10",
    v3: "rounded-full",
  };
  const imgStructure =
    custom === false
      ? `${imgClasses[imgfit] || ""} ${imgHeights[imgHeight] || ""} ${
          imgscales[imgScale] || ""
        } ${imgrounds[imgRound] || ""} ${className || ""}`.trim()
      : `${className}`;

  return (
    <img src={source} alt="Banner" className={`${imgStructure}`} id={secID} />
  );
};

export default Images;
