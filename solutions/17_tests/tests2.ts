import { test } from "node:test";
import assert from "node:assert/strict";

function powerOfTwo(n: number): number {
  return 2 ** n;
}

function range(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i);
}

// With `node:assert/strict`, `equal` doesn't convert types: `8` is not `"8"`.
// Two arrays are never `===` equal unless they're the same object, so use `deepEqual`.
test("power of two", () => {
  assert.equal(powerOfTwo(3), 8);
});

test("range", () => {
  assert.deepEqual(range(3), [0, 1, 2]);
});
