// This is a quiz for the following sections:
// - Generics
// - Classes
// - Narrowing
//
// An imaginary magical school has a new report card generation system written
// in TypeScript! Currently, the system only supports creating report cards
// where the student's grade is represented numerically (e.g. 1.0 -> 5.5).
// However, the school also issues alphabetical grades (A+ -> F-) and needs to
// be able to print both types of report card!
//
// Make the necessary code changes in the class `ReportCard` to support
// alphabetical report cards in addition to numerical ones.

import { test } from "node:test";
import assert from "node:assert/strict";

// TODO: Adjust the class as described above.
class ReportCard {
  constructor(
    public grade: number,
    public studentName: string,
    public studentAge: number,
  ) {}

  // TODO: Numerical grades should be printed with one decimal (`toFixed`).
  print(): string {
    return `${this.studentName} (${this.studentAge}) - achieved a grade of ${this.grade}`;
  }
}

// Don't change the tests!
test("generate numeric report card", () => {
  const reportCard = new ReportCard(2, "Tom Wriggle", 12);
  assert.equal(reportCard.print(), "Tom Wriggle (12) - achieved a grade of 2.0");
});

test("generate alphabetic report card", () => {
  const reportCard = new ReportCard("A+", "Gary Plotter", 11);
  assert.equal(reportCard.print(), "Gary Plotter (11) - achieved a grade of A+");
});

test("only numbers and strings are grades", () => {
  // @ts-expect-error A boolean is not a grade.
  new ReportCard(true, "Nobody", 10);
});
