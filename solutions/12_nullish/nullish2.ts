import { test } from "node:test";
import assert from "node:assert/strict";

interface User {
  name: string;
  address?: {
    city: string;
    zip?: string;
  };
}

function cityOf(user: User): string {
  return user.address?.city ?? "unknown";
}

// `?.` stops the whole chain as soon as something is `null` or `undefined`.
function zipOf(user: User): string | undefined {
  return user.address?.zip?.trim();
}

test("city", () => {
  assert.equal(cityOf({ name: "Ferris", address: { city: "Helsinki" } }), "Helsinki");
  assert.equal(cityOf({ name: "Gopher" }), "unknown");
});

test("zip", () => {
  assert.equal(zipOf({ name: "Ferris", address: { city: "Helsinki", zip: " 00100 " } }), "00100");
  assert.equal(zipOf({ name: "Ferris", address: { city: "Helsinki" } }), undefined);
  assert.equal(zipOf({ name: "Gopher" }), undefined);
});
