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
  await new Promise((resolve) => setTimeout(resolve, 10)); // Pretend to load something.
  const { width, height } = JSON.parse(json) as { width: number; height: number };
  return new Rectangle(width, height);
}

// TODO: Complete the tests.
test("correct width and height", () => {
  const rect = new Rectangle(10, 20);
  assert.equal(rect.width, 10); // Check width
  assert.equal(rect.height, ???); // Check height
});

test("negative width", () => {
  // TODO: Check that creating a rectangle with a negative width throws.
  const rect = new Rectangle(-10, 10);
});

test("loading an invalid rectangle", async () => {
  // TODO: This test passes, but it doesn't test anything: `assert.throws` doesn't
  // wait for promises. Use `assert.rejects` and `await` it.
  assert.throws(() => loadRectangle('{ "width": 10, "height": -10 }'));
});
