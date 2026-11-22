// A helper module for modules3. Don't change this file.

export interface Planet {
  name: string;
  moons: number;
}

export function describe(planet: Planet): string {
  return `${planet.name} has ${planet.moons} moon${planet.moons === 1 ? "" : "s"}.`;
}

// A module can have one *default* export. It is imported without braces.
export default function largest(planets: Planet[]): Planet | undefined {
  return planets.toSorted((a, b) => b.moons - a.moons)[0];
}
