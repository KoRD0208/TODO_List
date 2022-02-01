import React from "react"
import { Todos } from "../types";

interface ToDosContextProps {
  setTask: (task: Todos) => void;
  editTask: (editedTask: Todos) => void;
  removeTask: (id: number) => void;
}

export const Context = React.createContext<ToDosContextProps>({
  setTask: function(task) {console.log(task)},
  editTask: function(editedTask) {console.log(editedTask)},
  removeTask: function(id) {console.log(id)}
});