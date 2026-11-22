// With `strict` mode, parameters without a type are an error ("implicitly has an 'any' type").
function callMe(num: number) {
  for (let i = 0; i < num; i++) {
    console.log(`Ring! Call number ${i + 1}`);
  }
}

callMe(3);
