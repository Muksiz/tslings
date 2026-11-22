function callMe(num: number) {
  for (let i = 0; i < num; i++) {
    console.log(`Ring! Call number ${i + 1}`);
  }
}

// Unlike plain JavaScript, TypeScript checks that you pass every required argument.
callMe(5);
