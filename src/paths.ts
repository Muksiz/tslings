import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import type { ExerciseInfo } from "./info.ts";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const EXERCISES_DIR = path.join(ROOT, "exercises");
export const SOLUTIONS_DIR = path.join(ROOT, "solutions");
export const CACHE_DIR = path.join(ROOT, ".tslings");
export const ORIGINALS_DIR = path.join(CACHE_DIR, "originals");
export const STATE_FILE = path.join(ROOT, ".tslings-state.json");

export function exercisePath(ex: ExerciseInfo): string {
  return path.join(EXERCISES_DIR, ex.dir, `${ex.name}.ts`);
}

export function solutionPath(ex: ExerciseInfo): string {
  return path.join(SOLUTIONS_DIR, ex.dir, `${ex.name}.ts`);
}

export function relative(p: string): string {
  return path.relative(ROOT, p);
}

export function fileUrl(p: string): string {
  return pathToFileURL(p).href;
}
