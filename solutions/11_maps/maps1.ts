import { test } from "node:test";
import assert from "node:assert/strict";

// Without the type arguments, `new Map()` would be a `Map<any, any>` that accepts anything.
function fruitBasket(): Map<string, number> {
  const basket = new Map<string, number>();

  basket.set("banana", 2);
  basket.set("apple", 3);
  basket.set("mango", 1);

  return basket;
}

test("at least three types of fruits", () => {
  assert.ok(fruitBasket().size >= 3);
});

test("at least five fruits", () => {
  const total = [...fruitBasket().values()].reduce((sum, n) => sum + n, 0);
  assert.ok(total >= 5);
});
