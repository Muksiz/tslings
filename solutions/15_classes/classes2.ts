import { test } from "node:test";
import assert from "node:assert/strict";

// A getter without a setter makes the property read-only from the outside.
// Assigning to it is a type error, and in strict mode (which ES modules always use) a TypeError at runtime.
// `#balance` is private at runtime too: it can't be accessed even with `any` tricks.
// (`private _balance` would also work, but is only enforced by the type checker.)
class BankAccount {
  #balance: number;

  constructor(balance: number) {
    this.#balance = balance;
  }

  get balance(): number {
    return this.#balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Deposits must be positive");
    this.#balance += amount;
  }
}

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
