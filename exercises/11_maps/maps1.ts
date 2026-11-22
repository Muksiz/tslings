import { test } from "node:test";
import assert from "node:assert/strict";

// A basket of fruits in the form of a map. The key is the name of the fruit and
// the value is how many of that fruit are in the basket.
function fruitBasket(): Map<string, number> {
  const basket = new Map<string, number>();

  // Two bananas are already given for you :)
  basket.set("banana", 2);

  // TODO: Put more fruits in your basket.

  return basket;
}

// Don't change the tests!
test("at least three types of fruits", () => {
  assert.ok(fruitBasket().size >= 3);
});

test("at least five fruits", () => {
  const total = [...fruitBasket().values()].reduce((sum, n) => sum + n, 0);
  assert.ok(total >= 5);
});
