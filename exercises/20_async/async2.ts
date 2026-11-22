import { test } from "node:test";
import assert from "node:assert/strict";

const PRICES: Record<string, number> = { apple: 2, banana: 1, cherry: 5 };

async function getPrice(item: string): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 10));
  const price = PRICES[item];
  if (price === undefined) throw new Error(`unknown item: ${item}`);
  return price;
}

// TODO: Fix the type errors. Something is missing...
async function totalPrice(items: string[]): Promise<number> {
  let total = 0;
  for (const item of items) {
    total += getPrice(item);
  }
  return total;
}

async function cheapest(items: string[]): Promise<string> {
  const prices = items.map((item) => getPrice(item));
  const lowest = Math.min(...prices);
  return items[prices.indexOf(lowest)] ?? "nothing";
}

// Don't change the tests!
test("total price", async () => {
  assert.equal(await totalPrice(["apple", "banana", "cherry"]), 8);
});

test("cheapest", async () => {
  assert.equal(await cheapest(["cherry", "banana", "apple"]), "banana");
});
