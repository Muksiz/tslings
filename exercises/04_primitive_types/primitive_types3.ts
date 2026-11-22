import { test } from "node:test";
import assert from "node:assert/strict";

// A `number` can only represent integers exactly up to `Number.MAX_SAFE_INTEGER` (2^53 - 1).
// Factorials grow fast: 25! doesn't fit.

// TODO: Make `factorial` work with `bigint` instead of `number`.
function factorial(n: number): number {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Don't change the tests!
test("small factorial", () => {
  assert.equal(factorial(5n), 120n);
});

test("big factorial", () => {
  assert.equal(factorial(25n), 15511210043330985984000000n);
});
