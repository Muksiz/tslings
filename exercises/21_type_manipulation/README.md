# Type Manipulation

TypeScript's type system is a small programming language of its own. You can compute
new types from existing types and values:

- `typeof value` gets the type of a value, `keyof T` the union of `T`'s keys.
- `T[K]` looks up the type of a property (an *indexed access type*).
- **Mapped types** `{ [K in keyof T]: ... }` transform every property of a type.
- **Conditional types** `T extends U ? X : Y` choose a type, and `infer` extracts parts of a type.
- **Template literal types** `` `on${Capitalize<Name>}` `` build string literal types.

This is what the utility types from the previous section are made of. These exercises
are checked only by the type checker.

## Further information

- [Creating Types from Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)
