import fs from "node:fs";
import path from "node:path";
import type { ExerciseInfo } from "./info.ts";
import { EXERCISES_DIR, ORIGINALS_DIR, exercisePath } from "./paths.ts";

/** Takes a pristine copy of the exercises the first time tslings runs, so they can be reset later. */
export function snapshotOriginals(): void {
  if (fs.existsSync(ORIGINALS_DIR)) return;
  fs.cpSync(EXERCISES_DIR, ORIGINALS_DIR, { recursive: true });
}

/** Restores an exercise (and any helper files in its directory) to how it was on first run. */
export function resetExercise(ex: ExerciseInfo): string {
  const original = path.join(ORIGINALS_DIR, ex.dir, `${ex.name}.ts`);
  if (!fs.existsSync(original)) {
    throw new Error(`No original copy of ${ex.name} found (expected ${original}).`);
  }
  fs.copyFileSync(original, exercisePath(ex));
  for (const extra of ex.extraFiles ?? []) {
    const from = path.join(ORIGINALS_DIR, ex.dir, extra);
    if (fs.existsSync(from)) fs.copyFileSync(from, path.join(EXERCISES_DIR, ex.dir, extra));
  }
  return exercisePath(ex);
}
