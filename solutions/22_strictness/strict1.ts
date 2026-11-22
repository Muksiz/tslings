import { test } from "node:test";
import assert from "node:assert/strict";

interface Pet {
  name: string;
  age: number;
}

// A type annotation on the result of `JSON.parse` is still a promise you make to the compiler:
// nothing checks the JSON at runtime. The conversions section shows how to validate it.
function petAgeInMonths(json: string): number {
  const data: Pet = JSON.parse(json);
  return data.age * 12;
}

test("age in months", () => {
  assert.equal(petAgeInMonths('{ "name": "Ferris", "age": 7 }'), 84);
});
