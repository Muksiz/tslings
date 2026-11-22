import { test } from "node:test";
import assert from "node:assert/strict";

function isEven(n: number): boolean {
  return n % 2 === 0;
}

test("you can assert", () => {
  assert.ok(isEven(10));
  assert.ok(!isEven(9));
});
