// This is a quiz for the following sections:
// - Generics
// - Classes
// - Narrowing

import { test } from "node:test";
import assert from "node:assert/strict";

// A constrained generic keeps the exact grade type of each report card.
// (A simple union `grade: number | string` would also pass the tests.)
class ReportCard<G extends number | string> {
  constructor(
    public grade: G,
    public studentName: string,
    public studentAge: number,
  ) {}

  print(): string {
    const grade = typeof this.grade === "number" ? this.grade.toFixed(1) : this.grade;
    return `${this.studentName} (${this.studentAge}) - achieved a grade of ${grade}`;
  }
}

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
