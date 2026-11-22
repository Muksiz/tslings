import { test } from "node:test";
import assert from "node:assert/strict";

interface Summary {
  summarizeAuthor(): string;

  // A method can't have a default implementation in an interface, unlike a Rust trait.
  summarize(): string;
}

// TODO: Fix the type errors by implementing the missing method.
// `summarize` should return "(Read more from <author>...)".
class Tweet implements Summary {
  constructor(
    public username: string,
    public content: string,
  ) {}

  summarizeAuthor(): string {
    return `@${this.username}`;
  }
}

// TODO: Make `notify` accept anything that implements `Summary`.
function notify(item: Tweet): string {
  return `Breaking news! ${item.summarize()}`;
}

// Don't change the tests!
test("tweet summary", () => {
  const tweet = new Tweet("ferris", "hello");
  assert.equal(tweet.summarize(), "(Read more from @ferris...)");
});

test("notify works with plain objects too", () => {
  const article = {
    summarizeAuthor: () => "The TS Times",
    summarize: () => "TypeScript 7 is fast",
  };
  assert.equal(notify(article), "Breaking news! TypeScript 7 is fast");
});
