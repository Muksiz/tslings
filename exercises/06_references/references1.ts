import { test } from "node:test";
import assert from "node:assert/strict";

interface Post {
  title: string;
  tags: string[];
}

// TODO: This function should return a *new* post with the extra tag, leaving the
// original post untouched. Currently, it modifies the post it receives.
function withTag(post: Post, tag: string): Post {
  const result = post;
  result.tags.push(tag);
  return result;
}

// Don't change the tests!
test("adds the tag", () => {
  const post = { title: "Hello", tags: ["intro"] };
  assert.deepEqual(withTag(post, "typescript").tags, ["intro", "typescript"]);
});

test("doesn't modify the original", () => {
  const post = { title: "Hello", tags: ["intro"] };
  withTag(post, "typescript");
  assert.deepEqual(post.tags, ["intro"]);
});
