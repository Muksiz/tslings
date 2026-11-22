# Generics

Generics let you write functions and types that work with many types while keeping
the type information. Type parameters are written in angle brackets:

```ts
function identity<T>(value: T): T { return value; }
```

When you call a generic function, TypeScript usually infers the type arguments.
Constraints (`<T extends Something>`) limit which types are allowed, so you can use
the properties of `Something` inside the function. `keyof T` is the union of the keys of `T`.

## Further information

- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Generic Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)
