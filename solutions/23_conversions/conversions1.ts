import { test } from "node:test";
import assert from "node:assert/strict";

// `Number` is strict about the format ("12abc" -> NaN, unlike `parseInt`), but treats
// an empty or blank string as 0. `Number.isInteger` is false for `NaN`.
function parseAge(input: string): number | null {
  if (input.trim() === "") return null;
  const age = Number(input);
  return Number.isInteger(age) && age >= 0 ? age : null;
}

function formatPrice(cents: number): string {
  return `${(cents / 100).toFixed(2)} €`;
}

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
