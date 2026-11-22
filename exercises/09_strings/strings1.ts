import { test } from "node:test";
import assert from "node:assert/strict";

// TODO: Fix `introduce` so that the name and age are inserted into the string.
// Use a template literal.
function introduce(name: string, age: number): string {
  return "Hi, I'm ${name} and I'm ${age} years old.";
}

// Don't change the tests!
test("introduction", () => {
  assert.equal(introduce("Ferris", 7), "Hi, I'm Ferris and I'm 7 years old.");
});
