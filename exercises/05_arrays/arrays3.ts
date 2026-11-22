import { test } from "node:test";
import assert from "node:assert/strict";

// `readonly string[]` promises that the function won't modify the array it receives.

// TODO: `withItem` must not modify `list`. Return a new array instead.
function withItem(list: readonly string[], item: string): readonly string[] {
  list.push(item);
  return list;
}

// TODO: Return a sorted copy without modifying `list`.
// Hint: Look for a "to" version of `sort`.
function sortedCopy(list: readonly number[]): number[] {
  return list.sort((a, b) => a - b);
}

// Don't change the tests!
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
