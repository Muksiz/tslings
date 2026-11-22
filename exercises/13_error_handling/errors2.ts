import { test } from "node:test";
import assert from "node:assert/strict";

// Say we're writing a game where you can buy items with tokens. All items cost
// 5 tokens, and whenever you purchase items there is a processing fee of 1
// token. A player of the game will type in how many items they want to buy, and
// the `totalCost` function will calculate the total cost of the items.

function parseQuantity(input: string): number {
  const qty = Number(input);
  if (!Number.isInteger(qty) || input.trim() === "") {
    throw new Error(`invalid quantity: "${input}"`);
  }
  return qty;
}

// TODO: If parsing fails, return a message "Error: " followed by the error's message.
// The type of `err` is `unknown`, because JavaScript allows throwing any value.
// Check that it's an `Error` before reading `message`.
function totalCost(input: string): string {
  try {
    const qty = parseQuantity(input);
    return `Total cost: ${qty * 5 + 1}`;
  } catch (err) {
    return err.message;
  }
}

// Don't change the tests!
test("item quantity is a valid number", () => {
  assert.equal(totalCost("34"), "Total cost: 171");
});

test("item quantity is an invalid number", () => {
  assert.equal(totalCost("beep boop"), 'Error: invalid quantity: "beep boop"');
});
