import React from "react";

const Search = () => {
  return (
    <>
      <div className="w-2/3 mx-auto flex flex-row my-4">
        <input
          className="w-1/3 mx-8 p-2 border-2 border-medium_violet bg-gray-lightest rounded-full placeholder-gray-400 placeholder-opacity-75"
          placeholder="Buscar por nombre del negocio"
          type="text"
        />
        <select
          className="w-1/3 mx-8 p-2 border-2 border-medium_violet bg-gray-lightest rounded-full text-gray-400 opacity-75"
          id="cars"
          name="cars"
        >
          <option className="text-gray-400 opacity-75" value="" disabled selected>
            Filtrar por Municipio
          </option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <select
          className="w-1/3 mx-8 p-2 border-2 border-medium_violet bg-gray-lightest rounded-full text-gray-400 opacity-75"
          id="cars"
          name="cars"
        >
          <option className="text-gray-400 opacity-75" value="" disabled selected>
            Filtrar por Categoría
          </option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        {/* <input
          className="w-1/3 mx-8 p-2 border-2 border-medium_violet bg-gray-lightest rounded-full"
          placeholder="Filtrar por Municipio"
          type="text"
        />
        <input
          className="w-1/3 mx-8 p-2 border-2 border-medium_violet bg-gray-lightest rounded-full"
          placeholder="Filtrar por Categoría"
          type="text"
        /> */}
      </div>
    </>
  );
};

export default Search;
