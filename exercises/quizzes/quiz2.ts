// This is a quiz for the following sections:
// - Strings
// - Unions
// - Modules
// - Maps
//
// Let's build a little machine in the form of a function. As input, we're going
// to give a list of strings and commands. These commands determine what action
// is going to be applied to the string. It can either be:
// - Uppercase the string
// - Trim the string
// - Append "bar" to the string a specified amount of times
//
// The exact form of this will be:
// - The input is going to be an array of tuples of 2 elements,
//   the first element is the string, the second one is the command.
// - The output element is going to be an array of strings.

import { test } from "node:test";
import assert from "node:assert/strict";

// TODO: Complete the `Command` type: "uppercase", "trim", or an object
// `{ append: number }` for appending "bar" that many times.
type Command = "uppercase";

// TODO: Complete the function.
function transformer(input: [string, Command][]): string[] {
  return [];
}

// Don't change the tests!
test("transformer", () => {
  const input: [string, Command][] = [
    ["hello", "uppercase"],
    [" all roads lead to rome! ", "trim"],
    ["foo", { append: 1 }],
    ["bar", { append: 5 }],
  ];
  assert.deepEqual(transformer(input), ["HELLO", "all roads lead to rome!", "foobar", "barbarbarbarbarbar"]);
});
