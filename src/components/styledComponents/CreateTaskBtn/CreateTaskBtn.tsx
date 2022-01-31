import React from "react";
import classes from "./CreateTaskBtn.module.css";

function CreateTaskBtn({ children, ...props }: any) {
  return (
    <button {...props} className={classes.createTaskBtn}>
      {children}
    </button>
  );
}

export default CreateTaskBtn;
