# Functions

Functions are declared with the `function` keyword or written as arrow functions (`(a, b) => a + b`).

In TypeScript, every parameter needs a type annotation (TypeScript can't infer parameter types
from how the function is called). The return type is usually inferred, but writing it down
documents your intent and catches mistakes inside the function body.

Parameters can be optional (`name?: string`) or have default values (`name = "world"`).
Functions are values too, and their types are written like `(x: number) => string`.

## Further information

- [More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)
