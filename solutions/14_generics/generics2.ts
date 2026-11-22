import { test } from "node:test";
import assert from "node:assert/strict";

// `map` has its own type parameter `U`: the result can wrap a different type.
class Wrapper<T> {
  constructor(public value: T) {}

  map<U>(f: (value: T) => U): Wrapper<U> {
    return new Wrapper(f(this.value));
  }
}

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
