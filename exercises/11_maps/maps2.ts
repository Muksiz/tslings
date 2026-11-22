import { test } from "node:test";
import assert from "node:assert/strict";

// TODO: Fix the type error. `counts.get(word)` might be `undefined`.
function wordCount(text: string): Map<string, number> {
  const counts = new Map<string, number>();
  for (const word of text.toLowerCase().split(/\s+/).filter(Boolean)) {
    counts.set(word, counts.get(word) + 1);
  }
  return counts;
}

// Don't change the tests!
test("counts words", () => {
  const counts = wordCount("the cat and the hat");
  assert.equal(counts.get("the"), 2);
  assert.equal(counts.get("cat"), 1);
  assert.equal(counts.get("dog"), undefined);
});

test("ignores case and extra whitespace", () => {
  const counts = wordCount("  Go go   GO ");
  assert.deepEqual([...counts], [["go", 3]]);
});
