import { test } from "node:test";
import assert from "node:assert/strict";

interface Settings {
  volume?: number;
  username?: string;
}

// `||` treats `0` and `""` like missing values. `??` only replaces `null` and `undefined`.
function withDefaults(settings: Settings): Required<Settings> {
  return {
    volume: settings.volume ?? 50,
    username: settings.username ?? "guest",
  };
}

test("fills in missing values", () => {
  assert.deepEqual(withDefaults({}), { volume: 50, username: "guest" });
});

test("keeps given values", () => {
  assert.deepEqual(withDefaults({ volume: 80, username: "ferris" }), { volume: 80, username: "ferris" });
});

test("keeps falsy values", () => {
  assert.deepEqual(withDefaults({ volume: 0, username: "" }), { volume: 0, username: "" });
});
