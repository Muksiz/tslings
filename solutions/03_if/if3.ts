import { test } from "node:test";
import assert from "node:assert/strict";

// `0` is falsy, so `if (count)` treats it like a missing value. Check for `undefined` explicitly.
// TypeScript still narrows `count` to `number` inside the `if` block.
function describeItems(count?: number): string {
  if (count !== undefined) {
    return `${count} items`;
  }
  return "unknown number of items";
}

test("some items", () => {
  assert.equal(describeItems(3), "3 items");
});

test("no items", () => {
  assert.equal(describeItems(0), "0 items");
});

test("unknown count", () => {
  assert.equal(describeItems(), "unknown number of items");
});
