// `as` renames an import. `import * as name` imports the whole module as an object.
import { PEAR as fruit, CUCUMBER as veggie } from "./delicious_snacks.ts";
import * as snacks from "./delicious_snacks.ts";

console.log(`favorite snacks: ${fruit} and ${veggie}`);
console.log(`all snacks: ${Object.values(snacks).join(", ")}`);
