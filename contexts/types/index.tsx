import type { ToDoType } from "@/reducers/types";

export type ToDoContextType = {
  todos: ToDoType[];
  inputText: string;
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  clearTodos: () => void;
  clearInput: () => void;
  setInputText: (text: string) => void;
};
