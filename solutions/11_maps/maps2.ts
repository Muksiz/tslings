import { test } from "node:test";
import assert from "node:assert/strict";

// Without the fallback, `undefined + 1` would be `NaN` at runtime. TypeScript catches that.
function wordCount(text: string): Map<string, number> {
  const counts = new Map<string, number>();
  for (const word of text.toLowerCase().split(/\s+/).filter(Boolean)) {
    counts.set(word, (counts.get(word) ?? 0) + 1);
  }
  return counts;
}

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
