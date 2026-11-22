import { test } from "node:test";
import assert from "node:assert/strict";

interface Summary {
  summarizeAuthor(): string;
  summarize(): string;
}

class Tweet implements Summary {
  constructor(
    public username: string,
    public content: string,
  ) {}

  summarizeAuthor(): string {
    return `@${this.username}`;
  }

  summarize(): string {
    return `(Read more from ${this.summarizeAuthor()}...)`;
  }
}

// `article` in the test is not a class instance, but it has the right shape, so it fits.
function notify(item: Summary): string {
  return `Breaking news! ${item.summarize()}`;
}

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
