import { test } from "node:test";
import assert from "node:assert/strict";

// TODO: Parse an age from user input. Return `null` if the input is not a whole,
// non-negative number. Watch out: `Number("")` and `Number("  ")` are 0!
function parseAge(input: string): number | null {
  return Number(input);
}

// TODO: Format a price in cents as a string like "12.50 €".
function formatPrice(cents: number): string {
  return cents / 100 + " €";
}

// Don't change the tests!
test("valid ages", () => {
  assert.equal(parseAge("42"), 42);
  assert.equal(parseAge(" 7 "), 7);
  assert.equal(parseAge("0"), 0);
});

test("invalid ages", () => {
  assert.equal(parseAge(""), null);
  assert.equal(parseAge("   "), null);
  assert.equal(parseAge("abc"), null);
  assert.equal(parseAge("4.5"), null);
  assert.equal(parseAge("-3"), null);
});

test("format price", () => {
  assert.equal(formatPrice(1250), "12.50 €");
  assert.equal(formatPrice(5), "0.05 €");
});
