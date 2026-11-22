import { test } from "node:test";
import assert from "node:assert/strict";

type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };

type ParseError = "empty" | "not a number" | "not positive";

function parsePositive(input: string): Result<number, ParseError> {
  if (input.trim() === "") return { ok: false, error: "empty" };
  const n = Number(input);
  if (Number.isNaN(n)) return { ok: false, error: "not a number" };
  if (n <= 0) return { ok: false, error: "not positive" };
  return { ok: true, value: n };
}

// `result.ok` is the discriminant: checking it narrows the union.
function doubled(input: string): string {
  const result = parsePositive(input);
  if (!result.ok) {
    return `invalid: ${result.error}`;
  }
  return String(result.value * 2);
}

test("parse positive", () => {
  assert.deepEqual(parsePositive("21"), { ok: true, value: 21 });
  assert.deepEqual(parsePositive(" "), { ok: false, error: "empty" });
  assert.deepEqual(parsePositive("abc"), { ok: false, error: "not a number" });
  assert.deepEqual(parsePositive("-3"), { ok: false, error: "not positive" });
});

test("doubled", () => {
  assert.equal(doubled("21"), "42");
  assert.equal(doubled("abc"), "invalid: not a number");
});
