# Tests

Node.js has a built-in test runner, `node:test`, and an assertion library, `node:assert`.
This is what all the tests in tslings use:

```ts
import { test } from "node:test";
import assert from "node:assert/strict";

test("addition", () => {
  assert.equal(1 + 1, 2);
});
```

`assert.equal` compares with `===`, so for arrays and objects you need `assert.deepEqual`.
Tests can be `async`, and `assert.throws`/`assert.rejects` check that code fails.

In this section, it's your turn to write the tests!

## Further information

- [node:test](https://nodejs.org/api/test.html)
- [node:assert](https://nodejs.org/api/assert.html)
