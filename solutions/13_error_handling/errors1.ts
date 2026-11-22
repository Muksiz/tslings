import { test } from "node:test";
import assert from "node:assert/strict";

function generateNametagText(name: string): string {
  if (name.length === 0) {
    throw new Error("Empty names aren't allowed");
  }
  return `Hi! My name is ${name}`;
}

test("generates nametag text for a non-empty name", () => {
  assert.equal(generateNametagText("Beyoncé"), "Hi! My name is Beyoncé");
});

test("explains why an empty name is an error", () => {
  assert.throws(() => generateNametagText(""), { message: "Empty names aren't allowed" });
});
