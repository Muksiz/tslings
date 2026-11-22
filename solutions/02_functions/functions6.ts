import { test } from "node:test";
import assert from "node:assert/strict";

// A function type is written like an arrow function with types instead of a body.
// You can also give it a name: `type NumberFn = (n: number) => number;`
function applyTwice(f: (n: number) => number, x: number): number {
  return f(f(x));
}

const addThree = (n: number) => n + 3;

const square = (n: number) => n * n;

test("applies addThree twice", () => {
  assert.equal(applyTwice(addThree, 1), 7);
});

test("applies square twice", () => {
  assert.equal(applyTwice(square, 3), 81);
});
