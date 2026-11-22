import { test } from "node:test";
import assert from "node:assert/strict";

interface Cat {
  kind: "cat";
  name: string;
  lives: number;
}

// TODO: Turn `isCat` into a type predicate so that TypeScript understands what it checks.
// Change only the return type.
function isCat(value: unknown): boolean {
  return (
    typeof value === "object" &&
    value !== null &&
    "kind" in value &&
    value.kind === "cat"
  );
}

function catNames(values: unknown[]): string[] {
  return values.filter(isCat).map((cat) => cat.name);
}

// Don't change the tests!
test("cat names", () => {
  const values = [{ kind: "cat", name: "Tom", lives: 9 }, "not a cat", 42, null, { kind: "cat", name: "Felix", lives: 7 }];
  assert.deepEqual(catNames(values), ["Tom", "Felix"]);
});

test("narrows in if statements", () => {
  const value: unknown = { kind: "cat", name: "Garfield", lives: 9 };
  if (isCat(value)) {
    assert.equal(value.lives, 9);
  } else {
    assert.fail("should be a cat");
  }
});
