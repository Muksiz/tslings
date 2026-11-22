import { test } from "node:test";
import assert from "node:assert/strict";

class Counter {
  // A property initializer. Its type `number` is inferred.
  count = 0;

  increment(): void {
    this.count++;
  }

  reset(): void {
    this.count = 0;
  }
}

test("starts at zero", () => {
  assert.equal(new Counter().count, 0);
});

test("increments and resets", () => {
  const counter = new Counter();
  counter.increment();
  counter.increment();
  assert.equal(counter.count, 2);
  counter.reset();
  assert.equal(counter.count, 0);
});
