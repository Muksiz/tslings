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

// Each result is a `PromiseSettledResult<string>`: a discriminated union on `status`.
async function fetchReport(ids: number[]): Promise<Report> {
  const results = await Promise.allSettled(ids.map((id) => fetchUser(id)));
  const report: Report = { users: [], errors: [] };
  for (const result of results) {
    if (result.status === "fulfilled") {
      report.users.push(result.value);
    } else {
      // `reason` is `any`, because anything can be thrown.
      report.errors.push(result.reason instanceof Error ? result.reason.message : String(result.reason));
    }
  }
  return report;
}

// `Promise.race` settles as soon as the first promise does.
async function fetchWithTimeout(id: number, ms: number): Promise<string> {
  let timer: NodeJS.Timeout | undefined;
  const timeout = new Promise<string>((resolve) => {
    timer = setTimeout(() => resolve("timeout"), ms);
  });
  try {
    return await Promise.race([fetchUser(id), timeout]);
  } finally {
    clearTimeout(timer);
  }
}

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
