import { test } from "node:test";
import assert from "node:assert/strict";

// `bigint` literals end with `n`. Numbers and bigints can't be mixed in arithmetic,
// so the loop counter and the initial value have to be bigints too.
function factorial(n: bigint): bigint {
  let result = 1n;
  for (let i = 2n; i <= n; i++) {
    result *= i;
  }
  return result;
}

test("small factorial", () => {
  assert.equal(factorial(5n), 120n);
});

test("big factorial", () => {
  assert.equal(factorial(25n), 15511210043330985984000000n);
});
