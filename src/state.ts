import fs from "node:fs";
import { exercises, type ExerciseInfo } from "./info.ts";
import { STATE_FILE } from "./paths.ts";

interface StateFile {
  current: string;
  done: string[];
}

export class State {
  current: ExerciseInfo;
  done: Set<string>;

  private constructor(current: ExerciseInfo, done: Set<string>) {
    this.current = current;
    this.done = done;
  }

  static load(): State {
    const first = exercises[0]!;
    let raw: Partial<StateFile> = {};
    try {
      raw = JSON.parse(fs.readFileSync(STATE_FILE, "utf8")) as Partial<StateFile>;
    } catch {
      // No state yet (or it is corrupt): start from the beginning.
    }
    const known = new Set(exercises.map((e) => e.name));
    const done = new Set((raw.done ?? []).filter((n) => known.has(n)));
    const current = exercises.find((e) => e.name === raw.current) ?? first;
    return new State(current, done);
  }

  static exists(): boolean {
    return fs.existsSync(STATE_FILE);
  }

  save(): void {
    const data: StateFile = {
      current: this.current.name,
      done: exercises.filter((e) => this.done.has(e.name)).map((e) => e.name),
    };
    fs.writeFileSync(STATE_FILE, JSON.stringify(data, null, 2) + "\n");
  }

  get doneCount(): number {
    return this.done.size;
  }

  isDone(ex: ExerciseInfo): boolean {
    return this.done.has(ex.name);
  }

  markDone(ex: ExerciseInfo, done = true): void {
    if (done) this.done.add(ex.name);
    else this.done.delete(ex.name);
    this.save();
  }

  setCurrent(ex: ExerciseInfo): void {
    this.current = ex;
    this.save();
  }

  /** The first unfinished exercise after the current one (wrapping around), or undefined if all are done. */
  nextPending(): ExerciseInfo | undefined {
    const start = exercises.indexOf(this.current);
    for (let i = 1; i <= exercises.length; i++) {
      const ex = exercises[(start + i) % exercises.length]!;
      if (!this.done.has(ex.name)) return ex;
    }
    return undefined;
  }
}
