export type ToDotype = { id: string; title: string; done: boolean };

export type ToDoState = {
  todos: ToDotype[];
  inputText: string;
  loading: boolean;
  error: string | null;
  getTodos: () => void;
  setInputText: (text: string) => void;
  toggleTodo: (id: string) => void;
  addTodo: ({ title }: { title: string }) => void;
  deleteTodo: (id: string) => void;
  clearTodos: () => void;
};
