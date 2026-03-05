import { createSliceModules } from "@/storeZ/slices/modules";
import { createSliceNotifications } from "@/storeZ/slices/notifications";
import { createSliceTodo } from "@/storeZ/slices/todo";
import type { NativeModules } from "@/types/store/modules";
import type { NotificationsType } from "@/types/store/notifications";
import type { ToDoState } from "@/types/store/todo";
import { devtools } from "@csark0812/zustand-expo-devtools";
import { create } from "zustand";

type StoreState = ToDoState & NativeModules & NotificationsType;

export const useStore = create<StoreState>()(
  devtools(
    (set, get, store) => ({
      ...createSliceTodo(set, get, store),
      ...createSliceModules(set, get, store),
      ...createSliceNotifications(set, get, store),
    }),
    { name: "AppStore" }
  )
);
