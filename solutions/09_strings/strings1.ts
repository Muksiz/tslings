import { test } from "node:test";
import assert from "node:assert/strict";

// Only backtick strings interpolate `${...}`. In "double quotes" it's just text.
function introduce(name: string, age: number): string {
  return `Hi, I'm ${name} and I'm ${age} years old.`;
}

test("introduction", () => {
  assert.equal(introduce("Ferris", 7), "Hi, I'm Ferris and I'm 7 years old.");
});
