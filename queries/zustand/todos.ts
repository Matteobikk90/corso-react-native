import { api } from "@/config/api";
import type { ToDoApiResponseType } from "@/types/api/todos";
import { mappingTodoFromApi } from "@/utils/todos";

export async function fetchTodos() {
  const response = await api.get<ToDoApiResponseType[]>("/todos?_limit=6");

  return response.data.map(mappingTodoFromApi);
}

export async function createTodo(title: string) {
  const response = await api.post("/todos", {
    title,
    completed: false,
    userId: 1,
  });

  return mappingTodoFromApi(response.data);
}

export async function updateTodo(id: string, done: boolean, title: string) {
  const response = await api.put(`/todos/${id}`, {
    id: Number(id),
    completed: done,
    userId: 1,
    title,
  });
  console.log("api", mappingTodoFromApi(response.data));
  return mappingTodoFromApi(response.data);
}

export async function removeTodo(id: string) {
  await api.delete(`/todos/${id}`);
}
