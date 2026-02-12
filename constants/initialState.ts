import type { ToDoState } from "@/types/store/todo";

export const initialState: ToDoState = {
  todos: [],
  inputText: "",
  loading: false,
  error: null,
};
