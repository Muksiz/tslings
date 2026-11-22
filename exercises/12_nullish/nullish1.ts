import { test } from "node:test";
import assert from "node:assert/strict";

// This function returns how much ice cream there is left in the fridge.
// If it's before 22:00 (24-hour system), then 5 scoops are left. At 22:00,
// someone eats it all, so no ice cream is left (value 0). Return `undefined` if
// `hourOfDay` is higher than 23.
// TODO: Complete the function body and the return type.
function maybeIceCream(hourOfDay: number) {}

// Don't change the tests!
test("raw value", () => {
  const iceCreams = maybeIceCream(12);
  // TODO: Fix this line. The type checker doesn't know that `iceCreams` isn't undefined.
  assert.equal(iceCreams + 0, 5);
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
