import React from "react";
import classes from "./CreateTaskBtn.module.css";

interface CreateBtnProps {
  children: React.ReactNode;
}

function CreateTaskBtn({ children, ...props }: CreateBtnProps) {
  return (
    <button {...props} className={classes.createTaskBtn}>
      {children}
    </button>
  );
}

export default CreateTaskBtn;
