import { test } from "node:test";
import assert from "node:assert/strict";

function bigger(a: number, b: number): number {
  if (a > b) {
    return a;
  } else {
    return b;
  }
  // Or as an expression: `return a > b ? a : b;`
}

test("ten is bigger than eight", () => {
  assert.equal(bigger(10, 8), 10);
});

test("fortytwo is bigger than thirtytwo", () => {
  assert.equal(bigger(32, 42), 42);
});

test("equal numbers", () => {
  assert.equal(bigger(42, 42), 42);
});
