import React from "react";
const Buttons = ({
  text,
  onClick,
  color = "",
  size = "",
  round = "",
  animation = "",
  className = "",
  disabled = false,
}) => {
  const colorClasses = {
    primary: "bgprimary textwhite border-0",
    secondary: "bgsecondary textwhite border-0",
    success: "bgsuccess textwhite border-0",
    danger: "bgdanger textwhite border-0",
    warning: "bgwarning textwhite border-0",
    bprimary: "bg-transparent textprimary border-primary",
    bsecondary: "bg-transparent textsecondary border-secondary",
    bsuccess: "bg-transparent textsuccess border-success",
    bdanger: "bg-transparent textdanger border-danger",
    bwarning: "bg-transparent textwarning border-warning",
    dprimary: "bgprimary textdark border-0",
    dsecondary: "bgsecondary textdark border-0",
  };
  const sizeClasses = {
    sm: "px16 py6 fsize14",
    md: "px20 py8 fsize16",
    lg: "px25 py8 fsize18",
  };
  const roundClasses = {
    sm: "rounded-5",
    md: "rounded-10",
    lg: "rounded-20",
  };
  const animationClasses = {
    v1: "btn-style1",
    v2: "btn-style2",
    v3: "btn-style3",
    v4: "btn-style4",
    v5: "btn-style5",
    v6: "btn-style6",
    v7: "btn-style7",
    v8: "btn-style8",
    v9: "btn-style9",
    v10: "btn-style10",
    v11: "btn-style11",
    v12: "btn-style12",
    v13: "btn-style13",
  };
  const buttonClass = `${
    animationClasses[animation] ? "v0" : colorClasses[color]
  } ${sizeClasses[size]} ${roundClasses[round]} ${
    animationClasses[animation]
  } ${className}
  cursor-pointer click-btn`;
  return (
    <button
      className={
        disabled
          ? "bg-ec px16 py8 rounded-5 border-0 texttertiary"
          : buttonClass
      }
      onClick={onClick}
      disabled={disabled}
    >
      <span>{text}</span>
    </button>
  );
};
export default Buttons;
