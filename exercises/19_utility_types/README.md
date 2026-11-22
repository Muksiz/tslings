# Utility Types

TypeScript ships with generic types that transform other types. A few of the most useful:

| Type                  | Meaning                                         |
| --------------------- | ----------------------------------------------- |
| `Partial<T>`          | All properties of `T` optional                  |
| `Required<T>`         | All properties of `T` required                  |
| `Readonly<T>`         | All properties of `T` readonly                  |
| `Pick<T, K>`          | Only the properties `K` of `T`                  |
| `Omit<T, K>`          | `T` without the properties `K`                  |
| `Record<K, V>`        | An object with keys `K` and values `V`          |
| `ReturnType<F>`       | The return type of the function type `F`        |
| `Parameters<F>`       | The parameter types of `F` as a tuple           |
| `Awaited<P>`          | The type a promise resolves to                  |

Some exercises from here on are checked only by the type checker, using
`Expect<Equal<A, B>>` from `helpers/type-assert.ts`, which is an error unless `A` and `B` are the same type.

## Further information

- [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
