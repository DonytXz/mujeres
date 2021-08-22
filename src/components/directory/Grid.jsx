import React from "react";
import Card from "./Card";
import incHealth from "../../assets/icons/ico_salud.svg";
import imgHealth from "../../assets/img/img_categoriaz.png";

const Grid = () => {
  return (
    <>
      <div className="w-2/3  mx-auto  gap-4 grid grid-rows-2 grid-cols-3 grid-flow-row">
        <Card
          place="Consultorio de Nutrición Karina Gutiérrez"
          imgPath1={incHealth}
          imgPath2={imgHealth}
          subtitle="SALUD"
          title="Nutrición"
          color="light_blue"
        />
        <Card
          place="Color Glossing"
          imgPath1={incHealth}
          imgPath2={imgHealth}
          subtitle="BELLEZA"
          title="Estética"
          color="light_violet"
        />
        <Card
          place="Consultorio de Nutrición Karina Gutiérrez"
          imgPath1={incHealth}
          imgPath2={imgHealth}
          subtitle="SALUD"
          title="Nutrición"
          color="light_blue"
        />
        <Card
          place="Fonda El Sazón de Julia"
          imgPath1={incHealth}
          imgPath2={imgHealth}
          subtitle="ALIMENTOS"
          title="Restaurantes"
          color="light_yellow"
        />
        <Card
          place="Consultorio de Nutrición Karina Gutiérrez"
          imgPath1={incHealth}
          imgPath2={imgHealth}
          subtitle="SALUD"
          title="Nutrición"
          color="light_blue"
        />
        <Card
          place="Fonda El Sazón de Julia"
          imgPath1={incHealth}
          imgPath2={imgHealth}
          subtitle="ALIMENTOS"
          title="Restaurantes"
          color="light_yellow"
        />
      </div>
    </>
  );
};

export default Grid;
