import { test } from "node:test";
import assert from "node:assert/strict";

interface Color {
  red: number;
  green: number;
  blue: number;
}

type Rgb = [number, number, number];

function toRgb(color: Color): Rgb {
  return [color.red, color.green, color.blue];
}

test("color object", () => {
  const green: Color = { red: 0, green: 255, blue: 0 };
  assert.equal(green.red, 0);
  assert.equal(green.green, 255);
  assert.equal(green.blue, 0);
});

test("to rgb", () => {
  assert.deepEqual(toRgb({ red: 1, green: 2, blue: 3 }), [1, 2, 3]);
});
