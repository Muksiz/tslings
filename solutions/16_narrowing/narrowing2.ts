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

function move(animal: Fish | Bird): string {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}

// `instanceof` checks the prototype chain, so it works for classes like `Date`.
// It doesn't work for interfaces, which don't exist at runtime.
function formatDate(value: Date | string): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }
  return value;
}

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
