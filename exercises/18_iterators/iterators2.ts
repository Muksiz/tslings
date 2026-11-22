import { test } from "node:test";
import assert from "node:assert/strict";

// "hello" -> "Hello"
function capitalizeFirst(input: string): string {
  // TODO: Make the first character uppercase. An empty string stays empty.
}

// Apply the `capitalizeFirst` function to an array of strings.
// ["hello", "world"] -> ["Hello", "World"]
function capitalizeWordsArray(words: string[]): string[] {
  // TODO
}

// Apply the `capitalizeFirst` function again to an array of strings.
// Return a single string.
// ["hello", " ", "world"] -> "Hello World"
function capitalizeWordsString(words: string[]): string {
  // TODO
}

// Don't change the tests!
test("success", () => {
  assert.equal(capitalizeFirst("hello"), "Hello");
});

test("empty", () => {
  assert.equal(capitalizeFirst(""), "");
});

test("iterate string array", () => {
  assert.deepEqual(capitalizeWordsArray(["hello", "world"]), ["Hello", "World"]);
});

test("iterate into string", () => {
  assert.equal(capitalizeWordsString(["hello", " ", "world"]), "Hello World");
});
