import { test } from "node:test";
import assert from "node:assert/strict";

interface Person {
  name: string;
  age: number;
}

// `as Person` compiles, but it's a lie for invalid input: nothing is checked at runtime.
// TODO: Validate the parsed value and throw an `Error` if it isn't a valid `Person`:
// - It must be an object (and not `null`).
// - `name` must be a non-empty string.
// - `age` must be a number.
// Start by giving `data` the type `unknown` and narrow it step by step. Don't use `as` or `any`.
function parsePerson(json: string): Person {
  const data = JSON.parse(json) as Person;
  return data;
}

// Don't change the tests!
test("valid person", () => {
  assert.deepEqual(parsePerson('{ "name": "Mark", "age": 20 }'), { name: "Mark", age: 20 });
});

test("only the known properties are kept", () => {
  assert.deepEqual(parsePerson('{ "name": "Mark", "age": 20, "admin": true }'), { name: "Mark", age: 20 });
});

test("invalid input", () => {
  assert.throws(() => parsePerson("null"));
  assert.throws(() => parsePerson('"Mark"'));
  assert.throws(() => parsePerson('{ "name": "Mark" }'));
  assert.throws(() => parsePerson('{ "name": "", "age": 20 }'));
  assert.throws(() => parsePerson('{ "name": "Mark", "age": "20" }'));
});
