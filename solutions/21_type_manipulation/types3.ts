import type { Equal, Expect } from "../../helpers/type-assert.ts";

type IsString<T> = T extends string ? true : false;

type ElementType<T> = T extends (infer U)[] ? U : never;

type Unpromise<T> = T extends Promise<infer U> ? U : T;

// First capture all parameters as a tuple, then take the tuple apart. (Matching against
// `(first: infer First) => unknown` directly doesn't work for functions without parameters:
// they are assignable to it too, and `First` would be inferred as `unknown`.)
type FirstParameter<F> = F extends (...args: infer P) => unknown
  ? P extends [infer First, ...unknown[]]
    ? First
    : never
  : never;

// Template literal types distribute over unions: each member is converted separately.
type HandlerName<E extends string> = `on${Capitalize<E>}`;

type _tests = [
  Expect<Equal<IsString<"hello">, true>>,
  Expect<Equal<IsString<42>, false>>,
  Expect<Equal<ElementType<string[]>, string>>,
  Expect<Equal<ElementType<(number | boolean)[]>, number | boolean>>,
  Expect<Equal<ElementType<string>, never>>,
  Expect<Equal<Unpromise<Promise<number>>, number>>,
  Expect<Equal<Unpromise<string>, string>>,
  Expect<Equal<FirstParameter<(a: string, b: number) => void>, string>>,
  Expect<Equal<FirstParameter<() => void>, never>>,
  Expect<Equal<HandlerName<"click">, "onClick">>,
  Expect<Equal<HandlerName<"keyDown" | "focus">, "onKeyDown" | "onFocus">>,
];
