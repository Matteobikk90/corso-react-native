import {
  createTodo,
  fetchTodos,
  removeTodo,
  updateTodo,
} from "@/queries/zustand/todos";
import { initialTodoStateZustand } from "@/reducers/constants";
import type { ToDoState as ToDoStateSliceType } from "@/types/store/todo";
import type { StateCreator } from "zustand";

export const createSliceTodo: StateCreator<ToDoStateSliceType> = (
  set,
  get
) => ({
  ...initialTodoStateZustand,
  // addTodo: ({ title }: { title: string }) =>
  //   set((state) => ({
  //     todos: [
  //       ...state.todos,
  //       {
  //         id: String(Date.now()),
  //         title,
  //         done: false,
  //       },
  //     ],
  //   })),
  setInputText: (inputText: string) =>
    set({
      inputText,
    }),
  // toggleTodo: (id: string) =>
  //   set((state) => ({
  //     todos: state.todos.map((t) =>
  //       t.id === id ? { ...t, done: !t.done } : t
  //     ),
  //   })),
  // deleteTodo: (id: string) =>
  //   set((state) => ({
  //     todos: state.todos.filter((t) => t.id !== id),
  //   })),
  clearTodos: () => set({ todos: [] }),
  getTodos: async () => {
    set({ loading: true, error: null });

    try {
      const todos = await fetchTodos();
      set({ todos });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Errore";
      return message;
    } finally {
      set({ loading: false });
    }
  },

  addTodo: async ({ title }: { title: string }) => {
    set({ loading: true });

    try {
      const newTodo = await createTodo(title);

      set((state) => ({
        todos: [...state.todos, newTodo],
      }));
    } catch (error) {
      const message = error instanceof Error ? error.message : "Errore";
      return message;
    } finally {
      set({ loading: false });
    }
  },

  toggleTodo: async (id: string) => {
    const todo = get().todos.find((t) => t.id === id);

    if (!todo) return;

    set({ loading: true });

    try {
      const updatedTodo = await updateTodo(id, !todo.done);

      set((state) => ({
        todos: state.todos.map((t) => (t.id === id ? updatedTodo : t)),
      }));
    } catch (error) {
      const message = error instanceof Error ? error.message : "Errore";
      return message;
    } finally {
      set({ loading: false });
    }
  },

  deleteTodo: async (id: string) => {
    set({ loading: true });

    try {
      await removeTodo(id);

      set((state) => ({
        todos: state.todos.filter((t) => t.id !== id),
      }));
    } catch (error) {
      const message = error instanceof Error ? error.message : "Errore";
      return message;
    } finally {
      set({ loading: false });
    }
  },
});
