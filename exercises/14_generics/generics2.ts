import { test } from "node:test";
import assert from "node:assert/strict";

// This powerful wrapper provides the ability to store a positive integer value.
// TODO: Rewrite it using a generic so that it supports wrapping ANY type.
class Wrapper {
  constructor(public value: number) {}

  map(f: (value: number) => number): Wrapper {
    return new Wrapper(f(this.value));
  }
}

// Don't change the tests!
test("store number", () => {
  assert.equal(new Wrapper(3).value, 3);
});

test("store string", () => {
  assert.equal(new Wrapper("Foo").value, "Foo");
});

test("map to another type", () => {
  const length = new Wrapper("hello").map((s) => s.length);
  assert.equal(length.value + 1, 6);
});
