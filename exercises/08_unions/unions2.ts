import { test } from "node:test";
import assert from "node:assert/strict";

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number };
// TODO: Add a "square" variant with a `size` property.

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      // Inside this case, TypeScript knows that `shape` has a `radius`.
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
    // TODO: Handle the square.
  }
}

// Don't change the tests!
test("circle", () => {
  assert.equal(area({ kind: "circle", radius: 1 }), Math.PI);
});

test("rectangle", () => {
  assert.equal(area({ kind: "rectangle", width: 2, height: 3 }), 6);
});

test("square", () => {
  assert.equal(area({ kind: "square", size: 4 }), 16);
});
