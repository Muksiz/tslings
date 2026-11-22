import { test } from "node:test";
import assert from "node:assert/strict";

// There is only one `number` type, and it is a floating point number.
// That means `/` never does integer division like in many other languages.

// TODO: Make `integerDivide` return the quotient rounded towards zero.
function integerDivide(a: number, b: number): number {
  return a / b;
}

// TODO: Floating point numbers can't represent 0.1 exactly. Make `almostEqual`
// return true if the numbers differ by less than `Number.EPSILON`.
function almostEqual(a: number, b: number): boolean {
  return a === b;
}

// Don't change the tests!
test("integer division", () => {
  assert.equal(integerDivide(7, 2), 3);
  assert.equal(integerDivide(9, 3), 3);
  assert.equal(integerDivide(-7, 2), -3);
});

test("almost equal", () => {
  assert.equal(almostEqual(0.1 + 0.2, 0.3), true);
  assert.equal(almostEqual(0.1, 0.2), false);
});
