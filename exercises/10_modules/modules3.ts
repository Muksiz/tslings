// TODO: Fix the imports. `Planet` is only a type, so it needs a type-only import.
// `largest` is the default export of the module.
import { Planet, describe, largest } from "./planets.ts";

const planets: Planet[] = [
  { name: "Earth", moons: 1 },
  { name: "Mars", moons: 2 },
  { name: "Jupiter", moons: 95 },
];

for (const planet of planets) {
  console.log(describe(planet));
}

console.log(`The planet with the most moons is ${largest(planets)?.name}.`);
