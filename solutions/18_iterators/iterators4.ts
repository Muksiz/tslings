import { test } from "node:test";
import assert from "node:assert/strict";

function* countdown(from: number): Generator<number> {
  for (let i = from; i > 0; i--) {
    yield i;
  }
}

function* range(start: number, end: number): Generator<number> {
  for (let i = start; i < end; i++) {
    yield i;
  }
}

function* fibonacci(): Generator<number> {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Breaking out of a `for...of` loop also stops the generator we are reading from.
function* take<T>(iterable: Iterable<T>, n: number): Generator<T> {
  if (n <= 0) return;
  let count = 0;
  for (const value of iterable) {
    yield value;
    if (++count >= n) break;
  }
}

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
