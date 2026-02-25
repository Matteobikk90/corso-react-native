import type { ToDoState } from "@/reducers/types";
import type { NativeModules } from "@/types/store/modules";
import type { ToDoState as ToDoStateZustand } from "@/types/store/todo";

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

export const initialTodoStateZustand: ToDoStateZustand = {
  todos: [],
  inputText: "",
  error: null,
  loading: false,
};

export const initialModulesStateZustand: NativeModules = {
  asset: null,
  setAsset: () => {},
};
