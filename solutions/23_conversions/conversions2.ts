import { test } from "node:test";
import assert from "node:assert/strict";

interface Person {
  name: string;
  age: number;
}

// Each check narrows `data` a bit more: from `unknown` to `object`, then to an object
// that has the properties `name` and `age`, then to one where they have the right types.
function parsePerson(json: string): Person {
  const data: unknown = JSON.parse(json);
  if (typeof data !== "object" || data === null) {
    throw new Error("Expected an object");
  }
  if (!("name" in data) || typeof data.name !== "string" || data.name === "") {
    throw new Error("Expected a non-empty name");
  }
  if (!("age" in data) || typeof data.age !== "number") {
    throw new Error("Expected a numeric age");
  }
  return { name: data.name, age: data.age };
}

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
