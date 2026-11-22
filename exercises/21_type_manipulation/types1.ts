import type { Equal, Expect } from "../../helpers/type-assert.ts";

const COLORS = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
};

// TODO: Make the type checker derive these types from `COLORS` and `ROLES`.
// You will need `keyof`, `typeof` and `as const`.

// The names of the colors: "red" | "green" | "blue"
type ColorName = string;

// The hex codes: "#ff0000" | "#00ff00" | "#0000ff"
type HexCode = string;

const ROLES = ["admin", "editor", "viewer"];

// "admin" | "editor" | "viewer"
type Role = (typeof ROLES)[number];

// Don't change the type tests!
type _tests = [
  Expect<Equal<ColorName, "red" | "green" | "blue">>,
  Expect<Equal<HexCode, "#ff0000" | "#00ff00" | "#0000ff">>,
  Expect<Equal<Role, "admin" | "editor" | "viewer">>,
];
