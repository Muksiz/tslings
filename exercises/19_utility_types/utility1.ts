import { test } from "node:test";
import assert from "node:assert/strict";

interface Todo {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

// TODO: Fix the type of `changes` so that callers only need to pass the properties they change.
function updateTodo(todo: Todo, changes: Todo): Todo {
  return { ...todo, ...changes };
}

// TODO: Give `freeze` a return type so that the result can't be modified.
function freeze(todo: Todo) {
  return Object.freeze({ ...todo });
}

// Don't change the tests!
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
