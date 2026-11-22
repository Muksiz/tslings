import { test } from "node:test";
import assert from "node:assert/strict";

interface Post {
  title: string;
  tags: string[];
}

// `const result = post` doesn't copy anything: both names refer to the same object.
// Build a new object and a new array with the spread syntax instead.
function withTag(post: Post, tag: string): Post {
  return { ...post, tags: [...post.tags, tag] };
}

test("adds the tag", () => {
  const post = { title: "Hello", tags: ["intro"] };
  assert.deepEqual(withTag(post, "typescript").tags, ["intro", "typescript"]);
});

test("doesn't modify the original", () => {
  const post = { title: "Hello", tags: ["intro"] };
  withTag(post, "typescript");
  assert.deepEqual(post.tags, ["intro"]);
});
