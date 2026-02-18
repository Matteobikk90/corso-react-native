import { initialTodoStateZustand } from "@/reducers/constants";
import type { ToDoState } from "@/types/store/todo";
import { create } from "zustand";

export const useTodoStore = create<ToDoState>((set) => ({
  ...initialTodoStateZustand,
  addTodo: ({ title }: { title: string }) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: String(Date.now()),
          title,
          done: false,
        },
      ],
    })),
  setInputText: (inputText: string) =>
    set({
      inputText,
    }),
  toggleTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      ),
    })),
  deleteTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
    })),
  clearTodos: () => set({ todos: [] }),
  getTodos: async () => {
    set({ loading: true, error: null });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newTodos = [
        { id: "4", title: "Fare la spesa", done: false },
        { id: "5", title: "Andare in palestra", done: true },
        { id: "6", title: "Leggere un libro", done: false },
      ];

      set((state) => ({
        todos: [...state.todos, ...newTodos],
        loading: false,
      }));
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        set({
          error: error.message,
        });
      } else {
        set({
          error: "Errore",
        });
        console.log(String(error));
      }
    } finally {
      set({ loading: false });
    }
  },
}));
