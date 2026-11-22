import { test } from "node:test";
import assert from "node:assert/strict";

// TODO: Change the `User` interface so that:
// - `id` can't be changed after the user is created.
// - `nickname` is optional.
interface User {
  id: number;
  name: string;
  nickname: string;
}

// TODO: Return the nickname if the user has one, otherwise the name.
function displayName(user: User): string {
  return user.nickname;
}

// Don't change the tests!
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
