export type ToDoType = { id: string; title: string; done: boolean };

export type ToDoState = {
  todos: ToDoType[];
  inputText: string;
};
