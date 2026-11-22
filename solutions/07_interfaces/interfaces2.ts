import { test } from "node:test";
import assert from "node:assert/strict";

interface User {
  readonly id: number;
  name: string;
  nickname?: string;
}

// The type of `user.nickname` is `string | undefined`, so a fallback is needed.
function displayName(user: User): string {
  return user.nickname ?? user.name;
}

test("user with a nickname", () => {
  const user: User = { id: 1, name: "Ferris", nickname: "Crabby" };
  assert.equal(displayName(user), "Crabby");
});

test("user without a nickname", () => {
  const user: User = { id: 2, name: "Gopher" };
  assert.equal(displayName(user), "Gopher");
});

test("ids are readonly", () => {
  const user: User = { id: 3, name: "Duke" };
  // @ts-expect-error The id can't be changed.
  user.id = 4;
  assert.equal(user.name, "Duke");
});
