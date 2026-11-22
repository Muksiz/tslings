import { test } from "node:test";
import assert from "node:assert/strict";

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "square"; size: number };

// The `switch` handles every variant, so TypeScript knows the function always returns.
function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
    case "square":
      return shape.size ** 2;
  }
}

test("circle", () => {
  assert.equal(area({ kind: "circle", radius: 1 }), Math.PI);
});

test("rectangle", () => {
  assert.equal(area({ kind: "rectangle", width: 2, height: 3 }), 6);
});

test("square", () => {
  assert.equal(area({ kind: "square", size: 4 }), 16);
});
