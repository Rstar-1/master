import React from "react";
import Buttons from "../common/Buttons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const NavData = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Service" },
    { href: "/blogs", label: "Project" },
    { href: "/blogs", label: "Blogs" },
    { href: "/connect", label: "Connect" },
  ];
  return (
    <div className="py12 w-full navbar">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="font-500 fsize20 textgray my1">
            Bara<span className="textprimary mlpx2">Singha</span>
          </h1>
          <div className="flex md-hidden sm-hidden items-center gap-12">
            {NavData.map((e, index) => (
              <NavLink
                key={index}
                to={e?.href}
                className="activetext font-400 mx12 fsize14"
                activeClassName="active"
              >
                {e?.label}
              </NavLink>
            ))}
          </div>
          <Buttons
            text="Get Started"
            color="primary"
            round="sm"
            size="sm"
            animation="v6"
            className="font-400 md-hidden sm-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
