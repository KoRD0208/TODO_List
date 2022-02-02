import React from "react";
import classes from "./TaskTitle.module.css";

interface TaskTitleProps {
  value: string;
  checkboxState: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TaskTitle({
  value,
  checkboxState,
  handleChange,
  ...props
}: TaskTitleProps) {
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
