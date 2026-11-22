import { test } from "node:test";
import assert from "node:assert/strict";

type Progress = "none" | "some" | "complete";

// Let's imagine we're tracking the progress of exercises: a map from the
// exercise name to its progress.

// An imperative version of counting exercises with a given progress:
function countForLoop(map: Map<string, Progress>, value: Progress): number {
  let count = 0;
  for (const progress of map.values()) {
    if (progress === value) {
      count++;
    }
  }
  return count;
}

// TODO: Implement the same functionality as `countForLoop` without a loop.
// Hint: `map.values()` is an iterator. Spread it into an array first.
function countIterator(map: Map<string, Progress>, value: Progress): number {
  return 0;
}

// TODO: Group the exercise names by their progress.
// A progress value that doesn't occur in the map should not appear in the result.
// Hint: `Object.groupBy` exists, but a `for...of` loop over the map with `??=` is simpler here.
function groupByProgress(map: Map<string, Progress>): Partial<Record<Progress, string[]>> {
  return {};
}

// Don't change the tests!
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
