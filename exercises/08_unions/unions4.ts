import { test } from "node:test";
import assert from "node:assert/strict";

// TypeScript also has enums. They are one of the few TypeScript features that generate
// runtime code. Each member gets a value: numbers counting up from 0 by default, or strings.
enum Direction {
  Up = "UP",
  Down = "DOWN",
  // TODO: Add `Left` and `Right` with the values "LEFT" and "RIGHT".
}

// TODO: Return the opposite direction.
function opposite(direction: Direction): Direction {
  switch (direction) {
    case Direction.Up:
      return Direction.Down;
    case Direction.Down:
      return Direction.Up;
  }
}

// The same idea without an enum: a union of string literals.
// TODO: Complete the `Compass` type and `turnRight`.
type Compass = "N" | "E";

function turnRight(heading: Compass): Compass {
  const order: Compass[] = ["N", "E", "S", "W"];
  return order[(order.indexOf(heading) + 1) % order.length];
}

// Don't change the tests!
test("opposite", () => {
  assert.equal(opposite(Direction.Up), Direction.Down);
  assert.equal(opposite(Direction.Left), Direction.Right);
  assert.equal(opposite(Direction.Right), "LEFT");
});

test("turn right", () => {
  assert.equal(turnRight("N"), "E");
  assert.equal(turnRight("W"), "N");
});
