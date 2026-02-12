import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./slices/todos";

export const store = configureStore({
  reducer: {
    todoSliceReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
