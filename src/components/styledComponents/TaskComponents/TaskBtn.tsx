import React from "react";
import classes from "./TaskBtn.module.css";

interface TaskBtnProps {
  children: React.ReactNode;
}

function TaskBtn({ children, ...props }: TaskBtnProps) {
  return (
    <button className={classes.taskBtn} {...props}>
      {children}
    </button>
  );
}

export default TaskBtn;
