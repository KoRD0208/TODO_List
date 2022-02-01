import React from "react";
import classes from "./Title.module.css";

interface TitleProps {
  children: React.ReactNode;
}

function Title({ children }: TitleProps) {
  return <div className={classes.title}>{children}</div>;
}

export default Title;
