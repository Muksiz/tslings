# Strictness

TypeScript is only as safe as you let it be. These escape hatches switch off checking,
and each of them can hide real bugs:

- `any`: anything goes, and anything you get *from* an `any` is `any` too. Prefer `unknown`.
- `as SomeType`: a type assertion. You're telling the compiler "trust me".
- `!`: the non-null assertion. "Trust me, this isn't `null` or `undefined`."
- `// @ts-ignore`: ignore the error on the next line.

Instead of annotating a value with a broad type (which forgets the details) or asserting
it with `as` (which can lie), `satisfies` checks that a value matches a type while keeping
the more precise inferred type.

The compiler options in `tsconfig.json` decide how strict TypeScript is. This project
turns on `strict` and a few more checks. Have a look!

## Further information

- [The any type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)
- [Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)
- [The satisfies operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator)
- [TSConfig reference: strict](https://www.typescriptlang.org/tsconfig/#strict)
