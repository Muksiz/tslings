import { test } from "node:test";
import assert from "node:assert/strict";

// `T` is inferred from the argument: for `[1, 2, 3]`, `T` is `number`.
// Strictly speaking the return type should be `T | undefined` for empty arrays,
// which is what you'd get with `noUncheckedIndexedAccess`.
function first<T>(items: T[]): T {
  return items[0];
}

test("first number", () => {
  const n = first([1, 2, 3]);
  assert.equal(n.toFixed(2), "1.00");
});

test("the type is kept", () => {
  // @ts-expect-error A number is not a string.
  const s: string = first([1, 2, 3]);
  assert.equal(typeof s, "number");
});
