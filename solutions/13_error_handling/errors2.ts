import { test } from "node:test";
import assert from "node:assert/strict";

function parseQuantity(input: string): number {
  const qty = Number(input);
  if (!Number.isInteger(qty) || input.trim() === "") {
    throw new Error(`invalid quantity: "${input}"`);
  }
  return qty;
}

// `instanceof Error` narrows `err` from `unknown` to `Error`.
function totalCost(input: string): string {
  try {
    const qty = parseQuantity(input);
    return `Total cost: ${qty * 5 + 1}`;
  } catch (err) {
    if (err instanceof Error) {
      return `Error: ${err.message}`;
    }
    throw err; // Something unexpected: let it propagate.
  }
}

test("item quantity is a valid number", () => {
  assert.equal(totalCost("34"), "Total cost: 171");
});

test("item quantity is an invalid number", () => {
  assert.equal(totalCost("beep boop"), 'Error: invalid quantity: "beep boop"');
});
