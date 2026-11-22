import { test } from "node:test";
import assert from "node:assert/strict";

// `override` is required for `name` because of the `noImplicitOverride` option:
// it makes it explicit that this property replaces one from the parent class.
class InsufficientFundsError extends Error {
  override name = "InsufficientFundsError";

  constructor(readonly missing: number) {
    super(`Missing ${missing} tsbucks`);
  }
}

class Wallet {
  constructor(public balance: number) {}

  pay(amount: number): void {
    if (amount > this.balance) {
      throw new InsufficientFundsError(amount - this.balance);
    }
    this.balance -= amount;
  }
}

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
