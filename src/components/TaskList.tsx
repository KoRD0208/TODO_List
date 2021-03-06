import React from "react";
import Task from "./Task";
import { Todos } from "../types";

interface TasksProps {
  tasks: Todos[];
}

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
