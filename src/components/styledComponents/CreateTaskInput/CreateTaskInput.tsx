import React from "react";

import { TextField } from "@mui/material";

interface CreateTaskInputProps {
  value: string;
  checkInput: (value: string) => void;
}

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
