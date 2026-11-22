import { test } from "node:test";
import assert from "node:assert/strict";

interface Person {
  name: string;
  address: { city: string; street: string };
}

// TODO: `moveToCity` should return a copy of the person living in another city
// without changing the original. The spread syntax only makes a *shallow* copy though.
// Fix it, either by spreading at every level or by using `structuredClone`.
function moveToCity(person: Person, city: string): Person {
  const copy = { ...person };
  copy.address.city = city;
  return copy;
}

// Don't change the tests!
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
