import type { ToDoType } from ".";

export type ToDoAction =
  | {
      type: "ADD_TODO";
      payload: ToDoType;
    }
  | {
      type: "SET_INPUT";
      payload: string;
    }
  | {
      type: "TOGGLE_TODO";
      payload: string;
    }
  | {
      type: "DELETE_TODO";
      payload: string;
    }
  | {
      type: "CLEAR_TODOS";
    }
  | {
      type: "CLEAR_INPUT";
    };
