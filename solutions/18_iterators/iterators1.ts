import { test } from "node:test";
import assert from "node:assert/strict";

interface Product {
  name: string;
  price: number;
  inStock: boolean;
}

function availableNames(products: Product[]): string[] {
  return products.filter((p) => p.inStock).map((p) => p.name);
}

// Always pass an initial value to `reduce`. Without one, it throws on an empty array.
function totalPrice(products: Product[]): number {
  return products.reduce((sum, p) => sum + p.price, 0);
}

function anyMoreExpensiveThan(products: Product[], limit: number): boolean {
  return products.some((p) => p.price > limit);
}

const PRODUCTS: Product[] = [
  { name: "keyboard", price: 50, inStock: true },
  { name: "mouse", price: 20, inStock: false },
  { name: "monitor", price: 200, inStock: true },
];

test("available names", () => {
  assert.deepEqual(availableNames(PRODUCTS), ["keyboard", "monitor"]);
});

test("total price", () => {
  assert.equal(totalPrice(PRODUCTS), 270);
  assert.equal(totalPrice([]), 0);
});

test("any more expensive than", () => {
  assert.equal(anyMoreExpensiveThan(PRODUCTS, 100), true);
  assert.equal(anyMoreExpensiveThan(PRODUCTS, 200), false);
});
