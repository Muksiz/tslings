import { test } from "node:test";
import assert from "node:assert/strict";

// TODO: Add the properties `red`, `green` and `blue` (all numbers) to `Color`.
interface Color {}

// TODO: Define a type alias `Rgb` for a tuple of three numbers.
// type Rgb = ...

function toRgb(color: Color): Rgb {
  return [color.red, color.green, color.blue];
}

// Don't change the tests!
test("color object", () => {
  const green: Color = { red: 0, green: 255, blue: 0 };
  assert.equal(green.red, 0);
  assert.equal(green.green, 255);
  assert.equal(green.blue, 0);
});

test("to rgb", () => {
  assert.deepEqual(toRgb({ red: 1, green: 2, blue: 3 }), [1, 2, 3]);
});
