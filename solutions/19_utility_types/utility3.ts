import type { Equal, Expect } from "../../helpers/type-assert.ts";

function createUser(name: string, age: number, admin = false) {
  return { id: Math.random(), name, age, admin, createdAt: new Date() };
}

async function fetchUser(id: number) {
  return createUser(`user${id}`, 30);
}

// In a type position, `typeof` gets the type of a value.
type User = ReturnType<typeof createUser>;

type CreateUserArgs = Parameters<typeof createUser>;

type FetchedUser = Awaited<ReturnType<typeof fetchUser>>;

type _tests = [
  Expect<Equal<User, { id: number; name: string; age: number; admin: boolean; createdAt: Date }>>,
  Expect<Equal<CreateUserArgs, [name: string, age: number, admin?: boolean]>>,
  Expect<Equal<FetchedUser, User>>,
];
