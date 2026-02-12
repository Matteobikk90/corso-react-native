import { useContext } from "react";
import { ToDoContext } from "..";

export function useTodoContext() {
  const context = useContext(ToDoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a ToDoProvider");
  }
  return context;
}
