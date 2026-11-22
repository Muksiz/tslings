import { test } from "node:test";
import assert from "node:assert/strict";

function powerOfTwo(n: number): number {
  return 2 ** n;
}

function range(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i);
}

// TODO: These tests fail, but the functions are correct. Fix the tests.
test("power of two", () => {
  assert.equal(powerOfTwo(3), "8");
});

test("range", () => {
  assert.equal(range(3), [0, 1, 2]);
});
