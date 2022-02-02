import React, { useState } from "react";
import { Todos } from "../../types";

function useTodos(initialValue: Todos[]) {
  const [tasks, setTasks] = useState<Todos[]>(initialValue);

  function addTask(taskName: string) {
    const newTasks = [
      {
        id: tasks.length,
        taskName,
        isCompleted: 0,
      },
      ...tasks,
    ];
    setTasks(newTasks);
  }

  function setTask(task: Todos) {
    setTasks((prevTasks: Todos[]) => {
      prevTasks.forEach((elem: Todos) => {
        if (elem.id === task.id) elem.isCompleted = task.isCompleted;
      });
      return [...prevTasks];
    });
  }

  function editTask(editedTask: Todos) {
    setTasks((prevTasks: Todos[]) => {
      prevTasks.forEach((task: Todos) => {
        if (task.id === editedTask.id) {
          task.taskName = editedTask.taskName;
        }
      });
      return [...prevTasks];
    });
  }

  function removeTask(id: number) {
    console.log("Deleted");
    const updatedTasks = tasks.filter((task: Todos) => {
      return task.id !== id;
    });
    setTasks(updatedTasks);
  }

  return {
    tasks,
    addTask,
    setTask,
    editTask,
    removeTask,
  };
}

export default useTodos;
