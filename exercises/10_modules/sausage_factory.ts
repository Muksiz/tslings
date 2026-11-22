// A helper module for modules1.
// TODO: Fix the type error in modules1.ts by changing something in this file.

// Don't let anybody outside of this module see this!
function getSecretRecipe(): string {
  return "Ginger";
}

function makeSausage(): string {
  getSecretRecipe();
  return "sausage!";
}
