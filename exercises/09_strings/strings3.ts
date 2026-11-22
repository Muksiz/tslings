import { test } from "node:test";
import assert from "node:assert/strict";

// TODO: Count the characters in a string. `.length` counts UTF-16 code units,
// which gives the wrong answer for characters like emoji.
// Hint: Iterating over a string (for example with the spread syntax) goes character by character.
function countChars(input: string): number {
  return input.length;
}

// TODO: Reverse a string so that emoji survive.
function reverse(input: string): string {
  return input.split("").reverse().join("");
}

// Don't change the tests!
test("count ascii characters", () => {
  assert.equal(countChars("hello"), 5);
});

test("count emoji", () => {
  assert.equal(countChars("🦀🦀"), 2);
  assert.equal(countChars("I ❤️ TS"), 7);
});

test("reverse", () => {
  assert.equal(reverse("abc"), "cba");
  assert.equal(reverse("a🦀b"), "b🦀a");
});
