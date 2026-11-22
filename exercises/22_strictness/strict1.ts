import { test } from "node:test";
import assert from "node:assert/strict";

interface Pet {
  name: string;
  age: number;
}

// `JSON.parse` returns `any`, so the type checker can't help with anything we do with `data`.
// TODO: Give `data` a proper type, then fix the bug that the type checker finds.
function petAgeInMonths(json: string): number {
  const data = JSON.parse(json);
  return data.agee * 12;
}

// Don't change the tests!
test("age in months", () => {
  assert.equal(petAgeInMonths('{ "name": "Ferris", "age": 7 }'), 84);
});
