import React, { useState } from "react";
import "./App.css";
import CreateTaskForm from "./components/CreateTaskForm";
import TaskList from "./components/TaskList";
import { Context } from "./components/TodosContext";
import FilterList from "./components/styledComponents/Filters/FilterList";
// import Filter from "./components/styledComponents/Filters/Filter";
import Title from "./components/styledComponents/Title/Title";
import { Alert } from "@mui/material";
import useTodos from "./components/hooks/useTodos";
import { Todos } from "./types";

function App() {
  const { tasks, addTask, setTask, editTask, removeTask } = useTodos([]);

  // const active = tasks.filter((task: Todos) => !task.isCompleted);

  // const completed = tasks.filter((task: Todos) => task.isCompleted);

  // function checkFilter(filterName: string) {
  //   switch (filterName) {
  //     case "Active":
  //       return active;
  //     case "Completed":
  //       return completed;
  //     default: {
  //       return tasks;
  //     }
  //   }
  // }

  return (
    <div className="container">
      <Title>TODO List</Title>
      <CreateTaskForm addTask={addTask} />
      <Context.Provider value={{ setTask, editTask, removeTask }}>
        <TaskList tasks={tasks} />
      </Context.Provider>
      {/* {tasks.length > 0 && <FilterList checkFilter={checkFilter} />} */}
    </div>
  );
}

export default App;
