import { test } from "node:test";
import assert from "node:assert/strict";

interface Point2D {
  x: number;
  y: number;
}

// With a type alias, this would be an intersection: `type Point3D = Point2D & { z: number };`
interface Point3D extends Point2D {
  z: number;
}

function length2D(p: Point2D): number {
  return Math.hypot(p.x, p.y);
}

function length3D(p: Point3D): number {
  return Math.hypot(p.x, p.y, p.z);
}

test("3D length", () => {
  assert.equal(length3D({ x: 2, y: 3, z: 6 }), 7);
});

test("a 3D point can be used as a 2D point", () => {
  const p: Point3D = { x: 3, y: 4, z: 12 };
  assert.equal(length2D(p), 5);
});
