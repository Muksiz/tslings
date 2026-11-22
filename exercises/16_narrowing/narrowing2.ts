import { test } from "node:test";
import assert from "node:assert/strict";

interface Fish {
  name: string;
  swim(): string;
}

interface Bird {
  name: string;
  fly(): string;
}

// TODO: Fix the type error. Use the `in` operator to check which kind of animal it is.
function move(animal: Fish | Bird): string {
  return animal.swim();
}

// TODO: Return the date in the "YYYY-MM-DD" format if `value` is a `Date`,
// otherwise return the string as is.
// Hint: `toISOString()` returns a string that starts with "YYYY-MM-DD".
function formatDate(value: Date | string): string {
  return value;
}

// Don't change the tests!
test("move", () => {
  const nemo: Fish = { name: "Nemo", swim: () => "Nemo swims" };
  const tweety: Bird = { name: "Tweety", fly: () => "Tweety flies" };
  assert.equal(move(nemo), "Nemo swims");
  assert.equal(move(tweety), "Tweety flies");
});

test("format date", () => {
  assert.equal(formatDate(new Date(Date.UTC(2015, 4, 15))), "2015-05-15");
  assert.equal(formatDate("tomorrow"), "tomorrow");
});
