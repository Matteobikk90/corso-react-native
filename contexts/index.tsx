import { todoReducer } from "@/reducers";
import { initialTodoState } from "@/reducers/constants";
import { createContext, useReducer, type ReactNode } from "react";
import type { ToDoContextType } from "./types";

export const ToDoContext = createContext<ToDoContextType | null>(null);

export function ToDoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);

  const addTodo = (title: string) => {
    dispatch({ type: "ADD_TODO", payload: { title } });
  };

  const toggleTodo = (id: string) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const deleteTodo = (id: string) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const clearTodos = () => {
    dispatch({ type: "CLEAR_TODOS" });
  };

  const setInputText = (text: string) => {
    dispatch({ type: "SET_INPUT", payload: text });
  };

  const clearInput = () => {
    dispatch({ type: "CLEAR_INPUT" });
  };

  return (
    <ToDoContext
      value={{
        todos: state.todos,
        inputText: state.inputText,
        addTodo,
        toggleTodo,
        deleteTodo,
        clearTodos,
        clearInput,
        setInputText,
      }}>
      {children}
    </ToDoContext>
  );
}
