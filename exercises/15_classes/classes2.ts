import { test } from "node:test";
import assert from "node:assert/strict";

// TODO: Nobody outside the class should be able to change the balance directly,
// but reading it is fine. Store the balance in a JavaScript private field `#balance`
// and add a getter `get balance()` that returns it.
class BankAccount {
  constructor(public balance: number) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Deposits must be positive");
    this.balance += amount;
  }
}

// Don't change the tests!
test("deposit", () => {
  const account = new BankAccount(10);
  account.deposit(5);
  assert.equal(account.balance, 15);
});

test("balance can't be set from outside", () => {
  const account = new BankAccount(10);
  assert.throws(() => {
    // @ts-expect-error The balance is read-only from the outside.
    account.balance = 1_000_000;
  }, TypeError);
  assert.equal(account.balance, 10);
});
