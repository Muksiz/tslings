type Direction = "north" | "east" | "south" | "west";

function move(direction: Direction): void {
  console.log(`Moving ${direction}`);
}

// TODO: Fix the type error by changing only the declaration of `heading`.
let heading = "north";

move(heading);
