import React from "react";
import classes from "./TaskBtn.module.css";

function TaskBtn({ children, ...props }: any) {
  return (
    <button className={classes.taskBtn} {...props}>
      {children}
    </button>
  );
}

export default TaskBtn;
