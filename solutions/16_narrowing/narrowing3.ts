import { test } from "node:test";
import assert from "node:assert/strict";

interface Cat {
  kind: "cat";
  name: string;
  lives: number;
}

// `value is Cat` means: if this returns `true`, `value` is a `Cat`.
// TypeScript trusts you here, so make sure the check is really correct!
// (A real implementation should check `name` and `lives` too.)
function isCat(value: unknown): value is Cat {
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
