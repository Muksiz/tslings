import { test } from "node:test";
import assert from "node:assert/strict";

// TODO: Change the signature of `greet` so that `greeting` defaults to "Hello"
// and `punctuation` is optional. Then fix the body: when `punctuation` is
// missing, end the sentence with "!".
function greet(name: string, greeting: string, punctuation: string): string {
  return `${greeting}, ${name}${punctuation}`;
}

// Don't change the tests!
test("uses all arguments", () => {
  assert.equal(greet("Ferris", "Hi", "?"), "Hi, Ferris?");
});

test("greeting defaults to Hello", () => {
  assert.equal(greet("Ferris"), "Hello, Ferris!");
});

test("punctuation is optional", () => {
  assert.equal(greet("Ferris", "Howdy"), "Howdy, Ferris!");
});
