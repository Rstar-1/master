import React from "react";

const SmallText = ({
  text,
  text2 = "",
  text3 = "",
  secid = "",
  size = "",
  color = "",
  spc = "",
  brs = false,
  custom = false,
  status = true,
  className = "",
}) => {
  const SizeClasses = {
    xxl: "fsize22",
    xl: "fsize20 md-fsize17 sm-fsize15 leading-s",
    lg: "fsize18 md-fsize17 sm-fsize15 leading-m",
    md: "fsize16 md-fsize15 sm-fsize14 leading-m",
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
    v2: "textwhite px12 sm-px8 py2 rounded-5 bgprimary",
    v3: "textwhite px12 sm-px8 py2 rounded-5 bgsecondary",
  };
  const smallClass =
    custom === false
      ? `${SizeClasses[size] || ""} ${
          ColorClasses[color] || ""
        } ${className}`.trim()
      : `${className}`;
  const spanClass = `${SpanClasses[spc]}`;

  return (
    <>
      {status ? (
        <>
          <small className={smallClass} id={secid}>
            {text.length > 0 ? text : null}
            {brs ? <br></br> : null}
            {text2.length > 0 ? (
              <span className={`${spanClass} ${brs ? "" : "mx4"}`}>
                {text2}
              </span>
            ) : null}
            {brs ? <br></br> : null}
            {text3.length > 0 ? text3 : null}
          </small>
        </>
      ) : null}
    </>
  );
};

export default SmallText;
