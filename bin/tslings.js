#!/usr/bin/env node
// Thin launcher: registers the tsx loader so the TypeScript sources in src/ can run directly.
import { register } from "tsx/esm/api";

register();
await import("../src/main.ts");
