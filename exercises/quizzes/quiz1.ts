// This is a quiz for the following sections:
// - Variables
// - Functions
// - If
//
// Mary is buying apples. The price of an apple is calculated as follows:
// - An apple costs 2 tsbucks.
// - However, if Mary buys more than 40 apples, the price of each apple in the
//   entire order is reduced to only 1 tsbuck!

import { test } from "node:test";
import assert from "node:assert/strict";

// TODO: Write a function that calculates the price of an order of apples given
// the quantity bought.
// function calculatePriceOfApples(???): ??? { ??? }

// Don't change the tests!
test("verify price", () => {
  assert.equal(calculatePriceOfApples(35), 70);
  assert.equal(calculatePriceOfApples(40), 80);
  assert.equal(calculatePriceOfApples(41), 41);
  assert.equal(calculatePriceOfApples(65), 65);
});
