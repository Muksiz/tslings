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

// Without the `!`, the type checker reminds us that `find` returns `User | undefined`.
function userName(id: number): string {
  return USERS.find((user) => user.id === id)?.name ?? "anonymous";
}

test("known users", () => {
  assert.equal(userName(1), "Ferris");
  assert.equal(userName(2), "Gopher");
});

test("unknown user", () => {
  assert.equal(userName(42), "anonymous");
});
