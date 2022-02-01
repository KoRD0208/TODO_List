import React from "react";
import Task from "./Task";
import { Todos } from "../types";
import { TasksProps } from "../types";

function TaskList({ tasks }: TasksProps) {
  return (
    <ul>
      {tasks
        .sort((a: Todos, b: Todos) => a.isCompleted - b.isCompleted)
        .map((task: Todos) => {
          return <Task task={task} key={task.id} />;
        })}
    </ul>
  );
}

export default TaskList;
