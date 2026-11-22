# Strings

Strings are immutable sequences of UTF-16 code units. String methods never change the
string, they return a new one.

*Template literals* use backticks and can embed expressions: `` `Hello, ${name}!` ``.
They can also span multiple lines.

A common surprise: `.length` counts UTF-16 code units, not characters. Many emoji and
some other characters take two code units.

## Further information

- [String on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [Template literals on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
