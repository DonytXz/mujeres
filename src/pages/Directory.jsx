import React from "react";
// import { Search, Grid } from "../components/Directory";
import Search from "../components/directory/Search";
import Grid from "../components/directory/Grid";
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
