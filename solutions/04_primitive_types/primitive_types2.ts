import { test } from "node:test";
import assert from "node:assert/strict";

// `Math.trunc` rounds towards zero. `Math.floor` would give -4 for -7 / 2.
function integerDivide(a: number, b: number): number {
  return Math.trunc(a / b);
}

// `0.1 + 0.2` is `0.30000000000000004`, so compare floats with a tolerance.
function almostEqual(a: number, b: number): boolean {
  return Math.abs(a - b) < Number.EPSILON;
}

test("integer division", () => {
  assert.equal(integerDivide(7, 2), 3);
  assert.equal(integerDivide(9, 3), 3);
  assert.equal(integerDivide(-7, 2), -3);
});

test("almost equal", () => {
  assert.equal(almostEqual(0.1 + 0.2, 0.3), true);
  assert.equal(almostEqual(0.1, 0.2), false);
});
