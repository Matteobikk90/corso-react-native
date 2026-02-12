import type { ToDoState } from "@/reducers/types";

export const initialTodoState: ToDoState = {
  todos: [
    {
      id: "1",
      title: "Cammina 10 min",
      done: false,
    },
    {
      id: "2",
      title: "Fai 10 push-up",
      done: false,
    },
    {
      id: "3",
      title: "Mangia una frutta",
      done: false,
    },
  ],
  inputText: "",
};
