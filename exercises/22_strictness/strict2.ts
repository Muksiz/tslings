import { test } from "node:test";
import assert from "node:assert/strict";

interface User {
  id: number;
  name: string;
}

const USERS: User[] = [
  { id: 1, name: "Ferris" },
  { id: 2, name: "Gopher" },
];

// TODO: The `!` tells TypeScript that `find` always finds a user. That's a lie, and
// it crashes for unknown ids. Remove the `!` and return "anonymous" for unknown ids.
function userName(id: number): string {
  return USERS.find((user) => user.id === id)!.name;
}

// Don't change the tests!
test("known users", () => {
  assert.equal(userName(1), "Ferris");
  assert.equal(userName(2), "Gopher");
});

test("unknown user", () => {
  assert.equal(userName(42), "anonymous");
});
