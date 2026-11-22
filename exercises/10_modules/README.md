# Modules

Every TypeScript file is a module. Everything inside it is private unless it is
**exported**. Other files then **import** what they need:

```ts
// math.ts
export function add(a: number, b: number) { return a + b; }

// main.ts
import { add } from "./math.ts";
```

Types can be exported and imported just like values. In this project the
`verbatimModuleSyntax` option is on, which means imports that are only types must be
marked with `import type`, so it's clear which imports disappear when the types are removed.

The exercises in this section consist of more than one file. Read the helper files too!

## Further information

- [Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)
- [verbatimModuleSyntax](https://www.typescriptlang.org/tsconfig/#verbatimModuleSyntax)
