import { test } from "node:test";
import assert from "node:assert/strict";

interface Todo {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

function updateTodo(todo: Todo, changes: Partial<Todo>): Todo {
  return { ...todo, ...changes };
}

// `Object.freeze` is already typed to return `Readonly<T>`. Writing it down documents it.
function freeze(todo: Todo): Readonly<Todo> {
  return Object.freeze({ ...todo });
}

const todo: Todo = { id: 1, title: "Learn TS", description: "Do tslings", done: false };

test("update todo", () => {
  assert.deepEqual(updateTodo(todo, { done: true }), { ...todo, done: true });
  assert.deepEqual(updateTodo(todo, {}), todo);
});

test("frozen todo", () => {
  const frozen = freeze(todo);
  const check: Readonly<Todo> = frozen;
  assert.equal(check.title, "Learn TS");
});
