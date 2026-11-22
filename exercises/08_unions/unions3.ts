import { test } from "node:test";
import assert from "node:assert/strict";

interface Point {
  x: number;
  y: number;
}

type Message =
  | { type: "resize"; width: number; height: number }
  | { type: "move"; point: Point }
  | { type: "echo"; text: string }
  | { type: "changeColor"; color: [number, number, number] }
  | { type: "quit" };

// If this function is ever called, it means a case was forgotten. Because its parameter
// has the type `never`, calling it with anything that could still be a real value is a type error.
function assertNever(value: never): never {
  throw new Error(`Unhandled value: ${JSON.stringify(value)}`);
}

class State {
  width = 0;
  height = 0;
  position: Point = { x: 0, y: 0 };
  message = "hello world";
  color: [number, number, number] = [0, 0, 0];
  quit = false;

  process(message: Message): void {
    // TODO: Handle the remaining message types by updating the state.
    switch (message.type) {
      case "resize":
        this.width = message.width;
        this.height = message.height;
        break;
      default:
        assertNever(message);
    }
  }
}

// Don't change the tests!
test("match message calls", () => {
  const state = new State();
  state.process({ type: "resize", width: 10, height: 30 });
  state.process({ type: "move", point: { x: 10, y: 15 } });
  state.process({ type: "echo", text: "Hello world!" });
  state.process({ type: "changeColor", color: [255, 0, 255] });
  state.process({ type: "quit" });

  assert.equal(state.width, 10);
  assert.equal(state.height, 30);
  assert.deepEqual(state.position, { x: 10, y: 15 });
  assert.equal(state.message, "Hello world!");
  assert.deepEqual(state.color, [255, 0, 255]);
  assert.equal(state.quit, true);
});
