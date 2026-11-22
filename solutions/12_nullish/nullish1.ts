import { test } from "node:test";
import assert from "node:assert/strict";

function maybeIceCream(hourOfDay: number): number | undefined {
  if (hourOfDay < 22) {
    return 5;
  } else if (hourOfDay < 24) {
    return 0;
  }
  return undefined;
}

test("raw value", () => {
  const iceCreams = maybeIceCream(12);
  // Provide a fallback with `??`. You could also check with `if (iceCreams !== undefined)`.
  assert.equal((iceCreams ?? 0) + 0, 5);
});

test("check ice cream", () => {
  assert.equal(maybeIceCream(0), 5);
  assert.equal(maybeIceCream(9), 5);
  assert.equal(maybeIceCream(18), 5);
  assert.equal(maybeIceCream(22), 0);
  assert.equal(maybeIceCream(23), 0);
  assert.equal(maybeIceCream(24), undefined);
  assert.equal(maybeIceCream(25), undefined);
});
