import type { Equal, Expect } from "../../helpers/type-assert.ts";

// This exercise is checked only by the type checker.

interface Todo {
  id: number;
  title: string;
  description: string;
  done: boolean;
  createdAt: Date;
}

// TODO: Define these types using `Pick`, `Omit` and `Record`, based on `Todo`.

// Only `title` and `done`.
type TodoPreview = Todo;

// Everything except `id` and `createdAt`, which are filled in by the server.
type NewTodo = Todo;

// An object with the keys "low", "medium" and "high", each holding a list of todos.
type TodosByPriority = Todo;

// Don't change the type tests!
type _tests = [
  Expect<Equal<TodoPreview, { title: string; done: boolean }>>,
  Expect<Equal<NewTodo, { title: string; description: string; done: boolean }>>,
  Expect<Equal<TodosByPriority, { low: Todo[]; medium: Todo[]; high: Todo[] }>>,
];
