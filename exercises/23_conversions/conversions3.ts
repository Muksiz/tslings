import { test } from "node:test";
import assert from "node:assert/strict";

// `Object.entries` turns an object into an array of `[key, value]` pairs, and
// `Object.fromEntries` turns such pairs back into an object. Maps convert the same way.

// TODO: Swap keys and values: { a: "x", b: "y" } -> { x: "a", y: "b" }
function invert(record: Record<string, string>): Record<string, string> {
  return record;
}

// TODO: Convert an object to a `Map` and back.
function toMap(record: Record<string, number>): Map<string, number> {
  return new Map();
}

function fromMap(map: Map<string, number>): Record<string, number> {
  return {};
}

// TODO: Apply `f` to every value of the object, keeping the keys.
function mapValues(record: Record<string, number>, f: (value: number) => number): Record<string, number> {
  return record;
}

// Don't change the tests!
test("invert", () => {
  assert.deepEqual(invert({ a: "x", b: "y" }), { x: "a", y: "b" });
});

test("to map and back", () => {
  const map = toMap({ apples: 3, pears: 2 });
  assert.equal(map.get("pears"), 2);
  assert.deepEqual(fromMap(map), { apples: 3, pears: 2 });
});

test("map values", () => {
  assert.deepEqual(
    mapValues({ a: 1, b: 2 }, (n) => n * 10),
    { a: 10, b: 20 },
  );
});
