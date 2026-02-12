export type ToDotype = { id: string; title: string; done: boolean };

export type ToDoState = {
  todos: ToDotype[];
  inputText: string;
  loading: boolean;
  error: string | null;
};
