# Conversions

Types disappear when TypeScript is compiled to JavaScript. That has an important
consequence: data that comes from outside your program (JSON, user input, files, network)
has no type guarantees, whatever your types say.

- Converting between primitives is done with functions like `Number(...)`, `String(...)`,
  `parseInt(...)` and methods like `toFixed`. Watch out for `NaN` and surprises like `Number("") === 0`.
- `value as Type` *doesn't convert anything*. It only changes what the type checker believes.
- To safely turn `unknown` data into a typed value, **validate** it at runtime and narrow
  it step by step. (Libraries like Zod or Valibot automate this.)

## Further information

- [Number() on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)
- [Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)
- [Object.entries on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
