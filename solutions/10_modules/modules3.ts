// The default export can be given any name when importing it.
// `import largest, { type Planet, describe } from "./planets.ts";` would work too.
import largest, { describe } from "./planets.ts";
import type { Planet } from "./planets.ts";

const planets: Planet[] = [
  { name: "Earth", moons: 1 },
  { name: "Mars", moons: 2 },
  { name: "Jupiter", moons: 95 },
];

for (const planet of planets) {
  console.log(describe(planet));
}

console.log(`The planet with the most moons is ${largest(planets)?.name}.`);
