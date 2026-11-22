import { test } from "node:test";
import assert from "node:assert/strict";

async function fetchUser(id: number): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 10));
  if (id < 0) throw new Error(`no user with id ${id}`);
  return `user${id}`;
}

interface Report {
  users: string[];
  errors: string[];
}

// TODO: Fetch all users concurrently. Collect the names of the users that were found,
// and the messages of the errors for those that weren't. One failure must not stop the others.
// Hint: `Promise.allSettled`
async function fetchReport(ids: number[]): Promise<Report> {
  const users = await Promise.all(ids.map((id) => fetchUser(id)));
  return { users, errors: [] };
}

// TODO: Return the user's name, or "timeout" if fetching takes longer than `ms` milliseconds.
// Hint: `Promise.race`
async function fetchWithTimeout(id: number, ms: number): Promise<string> {
  return fetchUser(id);
}

// Don't change the tests!
test("report", async () => {
  assert.deepEqual(await fetchReport([1, -2, 3, -4]), {
    users: ["user1", "user3"],
    errors: ["no user with id -2", "no user with id -4"],
  });
});

test("timeout", async () => {
  assert.equal(await fetchWithTimeout(1, 100), "user1");
  assert.equal(await fetchWithTimeout(1, 1), "timeout");
});
