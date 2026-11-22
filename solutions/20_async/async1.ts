import { test } from "node:test";
import assert from "node:assert/strict";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchNumber(n: number): Promise<number> {
  await sleep(100);
  return n * 10;
}

// `numbers.map(fetchNumber)` starts every fetch immediately and gives an array of promises.
// `Promise.all` waits for all of them and keeps the order of the results.
async function fetchAll(numbers: number[]): Promise<number[]> {
  return Promise.all(numbers.map((n) => fetchNumber(n)));
}

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
