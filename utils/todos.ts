import type { ToDoApiResponseType } from "@/types/api/todos";

export function mappingTodoFromApi(apiTodo: ToDoApiResponseType) {
  return {
    id: String(apiTodo.id),
    title: apiTodo.title,
    done: apiTodo.completed,
  };
}
