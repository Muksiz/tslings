import { test } from "node:test";
import assert from "node:assert/strict";

// Functions are values: they can be stored in variables and passed to other functions.

// TODO: Replace `unknown` with a function type that takes a number and returns a number.
function applyTwice(f: unknown, x: number): number {
  return f(f(x));
}

// An arrow function stored in a variable.
const addThree = (n: number) => n + 3;

// TODO: Write an arrow function `square` that squares a number.

// Don't change the tests!
test("applies addThree twice", () => {
  assert.equal(applyTwice(addThree, 1), 7);
});

test("applies square twice", () => {
  assert.equal(applyTwice(square, 3), 81);
});
