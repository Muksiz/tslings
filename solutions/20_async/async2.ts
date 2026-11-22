import { test } from "node:test";
import assert from "node:assert/strict";

const PRICES: Record<string, number> = { apple: 2, banana: 1, cherry: 5 };

async function getPrice(item: string): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 10));
  const price = PRICES[item];
  if (price === undefined) throw new Error(`unknown item: ${item}`);
  return price;
}

// Adding a `Promise<number>` to a number makes no sense, so TypeScript reports it.
// In plain JavaScript, this would silently produce the string "0[object Promise]...".
async function totalPrice(items: string[]): Promise<number> {
  let total = 0;
  for (const item of items) {
    total += await getPrice(item);
  }
  return total;
}

async function cheapest(items: string[]): Promise<string> {
  const prices = await Promise.all(items.map((item) => getPrice(item)));
  const lowest = Math.min(...prices);
  return items[prices.indexOf(lowest)] ?? "nothing";
}

test("total price", async () => {
  assert.equal(await totalPrice(["apple", "banana", "cherry"]), 8);
});

test("cheapest", async () => {
  assert.equal(await cheapest(["cherry", "banana", "apple"]), "banana");
});
