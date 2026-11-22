import { test } from "node:test";
import assert from "node:assert/strict";

// TODO: This function returns an empty string when the name is empty, which makes it
// easy for callers to miss the problem. Throw an `Error` with the message
// "Empty names aren't allowed" instead.
function generateNametagText(name: string): string {
  if (name.length === 0) {
    return "";
  }
  return `Hi! My name is ${name}`;
}

// Don't change the tests!
test("generates nametag text for a non-empty name", () => {
  assert.equal(generateNametagText("Beyoncé"), "Hi! My name is Beyoncé");
});

test("explains why an empty name is an error", () => {
  assert.throws(() => generateNametagText(""), { message: "Empty names aren't allowed" });
});
