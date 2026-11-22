import { test } from "node:test";
import assert from "node:assert/strict";

// If `padding` is a number, it's the number of spaces to add in front of `value`.
// If it's a string, add that string in front of `value`.
// TODO: Fix the type error by checking the type of `padding`.
function padLeft(value: string, padding: string | number): string {
  return " ".repeat(padding) + value;
}

// Don't change the tests!
test("pad with spaces", () => {
  assert.equal(padLeft("TS", 3), "   TS");
});

test("pad with a string", () => {
  assert.equal(padLeft("TS", ">> "), ">> TS");
});
