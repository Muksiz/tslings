# Iterators

Arrays have many methods that take a callback and return a new value:
`map`, `filter`, `reduce`, `some`, `every`, `find`, `flatMap`, ... Chaining them is often
clearer than writing loops.

Anything that is *iterable* (arrays, strings, `Map`s, `Set`s, generators) works with
`for...of` and the spread syntax `[...iterable]`.

**Generator functions** (`function*`) produce values lazily with `yield`. Their type is
`Generator<T>`, or more generally `Iterable<T>`.

## Further information

- [Array methods on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)
- [Iteration protocols on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [function* on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
