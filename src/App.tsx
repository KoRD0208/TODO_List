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
import Filter from "./components/styledComponents/Filters/Filter";

const FILTER_STATUS = {
  active: "active",
  completed: "completed",
};

function App() {
  const { tasks, addTask, setTask, editTask, removeTask } = useTodos([]);
  const [filter, setFilter] = useState<string>("");

  const filteredTasks = tasks.filter((task: Todos) => {
    switch (filter) {
      case "active":
        return !task.isCompleted;
      case "completed":
        return task.isCompleted;
      default: {
        return true;
      }
    }
  });

  function byActive() {
    setFilter(FILTER_STATUS.active);
  }

  function byComplete() {
    setFilter(FILTER_STATUS.completed);
  }

  function reset() {
    setFilter("");
  }

  return (
    <div className="container">
      <Title>TODO List</Title>
      <CreateTaskForm addTask={addTask} />
      <Context.Provider value={{ setTask, editTask, removeTask }}>
        {filteredTasks.length > 0 ? (
          <TaskList tasks={filteredTasks} />
        ) : (
          <Alert severity="warning">None of {filter} tasks not found</Alert>
        )}
      </Context.Provider>
      {tasks.length > 0 && (
        <FilterList>
          <Filter name="Active" filterFunc={byActive} />
          <Filter name="Completed" filterFunc={byComplete} />
          <Filter name="Reset" filterFunc={reset} />
        </FilterList>
      )}
    </div>
  );
}

export default App;
