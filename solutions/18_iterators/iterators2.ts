import { test } from "node:test";
import assert from "node:assert/strict";

function capitalizeFirst(input: string): string {
  // `input[0]` would be `undefined` for an empty string. `slice` handles that case.
  return input.slice(0, 1).toUpperCase() + input.slice(1);
}

// `map` passes extra arguments (index, array) to the callback, which can surprise you with
// functions that take optional parameters. A wrapper arrow function is the safe choice.
function capitalizeWordsArray(words: string[]): string[] {
  return words.map((word) => capitalizeFirst(word));
}

function capitalizeWordsString(words: string[]): string {
  return capitalizeWordsArray(words).join("");
}

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
