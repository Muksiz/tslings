# Error Handling

Errors are *thrown* with `throw new Error("message")` and caught with `try`/`catch`.
Unlike some languages, TypeScript doesn't track which errors a function can throw.

Since anything can be thrown (not just `Error` objects), the variable in a `catch`
clause has the type `unknown` in strict mode. You have to check what it is before using it.

Because thrown errors are invisible in the types, many TypeScript codebases represent
expected failures as **values** instead, for example with a discriminated union like
`{ ok: true; value: T } | { ok: false; error: E }`. Then the type checker makes sure that
callers handle the failure.

## Further information

- [try...catch on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [useUnknownInCatchVariables](https://www.typescriptlang.org/tsconfig/#useUnknownInCatchVariables)
- [Error on MDN (custom error types)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types)
