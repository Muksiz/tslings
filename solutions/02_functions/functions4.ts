// This store is having a sale where if the price is an even number, you get 10
// Rustbucks off, but if it's an odd number, it's 3 Rustbucks off.

// A comparison like `===` produces a `boolean`.
function isEven(num: number): boolean {
  return num % 2 === 0;
}

function salePrice(price: number): number {
  if (isEven(price)) {
    return price - 10;
  } else {
    return price - 3;
  }
}

const originalPrice = 51;
console.log(`Your sale price is ${salePrice(originalPrice)}`);
