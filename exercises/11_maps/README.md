# Maps

There are two common ways to store key-value pairs:

- A plain object with an *index signature* or the `Record` utility type:
  `const ages: Record<string, number> = { ferris: 7 }`. Good for string keys known ahead of time.
- A `Map<K, V>`: keys can be of any type, insertion order is kept, and it has a `size`.
  `map.get(key)` returns `V | undefined`, because the key might not be there.

For a collection of unique values, there is `Set<T>`.

## Further information

- [Map on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [Set on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Index Signatures](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures)
- [Record<Keys, Type>](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)
