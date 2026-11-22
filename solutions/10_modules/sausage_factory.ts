// A helper module for modules1.

// Don't let anybody outside of this module see this!
function getSecretRecipe(): string {
  return "Ginger";
}

export function makeSausage(): string {
  getSecretRecipe();
  return "sausage!";
}
