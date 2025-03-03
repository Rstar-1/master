import React from "react";

const ParaText = ({
  text,
  text2,
  text3,
  secid = "",
  size = "",
  color = "",
  spc = "",
  brs = false,
  className = "",
}) => {
  const SizeClasses = {
    xxl: "fsize24 leading-sm",
    xl: "fsize22 leading-s",
    lg: "fsize18 leading-m",
    md: "fsize16 leading-m",
    sm: "fsize14 leading",
  };
  const ColorClasses = {
    dark: "textdark",
    white: "textwhite",
    gray: "textgray",
    primary: "textprimary",
    secondary: "textsecondary",
    success: "textsuccess",
    info: "textinfo",
    danger: "textdanger",
    warning: "textwarning",
  };
  const SpanClasses = {
    dark: "textdark",
    gray: "textgray",
    white: "textwhite",
    primary: "textprimary",
    secondary: "textsecondary",
    danger: "textdanger",
    info: "textinfo",
    warning: "textwarning",
    v1: "underline textprimary",
    v2: "textwhite px12 py2 rounded-5 bgprimary",
    v3: "textwhite px12 py2 rounded-5 bgsecondary",
  };
  const paraClass = `${SizeClasses[size] || ""} ${
    ColorClasses[color] || ""
  } ${className}`;
  const spanClass = `${SpanClasses[spc]}`;

  return (
    <>
      <p className={paraClass} id={secid}>
        {text.length > 0 ? text : null}
        {brs ? <br></br> : null}
        {text2.length > 0 ? (
          <span className={`${spanClass} ${brs ? "" : "mx8"}`}>{text2}</span>
        ) : null}
        {brs ? <br></br> : null}
        {text3.length > 0 ? text3 : null}
      </p>
    </>
  );
};

export default ParaText;
