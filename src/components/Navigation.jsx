import React from "react";
import Icon from "../assets/icons/iconNav.svg";

const Navigation = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="px-2 my-auto text-white text-xl font-bold">Inicio</div>
        <div className="px-2 my-auto text-white text-xl font-bold">Ingresar</div>
        <div className="px-2 my-auto text-white text-xl font-bold">Contacto</div>
        <div className="flex flex-row px-2 my-auto">
          <img className="px-2" src={Icon} alt="" srcSet="" />
          <p className="px-2 my-auto text-white text-xl font-bold">Directorio Digital</p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
