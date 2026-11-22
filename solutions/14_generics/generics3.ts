import { test } from "node:test";
import assert from "node:assert/strict";

// Strings and arrays both have a `length`, so both are allowed.
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}

// For `getProperty(ferris, "age")`, `K` is inferred as `"age"` and `T[K]` as `number`.
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

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
