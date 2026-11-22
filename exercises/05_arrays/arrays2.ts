import { test } from "node:test";
import assert from "node:assert/strict";

// This exercise is checked with the `noUncheckedIndexedAccess` compiler option turned on.
// (Your editor might not show the errors, but tslings will.)
// With it, reading `arr[i]` gives `T | undefined`, because the index might be out of bounds.

// TODO: Return the first element, or "(empty)" if the array is empty.
function firstOrDefault(arr: string[]): string {
  return arr[0];
}

// TODO: Return the last element, or `undefined` if the array is empty.
// Hint: Arrays have an `at` method that accepts negative indices.
function last(arr: number[]): number {
  return arr[arr.length - 1];
}

// Don't change the tests!
test("first or default", () => {
  assert.equal(firstOrDefault(["a", "b"]), "a");
  assert.equal(firstOrDefault([]), "(empty)");
});

test("last", () => {
  assert.equal(last([1, 2, 3]), 3);
  assert.equal(last([]), undefined);
});
