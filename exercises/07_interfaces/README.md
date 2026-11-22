# Interfaces

Objects are the main way to group related data. Their *shape* is described with an
`interface` or a `type` alias:

```ts
interface User { name: string; age: number }
type User = { name: string; age: number };
```

Both work almost the same for objects. Properties can be optional (`nickname?: string`)
or `readonly`.

TypeScript's type system is **structural**: an object fits a type if it has the right
properties, no matter what it was declared as. There is no need to explicitly say that
a type "implements" an interface.

## Further information

- [Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [Differences Between Type Aliases and Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)
- [Type Compatibility (structural typing)](https://www.typescriptlang.org/docs/handbook/type-compatibility.html)
