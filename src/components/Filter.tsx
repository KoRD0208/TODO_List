import React from "react";
import classes from "./styledComponents/Filters/Filter.module.css";

function Filter({ filterFunc, name }: any) {
  return (
    <div onClick={filterFunc} className={classes.filter}>
      {name}
    </div>
  );
}

export default Filter;
