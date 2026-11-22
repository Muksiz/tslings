import { test } from "node:test";
import assert from "node:assert/strict";

function bigger(a: number, b: number): number {
  // TODO: Complete this function to return the bigger number!
  // If both numbers are equal, any of them can be returned.
  // Do not use:
  // - `Math.max`
  // - another function call
  // - additional variables
}

// Don't change the tests!
test("ten is bigger than eight", () => {
  assert.equal(bigger(10, 8), 10);
});

test("fortytwo is bigger than thirtytwo", () => {
  assert.equal(bigger(32, 42), 42);
});

test("equal numbers", () => {
  assert.equal(bigger(42, 42), 42);
});
