export interface TaskProps {
  id: number;
  taskName: string;
  isCompleted: number;
}

export interface TasksProps {
  tasks: TaskProps[];
}

export interface TaskBlockProps {
  task: TaskProps;
}

export interface CreateTaskFormProps {
  addTask: (value: string) => void;
}

export interface CreateTaskInputProps {
  value: string;
  checkInput: (value: string) => void;
}