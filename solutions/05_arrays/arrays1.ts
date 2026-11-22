import { test } from "node:test";
import assert from "node:assert/strict";

function arrayLoop(input: number[]): number[] {
  const output: number[] = [];

  for (const element of input) {
    output.push(element * 2);
  }

  return output;
}

function arrayMapExample(input: number[]): number[] {
  return input.map((element) => element + 1);
}

function arrayMap(input: number[]): number[] {
  // The callback without a `return` returned `undefined`, so the result was `void[]`.
  return input.map((element) => element * 2);
}

test("array loop", () => {
  assert.deepEqual(arrayLoop([2, 4, 6, 8, 10]), [4, 8, 12, 16, 20]);
});

test("array map example", () => {
  assert.deepEqual(arrayMapExample([1, 2, 3]), [2, 3, 4]);
});

test("array map", () => {
  assert.deepEqual(arrayMap([2, 4, 6, 8, 10]), [4, 8, 12, 16, 20]);
});
