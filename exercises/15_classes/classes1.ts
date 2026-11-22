import { test } from "node:test";
import assert from "node:assert/strict";

class Counter {
  // TODO: Fix the type error. Every property must be initialized.
  count: number;

  // TODO: Implement these methods.
  increment(): void {}

  reset(): void {}
}

// Don't change the tests!
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
