import { test } from "node:test";
import assert from "node:assert/strict";

// Instead of throwing, a function can return its failure as a value.
type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };

type ParseError = "empty" | "not a number" | "not positive";

// TODO: Return the matching `ParseError` instead of throwing. Success is already handled.
function parsePositive(input: string): Result<number, ParseError> {
  if (input.trim() === "") throw new Error("empty");
  const n = Number(input);
  if (Number.isNaN(n)) throw new Error("not a number");
  if (n <= 0) throw new Error("not positive");
  return { ok: true, value: n };
}

// TODO: Return double the parsed number, or the error message prefixed with "invalid: ".
// You can only access `value` after checking `ok`.
function doubled(input: string): string {
  const result = parsePositive(input);
  return String(result.value * 2);
}

// Don't change the tests!
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
