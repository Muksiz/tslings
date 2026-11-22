// Function declarations are "hoisted", so they can be called before the line where they are defined.
function callMe(): void {
  console.log("Hello world!");
}

callMe();
