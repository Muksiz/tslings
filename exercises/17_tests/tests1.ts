import { test } from "node:test";
import assert from "node:assert/strict";

function isEven(n: number): boolean {
  return n % 2 === 0;
}

// TODO: Fill in the assertions. `assert.ok(value)` passes if `value` is truthy.
test("you can assert", () => {
  assert.ok();
  assert.ok();
});
