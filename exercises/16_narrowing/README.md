# Narrowing

When a value has a union type, TypeScript follows your checks and *narrows* the type
inside each branch. This is called control flow analysis. The checks it understands include:

- `typeof x === "string"` for primitives
- `x instanceof Date` for classes
- `"swim" in x` for checking whether a property exists
- `x === null`, truthiness checks and discriminant properties (`x.kind === "circle"`)

You can teach TypeScript your own checks with **type predicates**: a function returning
`x is SomeType` tells the type checker what a `true` result means.

`unknown` is the safe counterpart of `any`: anything can be assigned to it, but you can't
do anything with it until you have narrowed it.

## Further information

- [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [Using type predicates](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)
- [unknown](https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown)
