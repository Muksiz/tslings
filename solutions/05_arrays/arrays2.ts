import { test } from "node:test";
import assert from "node:assert/strict";

// `??` returns the right side when the left side is `null` or `undefined`.
function firstOrDefault(arr: string[]): string {
  return arr[0] ?? "(empty)";
}

// The return type has to admit `undefined` too. `arr.at(-1)` is the last element.
function last(arr: number[]): number | undefined {
  return arr.at(-1);
}

test("first or default", () => {
  assert.equal(firstOrDefault(["a", "b"]), "a");
  assert.equal(firstOrDefault([]), "(empty)");
});

test("last", () => {
  assert.equal(last([1, 2, 3]), 3);
  assert.equal(last([]), undefined);
});
