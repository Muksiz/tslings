import { test } from "node:test";
import assert from "node:assert/strict";

function arrayLoop(input: number[]): number[] {
  const output: number[] = [];

  for (const element of input) {
    // TODO: Multiply each element in the `input` array by 2 and push it to `output`.
  }

  return output;
}

function arrayMapExample(input: number[]): number[] {
  // An example of mapping over an array.
  // We map each element to its value plus 1. `[1, 2, 3]` becomes `[2, 3, 4]`.
  return input.map((element) => element + 1);
}

function arrayMap(input: number[]): number[] {
  // TODO: Here, we also want to multiply each element by 2, but with `map`
  // instead of manually pushing into an empty array.
  // See the example in the function `arrayMapExample` above.
  return input.map((element) => {
    // ???
  });
}

// Don't change the tests!
test("array loop", () => {
  assert.deepEqual(arrayLoop([2, 4, 6, 8, 10]), [4, 8, 12, 16, 20]);
});

test("array map example", () => {
  assert.deepEqual(arrayMapExample([1, 2, 3]), [2, 3, 4]);
});

test("array map", () => {
  assert.deepEqual(arrayMap([2, 4, 6, 8, 10]), [4, 8, 12, 16, 20]);
});
