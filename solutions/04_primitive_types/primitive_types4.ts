import { test } from "node:test";
import assert from "node:assert/strict";

// Without the annotation, TypeScript infers `(string | number)[]`: an array of any length
// where every element could be either type.
const cat: [string, number] = ["Furry McFurson", 3.5];

const [name, age] = cat;

function swap(pair: [string, number]): [number, string] {
  return [pair[1], pair[0]];
}

test("destructuring", () => {
  assert.equal(name, "Furry McFurson");
  assert.equal(age, 3.5);
});

test("swap", () => {
  const [first, second] = swap(cat);
  assert.equal(first.toFixed(1), "3.5");
  assert.equal(second.toUpperCase(), "FURRY MCFURSON");
});
