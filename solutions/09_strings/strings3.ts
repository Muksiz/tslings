import { test } from "node:test";
import assert from "node:assert/strict";

// Spreading a string iterates over Unicode code points, so `"🦀"` is one element.
// (`"❤️"` is two code points: a heart and an invisible variation selector.
// To count what a human sees as one character, use `Intl.Segmenter`.)
function countChars(input: string): number {
  return [...input].length;
}

// `split("")` splits between UTF-16 code units, which breaks emoji into invalid halves.
function reverse(input: string): string {
  return [...input].reverse().join("");
}

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
