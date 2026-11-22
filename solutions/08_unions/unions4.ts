import { test } from "node:test";
import assert from "node:assert/strict";

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

function opposite(direction: Direction): Direction {
  switch (direction) {
    case Direction.Up:
      return Direction.Down;
    case Direction.Down:
      return Direction.Up;
    case Direction.Left:
      return Direction.Right;
    case Direction.Right:
      return Direction.Left;
  }
}

// Literal unions need no runtime code and are just as type safe. That's why many
// codebases prefer them over enums.
type Compass = "N" | "E" | "S" | "W";

function turnRight(heading: Compass): Compass {
  const order: Compass[] = ["N", "E", "S", "W"];
  return order[(order.indexOf(heading) + 1) % order.length];
}

test("opposite", () => {
  assert.equal(opposite(Direction.Up), Direction.Down);
  assert.equal(opposite(Direction.Left), Direction.Right);
  assert.equal(opposite(Direction.Right), "LEFT");
});

test("turn right", () => {
  assert.equal(turnRight("N"), "E");
  assert.equal(turnRight("W"), "N");
});
