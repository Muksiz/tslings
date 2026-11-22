import { test } from "node:test";
import assert from "node:assert/strict";

// TODO: Fix the type error in this function, then make the tests pass.
function pickyEater(food: string): string {
  if (food === "strawberry") {
    return "Yummy!";
  } else {
    return 1;
  }
}

// Don't change the tests!
test("yummy food", () => {
  // This means that calling `pickyEater` with the argument "strawberry" should return "Yummy!".
  assert.equal(pickyEater("strawberry"), "Yummy!");
});

test("neutral food", () => {
  assert.equal(pickyEater("potato"), "I guess I can eat that.");
});

test("default disliked food", () => {
  assert.equal(pickyEater("broccoli"), "No thanks!");
  assert.equal(pickyEater("gummy bears"), "No thanks!");
  assert.equal(pickyEater("literally anything"), "No thanks!");
});
