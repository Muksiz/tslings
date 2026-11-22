import { test } from "node:test";
import assert from "node:assert/strict";

function invert(record: Record<string, string>): Record<string, string> {
  return Object.fromEntries(Object.entries(record).map(([key, value]) => [value, key]));
}

// A `Map` can be created from any iterable of pairs.
function toMap(record: Record<string, number>): Map<string, number> {
  return new Map(Object.entries(record));
}

// A `Map` is itself an iterable of pairs.
function fromMap(map: Map<string, number>): Record<string, number> {
  return Object.fromEntries(map);
}

function mapValues(record: Record<string, number>, f: (value: number) => number): Record<string, number> {
  return Object.fromEntries(Object.entries(record).map(([key, value]) => [key, f(value)]));
}

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
