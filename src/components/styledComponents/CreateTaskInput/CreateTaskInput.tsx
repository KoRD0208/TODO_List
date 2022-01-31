import React from "react";
import { CreateTaskInputProps } from "../../../types";
import classes from "./CreateTaskInput.module.css";
import { TextField } from "@mui/material";

function CreateTaskInput({ value, checkInput }: CreateTaskInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkInput(e.target.value);
  };

  return (
    <TextField
      type="text"
      variant="standard"
      placeholder="Task"
      value={value}
      onChange={handleChange}
    />
  );
}

export default CreateTaskInput;
