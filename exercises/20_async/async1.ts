import { test } from "node:test";
import assert from "node:assert/strict";

// TODO: Return a promise that resolves after `ms` milliseconds.
// Hint: `new Promise((resolve) => setTimeout(resolve, ms))`
function sleep(ms: number): Promise<void> {}

async function fetchNumber(n: number): Promise<number> {
  await sleep(100); // Pretend this takes a while.
  return n * 10;
}

// TODO: This works, but it fetches the numbers one after another, which takes
// 100ms per number. Fetch them all at the same time instead.
async function fetchAll(numbers: number[]): Promise<number[]> {
  const results: number[] = [];
  for (const n of numbers) {
    results.push(await fetchNumber(n));
  }
  return results;
}

// Don't change the tests!
test("sleep", async () => {
  const start = performance.now();
  await sleep(50);
  assert.ok(performance.now() - start >= 45);
});

test("fetch all at once", async () => {
  const start = performance.now();
  const results = await fetchAll([1, 2, 3, 4, 5, 6, 7, 8]);
  const elapsed = performance.now() - start;
  assert.deepEqual(results, [10, 20, 30, 40, 50, 60, 70, 80]);
  assert.ok(elapsed < 400, `took ${Math.round(elapsed)}ms`);
});
