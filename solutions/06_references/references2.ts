import { test } from "node:test";
import assert from "node:assert/strict";

interface Person {
  name: string;
  address: { city: string; street: string };
}

// `{ ...person }` copies the top-level properties, but `address` is still the same object.
// `structuredClone(person)` would make a deep copy, which also works here.
function moveToCity(person: Person, city: string): Person {
  return { ...person, address: { ...person.address, city } };
}

test("moves the person", () => {
  const ferris = { name: "Ferris", address: { city: "Helsinki", street: "Crab Lane 1" } };
  const moved = moveToCity(ferris, "Vaasa");
  assert.equal(moved.address.city, "Vaasa");
  assert.equal(moved.address.street, "Crab Lane 1");
});

test("doesn't modify the original", () => {
  const ferris = { name: "Ferris", address: { city: "Helsinki", street: "Crab Lane 1" } };
  moveToCity(ferris, "Vaasa");
  assert.equal(ferris.address.city, "Helsinki");
});
