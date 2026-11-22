import { test } from "node:test";
import assert from "node:assert/strict";

type Progress = "none" | "some" | "complete";

function countForLoop(map: Map<string, Progress>, value: Progress): number {
  let count = 0;
  for (const progress of map.values()) {
    if (progress === value) {
      count++;
    }
  }
  return count;
}

function countIterator(map: Map<string, Progress>, value: Progress): number {
  return [...map.values()].filter((progress) => progress === value).length;
}

// Iterating over a `Map` yields `[key, value]` pairs.
// `a ??= b` assigns `b` to `a` only if `a` is `null` or `undefined`.
// With `Object.groupBy(map, ([, progress]) => progress)` you'd get the entries grouped by progress,
// but you'd still have to map them to names (and the result has a `null` prototype).
function groupByProgress(map: Map<string, Progress>): Partial<Record<Progress, string[]>> {
  const result: Partial<Record<Progress, string[]>> = {};
  for (const [name, progress] of map) {
    (result[progress] ??= []).push(name);
  }
  return result;
}

function getMap(): Map<string, Progress> {
  return new Map<string, Progress>([
    ["variables1", "complete"],
    ["functions1", "complete"],
    ["hashmap1", "complete"],
    ["arc1", "some"],
    ["as_ref_mut", "none"],
    ["from_str", "none"],
  ]);
}

test("count complete", () => {
  assert.equal(countIterator(getMap(), "complete"), 3);
});

test("count equals for loop", () => {
  const map = getMap();
  for (const progress of ["none", "some", "complete"] as const) {
    assert.equal(countIterator(map, progress), countForLoop(map, progress));
  }
});

test("group by progress", () => {
  assert.deepEqual(
    { ...groupByProgress(getMap()) },
    {
      complete: ["variables1", "functions1", "hashmap1"],
      some: ["arc1"],
      none: ["as_ref_mut", "from_str"],
    },
  );
  assert.deepEqual({ ...groupByProgress(new Map([["a", "some"]])) }, { some: ["a"] });
});
