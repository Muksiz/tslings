import { test } from "node:test";
import assert from "node:assert/strict";

interface User {
  name: string;
  address?: {
    city: string;
    zip?: string;
  };
}

// TODO: Return the user's city, or "unknown" if the user has no address.
function cityOf(user: User): string {
  return user.address.city;
}

// TODO: Return the user's zip code, or `undefined` if there is none.
// Use optional chaining.
function zipOf(user: User): string | undefined {
  if (user.address === undefined) {
    return undefined;
  }
  return user.address.zip.trim();
}

// Don't change the tests!
test("city", () => {
  assert.equal(cityOf({ name: "Ferris", address: { city: "Helsinki" } }), "Helsinki");
  assert.equal(cityOf({ name: "Gopher" }), "unknown");
});

test("zip", () => {
  assert.equal(zipOf({ name: "Ferris", address: { city: "Helsinki", zip: " 00100 " } }), "00100");
  assert.equal(zipOf({ name: "Ferris", address: { city: "Helsinki" } }), undefined);
  assert.equal(zipOf({ name: "Gopher" }), undefined);
});
