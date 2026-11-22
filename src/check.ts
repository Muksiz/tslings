import { spawn } from "node:child_process";
import fs from "node:fs";
import { createRequire } from "node:module";
import os from "node:os";
import path from "node:path";
import type { ExerciseInfo } from "./info.ts";
import { CACHE_DIR, ROOT, exercisePath, solutionPath } from "./paths.ts";

const require = createRequire(import.meta.url);
const TSC = path.join(path.dirname(require.resolve("typescript/package.json")), "bin", "tsc");
const RUN_TIMEOUT_MS = 15_000;

export type Stage = "typecheck" | "run" | "done";

export interface CheckResult {
  ok: boolean;
  /** The stage that failed, or "done" if everything passed. */
  stage: Stage;
  output: string;
}

interface ProcResult {
  code: number | null;
  output: string;
  timedOut: boolean;
}

function runProcess(args: string[], color: boolean): Promise<ProcResult> {
  return new Promise((resolve) => {
    const env: NodeJS.ProcessEnv = { ...process.env, NODE_NO_WARNINGS: "1" };
    if (color) env.FORCE_COLOR = "1";
    else env.NO_COLOR = "1";
    delete env.NODE_TEST_CONTEXT;

    const child = spawn(process.execPath, args, { cwd: ROOT, env, stdio: ["ignore", "pipe", "pipe"] });
    let output = "";
    child.stdout.on("data", (d: Buffer) => (output += d.toString()));
    child.stderr.on("data", (d: Buffer) => (output += d.toString()));

    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      child.kill("SIGKILL");
    }, RUN_TIMEOUT_MS);

    child.on("close", (code) => {
      clearTimeout(timer);
      resolve({ code, output, timedOut });
    });
  });
}

/** Type-checks a single file using the project's tsconfig plus the exercise's extra options. */
async function typecheck(ex: ExerciseInfo, file: string, color: boolean): Promise<ProcResult> {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  const configPath = path.join(CACHE_DIR, `tsconfig.${path.basename(path.dirname(path.dirname(file)))}.${ex.name}.json`);
  const config = {
    extends: "../tsconfig.json",
    compilerOptions: { ...ex.compilerOptions, noEmit: true },
    files: [path.relative(CACHE_DIR, file)],
    include: [],
  };
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  return runProcess([TSC, "-p", configPath, "--pretty", String(color)], color);
}

function execute(ex: ExerciseInfo, file: string, color: boolean): Promise<ProcResult> {
  const args = ["--import", "tsx"];
  if (ex.test) args.push("--test", "--test-reporter=spec");
  args.push(path.relative(ROOT, file));
  return runProcess(args, color);
}

export async function checkExercise(
  ex: ExerciseInfo,
  opts: { solution?: boolean; color?: boolean } = {},
): Promise<CheckResult> {
  const file = opts.solution ? solutionPath(ex) : exercisePath(ex);
  const color = opts.color ?? Boolean(process.stdout.isTTY);

  if (!fs.existsSync(file)) {
    return { ok: false, stage: "typecheck", output: `File not found: ${path.relative(ROOT, file)}\n` };
  }

  const tc = await typecheck(ex, file, color);
  if (tc.code !== 0) {
    return { ok: false, stage: "typecheck", output: tc.output || "Type checking failed.\n" };
  }

  const run = await execute(ex, file, color);
  if (run.timedOut) {
    return {
      ok: false,
      stage: "run",
      output: run.output + `\nThe exercise took longer than ${RUN_TIMEOUT_MS / 1000}s and was stopped.\n`,
    };
  }
  return { ok: run.code === 0, stage: run.code === 0 ? "done" : "run", output: cleanOutput(run.output) };
}

/** Drops stack frames from Node's internals, which are noise for learners. */
function cleanOutput(output: string): string {
  return output
    .split("\n")
    .filter((line) => !/^\s+at (?:.* \()?node:[^)]*\)?(?: \{)?$/.test(line.replace(/\x1b\[[0-9;]*m/g, "")))
    .join("\n");
}

/** Runs `fn` over `items` with limited concurrency, preserving result order. */
export async function mapConcurrent<T, R>(
  items: readonly T[],
  fn: (item: T, index: number) => Promise<R>,
  limit = Math.max(1, Math.min(8, os.availableParallelism())),
): Promise<R[]> {
  const results = new Array<R>(items.length);
  let next = 0;
  async function worker(): Promise<void> {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i]!, i);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}
