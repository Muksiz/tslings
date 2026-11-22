import type { Equal, Expect } from "../../helpers/type-assert.ts";

interface Person {
  name: string;
  age: number;
}

type Nullable<T> = { [K in keyof T]: T[K] | null };

type MyPartial<T> = { [K in keyof T]?: T[K] };

type Getters<T> = {
  [K in keyof T as `get${Capitalize<K & string>}`]: () => T[K];
};

type _tests = [
  Expect<Equal<Nullable<Person>, { name: string | null; age: number | null }>>,
  Expect<Equal<MyPartial<Person>, { name?: string; age?: number }>>,
  Expect<Equal<Getters<Person>, { getName: () => string; getAge: () => number }>>,
];
