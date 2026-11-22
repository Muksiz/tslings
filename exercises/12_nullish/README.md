# Null and Undefined

TypeScript has no `Option` type. Instead, a value that might be missing has a union type
like `string | undefined` (or `string | null`). With `strictNullChecks` (part of `strict`),
TypeScript won't let you use such a value until you've checked that it's there.

Operators that help:

- `a ?? b`: `a`, unless it's `null`/`undefined`, then `b`.
- `a?.b`: `a.b`, or `undefined` if `a` is `null`/`undefined` (optional chaining).
- `a!`: tells TypeScript "trust me, this isn't null". Avoid it: if you're wrong, it crashes at runtime.

Beware of `||`: it falls back on *any* falsy value, including `0` and `""`.

## Further information

- [strictNullChecks](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined)
- [Nullish coalescing on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Optional chaining on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
