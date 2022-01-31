import React from "react";
import classes from "./TaskTitle.module.css";

function TaskTitle({ value, checkboxState, handleChange, ...props }: any) {
  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      disabled={checkboxState}
      className={classes.taskTitle}
      {...props}
    />
  );
}

export default TaskTitle;
