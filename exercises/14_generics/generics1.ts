import { test } from "node:test";
import assert from "node:assert/strict";

// `any` turns off type checking. With it, `first` loses all information about its input.
// TODO: Make `first` generic so that the return type matches the type of the elements.
function first(items: any[]): any {
  return items[0];
}

// Don't change the tests!
test("first number", () => {
  const n = first([1, 2, 3]);
  assert.equal(n.toFixed(2), "1.00");
});

test("the type is kept", () => {
  // @ts-expect-error A number is not a string.
  const s: string = first([1, 2, 3]);
  assert.equal(typeof s, "number");
});
