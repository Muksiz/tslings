import { test } from "node:test";
import assert from "node:assert/strict";

class Rectangle {
  constructor(
    public width: number,
    public height: number,
  ) {
    if (width < 0 || height < 0) {
      throw new Error("Rectangle width and height must be positive");
    }
  }
}

async function loadRectangle(json: string): Promise<Rectangle> {
  await new Promise((resolve) => setTimeout(resolve, 10));
  const { width, height } = JSON.parse(json) as { width: number; height: number };
  return new Rectangle(width, height);
}

test("correct width and height", () => {
  const rect = new Rectangle(10, 20);
  assert.equal(rect.width, 10);
  assert.equal(rect.height, 20);
});

test("negative width", () => {
  assert.throws(() => new Rectangle(-10, 10), /must be positive/);
});

// An async function never throws synchronously: it returns a rejected promise.
// Without `await`, the test would finish before the promise settles.
test("loading an invalid rectangle", async () => {
  await assert.rejects(loadRectangle('{ "width": 10, "height": -10 }'), /must be positive/);
});
