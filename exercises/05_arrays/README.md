# Arrays

Arrays are ordered, growable lists. Their type is written `T[]` (or `Array<T>`).
All elements share one type, which can be a union like `(string | number)[]`.

Two TypeScript-specific things worth knowing:

- `readonly T[]` (or `ReadonlyArray<T>`) is an array type without mutating methods like `push`.
- By default, `arr[i]` has the type `T` even though the index might be out of bounds.
  The `noUncheckedIndexedAccess` compiler option makes it `T | undefined`, so you're forced to handle that.

## Further information

- [Array on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [The Array Type](https://www.typescriptlang.org/docs/handbook/2/objects.html#the-array-type)
- [noUncheckedIndexedAccess](https://www.typescriptlang.org/tsconfig/#noUncheckedIndexedAccess)
