import React from "react";
import { Search, Grid } from "../components/Directory";
import { Pagination, Header } from "../components";

const Directory = () => {
  return (
    <>
      <Header />
      <Search />
      <Grid />
      <Pagination />
    </>
  );
};

export default Directory;
