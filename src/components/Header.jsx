import React from "react";
import { Logo, Navigation } from "./";
import Form from "../assets/img/form.svg";
import Form2 from "../assets/img/form2.svg";
import LogoDir from "../assets/img/logo_directorio.svg";

const Header = () => {
  return (
    <>
      <div className="w-full bg-pink_red py-4">
        <div className="w-3/4 mx-auto flex flex-row justify-between">
          <Logo />
          <Navigation />
        </div>
      </div>
      <div className="grid grid-flow-col">
        <img className="justify-self-start" src={Form} alt="" srcSet="" />
        <img className="justify-self-center my-auto" src={LogoDir} alt="" srcSet="" />
        <img className="justify-self-end" src={Form2} alt="" srcSet="" />
      </div>
    </>
  );
};

export default Header;
