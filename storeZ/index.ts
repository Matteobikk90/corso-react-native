import type { NativeModules } from "@/types/store/modules";
import type { ToDoState } from "@/types/store/todo";
import { create } from "zustand";
import { createSliceModules } from "./slices/modules";
import { createSliceTodo } from "./slices/todo";

type StoreState = ToDoState & NativeModules;

export const useStore = create<StoreState>((set, get, store) => ({
  ...createSliceTodo(set, get, store),
  ...createSliceModules(set, get, store),
}));
