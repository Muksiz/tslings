import { test } from "node:test";
import assert from "node:assert/strict";

// A parameter with a default value is optional for the caller, and its type is inferred from
// the default. A `?` makes a parameter optional: inside the function its type is `string | undefined`.
function greet(name: string, greeting = "Hello", punctuation?: string): string {
  return `${greeting}, ${name}${punctuation ?? "!"}`;
}

test("uses all arguments", () => {
  assert.equal(greet("Ferris", "Hi", "?"), "Hi, Ferris?");
});

test("greeting defaults to Hello", () => {
  assert.equal(greet("Ferris"), "Hello, Ferris!");
});

test("punctuation is optional", () => {
  assert.equal(greet("Ferris", "Howdy"), "Howdy, Ferris!");
});
