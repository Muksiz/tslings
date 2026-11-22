# Async

JavaScript runs your code on a single thread. Instead of threads, it uses an *event loop*:
slow operations (timers, network, files) don't block, they return a **Promise** that
resolves later.

An `async` function always returns a `Promise<T>`, and inside it, `await` pauses until a
promise settles. TypeScript tracks this: a `Promise<number>` is not a `number`, so forgetting
an `await` is usually a type error.

To run several things concurrently, start them all and wait for them together with
`Promise.all` (fails as soon as one fails) or `Promise.allSettled` (waits for every result).

## Further information

- [Using promises on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [async function on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Promise.all on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
