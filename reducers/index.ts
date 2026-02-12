import type { ToDoState } from "@/reducers/types";
import type { ToDoAction } from "@/reducers/types/action";

export function todoReducer(state: ToDoState, action: ToDoAction): ToDoState {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: String(Date.now()), title: action.payload.title, done: false },
        ],
      };
    }

    case "SET_INPUT": {
      return { ...state, inputText: action.payload };
    }

    case "TOGGLE_TODO": {
      const id = action.payload;
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === id ? { ...t, done: !t.done } : t
        ),
      };
    }

    case "DELETE_TODO": {
      const id = action.payload;
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== id),
      };
    }

    case "CLEAR_TODOS": {
      return { ...state, todos: [] };
    }

    case "CLEAR_INPUT": {
      return { ...state, inputText: "" };
    }
    default:
      return state;
  }
}
