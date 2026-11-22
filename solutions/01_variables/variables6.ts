type Direction = "north" | "east" | "south" | "west";

function move(direction: Direction): void {
  console.log(`Moving ${direction}`);
}

// A `let` with a string value is widened to the type `string`, since it could be reassigned to
// any string later. A `const` keeps the literal type `"north"`, which is a valid `Direction`.
// Annotating the variable (`let heading: Direction = "north"`) also works.
const heading = "north";

move(heading);
