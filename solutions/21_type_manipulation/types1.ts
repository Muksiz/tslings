import type { Equal, Expect } from "../../helpers/type-assert.ts";

// `as const` keeps the literal types of the values (instead of widening them to `string`).
const COLORS = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
} as const;

type ColorName = keyof typeof COLORS;

// Indexing with a union of keys gives the union of the value types.
type HexCode = (typeof COLORS)[ColorName];

// Without `as const`, `ROLES` is a `string[]`. With it, a `readonly ["admin", "editor", "viewer"]` tuple.
const ROLES = ["admin", "editor", "viewer"] as const;

// Indexing an array type with `number` gives the type of its elements.
type Role = (typeof ROLES)[number];

type _tests = [
  Expect<Equal<ColorName, "red" | "green" | "blue">>,
  Expect<Equal<HexCode, "#ff0000" | "#00ff00" | "#0000ff">>,
  Expect<Equal<Role, "admin" | "editor" | "viewer">>,
];
