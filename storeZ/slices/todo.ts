import { LAST_SYNC, TODOD_CACHE_KEY } from "@/constants/storage";
import {
  createTodo,
  fetchTodos,
  removeTodo,
  updateTodo,
} from "@/queries/zustand/todos";
import { initialTodoStateZustand } from "@/reducers/constants";
import type { ToDoState as ToDoStateSliceType } from "@/types/store/todo";
import { logStep } from "@/utils/logs";
import { clearStorage, storageGet, storageSet } from "@/utils/storage";
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
    const state = get();

    if (state.todos.length > 0) {
      console.log("Using cached todos");
      return;
    }

    set({ loading: true, error: null });

    try {
      const todos = await fetchTodos();
      const now = new Date().toISOString();

      set({ todos, lastSync: now });

      await storageSet(TODOD_CACHE_KEY, todos);
      await storageSet(LAST_SYNC, now);

      console.log("Saved to cache", todos.length);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Errore";
      return message;
    } finally {
      set({ loading: false });
    }
  },

  loadFromCache: async () => {
    try {
      const cachedTodos = await storageGet(TODOD_CACHE_KEY);
      const lastSync = await storageGet(LAST_SYNC);

      if (cachedTodos) {
        console.log("Loaded from cache", cachedTodos.length);
        set({ todos: cachedTodos, lastSync });
      }
    } catch (error) {
      console.error("Failed to load cache", error);
    } finally {
      set({ loading: false });
    }
  },

  clearCache: async () => {
    try {
      await clearStorage();
    } catch (error) {
      console.error("Failed to clear cache", error);
    }
  },

  addTodo: async ({ title }: { title: string }) => {
    logStep("TODO", "Start addTodo", { title });
    set({ loading: true });

    try {
      const newTodo = await createTodo(title);

      logStep("API", "Todo creato", newTodo);
      set((state) => ({
        todos: [...state.todos, newTodo],
      }));
    } catch (error) {
      logStep("ERROR", "Errore addTodo", error);
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
      const updatedTodo = await updateTodo(id, !todo.done, todo.title);

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
