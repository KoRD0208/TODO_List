import React from "react";
import Task from "./Task";
import { TaskProps } from "../types";
import { TasksProps } from "../types";

function TaskList({ tasks }: TasksProps) {
  return (
    <ul>
      {tasks
        .sort((a: TaskProps, b: TaskProps) => a.isCompleted - b.isCompleted)
        .map((task: any) => {
          return <Task task={task} key={task.id} />;
        })}
    </ul>
  );
}

export default TaskList;
