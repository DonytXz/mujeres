import React from "react";
import Icon from "../assets/icons/iconNav.svg";

const Navigation = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="px-2 my-auto text-white">Inicio</div>
        <div className="px-2 my-auto text-white">Ingresar</div>
        <div className="px-2 my-auto text-white">Contacto</div>
        <div className="flex flex-row px-2 my-auto text-white">
          <img className="px-2" src={Icon} alt="" srcSet="" />
          <p className="px-2 my-auto text-white">Directorio Digital</p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
