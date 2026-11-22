import { test } from "node:test";
import assert from "node:assert/strict";

interface Product {
  name: string;
  price: number;
  inStock: boolean;
}

// TODO: Return the names of the products that are in stock.
// Use `filter` and `map`, no loops.
function availableNames(products: Product[]): string[] {}

// TODO: Return the total price of all products. Use `reduce`.
function totalPrice(products: Product[]): number {}

// TODO: Return true if any product costs more than `limit`. Use `some`.
function anyMoreExpensiveThan(products: Product[], limit: number): boolean {}

// Don't change the tests!
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
