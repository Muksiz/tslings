import type { Equal, Expect } from "../../helpers/type-assert.ts";

// Mapped types create a new object type by going over the keys of another type:
//   type Flags<T> = { [K in keyof T]: boolean };

interface Person {
  name: string;
  age: number;
}

// TODO: Every property of `T` can also be `null`.
type Nullable<T> = T;

// TODO: Like the built-in `Partial`: every property of `T` becomes optional.
// Don't use `Partial` itself! Hint: `[K in keyof T]?: ...`
type MyPartial<T> = T;

// TODO: Every property of `T` becomes a function returning that property's type,
// and the keys are renamed: `name` -> `getName`.
// Hint: Key remapping with `as`, a template literal type and `Capitalize`.
// `K & string` makes sure that `K` is a string (keys can also be numbers or symbols).
type Getters<T> = T;

// Don't change the type tests!
type _tests = [
  Expect<Equal<Nullable<Person>, { name: string | null; age: number | null }>>,
  Expect<Equal<MyPartial<Person>, { name?: string; age?: number }>>,
  Expect<Equal<Getters<Person>, { getName: () => string; getAge: () => number }>>,
];
