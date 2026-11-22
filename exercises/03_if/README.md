# If

`if`/`else` works like in most C-like languages. The condition doesn't have to be a boolean:
JavaScript converts it to one. Values like `0`, `""`, `null`, `undefined` and `NaN` are *falsy*,
everything else is *truthy*. That's convenient, but also a common source of bugs.

Always compare with `===` and `!==`. The loose `==` performs surprising type conversions,
and TypeScript reports comparisons between types that can never be equal.

The conditional (ternary) operator `condition ? a : b` is an expression, so it can be used
wherever a value is expected.

## Further information

- [if...else on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Truthy values on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
- [Truthiness narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#truthiness-narrowing)
