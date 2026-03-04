export type ToDotype = { id: string; title: string; done: boolean };

export type ToDoState = {
  todos: ToDotype[];
  inputText: string;
  loading: boolean;
  error: string | null;
  getTodos: () => Promise<string | undefined>;
  setInputText: (text: string) => void;
  toggleTodo: (id: string) => void;
  addTodo: ({ title }: { title: string }) => void;
  deleteTodo: (id: string) => void;
  clearTodos: () => void;
  loadFromCache: () => Promise<void>;
  clearCache: () => void;
  lastSync: string | null;
};
