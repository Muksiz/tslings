// Metadata for all exercises, in the order they are meant to be solved.

export interface ExerciseInfo {
  /** File name without extension. Must be unique. */
  name: string;
  /** Directory inside `exercises/` (and `solutions/`). */
  dir: string;
  /** Whether the exercise contains `node:test` tests. Otherwise it only has to type check and run. */
  test: boolean;
  hint: string;
  /** Extra compiler options on top of `tsconfig.json`, used only for this exercise. */
  compilerOptions?: Record<string, unknown>;
  /** Helper files in the same directory that belong to this exercise (restored on reset). */
  extraFiles?: string[];
  /** The exercise passes without changes (only for the first one). */
  skipCheckUnsolved?: boolean;
}

export const WELCOME_MESSAGE = `
Is this your first time? Don't worry, tslings is made for beginners!
We are going to teach you a lot of things about TypeScript, but before we can
get started, here are some notes about how tslings operates:

1. The central concept behind tslings is that you solve exercises. These
   exercises usually contain some type error or failing test, and it's your
   job to fix them! When an exercise type checks and its tests pass, tslings
   marks it as done.
2. Make sure to have your editor open in the \`tslings/\` directory. tslings
   will show you the path of the current exercise under the progress bar.
   Open the exercise file in your editor, fix errors and save the file.
   tslings automatically checks it again when the file changes.
3. If you're stuck on an exercise, enter \`h\` to show a hint. The solutions
   are in the \`solutions/\` directory, but try not to peek too early!
4. Every directory in \`exercises/\` has a README.md with an introduction and
   links to the TypeScript documentation. Read it before the exercises.
5. If an exercise doesn't make sense to you, feel free to open an issue on
   GitHub. We look at every issue, and sometimes, other learners do too so
   you can help each other out!
`;

export const FINAL_MESSAGE = `
We hope you enjoyed learning about the various aspects of TypeScript!
If you noticed any issues, don't hesitate to report them on GitHub.
You can also contribute your own exercises to help the greater community!

Before reporting an issue or contributing, please read our guidelines in
the README.

🎉 Congratulations! You have done all the exercises! 🎉
`;

export const exercises: ExerciseInfo[] = [
  // ---------------- 00_intro ----------------
  {
    name: "intro1",
    dir: "00_intro",
    test: false,
    skipCheckUnsolved: true,
    hint: `Enter \`n\` to move on to the next exercise.`,
  },
  {
    name: "intro2",
    dir: "00_intro",
    test: false,
    hint: `The method that prints a line is called \`console.log\`.`,
  },

  // ---------------- 01_variables ----------------
  {
    name: "variables1",
    dir: "01_variables",
    test: false,
    hint: `The declaration of \`x\` is missing a keyword: \`const\` or \`let\`.`,
  },
  {
    name: "variables2",
    dir: "01_variables",
    test: false,
    hint: `The variable \`x\` is declared but never assigned a value, so TypeScript complains that it is
used before being assigned. Give it a value in the declaration: \`let x: number = 42;\`.
Try values that make the comparison true and false!`,
  },
  {
    name: "variables3",
    dir: "01_variables",
    test: false,
    hint: `\`const\` bindings can't be reassigned. Which keyword declares a variable that can?`,
  },
  {
    name: "variables4",
    dir: "01_variables",
    test: false,
    hint: `The three primitive types used here are \`string\`, \`number\` and \`boolean\`.
You could also remove the annotations entirely: TypeScript infers the type from the value.`,
  },
  {
    name: "variables5",
    dir: "01_variables",
    test: false,
    hint: `A \`const\` or \`let\` variable can only be declared once per scope.
Give the second variable a different name (and update the line that uses it).`,
  },
  {
    name: "variables6",
    dir: "01_variables",
    test: false,
    hint: `Hover over \`heading\` in your editor to see its type. With \`let\`, it's \`string\`, but \`move\`
only accepts four specific strings. Declare it with \`const\` to keep the literal type \`"north"\`,
or annotate it as \`Direction\`.`,
  },

  // ---------------- 02_functions ----------------
  {
    name: "functions1",
    dir: "02_functions",
    test: false,
    hint: `Define a function \`callMe\` above the call:
  function callMe() {
    // ...
  }`,
  },
  {
    name: "functions2",
    dir: "02_functions",
    test: false,
    hint: `TypeScript can't infer parameter types. \`num\` is used in a comparison with a counter, so
it should be a \`number\`: \`function callMe(num: number)\`.`,
  },
  {
    name: "functions3",
    dir: "02_functions",
    test: false,
    hint: `\`callMe\` expects one argument of type \`number\`. Pass it a number!`,
  },
  {
    name: "functions4",
    dir: "02_functions",
    test: false,
    hint: `\`num % 2 === 0\` is a comparison. What type does a comparison produce?`,
  },
  {
    name: "functions5",
    dir: "02_functions",
    test: true,
    hint: `A default value makes a parameter optional: \`greeting = "Hello"\` (the type is inferred).
A question mark makes it optional without a default: \`punctuation?: string\`. Its type is then
\`string | undefined\`, so provide a fallback in the body, e.g. with \`punctuation ?? "!"\`.`,
  },
  {
    name: "functions6",
    dir: "02_functions",
    test: true,
    hint: `A function type looks like an arrow function with types: \`(n: number) => number\`.
\`square\` can be written like \`addThree\`: \`const square = (n: number) => n * n;\``,
  },

  // ---------------- 03_if ----------------
  {
    name: "if1",
    dir: "03_if",
    test: true,
    hint: `It's possible to do this in one line if you would like!
Some similar examples from other languages:
- In C(++) and JavaScript this would be: \`a > b ? a : b\`
- In Python this would be: \`a if a > b else b\`
TypeScript works exactly like C and JavaScript here.
Remember to \`return\` the value!`,
  },
  {
    name: "if2",
    dir: "03_if",
    test: true,
    hint: `The function must always return a string. For more than two conditions, chain
\`else if\` blocks: \`if (...) { ... } else if (...) { ... } else { ... }\``,
  },
  {
    name: "if3",
    dir: "03_if",
    test: true,
    hint: `The number \`0\` is falsy, so \`if (count)\` is false for 0 as well as for \`undefined\`.
Compare against \`undefined\` explicitly: \`if (count !== undefined)\`.`,
  },
  {
    name: "quiz1",
    dir: "quizzes",
    test: true,
    hint: `No hints this time ;)`,
  },

  // ---------------- 04_primitive_types ----------------
  {
    name: "primitive_types1",
    dir: "04_primitive_types",
    test: false,
    hint: `The \`!\` operator negates a boolean: \`const isEvening = !isMorning;\``,
  },
  {
    name: "primitive_types2",
    dir: "04_primitive_types",
    test: true,
    hint: `The \`Math\` object has functions for rounding: \`Math.floor\`, \`Math.ceil\`, \`Math.round\` and
\`Math.trunc\`. Which one rounds -3.5 to -3?
For \`almostEqual\`, \`Math.abs(a - b)\` is the distance between the numbers.`,
  },
  {
    name: "primitive_types3",
    dir: "04_primitive_types",
    test: true,
    hint: `Change the parameter and return types to \`bigint\`. Then fix the type errors inside the function:
bigint literals are written with an \`n\` suffix (\`1n\`), and you can't mix numbers and bigints in
arithmetic, so \`result\` and \`i\` must be bigints too.`,
  },
  {
    name: "primitive_types4",
    dir: "04_primitive_types",
    test: true,
    hint: `A tuple type lists the type of every element: \`[string, number]\`.
Destructuring an array looks like this: \`const [first, second] = someArray;\`
To swap, build a new tuple: \`[pair[1], pair[0]]\`.`,
  },

  // ---------------- 05_arrays ----------------
  {
    name: "arrays1",
    dir: "05_arrays",
    test: true,
    hint: `In \`arrayLoop\`, use \`output.push(...)\` to add an element.
In \`arrayMap\`, the callback must return the new value. Without \`return\`, a function with a
body in braces returns \`undefined\`. You can also drop the braces: \`(element) => element * 2\`.`,
  },
  {
    name: "arrays2",
    dir: "05_arrays",
    test: true,
    compilerOptions: { noUncheckedIndexedAccess: true },
    hint: `With \`noUncheckedIndexedAccess\`, \`arr[0]\` has the type \`string | undefined\`. Use \`??\` to provide
a fallback: \`arr[0] ?? "(empty)"\`.
For \`last\`, change the return type to \`number | undefined\`. \`arr.at(-1)\` returns the last element.`,
  },
  {
    name: "arrays3",
    dir: "05_arrays",
    test: true,
    hint: `A readonly array has no \`push\` or \`sort\`. Create a new array instead:
- The spread syntax copies the elements: \`[...list, item]\`.
- \`toSorted\` is like \`sort\`, but returns a sorted copy.`,
  },

  // ---------------- 06_references ----------------
  {
    name: "references1",
    dir: "06_references",
    test: true,
    hint: `\`const result = post\` doesn't create a copy, \`result\` and \`post\` are the same object.
Create a new object with the spread syntax: \`{ ...post, tags: ... }\`. The \`tags\` array needs to be
a new array too, otherwise it is still shared: \`[...post.tags, tag]\`.`,
  },
  {
    name: "references2",
    dir: "06_references",
    test: true,
    hint: `\`{ ...person }\` creates a new object, but \`copy.address\` and \`person.address\` are still the same
object. Either spread the nested object too: \`{ ...person, address: { ...person.address, city } }\`,
or make a deep copy first with \`structuredClone(person)\`.`,
  },
  {
    name: "references3",
    dir: "06_references",
    test: false,
    hint: `Add \`as const\` after the closing brace of the object literal. It makes all properties readonly,
including nested arrays.`,
  },
  {
    name: "references4",
    dir: "06_references",
    test: true,
    hint: `\`includes\` uses \`===\`, which compares objects by identity. Use \`some\` with a callback that
compares the coordinates: \`points.some((p) => p.x === target.x && ...)\`.`,
  },

  // ---------------- 07_interfaces ----------------
  {
    name: "interfaces1",
    dir: "07_interfaces",
    test: true,
    hint: `Properties in an interface are written like \`red: number;\`.
A tuple type alias looks like: \`type Rgb = [number, number, number];\``,
  },
  {
    name: "interfaces2",
    dir: "07_interfaces",
    test: true,
    hint: `Put \`readonly\` in front of a property to prevent changes, and \`?\` after the name to make it
optional: \`nickname?: string\`. In \`displayName\`, \`user.nickname\` may be \`undefined\`, so fall back
to the name with \`??\`.`,
  },
  {
    name: "interfaces3",
    dir: "07_interfaces",
    test: true,
    hint: `An interface can extend another one: \`interface Point3D extends Point2D { z: number }\`.`,
  },

  // ---------------- 08_unions ----------------
  {
    name: "unions1",
    dir: "08_unions",
    test: false,
    hint: `A union of string literals looks like this: \`type Size = "small" | "large";\``,
  },
  {
    name: "unions2",
    dir: "08_unions",
    test: true,
    hint: `Add \`| { kind: "square"; size: number }\` to the \`Shape\` type, then add a \`case "square":\` to the
\`switch\`. Notice how TypeScript complains that the function doesn't always return until you
handle the new variant.`,
  },
  {
    name: "unions3",
    dir: "08_unions",
    test: true,
    hint: `Add a \`case\` for each remaining message type. Inside a \`case\`, \`message\` is narrowed to that variant,
so you can access its properties, e.g. \`this.message = message.text;\`.
The \`default\` branch errors until \`message\` has been narrowed to \`never\`, i.e. every case is handled.`,
  },
  {
    name: "unions4",
    dir: "08_unions",
    test: true,
    hint: `Enum members are listed like \`Left = "LEFT",\`. Add cases for them in \`opposite\`.
For \`Compass\`, add the missing literals \`"S"\` and \`"W"\` to the union.`,
  },

  // ---------------- 09_strings ----------------
  {
    name: "strings1",
    dir: "09_strings",
    test: true,
    hint: `Only template literals (strings in backticks \`) interpolate \`\${...}\`.`,
  },
  {
    name: "strings2",
    dir: "09_strings",
    test: true,
    hint: `Useful methods: \`trim\`, \`replaceAll\` and \`toUpperCase\`. Strings can be joined with \`+\` or a template literal.
Note that \`replace\` with a string only replaces the first occurrence.`,
  },
  {
    name: "strings3",
    dir: "09_strings",
    test: true,
    hint: `\`[...input]\` splits a string into an array of Unicode code points, keeping emoji like 🦀 intact.
Use its \`length\` to count, and \`reverse()\` + \`join("")\` to reverse.`,
  },

  // ---------------- 10_modules ----------------
  {
    name: "modules1",
    dir: "10_modules",
    test: false,
    extraFiles: ["sausage_factory.ts"],
    hint: `Everything in a module is private by default. Add the \`export\` keyword in front of the function
that modules1.ts imports. Keep the secret recipe private!`,
  },
  {
    name: "modules2",
    dir: "10_modules",
    test: false,
    extraFiles: ["delicious_snacks.ts"],
    hint: `An import can be renamed with \`as\`: \`import { PEAR as fruit } from "./delicious_snacks.ts";\`
A whole module can be imported as an object with \`import * as snacks from "./delicious_snacks.ts";\``,
  },
  {
    name: "modules3",
    dir: "10_modules",
    test: false,
    extraFiles: ["planets.ts"],
    hint: `A default export is imported without braces: \`import largest from "./planets.ts";\`
Types are imported with \`import type { Planet } from ...\` or inline: \`import { type Planet } from ...\`.
Both can be combined: \`import largest, { describe, type Planet } from "./planets.ts";\``,
  },

  // ---------------- 11_maps ----------------
  {
    name: "maps1",
    dir: "11_maps",
    test: true,
    hint: `Add entries with \`basket.set(name, count)\`. You need at least three kinds of fruit and five fruits in total.`,
  },
  {
    name: "maps2",
    dir: "11_maps",
    test: true,
    hint: `\`counts.get(word)\` returns \`number | undefined\`. Use \`??\` to treat a missing word as 0:
\`(counts.get(word) ?? 0) + 1\`.`,
  },
  {
    name: "maps3",
    dir: "11_maps",
    test: true,
    hint: `For each team, get its current scores from the map or start with
\`{ goalsScored: 0, goalsConceded: 0 }\` if it isn't there yet. Then add the goals and \`set\` it.
A helper function used for both teams avoids writing the same code twice.
The goals are strings: convert them with \`Number(...)\`.
For \`teamNames\`: add the names to a \`Set\`, then spread it into an array and \`sort\` it.`,
  },
  {
    name: "quiz2",
    dir: "quizzes",
    test: true,
    hint: `\`Command\` is a union of two string literals and an object type: \`"uppercase" | "trim" | { append: number }\`.
In \`transformer\`, \`map\` over the input. Compare the command to the strings first; after that, TypeScript
knows the only remaining option is the object. \`"bar".repeat(n)\` repeats a string.`,
  },

  // ---------------- 12_nullish ----------------
  {
    name: "nullish1",
    dir: "12_nullish",
    test: true,
    hint: `The return type is \`number | undefined\`. Use \`if\`/\`else if\` to return 5, 0 or \`undefined\`.
In the test, \`iceCreams\` is \`number | undefined\`, so \`iceCreams + 0\` is an error. Provide a fallback
with \`(iceCreams ?? 0)\`, or check it with an \`if\` first.`,
  },
  {
    name: "nullish2",
    dir: "12_nullish",
    test: true,
    hint: `Optional chaining: \`user.address?.city\` is \`undefined\` if there is no address.
Combine it with \`??\` for a default. Chains can have several \`?.\`: \`a?.b?.c()\`.`,
  },
  {
    name: "nullish3",
    dir: "12_nullish",
    test: true,
    hint: `\`||\` uses the right side for every falsy value, including \`0\` and \`""\`. Which operator only does
that for \`null\` and \`undefined\`?`,
  },

  // ---------------- 13_error_handling ----------------
  {
    name: "errors1",
    dir: "13_error_handling",
    test: true,
    hint: `Replace \`return "";\` with \`throw new Error("Empty names aren't allowed");\`.`,
  },
  {
    name: "errors2",
    dir: "13_error_handling",
    test: true,
    hint: `In strict mode, \`err\` in a \`catch\` block is \`unknown\`. Check it with \`if (err instanceof Error)\`;
inside that block, \`err.message\` is available. Decide what to do if it's not an \`Error\` (rethrowing
it is a good choice).`,
  },
  {
    name: "errors3",
    dir: "13_error_handling",
    test: true,
    hint: `Replace each \`throw\` with \`return { ok: false, error: "..." };\`.
In \`doubled\`, check \`if (!result.ok)\` first and return the message. After that check, TypeScript
knows \`result\` is the success variant, so \`result.value\` is available.`,
  },
  {
    name: "errors4",
    dir: "13_error_handling",
    test: true,
    hint: `class InsufficientFundsError extends Error {
  override name = "InsufficientFundsError";
  constructor(readonly missing: number) {
    super(...); // call the Error constructor with the message
  }
}
\`override\` is needed because \`Error\` already has a \`name\` property.`,
  },

  // ---------------- 14_generics ----------------
  {
    name: "generics1",
    dir: "14_generics",
    test: true,
    hint: `Declare a type parameter after the function name and use it for the parameter and return types:
\`function first<T>(items: T[]): T\``,
  },
  {
    name: "generics2",
    dir: "14_generics",
    test: true,
    hint: `Add a type parameter to the class: \`class Wrapper<T>\`, and replace \`number\` with \`T\`.
\`map\` can return a different type than \`T\`, so it needs its own type parameter:
\`map<U>(f: (value: T) => U): Wrapper<U>\`.`,
  },
  {
    name: "generics3",
    dir: "14_generics",
    test: true,
    hint: `A constraint is written with \`extends\`: \`<T extends { length: number }>\`.
For \`getProperty\`, add a second type parameter for the key: \`<T, K extends keyof T>\`, use \`K\` as the type
of \`key\`, and \`T[K]\` as the return type.`,
  },

  // ---------------- 15_classes ----------------
  {
    name: "classes1",
    dir: "15_classes",
    test: true,
    hint: `Initialize the property where it's declared: \`count = 0;\` (or in a constructor).
Inside methods, access the property with \`this.count\`.`,
  },
  {
    name: "classes2",
    dir: "15_classes",
    test: true,
    hint: `Declare the field \`#balance: number;\`, assign it in the constructor (\`this.#balance = balance;\`),
use it in \`deposit\`, and add a getter:
  get balance(): number {
    return this.#balance;
  }
A getter without a matching setter can't be assigned to.`,
  },
  {
    name: "classes3",
    dir: "15_classes",
    test: true,
    hint: `\`implements Summary\` requires every method of the interface. Add \`summarize()\` to \`Tweet\`; it can call
\`this.summarizeAuthor()\`. Then change the parameter type of \`notify\` to \`Summary\`.`,
  },
  {
    name: "classes4",
    dir: "15_classes",
    test: true,
    hint: `\`Circle\` needs an \`area()\` method (π * r²; use \`Math.PI\`), and its \`describe\` method needs the
\`override\` keyword in front of it.`,
  },

  // ---------------- 16_narrowing ----------------
  {
    name: "narrowing1",
    dir: "16_narrowing",
    test: true,
    hint: `Check \`if (typeof padding === "number")\`. Inside the block, \`padding\` is a number; after it, a string.`,
  },
  {
    name: "narrowing2",
    dir: "16_narrowing",
    test: true,
    hint: `\`if ("swim" in animal)\` narrows \`animal\` to \`Fish\`.
\`if (value instanceof Date)\` narrows \`value\` to \`Date\`. \`toISOString().slice(0, 10)\` gives "YYYY-MM-DD".`,
  },
  {
    name: "narrowing3",
    dir: "16_narrowing",
    test: true,
    hint: `Change the return type from \`boolean\` to the type predicate \`value is Cat\`.
\`filter\` uses type predicates to narrow the type of the resulting array.`,
  },
  {
    name: "quiz3",
    dir: "quizzes",
    test: true,
    hint: `Make the class generic over the grade type with a constraint: \`class ReportCard<G extends number | string>\`.
In \`print\`, check \`typeof this.grade === "number"\` to decide whether to call \`toFixed(1)\`.`,
  },

  // ---------------- 17_tests ----------------
  {
    name: "tests1",
    dir: "17_tests",
    test: true,
    hint: `\`assert.ok\` needs a value to check. Call \`isEven\` with an even number in the first assertion,
and check that an odd number isn't even in the second one (\`!isEven(...)\`).`,
  },
  {
    name: "tests2",
    dir: "17_tests",
    test: true,
    hint: `\`assert.equal\` (from \`node:assert/strict\`) compares with \`===\`: a number is never equal to a string,
and two different arrays are never equal. Use the right expected value, and \`assert.deepEqual\` for arrays.`,
  },
  {
    name: "tests3",
    dir: "17_tests",
    test: true,
    hint: `\`assert.throws(() => ..., /message/)\` expects the function to throw. Wrap the constructor call in an
arrow function, otherwise it throws before \`assert.throws\` is even called.
For the promise: \`await assert.rejects(loadRectangle(...))\`.`,
  },

  // ---------------- 18_iterators ----------------
  {
    name: "iterators1",
    dir: "18_iterators",
    test: true,
    hint: `\`products.filter((p) => p.inStock).map((p) => p.name)\`
\`reduce\` takes a callback \`(accumulator, element) => newAccumulator\` and an initial value: \`reduce(..., 0)\`.`,
  },
  {
    name: "iterators2",
    dir: "18_iterators",
    test: true,
    hint: `\`input.slice(0, 1)\` is the first character (or "" for an empty string) and \`input.slice(1)\` the rest.
Reuse \`capitalizeFirst\` with \`map\`, and \`join("")\` to combine an array of strings into one string.`,
  },
  {
    name: "iterators3",
    dir: "18_iterators",
    test: true,
    hint: `\`[...map.values()]\` is an array of the progress values. Filter it and take the \`length\`.
For grouping, loop over the map with \`for (const [name, progress] of map)\` and push the name into
\`(result[progress] ??= [])\`, which creates the array the first time a progress value is seen.`,
  },
  {
    name: "iterators4",
    dir: "18_iterators",
    test: true,
    hint: `Inside a generator, \`yield value\` produces the next value. Loops work as usual.
For Fibonacci, keep two variables and update them in a \`while (true)\` loop: \`[a, b] = [b, a + b]\`.
For \`take\`, iterate with \`for...of\` and count how many values you have yielded. Use \`return\` or \`break\` to stop.`,
  },

  // ---------------- 19_utility_types ----------------
  {
    name: "utility1",
    dir: "19_utility_types",
    test: true,
    hint: `\`Partial<Todo>\` is \`Todo\` with all properties optional. \`Readonly<Todo>\` makes all of them readonly.`,
  },
  {
    name: "utility2",
    dir: "19_utility_types",
    test: false,
    hint: `\`Pick<Todo, "title" | "done">\` keeps only these keys, \`Omit<Todo, "id" | "createdAt">\` removes them.
\`Record<"low" | "medium" | "high", Todo[]>\` creates an object type with these keys.`,
  },
  {
    name: "utility3",
    dir: "19_utility_types",
    test: false,
    hint: `\`typeof createUser\` is the function's type. Pass it to \`ReturnType<...>\` and \`Parameters<...>\`.
\`fetchUser\` returns a promise: \`Awaited<...>\` unwraps it.`,
  },

  // ---------------- 20_async ----------------
  {
    name: "async1",
    dir: "20_async",
    test: true,
    hint: `\`return new Promise((resolve) => setTimeout(resolve, ms));\`
To run the fetches concurrently, start them all with \`numbers.map((n) => fetchNumber(n))\`, which gives an
array of promises, and wait for all of them with \`Promise.all(...)\`.`,
  },
  {
    name: "async2",
    dir: "20_async",
    test: true,
    hint: `\`getPrice\` returns a \`Promise<number>\`, not a \`number\`. You need to \`await\` it.
In \`cheapest\`, \`prices\` is an array of promises: \`await Promise.all(...)\` turns it into an array of numbers.`,
  },
  {
    name: "async3",
    dir: "20_async",
    test: true,
    hint: `\`Promise.allSettled\` resolves to an array of results with \`status: "fulfilled"\` and a \`value\`, or
\`status: "rejected"\` and a \`reason\`. Check \`status\` to narrow.
For the timeout, race the fetch against a promise that resolves to "timeout" after \`ms\` milliseconds:
\`Promise.race([fetchUser(id), timeoutPromise])\`.`,
  },

  // ---------------- 21_type_manipulation ----------------
  {
    name: "types1",
    dir: "21_type_manipulation",
    test: false,
    hint: `\`typeof COLORS\` is the type of the object and \`keyof\` gives its keys: \`keyof typeof COLORS\`.
For the values, index the type with its keys: \`(typeof COLORS)[keyof typeof COLORS]\`.
Without \`as const\`, the values are just \`string\`. Add \`as const\` to both \`COLORS\` and \`ROLES\`.`,
  },
  {
    name: "types2",
    dir: "21_type_manipulation",
    test: false,
    hint: `\`type Nullable<T> = { [K in keyof T]: T[K] | null };\`
For \`MyPartial\`, put a \`?\` after the brackets.
For \`Getters\`, remap the keys: \`[K in keyof T as \\\`get\${Capitalize<K & string>}\\\`]: () => T[K]\`.`,
  },
  {
    name: "types3",
    dir: "21_type_manipulation",
    test: false,
    hint: `\`T extends (infer U)[] ? U : never\` captures the element type of an array.
For promises, match against \`Promise<infer U>\`.
For functions, first capture all parameters: \`F extends (...args: infer P) => unknown\`, then match
\`P\` against the tuple \`[infer First, ...unknown[]]\`.
Template literal types work like template literals: \`\\\`on\${Capitalize<E>}\\\`\`.`,
  },

  // ---------------- 22_strictness ----------------
  {
    name: "strict1",
    dir: "22_strictness",
    test: true,
    hint: `Annotate the variable: \`const data: Pet = JSON.parse(json);\`. Now the typo is a type error!`,
  },
  {
    name: "strict2",
    dir: "22_strictness",
    test: true,
    hint: `\`find\` returns \`User | undefined\`. Use optional chaining and a default:
\`USERS.find(...)?.name ?? "anonymous"\`.`,
  },
  {
    name: "strict3",
    dir: "22_strictness",
    test: false,
    hint: `Remove the \`: Record<string, Route>\` annotation and add \`satisfies Record<string, Route>\` after the
object literal, like in the \`invalid\` example below it.`,
  },

  // ---------------- 23_conversions ----------------
  {
    name: "conversions1",
    dir: "23_conversions",
    test: true,
    hint: `Return \`null\` early for blank input (\`input.trim() === ""\`). Then convert with \`Number(input)\` and
check the result with \`Number.isInteger\` (which is \`false\` for \`NaN\` and 4.5) and \`>= 0\`.
\`toFixed(2)\` formats a number with two decimals.`,
  },
  {
    name: "conversions2",
    dir: "23_conversions",
    test: true,
    hint: `Start with \`const data: unknown = JSON.parse(json);\`. Then narrow:
- \`typeof data === "object" && data !== null\` (\`typeof null\` is "object"!)
- \`"name" in data && typeof data.name === "string"\`
- the same for \`age\` with "number"
Throw an \`Error\` whenever a check fails. Finally return a new object with only \`name\` and \`age\`.`,
  },
  {
    name: "conversions3",
    dir: "23_conversions",
    test: true,
    hint: `\`Object.entries(record)\` gives \`[key, value][]\`. \`map\` it to new pairs and pass the result to
\`Object.fromEntries(...)\`. \`new Map(Object.entries(record))\` creates a map, and \`Object.fromEntries(map)\`
works directly on a map.`,
  },
];
