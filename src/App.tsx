import React, { useState, useRef } from "react";
import "./App.css";
import CreateTaskForm from "./components/CreateTaskForm";
import TaskList from "./components/TaskList";
import { Context } from "./components/TodosContext";
import { Todos } from "./types";
import FilterList from "./components/FilterList";
import Filter from "./components/Filter";
import Title from "./components/styledComponents/Title/Title";
import { Alert } from "@mui/material";

function App() {
  const [tasks, setTasks] = useState<Todos[]>([]);
  let [counter, setCounter] = useState(0);
  const allTasksRef = useRef<Todos[]>([]);

  function addTask(taskName: string) {
    const newTasks = [
      {
        id: counter,
        taskName,
        isCompleted: 0,
      },
      ...tasks,
    ];
    setTasks(newTasks);
    setCounter(++counter);
    allTasksRef.current = newTasks;
    console.log(allTasksRef);
  }

  function setTask(task: Todos) {
    setTasks((prevTasks: Todos[]) => {
      prevTasks.forEach((elem: Todos) => {
        if (elem.id === task.id) elem.isCompleted = task.isCompleted;
      });
      return [...prevTasks];
    });
    allTasksRef.current = tasks;
    console.log(allTasksRef);
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
    allTasksRef.current = tasks;
    console.log(allTasksRef);
  }

  function removeTask(id: number) {
    console.log("Deleted");
    const updatedTasks = tasks.filter((task: Todos) => {
      return task.id !== id;
    });
    setTasks(updatedTasks);
    allTasksRef.current = updatedTasks;
    console.log(allTasksRef);
  }

  function byActive() {
    const activeTasks = allTasksRef.current.filter(
      (task) => task.isCompleted === 0
    );
    activeTasks.length > 0 && setTasks(activeTasks);
  }
  function byComplete() {
    const completedTasks = allTasksRef.current.filter(
      (task) => task.isCompleted === 1
    );
    completedTasks.length > 0 && setTasks(completedTasks);
  }
  function reset() {
    setTasks(allTasksRef.current);
  }

  return (
    <div className="container">
      <Title>TODO List</Title>
      <CreateTaskForm addTask={addTask} />
      <Context.Provider value={{ setTask, editTask, removeTask }}>
        <TaskList tasks={tasks} />
      </Context.Provider>
      {tasks.length > 0 && (
        <FilterList>
          <Filter filterFunc={byActive} name="Active" />
          <Filter filterFunc={byComplete} name="Completed" />
          <Filter filterFunc={reset} name="Reset" />
        </FilterList>
      )}
    </div>
  );
}

export default App;
