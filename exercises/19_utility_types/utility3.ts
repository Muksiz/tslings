import type { Equal, Expect } from "../../helpers/type-assert.ts";

// This exercise is checked only by the type checker.

// Imagine this function comes from a library that doesn't export its types.
function createUser(name: string, age: number, admin = false) {
  return { id: Math.random(), name, age, admin, createdAt: new Date() };
}

async function fetchUser(id: number) {
  return createUser(`user${id}`, 30);
}

// TODO: Derive these types from the functions above instead of writing them by hand.
// Hint: `typeof createUser` is the type of the function.

// The type of the object `createUser` returns.
type User = unknown;

// The parameters of `createUser` as a tuple.
type CreateUserArgs = unknown;

// What `fetchUser` resolves to (not the promise itself).
type FetchedUser = unknown;

// Don't change the type tests!
type _tests = [
  Expect<Equal<User, { id: number; name: string; age: number; admin: boolean; createdAt: Date }>>,
  Expect<Equal<CreateUserArgs, [name: string, age: number, admin?: boolean]>>,
  Expect<Equal<FetchedUser, User>>,
];
