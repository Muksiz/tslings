import { test } from "node:test";
import assert from "node:assert/strict";

interface Point {
  x: number;
  y: number;
}

// `{ x: 3, y: 4 } === { x: 3, y: 4 }` is `false`: they are two different objects.
// Compare the fields instead.
function containsPoint(points: Point[], target: Point): boolean {
  return points.some((p) => p.x === target.x && p.y === target.y);
}

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
