// This is a quiz for the following sections:
// - Variables
// - Functions
// - If

import { test } from "node:test";
import assert from "node:assert/strict";

function calculatePriceOfApples(quantity: number): number {
  return quantity > 40 ? quantity : quantity * 2;
}

test("verify price", () => {
  assert.equal(calculatePriceOfApples(35), 70);
  assert.equal(calculatePriceOfApples(40), 80);
  assert.equal(calculatePriceOfApples(41), 41);
  assert.equal(calculatePriceOfApples(65), 65);
});
