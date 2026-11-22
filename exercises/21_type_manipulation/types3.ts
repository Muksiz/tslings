import type { Equal, Expect } from "../../helpers/type-assert.ts";

// Conditional types: `T extends U ? X : Y` is `X` if `T` is assignable to `U`, otherwise `Y`.
// Inside the condition, `infer` declares a type variable to capture part of `T`.
type IsString<T> = T extends string ? true : false;

// TODO: The element type of an array type, or `never` if it isn't an array.
type ElementType<T> = T;

// TODO: The type a promise resolves to, or `T` itself if it isn't a promise.
// (Just one level. The built-in `Awaited` unwraps nested promises too.)
type Unpromise<T> = T;

// TODO: The type of the first parameter of a function type, or `never` if it has none.
type FirstParameter<F> = F;

// TODO: An event handler name: "click" -> "onClick".
type HandlerName<E extends string> = E;

// Don't change the type tests!
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
