export interface Todos {
  id: number;
  taskName: string;
  isCompleted: number;
}

export interface TasksProps {
  tasks: Todos[];
}

export interface TaskBlockProps {
  task: Todos;
}

export interface CreateTaskFormProps {
  addTask: (value: string) => void;
}

export interface CreateTaskInputProps {
  value: string;
  checkInput: (value: string) => void;
}