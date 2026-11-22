// This is a quiz for the following sections:
// - Strings
// - Unions
// - Modules
// - Maps

import { test } from "node:test";
import assert from "node:assert/strict";

type Command = "uppercase" | "trim" | { append: number };

function apply(text: string, command: Command): string {
  if (command === "uppercase") return text.toUpperCase();
  if (command === "trim") return text.trim();
  // Only the object variant is left, so TypeScript knows `command.append` exists.
  return text + "bar".repeat(command.append);
}

function transformer(input: [string, Command][]): string[] {
  return input.map(([text, command]) => apply(text, command));
}

test("transformer", () => {
  const input: [string, Command][] = [
    ["hello", "uppercase"],
    [" all roads lead to rome! ", "trim"],
    ["foo", { append: 1 }],
    ["bar", { append: 5 }],
  ];
  assert.deepEqual(transformer(input), ["HELLO", "all roads lead to rome!", "foobar", "barbarbarbarbarbar"]);
});
