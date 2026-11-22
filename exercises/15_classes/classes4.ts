import { test } from "node:test";
import assert from "node:assert/strict";

abstract class Shape {
  abstract area(): number;

  describe(): string {
    return `A shape with area ${this.area().toFixed(2)}`;
  }
}

// TODO: Fix the type errors. `Circle` must implement `area`, and overriding a method
// requires the `override` keyword in this project (the `noImplicitOverride` option).
class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  describe(): string {
    return `A circle with area ${this.area().toFixed(2)}`;
  }
}

class Square extends Shape {
  constructor(public size: number) {
    super();
  }

  area(): number {
    return this.size ** 2;
  }
}

// Don't change the tests!
test("areas", () => {
  const shapes: Shape[] = [new Circle(1), new Square(2)];
  assert.deepEqual(
    shapes.map((s) => s.area().toFixed(2)),
    ["3.14", "4.00"],
  );
});

test("describe", () => {
  assert.equal(new Circle(1).describe(), "A circle with area 3.14");
  assert.equal(new Square(2).describe(), "A shape with area 4.00");
});

test("abstract classes can't be instantiated", () => {
  // @ts-expect-error Cannot create an instance of an abstract class.
  assert.throws(() => new Shape().area());
});
