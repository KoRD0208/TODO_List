import React, { useContext } from "react";
import { Context } from "./TodosContext";
import { TaskBlockProps } from "../types";
import TaskBtn from "./styledComponents/TaskComponents/TaskBtn";
import classes from "./styledComponents/TaskComponents/Task.module.css";
import TaskTitle from "./styledComponents/TaskComponents/TaskTitle";

function Task({ task }: TaskBlockProps) {
  const { setTask, editTask, removeTask } = useContext(Context);
  function changeState(e: React.ChangeEvent<HTMLInputElement>) {
    task.isCompleted = +e.target.checked;
    setTask(task);
  }

  function changeName(e: React.ChangeEvent<HTMLInputElement>) {
    task.taskName = e.target.value;
    editTask(task);
  }

  return (
    <div className={classes.task}>
      <input
        type="checkbox"
        checked={!!task.isCompleted}
        onChange={changeState}
      />
      <TaskTitle
        value={task.taskName}
        checkboxState={!!task.isCompleted}
        handleChange={changeName}
      />
      <TaskBtn onClick={() => removeTask(task.id)}>Delete</TaskBtn>
    </div>
  );
}

export default Task;
