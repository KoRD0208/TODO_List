import React from "react";
import classes from "./styledComponents/Filters/FilterList.module.css";
import Filter from "./Filter";

function FilterList({ children }: any) {
  return <div className={classes.filterList}>{children}</div>;
}

export default FilterList;
