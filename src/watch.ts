import fs from "node:fs";
import readline from "node:readline";
import { checkExercise, mapConcurrent, type CheckResult } from "./check.ts";
import { exercises, FINAL_MESSAGE, type ExerciseInfo } from "./info.ts";
import { EXERCISES_DIR, exercisePath, fileUrl, relative, solutionPath } from "./paths.ts";
import { resetExercise } from "./reset.ts";
import type { State } from "./state.ts";
import { blue, bold, clearScreen, cyan, dim, green, inverse, link, progressBar, red, yellow } from "./term.ts";

type View = "exercise" | "list" | "finished";

export class WatchMode {
  private view: View = "exercise";
  private result: CheckResult | undefined;
  private generation = 0;
  private showHint = false;
  private message = "";
  private confirmReset: ExerciseInfo | undefined;
  private listCursor = 0;
  private busy = false;
  private debounce: NodeJS.Timeout | undefined;
  private watcher: fs.FSWatcher | undefined;

  constructor(
    private readonly state: State,
    private readonly options: { manualRun?: boolean } = {},
  ) {}

  start(): void {
    const stdin = process.stdin;
    readline.emitKeypressEvents(stdin);
    stdin.setRawMode(true);
    stdin.resume();
    stdin.on("keypress", (str: string | undefined, key: readline.Key | undefined) => {
      void this.onKey(str ?? "", key ?? {});
    });
    process.stdout.on("resize", () => this.render());

    if (!this.options.manualRun) {
      this.watcher = fs.watch(EXERCISES_DIR, { recursive: true }, (_event, filename) => {
        if (!filename || !filename.toString().endsWith(".ts")) return;
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
          if (this.view === "exercise") void this.check();
        }, 100);
      });
    }

    void this.check();
  }

  private quit(): never {
    this.watcher?.close();
    process.stdin.setRawMode(false);
    clearScreen();
    console.log("We hope you're enjoying learning TypeScript!");
    console.log(`If you want to continue working on the exercises at a later point, run ${bold("npm start")} again.`);
    process.exit(0);
  }

  private async check(): Promise<void> {
    const ex = this.state.current;
    const gen = ++this.generation;
    this.result = undefined;
    this.render();
    const result = await checkExercise(ex);
    if (gen !== this.generation) return; // A newer check superseded this one.
    this.result = result;
    if (result.ok !== this.state.isDone(ex)) this.state.markDone(ex, result.ok);
    this.render();
  }

  private async onKey(str: string, key: readline.Key): Promise<void> {
    if (key.ctrl && key.name === "c") this.quit();
    if (this.busy) return;

    if (this.confirmReset) {
      const ex = this.confirmReset;
      this.confirmReset = undefined;
      if (str === "y") {
        try {
          resetExercise(ex);
          this.message = green(`Reset ${relative(exercisePath(ex))}`);
        } catch (err) {
          this.message = red(err instanceof Error ? err.message : String(err));
        }
        if (this.view === "exercise" && ex === this.state.current) return this.check();
      } else {
        this.message = "Reset cancelled.";
      }
      return this.render();
    }

    if (this.view === "list") return this.onListKey(str, key);
    if (this.view === "finished") {
      if (str === "q") this.quit();
      if (str === "l") return this.openList();
      return;
    }

    this.message = "";
    switch (str) {
      case "q":
        this.quit();
      case "h":
        this.showHint = !this.showHint;
        return this.render();
      case "r":
        return this.check();
      case "l":
        return this.openList();
      case "c":
        return this.checkAll();
      case "x":
        this.confirmReset = this.state.current;
        return this.render();
      case "n":
        return this.next();
    }
  }

  private async next(): Promise<void> {
    if (!this.result?.ok) {
      this.message = yellow("The current exercise isn't done yet. Fix it first, or pick another one from the list (l).");
      return this.render();
    }
    const upcoming = this.state.nextPending();
    if (!upcoming) {
      this.view = "finished";
      return this.render();
    }
    this.goTo(upcoming);
  }

  private goTo(ex: ExerciseInfo): void {
    this.state.setCurrent(ex);
    this.showHint = false;
    this.view = "exercise";
    void this.check();
  }

  private async checkAll(): Promise<void> {
    this.busy = true;
    let finished = 0;
    const draw = () => {
      clearScreen();
      console.log(`Checking all exercises... ${finished}/${exercises.length}`);
    };
    draw();
    const results = await mapConcurrent(exercises, async (ex) => {
      const r = await checkExercise(ex, { color: false });
      finished++;
      draw();
      return r.ok;
    });
    exercises.forEach((ex, i) => this.state.done[results[i] ? "add" : "delete"](ex.name));
    this.state.save();
    this.busy = false;

    const pending = exercises.find((ex) => !this.state.isDone(ex));
    if (!pending) {
      this.view = "finished";
      return this.render();
    }
    this.message = `${this.state.doneCount}/${exercises.length} exercises pass. Continuing with the first unfinished one.`;
    this.goTo(pending);
  }

  // ---- list view ----------------------------------------------------------------------------

  private openList(): void {
    this.view = "list";
    this.listCursor = exercises.indexOf(this.state.current);
    this.render();
  }

  private async onListKey(str: string, key: readline.Key): Promise<void> {
    this.message = "";
    const last = exercises.length - 1;
    if (str === "j" || key.name === "down") this.listCursor = Math.min(last, this.listCursor + 1);
    else if (str === "k" || key.name === "up") this.listCursor = Math.max(0, this.listCursor - 1);
    else if (key.name === "pagedown") this.listCursor = Math.min(last, this.listCursor + this.listHeight());
    else if (key.name === "pageup") this.listCursor = Math.max(0, this.listCursor - this.listHeight());
    else if (str === "g" || key.name === "home") this.listCursor = 0;
    else if (str === "G" || key.name === "end") this.listCursor = last;
    else if (str === "c" || key.name === "return") return this.goTo(exercises[this.listCursor]!);
    else if (str === "x") this.confirmReset = exercises[this.listCursor];
    else if (str === "q" || str === "l" || key.name === "escape") {
      this.view = "exercise";
    }
    this.render();
  }

  private listHeight(): number {
    return Math.max(5, (process.stdout.rows || 30) - 6);
  }

  private renderList(): string[] {
    const lines: string[] = [];
    const height = this.listHeight();
    const top = Math.min(Math.max(0, this.listCursor - Math.floor(height / 2)), Math.max(0, exercises.length - height));
    const nameWidth = Math.max(...exercises.map((e) => e.name.length));
    lines.push(bold(`  ${"Current".padEnd(9)}${"State".padEnd(9)}${"Name".padEnd(nameWidth + 2)}Path`));
    for (let i = top; i < Math.min(exercises.length, top + height); i++) {
      const ex = exercises[i]!;
      const current = ex === this.state.current ? ">>>>>>>  " : "         ";
      const st = this.state.isDone(ex) ? green("DONE".padEnd(9)) : yellow("PENDING".padEnd(9));
      const row = `${current}${st}${ex.name.padEnd(nameWidth + 2)}${relative(exercisePath(ex))}`;
      lines.push(i === this.listCursor ? inverse(`> ${row}`) : `  ${row}`);
    }
    lines.push("");
    lines.push(progressBar(this.state.doneCount, exercises.length));
    lines.push(dim("↓/j ↑/k: move  g/G: first/last  c/enter: continue at this exercise  x: reset  l/q/esc: back"));
    return lines;
  }

  // ---- rendering --------------------------------------------------------------------------------

  private render(): void {
    clearScreen();
    const out: string[] = [];

    if (this.view === "list") {
      out.push(...this.renderList());
    } else if (this.view === "finished") {
      out.push(FINAL_MESSAGE, "", progressBar(this.state.doneCount, exercises.length), "", dim("l: list / q: quit"));
    } else {
      out.push(...this.renderExercise());
    }

    if (this.message) out.push("", this.message);
    if (this.confirmReset) {
      out.push("", yellow(`Reset ${relative(exercisePath(this.confirmReset))} to its original state? Your changes will be lost. (y/n)`));
    }
    process.stdout.write(out.join("\n") + "\n");
  }

  private renderExercise(): string[] {
    const ex = this.state.current;
    const out: string[] = [];
    const r = this.result;

    if (!r) {
      out.push(dim("Checking..."));
    } else {
      if (r.output.trim()) out.push(r.output.trimEnd(), "");
      if (r.ok) {
        out.push(green(bold("✓ Exercise done")));
        const sol = solutionPath(ex);
        if (fs.existsSync(sol)) out.push(`Solution for comparison: ${link(relative(sol), fileUrl(sol))}`);
        out.push(`When done experimenting, enter ${bold("n")} to move on to the next exercise.`);
      } else if (r.stage === "typecheck") {
        out.push(red(bold("✗ The exercise has type errors.")) + " Fix them to continue.");
      } else {
        out.push(red(bold("✗ The exercise failed when run.")) + " See the output above.");
      }
    }

    if (this.showHint) out.push("", cyan(bold("Hint")), ex.hint.trim());

    out.push("");
    out.push(progressBar(this.state.doneCount, exercises.length));
    const file = exercisePath(ex);
    out.push(`Current exercise: ${blue(link(relative(file), fileUrl(file)))}`);
    out.push("");
    const run = this.options.manualRun ? bold("r") + ":run" : "r:rerun";
    const keys = [r?.ok ? bold("n") + ":next" : "", run, "h:hint", "l:list", "c:check all", "x:reset", "q:quit"];
    out.push(keys.filter(Boolean).join(" / "));
    return out;
  }
}
