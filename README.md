# tslings

Small exercises to get you used to reading and writing [TypeScript](https://www.typescriptlang.org/).
Inspired by (and partly adapted from) [rustlings](https://github.com/rust-lang/rustlings).

Each exercise is a small `.ts` file with a type error or a failing test. Your job is to fix it.
tslings watches your files, re-checks the current exercise every time you save, and moves on
when you're ready.

## Getting started

You need [Node.js](https://nodejs.org/) 20.10 or newer.

```sh
git clone https://github.com/Muksiz/tslings.git
cd tslings
npm install
npm start
```

Open the `tslings` folder in your editor, then follow the instructions in the terminal.
In watch mode, these keys are available:

| Key | Action                                                |
| --- | ----------------------------------------------------- |
| `n` | Next exercise (once the current one is done)          |
| `h` | Show/hide a hint                                      |
| `l` | List all exercises (navigate and jump to any of them) |
| `c` | Check all exercises                                   |
| `x` | Reset the current exercise to its original state      |
| `r` | Re-run the current exercise                           |
| `q` | Quit                                                  |

Other commands:

```sh
npm start -- run [name]     # check one exercise (defaults to the current one)
npm start -- hint [name]    # show a hint
npm start -- list           # show progress
npm start -- check-all      # check every exercise
npm start -- reset <name>   # restore an exercise to its original state
```

Run `npm link` once if you'd rather type `tslings run` instead of `npm start -- run`.

## How exercises are checked

1. **Type check.** `tsc` checks the exercise with the strict settings in [`tsconfig.json`](tsconfig.json),
   plus any extra options the exercise needs.
2. **Run.** The file is executed with Node.js (via [tsx](https://tsx.is/)). If it has tests written
   with `node:test`, they all have to pass.

Some later exercises are checked only by the type checker. They use `Expect<Equal<A, B>>`
from [`helpers/type-assert.ts`](helpers/type-assert.ts), or `// @ts-expect-error` comments
that become errors themselves when the line below them is *not* an error.

Each directory in `exercises/` has a `README.md` with a short introduction and links to the
[TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html). Reference
solutions are in `solutions/`.

## Topics

| Section                | What you'll learn                                                        |
| ---------------------- | ------------------------------------------------------------------------ |
| `00_intro`             | How tslings works                                                        |
| `01_variables`         | `let`/`const`, type annotations, inference, literal types                |
| `02_functions`         | Parameter types, optional/default parameters, function types             |
| `03_if`                | Conditions, truthiness pitfalls, `===`                                   |
| `04_primitive_types`   | `number` vs `bigint`, floating point, tuples                             |
| `05_arrays`            | Array methods, `readonly` arrays, `noUncheckedIndexedAccess`             |
| `06_references`        | Reference semantics, shallow vs deep copies, `as const`                  |
| `07_interfaces`        | Object types, optional/readonly properties, structural typing            |
| `08_unions`            | Literal unions, discriminated unions, exhaustiveness with `never`, enums |
| `09_strings`           | Template literals, string methods, Unicode pitfalls                      |
| `10_modules`           | `import`/`export`, default exports, `import type`                        |
| `11_maps`              | `Map`, `Set`, `Record`                                                   |
| `12_nullish`           | `strictNullChecks`, `?.`, `??` vs `\|\|`                                 |
| `13_error_handling`    | `throw`/`catch`, `unknown` errors, custom errors, Result types           |
| `14_generics`          | Generic functions and classes, constraints, `keyof`                      |
| `15_classes`           | Classes, `#private`, getters, `implements`, `abstract`, `override`       |
| `16_narrowing`         | `typeof`, `in`, `instanceof`, type predicates                            |
| `17_tests`             | `node:test` and `node:assert`                                            |
| `18_iterators`         | `map`/`filter`/`reduce`, iterables, generators                           |
| `19_utility_types`     | `Partial`, `Pick`, `Omit`, `Record`, `ReturnType`, `Awaited`, ...        |
| `20_async`             | Promises, `async`/`await`, `Promise.all`/`allSettled`/`race`             |
| `21_type_manipulation` | `keyof typeof`, mapped, conditional and template literal types           |
| `22_strictness`        | The dangers of `any`, `as` and `!`, and `satisfies`                      |
| `23_conversions`       | Parsing numbers, validating `unknown` data, `Object.entries`             |

Rust topics like ownership, borrowing, lifetimes, smart pointers and macros don't exist in
TypeScript. Their places are taken by TypeScript's own strengths: reference semantics,
narrowing, utility types, async code and type-level programming.

## Contributing

Exercise metadata (order, hints, extra compiler options) lives in [`src/info.ts`](src/info.ts).
To add an exercise, create it in `exercises/<section>/`, add a solution with the same path in
`solutions/`, register it in `src/info.ts`, and run:

```sh
npm start -- dev check
```

This verifies that every solution passes and every unsolved exercise fails.

## License

[MIT](LICENSE). Some exercises are adapted from rustlings, also MIT licensed.
