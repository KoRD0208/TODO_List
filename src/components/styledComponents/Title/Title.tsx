import React from "react";
import classes from "./Title.module.css";

function Title({ children }: any) {
  return <div className={classes.title}>{children}</div>;
}

export default Title;
