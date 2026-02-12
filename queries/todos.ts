import type { ToDoType } from "@/reducers/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTodos = createAsyncThunk(
  "todos/getTodos",

  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return [
      { id: "4", title: "Fare la spesa", done: false },
      { id: "5", title: "Andare in palestra", done: true },
      { id: "6", title: "Leggere un libro", done: false },
    ];
  }
);

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",

  async (todo: ToDoType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return todo;
  }
);
