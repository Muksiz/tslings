import fs from "node:fs";
import path from "node:path";
import { checkExercise, mapConcurrent } from "./check.ts";
import { exercises, WELCOME_MESSAGE, type ExerciseInfo } from "./info.ts";
import { EXERCISES_DIR, exercisePath, relative, solutionPath } from "./paths.ts";
import { resetExercise, snapshotOriginals } from "./reset.ts";
import { State } from "./state.ts";
import { bold, green, progressBar, red, yellow } from "./term.ts";
import { WatchMode } from "./watch.ts";

const USAGE = `tslings: small exercises to get you used to reading and writing TypeScript.

Usage: npm start [-- <command>]      (or \`tslings <command>\` after \`npm link\`)

Commands:
  (none)          Start watch mode (recommended)
  run [name]      Check a single exercise (defaults to the current one)
  hint [name]     Show the hint for an exercise (defaults to the current one)
  list            List all exercises and whether they are done
  check-all       Check every exercise and update your progress
  reset <name>    Reset an exercise to its original state
  dev check       (for maintainers) Verify all solutions pass and all exercises fail
`;

function findExercise(name: string | undefined, state: State): ExerciseInfo {
  if (!name) return state.current;
  const ex = exercises.find((e) => e.name === name);
  if (!ex) {
    console.error(red(`Unknown exercise \`${name}\`. Run \`npm start -- list\` to see all exercises.`));
    process.exit(1);
  }
  return ex;
}

async function main(): Promise<void> {
  const [command, ...args] = process.argv.slice(2);
  const firstRun = !State.exists();
  snapshotOriginals();
  const state = State.load();

  switch (command) {
    case undefined:
    case "watch": {
      if (!process.stdin.isTTY || !process.stdout.isTTY) {
        console.error("Watch mode needs an interactive terminal. Use `npm start -- run` instead.");
        process.exit(1);
      }
      if (firstRun) {
        state.save();
        console.log(WELCOME_MESSAGE);
        console.log(bold("Press ENTER to start..."));
        await new Promise<void>((resolve) => process.stdin.once("data", () => resolve()));
      }
      new WatchMode(state).start();
      return;
    }

    case "run": {
      const ex = findExercise(args[0], state);
      const result = await checkExercise(ex);
      process.stdout.write(result.output);
      state.markDone(ex, result.ok);
      if (result.ok) {
        console.log(green(bold(`\n✓ ${ex.name} is done!`)));
        const next = state.nextPending();
        if (ex === state.current && next) {
          state.setCurrent(next);
          console.log(`Next exercise: ${relative(exercisePath(next))}`);
        }
      } else {
        console.log(red(bold(`\n✗ ${ex.name} isn't done yet.`)) + ` Run \`npm start -- hint ${ex.name}\` for a hint.`);
        process.exitCode = 1;
      }
      return;
    }

    case "hint": {
      const ex = findExercise(args[0], state);
      console.log(ex.hint.trim());
      return;
    }

    case "list": {
      const width = Math.max(...exercises.map((e) => e.name.length));
      for (const ex of exercises) {
        const mark = ex === state.current ? ">" : " ";
        const status = state.isDone(ex) ? green("DONE   ") : yellow("PENDING");
        console.log(`${mark} ${status}  ${ex.name.padEnd(width)}  ${relative(exercisePath(ex))}`);
      }
      console.log("\n" + progressBar(state.doneCount, exercises.length));
      return;
    }

    case "check-all": {
      const results = await mapConcurrent(exercises, (ex) => checkExercise(ex, { color: false }));
      exercises.forEach((ex, i) => state.done[results[i]!.ok ? "add" : "delete"](ex.name));
      state.save();
      const failing = exercises.filter((ex) => !state.isDone(ex));
      for (const ex of failing) console.log(`${yellow("PENDING")}  ${relative(exercisePath(ex))}`);
      console.log("\n" + progressBar(state.doneCount, exercises.length));
      if (failing[0]) state.setCurrent(failing[0]);
      process.exitCode = failing.length ? 1 : 0;
      return;
    }

    case "reset": {
      if (!args[0]) {
        console.error("Usage: npm start -- reset <exercise name>");
        process.exit(1);
      }
      const ex = findExercise(args[0], state);
      const file = resetExercise(ex);
      state.markDone(ex, false);
      console.log(`Reset ${relative(file)}`);
      return;
    }

    case "dev":
      if (args[0] === "check") return devCheck();
      break;

    case "help":
    case "--help":
    case "-h":
      console.log(USAGE);
      return;
  }

  console.error(USAGE);
  process.exitCode = 1;
}

/** Maintainer check: every solution must pass, every unsolved exercise must fail. */
async function devCheck(): Promise<void> {
  const problems: string[] = [];

  const names = new Set<string>();
  for (const ex of exercises) {
    if (names.has(ex.name)) problems.push(`Duplicate exercise name: ${ex.name}`);
    names.add(ex.name);
    if (!fs.existsSync(exercisePath(ex))) problems.push(`Missing exercise file: ${relative(exercisePath(ex))}`);
    if (!fs.existsSync(solutionPath(ex))) problems.push(`Missing solution file: ${relative(solutionPath(ex))}`);
    if (!ex.hint.trim()) problems.push(`Missing hint: ${ex.name}`);
  }

  // Every .ts file in exercises/ must be an exercise or a declared helper file.
  const declared = new Set(
    exercises.flatMap((ex) => [exercisePath(ex), ...(ex.extraFiles ?? []).map((f) => path.join(EXERCISES_DIR, ex.dir, f))]),
  );
  for (const file of fs.readdirSync(EXERCISES_DIR, { recursive: true, encoding: "utf8" })) {
    const full = path.join(EXERCISES_DIR, file);
    if (file.endsWith(".ts") && !declared.has(full)) problems.push(`Undeclared file: ${relative(full)}`);
  }

  let checked = 0;
  await mapConcurrent(exercises, async (ex) => {
    const sol = await checkExercise(ex, { solution: true, color: false });
    if (!sol.ok) problems.push(`Solution of ${ex.name} fails (${sol.stage}):\n${sol.output}`);
    if (!ex.skipCheckUnsolved) {
      const unsolved = await checkExercise(ex, { color: false });
      if (unsolved.ok) problems.push(`Exercise ${ex.name} already passes without changes.`);
    }
    checked++;
    process.stdout.write(`\rChecked ${checked}/${exercises.length}`);
  });
  console.log();

  if (problems.length) {
    for (const p of problems) console.log(red("✗ ") + p);
    process.exitCode = 1;
  } else {
    console.log(green(`✓ All ${exercises.length} exercises and solutions look good.`));
  }
}

await main();
