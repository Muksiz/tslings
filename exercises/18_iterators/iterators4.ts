import { test } from "node:test";
import assert from "node:assert/strict";

// A generator function produces values one at a time with `yield`.
function* countdown(from: number): Generator<number> {
  for (let i = from; i > 0; i--) {
    yield i;
  }
}

// TODO: Yield the numbers from `start` (inclusive) to `end` (exclusive).
function* range(start: number, end: number): Generator<number> {}

// TODO: Yield the Fibonacci numbers 0, 1, 1, 2, 3, 5, 8, ... forever.
// That's fine, because generators are lazy: values are only computed when someone asks.
function* fibonacci(): Generator<number> {}

// TODO: Yield the first `n` values of `iterable`, then stop.
function* take<T>(iterable: Iterable<T>, n: number): Generator<T> {}

// Don't change the tests!
test("countdown", () => {
  assert.deepEqual([...countdown(3)], [3, 2, 1]);
});

test("range", () => {
  assert.deepEqual([...range(2, 6)], [2, 3, 4, 5]);
  assert.deepEqual([...range(3, 3)], []);
});

test("first fibonacci numbers", () => {
  assert.deepEqual([...take(fibonacci(), 10)], [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test("take works with any iterable", () => {
  assert.deepEqual([...take("hello", 2)], ["h", "e"]);
  assert.deepEqual([...take([1, 2], 5)], [1, 2]);
});
