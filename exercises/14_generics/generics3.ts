import { test } from "node:test";
import assert from "node:assert/strict";

// TODO: Add a constraint to `T` so that it is known to have a `length`.
function longest<T>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}

// TODO: `key` must be one of the keys of `obj`, and the return type should be
// the type of that property. Hint: `K extends keyof T` and `T[K]`.
function getProperty<T>(obj: T, key: string): unknown {
  return obj[key];
}

// Don't change the tests!
test("longest string", () => {
  assert.equal(longest("alice", "bob"), "alice");
});

test("longest array", () => {
  assert.deepEqual(longest([1, 2], [1, 2, 3]), [1, 2, 3]);
});

test("get property", () => {
  const ferris = { name: "Ferris", age: 7 };
  const age: number = getProperty(ferris, "age");
  assert.equal(age, 7);
  // @ts-expect-error "email" is not a key of ferris.
  getProperty(ferris, "email");
});
