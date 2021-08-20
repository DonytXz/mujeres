import React from "react";
import { Search, Grid } from "../components/Directory";
import { Pagination, Header } from "../components";

const Directory = () => {
  return (
    <>
      <div className="w-full">
        <Header />
        <Search />
        <Grid />
        <Pagination />
      </div>
    </>
  );
};

export default Directory;
