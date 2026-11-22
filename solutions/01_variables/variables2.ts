// The type checker tracks whether a variable has definitely been assigned before it is used.
const x: number = 42;

if (x === 10) {
  console.log("x is ten!");
} else {
  console.log("x is not ten!");
}
