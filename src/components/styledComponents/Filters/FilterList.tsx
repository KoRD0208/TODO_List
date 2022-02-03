import React, { useState } from "react";
import classes from "./FilterList.module.css";

interface FilterListProps {
  children: React.ReactNode;
}

function FilterList({ children }: FilterListProps) {
  return <div className={classes.filterList}>{children}</div>;
}

export default FilterList;
