import { test } from "node:test";
import assert from "node:assert/strict";

interface Settings {
  volume?: number;
  username?: string;
}

// TODO: There are bugs when the volume is 0 or the username is "".
// Both are valid settings that should be kept. Only missing values get the defaults.
function withDefaults(settings: Settings): Required<Settings> {
  return {
    volume: settings.volume || 50,
    username: settings.username || "guest",
  };
}

// Don't change the tests!
test("fills in missing values", () => {
  assert.deepEqual(withDefaults({}), { volume: 50, username: "guest" });
});

test("keeps given values", () => {
  assert.deepEqual(withDefaults({ volume: 80, username: "ferris" }), { volume: 80, username: "ferris" });
});

test("keeps falsy values", () => {
  assert.deepEqual(withDefaults({ volume: 0, username: "" }), { volume: 0, username: "" });
});
