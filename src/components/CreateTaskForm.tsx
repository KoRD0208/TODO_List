import React, { useState } from "react";
import CreateTaskBtn from "./styledComponents/CreateTaskBtn/CreateTaskBtn";
import CreateTaskInput from "./styledComponents/CreateTaskInput/CreateTaskInput";
import { CreateTaskFormProps } from "../types";

function CreateTaskForm({ addTask }: CreateTaskFormProps) {
  let [inputValue, setInputValue] = useState("");

  function inputChange(value: string) {
    setInputValue(value);
  }

  return (
    <div className="create-item-form">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          inputValue && addTask(inputValue);
          setInputValue("");
        }}
      >
        <CreateTaskInput value={inputValue} checkInput={inputChange} />
        <CreateTaskBtn>Add Task</CreateTaskBtn>
      </form>
    </div>
  );
}

export default CreateTaskForm;
