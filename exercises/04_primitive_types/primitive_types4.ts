import { test } from "node:test";
import assert from "node:assert/strict";

// Tuples are fixed-length arrays where every position has its own type.

// TODO: Add a tuple type annotation to `cat`: a name and an age.
const cat = ["Furry McFurson", 3.5];

// TODO: Destructure `cat` into `name` and `age` in one statement.
// const ...

// TODO: Fix `swap` so it returns the elements in the opposite order.
function swap(pair: [string, number]): [number, string] {
  return pair;
}

// Don't change the tests!
test("destructuring", () => {
  assert.equal(name, "Furry McFurson");
  assert.equal(age, 3.5);
});

test("swap", () => {
  const [first, second] = swap(cat);
  assert.equal(first.toFixed(1), "3.5");
  assert.equal(second.toUpperCase(), "FURRY MCFURSON");
});
