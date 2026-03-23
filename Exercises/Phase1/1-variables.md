# Variables, Data Types & Type Conversion

## Variables

JavaScript has three ways to declare variables:

```javascript
var name = 'John';     // Old way, function-scoped, can be redeclared
let age = 25;          // Modern, block-scoped, can be reassigned
const city = 'NYC';    // Modern, block-scoped, cannot be reassigned
```

**Key differences:**
- `var` is function-scoped, `let` and `const` are block-scoped
- `var` can be redeclared, `let` and `const` cannot
- `const` must be initialized when declared
- All three are hoisted, but `var` is initialized with `undefined`

```javascript
// var hoisting example
console.log(hoisted);  // undefined (not error)
var hoisted = 'I exist';

// let/const temporal dead zone
// console.log(notHoisted);  // ReferenceError
let notHoisted = 'I exist';
```

## Data Types

JavaScript has 7 primitive types and 1 complex type:

```javascript
// Primitives
let string = "Hello";           // String
let number = 42;                // Number
let decimal = 3.14;             // Number (no separate float type)
let bigInt = 9007199254740991n; // BigInt
let boolean = true;              // Boolean
let nothing = null;              // Null (special primitive)
let notDefined = undefined;      // Undefined
let symbol = Symbol('id');       // Symbol

// Complex
let array = [1, 2, 3];          // Array (special object)
let object = { key: 'value' };  // Object
let func = function() {};       // Function (special object)
```

## Checking Types with `typeof`

```javascript
typeof "hello"        // "string"
typeof 42             // "number"
typeof 3.14            // "number"
typeof 42n             // "bigint"
typeof true            // "boolean"
typeof null            // "object" (famous bug!)
typeof undefined       // "undefined"
typeof Symbol('id')    // "symbol"
typeof {}              // "object"
typeof []              // "object"
typeof function() {}   // "function"
```

**Note:** `typeof null === "object"` is a known JavaScript bug since the beginning.

## Type Conversion

### To String
```javascript
String(123)           // "123"
(123).toString()       // "123"
123 + ""               // "123"
String(true)           // "true"
```

### To Number
```javascript
Number("123")          // 123
Number("hello")        // NaN (Not a Number)
Number("")              // 0
Number(true)            // 1
Number(false)           // 0
Number(null)            // 0
Number(undefined)       // NaN

parseInt("123")         // 123 (integer only)
parseInt("3.14")        // 3
parseFloat("3.14")      // 3.14
+"123"                  // 123 (unary plus)
```

### To Boolean
```javascript
Boolean(1)              // true
Boolean(0)              // false
Boolean("")             // false
Boolean("hello")        // true
Boolean(null)           // false
Boolean(undefined)      // false
Boolean({})             // true
Boolean([])             // true

!!"hello"               // true (double negation)
```

**Falsy values:** `false`, `0`, `""`, `null`, `undefined`, `NaN`
**Everything else is truthy.**

### Implicit Coercion
JavaScript automatically converts types in certain operations:

```javascript
"5" + 3        // "53" (number to string)
"5" - 3        // 2 (string to number)
"5" * "2"      // 10 (both to numbers)
"hello" - 1    // NaN

true + 1        // 2
false + 1       // 1
```
