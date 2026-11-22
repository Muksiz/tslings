import { test } from "node:test";
import assert from "node:assert/strict";

function trimMe(input: string): string {
  // TODO: Remove whitespace from both ends of a string.
}

function composeMeWorld(input: string): string {
  // TODO: Add " world!" to the string!
}

function replaceMe(input: string): string {
  // TODO: Replace all occurrences of "cars" in the input string with "balloons".
}

function shout(input: string): string {
  // TODO: Return the input in uppercase, followed by "!!!".
}

// Don't change the tests!
test("trim a string", () => {
  assert.equal(trimMe("Hello!     "), "Hello!");
  assert.equal(trimMe("  What's up!"), "What's up!");
  assert.equal(trimMe("   Hola!  "), "Hola!");
});

test("compose a string", () => {
  assert.equal(composeMeWorld("Hello"), "Hello world!");
  assert.equal(composeMeWorld("Goodbye"), "Goodbye world!");
});

test("replace a string", () => {
  assert.equal(replaceMe("I think cars are cool"), "I think balloons are cool");
  assert.equal(replaceMe("I love to look at cars, cars are great"), "I love to look at balloons, balloons are great");
});

test("shout", () => {
  assert.equal(shout("hello"), "HELLO!!!");
});
