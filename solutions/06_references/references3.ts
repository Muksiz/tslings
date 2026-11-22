// `as const` makes every property `readonly` (recursively, arrays become readonly tuples)
// and keeps literal types: `settings.theme` has the type `"dark"` instead of `string`.
// Note that this is only checked by TypeScript. At runtime, `Object.freeze` is needed
// to actually prevent changes.

const settings = {
  theme: "dark",
  fontSize: 14,
  plugins: ["git", "lint"],
} as const;

function tryToModify(): void {
  // @ts-expect-error Changing a property should be an error.
  settings.fontSize = 20;
  // @ts-expect-error Pushing to the array should be an error too.
  settings.plugins.push("ai");
}

console.log(`Theme: ${settings.theme}, font size: ${settings.fontSize}`);
console.log(typeof tryToModify);
