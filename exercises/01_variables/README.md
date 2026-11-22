# Variables

JavaScript and TypeScript have two ways to declare a variable:

- `const` declares a binding that can't be reassigned. Use it by default.
- `let` declares a binding that can be reassigned later.

(There is also the old `var`, which you should avoid because it isn't block-scoped.)

TypeScript **infers** the type of a variable from its initial value, so you rarely have to
write types for variables. You can still add a type annotation with `let name: Type = value`.

A TypeScript-specific detail: a `const` holding a string or number gets a *literal type*
(`const x = "north"` has the type `"north"`), while `let` widens it to `string`.

## Further information

- [Variable Declaration](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)
- [Everyday Types: Type annotations on variables](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables)
- [Literal Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)
