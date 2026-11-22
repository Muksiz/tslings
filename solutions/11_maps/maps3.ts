import { test } from "node:test";
import assert from "node:assert/strict";

interface TeamScores {
  goalsScored: number;
  goalsConceded: number;
}

function addScore(scores: Map<string, TeamScores>, team: string, scored: number, conceded: number): void {
  const entry = scores.get(team) ?? { goalsScored: 0, goalsConceded: 0 };
  entry.goalsScored += scored;
  entry.goalsConceded += conceded;
  scores.set(team, entry);
}

function buildScoresTable(results: string): Map<string, TeamScores> {
  const scores = new Map<string, TeamScores>();

  for (const line of results.trim().split("\n")) {
    const [team1, team2, goals1, goals2] = line.split(",");
    // Destructured array elements have the type `string` (not `string | undefined`)
    // unless `noUncheckedIndexedAccess` is on, so we trust the input format here.
    addScore(scores, team1, Number(goals1), Number(goals2));
    addScore(scores, team2, Number(goals2), Number(goals1));
  }

  return scores;
}

function teamNames(results: string): string[] {
  const names = new Set<string>();
  for (const line of results.trim().split("\n")) {
    const [team1, team2] = line.split(",");
    names.add(team1);
    names.add(team2);
  }
  return [...names].sort();
}

const RESULTS = `
England,France,4,2
France,Italy,3,1
Poland,Spain,2,0
Germany,England,2,1
England,Spain,1,0
`;

test("build scores", () => {
  const scores = buildScoresTable(RESULTS);
  assert.deepEqual([...scores.keys()].sort(), ["England", "France", "Germany", "Italy", "Poland", "Spain"]);
});

test("validate team score", () => {
  const scores = buildScoresTable(RESULTS);
  assert.deepEqual(scores.get("England"), { goalsScored: 6, goalsConceded: 4 });
  assert.deepEqual(scores.get("Spain"), { goalsScored: 0, goalsConceded: 3 });
});

test("team names", () => {
  assert.deepEqual(teamNames(RESULTS), ["England", "France", "Germany", "Italy", "Poland", "Spain"]);
});
