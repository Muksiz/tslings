import { test } from "node:test";
import assert from "node:assert/strict";

// `count` is optional: it is `undefined` when the caller doesn't know the count.
// TODO: There is a bug when `count` is 0. Fix the condition.
function describeItems(count?: number): string {
  if (count) {
    return `${count} items`;
  }
  return "unknown number of items";
}

// Don't change the tests!
test("some items", () => {
  assert.equal(describeItems(3), "3 items");
});

test("no items", () => {
  assert.equal(describeItems(0), "0 items");
});

test("unknown count", () => {
  assert.equal(describeItems(), "unknown number of items");
});
