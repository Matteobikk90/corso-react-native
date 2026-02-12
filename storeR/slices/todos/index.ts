import { initialState } from "@/constants/initialState";
import { getTodos } from "@/queries/todos";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const todoSliceReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ title: string }>) => {
      state.todos.push({
        id: String(Date.now()),
        title: action.payload.title,
        done: false,
      });
    },

    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    clearTodos: (state) => {
      state.todos = [];
    },
    setInputText: (state, action: PayloadAction<string>) => {
      state.inputText = action.payload;
    },
    // clearInput: (state) => {
    //   state.inputText = "";
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = [...state.todos, ...action.payload];
    });
    builder.addCase(getTodos.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getTodos.rejected, (state) => {
      state.loading = false;
      state.error = "Chiamata API fallita";
    });

    // builder.addCase(addTodoAsync.fulfilled, (state, action) => {
    //   state.todos.push(action.payload);
    // });
  },
});

export const { addTodo, toggleTodo, deleteTodo, setInputText, clearTodos } =
  todoSliceReducer.actions;
export default todoSliceReducer.reducer;
