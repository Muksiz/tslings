import { test } from "node:test";
import assert from "node:assert/strict";

function pickyEater(food: string): string {
  if (food === "strawberry") {
    return "Yummy!";
  } else if (food === "potato") {
    return "I guess I can eat that.";
  } else {
    return "No thanks!";
  }
}

test("yummy food", () => {
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
