const number = "T-H-R-E-E";
console.log(`Spell a number: ${number}`);

// Unlike some languages, TypeScript doesn't allow redeclaring (shadowing) a variable in the
// same scope. Use a new name, or move the declaration into a nested block `{ ... }`.
const digit = 3;
console.log(`Number plus two is: ${digit + 2}`);
