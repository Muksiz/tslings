import { test } from "node:test";
import assert from "node:assert/strict";

// A list of scores (one per line) of a soccer match is given. Each line is of the
// form "<team_1_name>,<team_2_name>,<team_1_goals>,<team_2_goals>"
// Example: "England,France,4,2" (England scored 4 goals, France 2).
//
// You have to build a scores table containing the name of the team, the total
// number of goals the team scored, and the total number of goals the team conceded.

interface TeamScores {
  goalsScored: number;
  goalsConceded: number;
}

function buildScoresTable(results: string): Map<string, TeamScores> {
  const scores = new Map<string, TeamScores>();

  for (const line of results.trim().split("\n")) {
    const [team1, team2, goals1, goals2] = line.split(",");
    // TODO: Populate the scores table with the extracted details.
    // Keep in mind that goals scored by team 1 will be the number of goals
    // conceded by team 2. Similarly, goals scored by team 2 will be the
    // number of goals conceded by team 1.
  }

  return scores;
}

// TODO: Return the names of all teams that appear in the results, without duplicates,
// sorted alphabetically. Use a `Set`.
function teamNames(results: string): string[] {
  return [];
}

// Don't change the tests!
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
