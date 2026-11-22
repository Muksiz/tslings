import { test } from "node:test";
import assert from "node:assert/strict";

// TODO: Make `InsufficientFundsError` extend `Error`. Its constructor takes the
// missing amount, stores it in a `readonly missing` property, and passes the message
// `Missing ${missing} tsbucks` to the parent constructor. Also set `name` to the class name.
class InsufficientFundsError {}

// `constructor(public balance: number)` is a shorthand that declares and assigns the property
// `balance` in one go. More on classes later!
class Wallet {
  constructor(public balance: number) {}

  pay(amount: number): void {
    if (amount > this.balance) {
      // TODO: Throw an `InsufficientFundsError` instead.
      throw new Error("not enough money");
    }
    this.balance -= amount;
  }
}

// Don't change the tests!
test("pays", () => {
  const wallet = new Wallet(10);
  wallet.pay(4);
  assert.equal(wallet.balance, 6);
});

test("throws a custom error", () => {
  const wallet = new Wallet(10);
  assert.throws(() => wallet.pay(15), InsufficientFundsError);
  assert.equal(wallet.balance, 10);
});

test("the error has details", () => {
  try {
    new Wallet(1).pay(3);
    assert.fail("should have thrown");
  } catch (err) {
    assert.ok(err instanceof InsufficientFundsError);
    assert.ok(err instanceof Error);
    assert.equal(err.missing, 2);
    assert.equal(err.message, "Missing 2 tsbucks");
    assert.equal(err.name, "InsufficientFundsError");
  }
});
