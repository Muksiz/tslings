import { test } from "node:test";
import assert from "node:assert/strict";

// After the `typeof` check, TypeScript knows that `padding` is a `number` inside the
// `if` block and a `string` after it.
function padLeft(value: string, padding: string | number): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + value;
  }
  return padding + value;
}

test("pad with spaces", () => {
  assert.equal(padLeft("TS", 3), "   TS");
});

test("pad with a string", () => {
  assert.equal(padLeft("TS", ">> "), ">> TS");
});
