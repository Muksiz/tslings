import { test } from "node:test";
import assert from "node:assert/strict";

interface Point {
  x: number;
  y: number;
}

// TODO: Fix `containsPoint`. Objects are compared by reference, so `includes`
// only finds the exact same object, not an equal-looking one.
function containsPoint(points: Point[], target: Point): boolean {
  return points.includes(target);
}

// Don't change the tests!
test("finds an equal point", () => {
  const points = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
  ];
  assert.equal(containsPoint(points, { x: 3, y: 4 }), true);
});

test("doesn't find a missing point", () => {
  assert.equal(containsPoint([{ x: 1, y: 2 }], { x: 2, y: 1 }), false);
});
