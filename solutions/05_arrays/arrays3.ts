import { test } from "node:test";
import assert from "node:assert/strict";

// The spread syntax `...` copies the elements into a new array.
function withItem(list: readonly string[], item: string): readonly string[] {
  return [...list, item];
}

// `toSorted` (ES2023) returns a sorted copy. `[...list].sort(...)` works too.
// Note: without a compare function, `sort` compares numbers as strings! (`[10, 9].sort()` is `[10, 9]`)
function sortedCopy(list: readonly number[]): number[] {
  return list.toSorted((a, b) => a - b);
}

test("withItem returns a new array", () => {
  const groceries = ["milk", "eggs"];
  const more = withItem(groceries, "bread");
  assert.deepEqual(more, ["milk", "eggs", "bread"]);
  assert.deepEqual(groceries, ["milk", "eggs"]);
});

test("sortedCopy doesn't modify the input", () => {
  const numbers = [3, 1, 2];
  assert.deepEqual(sortedCopy(numbers), [1, 2, 3]);
  assert.deepEqual(numbers, [3, 1, 2]);
});
