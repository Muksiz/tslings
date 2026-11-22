# References

TypeScript has no ownership or borrowing. Instead, there are two kinds of values:

- **Primitives** (`number`, `string`, `boolean`, ...) are copied when assigned or passed to a function.
- **Objects** (including arrays, maps and functions) are passed *by reference*: assigning an object
  to another variable doesn't copy it, both names point to the same object.

This means a function can modify an object it receives, and two objects with the same contents
are still not `===` equal. `const` only prevents reassigning the variable, not changing the object.

TypeScript can help by marking things as `readonly` (or `as const`), which makes modification
a type error.

## Further information

- [Object references and copying (javascript.info)](https://javascript.info/object-copy)
- [structuredClone on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone)
- [readonly Properties](https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-properties)
