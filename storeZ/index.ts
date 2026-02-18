import type { ToDoState } from "@/types/store/todo";
import { create } from "zustand";
import { createSliceTodo } from "./slices/todo";

export const useStore = create<ToDoState>((set, get, store) => ({
  ...createSliceTodo(set, get, store),
}));
