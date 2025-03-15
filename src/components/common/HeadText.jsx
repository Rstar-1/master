import React from "react";

const HeadText = ({
  text,
  text2 = "",
  text3 = "",
  heading = "",
  secid = "",
  size = "",
  color = "",
  spc = "",
  brs = false,
  className = "",
}) => {
  const SizeClasses = {
    xxlsm: "font-600 fsize70 md-fsize40 sm-fsize38 my1 leading-smx",
    xlsm: "font-600 fsize60 md-fsize38 sm-fsize32 my1 leading-hsm",
    lgsm: "font-600 fsize48 md-fsize36 sm-fsize28 my1 leading-lsm",
    xxl: "font-600 fsize70 md-fsize38 sm-fsize34 my1 leading-x",
    xl: "font-600 fsize60 md-fsize34 sm-fsize30 my1 leading-h",
    lg: "font-600 fsize48 md-fsize32 sm-fsize24 my1 leading-l",
    md: "font-600 fsize36 md-fsize26 sm-fsize20 my1 leading-md",
    sm: "font-600 fsize28 md-fsize24 sm-fsize18 my1 leading-sm",
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
    success: "textsuccess",
    info: "textinfo",
    warning: "textwarning",
    v1: "textprimary",
    v2: "textwhite px14 md-px10 sm-px12 rounded-5 bgprimary",
    v3: "textwhite px14 md-px10 sm-px12 rounded-5 bgsecondary",
    v4: "textprimary underline",
  };
  const headClass = `${SizeClasses[size] || ""} ${
    ColorClasses[color] || ""
  } ${className}`;
  const spanClass = `${SpanClasses[spc]}`;

  return (
    <>
      {heading === "head2" ? (
        <h2 className={headClass} id={secid}>
          {text.length > 0 ? text : null}
          {brs ? <br></br> : null}
          {text2.length > 0 ? (
            <span className={`${spanClass} ${brs ? "" : "mx8"}`}>{text2}</span>
          ) : null}
          {brs ? <br></br> : null}
          {text3.length > 0 ? text3 : null}
        </h2>
      ) : null}
      {heading === "head3" ? (
        <h3 className={headClass} id={secid}>
          {text.length > 0 ? text : null}
          {brs ? <br></br> : null}
          {text2.length > 0 ? (
            <span className={`${spanClass} ${brs ? "" : "mx8"}`}>{text2}</span>
          ) : null}
          {brs ? <br></br> : null}
          {text3.length > 0 ? text3 : null}
        </h3>
      ) : null}
      {heading === "head4" ? (
        <h4 className={headClass} id={secid}>
          {text.length > 0 ? text : null}
          {brs ? <br></br> : null}
          {text2.length > 0 ? (
            <span className={`${spanClass} ${brs ? "" : "mx8"}`}>{text2}</span>
          ) : null}
          {brs ? <br></br> : null}
          {text3.length > 0 ? text3 : null}
        </h4>
      ) : null}
      {heading === "head5" ? (
        <h5 className={headClass} id={secid}>
          {text.length > 0 ? text : null}
          {brs ? <br></br> : null}
          {text2.length > 0 ? (
            <span className={`${spanClass} ${brs ? "" : "mx8"}`}>{text2}</span>
          ) : null}
          {brs ? <br></br> : null}
          {text3.length > 0 ? text3 : null}
        </h5>
      ) : null}
      {heading === "head6" ? (
        <h6 className={headClass} id={secid}>
          {text.length > 0 ? text : null}
          {brs ? <br></br> : null}
          {text2.length > 0 ? (
            <span className={`${spanClass} ${brs ? "" : "mx8"}`}>{text2}</span>
          ) : null}
          {brs ? <br></br> : null}
          {text3.length > 0 ? text3 : null}
        </h6>
      ) : null}
    </>
  );
};

export default HeadText;
