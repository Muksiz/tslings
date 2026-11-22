import type { Equal, Expect } from "../../helpers/type-assert.ts";

interface Todo {
  id: number;
  title: string;
  description: string;
  done: boolean;
  createdAt: Date;
}

// Deriving types from `Todo` means they stay in sync when `Todo` changes.
type TodoPreview = Pick<Todo, "title" | "done">;

type NewTodo = Omit<Todo, "id" | "createdAt">;

type TodosByPriority = Record<"low" | "medium" | "high", Todo[]>;

type _tests = [
  Expect<Equal<TodoPreview, { title: string; done: boolean }>>,
  Expect<Equal<NewTodo, { title: string; description: string; done: boolean }>>,
  Expect<Equal<TodosByPriority, { low: Todo[]; medium: Todo[]; high: Todo[] }>>,
];
