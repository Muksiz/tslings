# Classes

Classes bundle data and behavior. TypeScript adds a few things on top of JavaScript classes:

- Property declarations with types, which must be initialized (`strictPropertyInitialization`).
- Access modifiers: `public` (default), `protected` and `private`. These are only checked at
  compile time. JavaScript's own `#private` fields are private at runtime too.
- *Parameter properties*: `constructor(private name: string) {}` declares and assigns a property.
- `implements` checks that a class fits an interface (similar to implementing a trait).
- `abstract` classes and methods, which subclasses must implement.

Remember that typing is structural: any object with the right shape fits an interface,
whether it comes from a class or not.

## Further information

- [Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [Private class features on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties)
