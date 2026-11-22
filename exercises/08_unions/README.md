# Unions

A union type `A | B` describes a value that is *either* an `A` or a `B`. Unions of literal
types like `"small" | "medium" | "large"` are the idiomatic way to describe a fixed set of options.

**Discriminated unions** combine object types that share a literal "tag" property:

```ts
type Shape = { kind: "circle"; radius: number } | { kind: "square"; size: number };
```

Checking the tag (`if (shape.kind === "circle")` or a `switch`) *narrows* the type, so
TypeScript knows which properties exist. With the `never` type, TypeScript can even check
that you handled every case.

TypeScript also has `enum`s, but unions are usually preferred: they are plain JavaScript values
and work with Node's built-in type stripping, which doesn't support enums.

## Further information

- [Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
- [Discriminated Unions](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions)
- [Exhaustiveness checking](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking)
- [Enums](https://www.typescriptlang.org/docs/handbook/enums.html)
