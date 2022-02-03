import React from "react";
import classes from "./Filter.module.css";

interface FilterProps {
  name: string;
  filterFunc: () => void;
}

function Filter({ name, filterFunc }: FilterProps) {
  return (
    <div className={classes.filter} onClick={filterFunc}>
      {name}
    </div>
  );
}

export default Filter;
