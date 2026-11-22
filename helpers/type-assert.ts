// Helpers for exercises that are checked purely by the type checker.
//
// `Expect<Equal<A, B>>` is a type error unless the types `A` and `B` are exactly the same.
// You don't need to understand how `Equal` works yet: it is explained in the type manipulation exercises.

export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;

export type Expect<T extends true> = T;
