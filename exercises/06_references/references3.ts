// `const` prevents reassigning a variable, but the object it points to can still change.
//
// A `// @ts-expect-error` comment tells TypeScript that the next line *should* be a type error.
// If the line is fine, the comment itself becomes an error ("Unused '@ts-expect-error' directive").
//
// TODO: Make the type checker reject the modifications below by changing only the
// declaration of `settings`. Don't touch the lines with `@ts-expect-error`.
// Hint: `as const`

const settings = {
  theme: "dark",
  fontSize: 14,
  plugins: ["git", "lint"],
};

function tryToModify(): void {
  // @ts-expect-error Changing a property should be an error.
  settings.fontSize = 20;
  // @ts-expect-error Pushing to the array should be an error too.
  settings.plugins.push("ai");
}

console.log(`Theme: ${settings.theme}, font size: ${settings.fontSize}`);
console.log(typeof tryToModify);
