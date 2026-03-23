# ES6+ Features

## Let & Const

```javascript
// const - cannot be reassigned
const PI = 3.14159;
const arr = [1, 2, 3];
arr.push(4);  // Allowed! (modifying contents, not reassigning)

// let - can be reassigned
let count = 0;
count = 1;

// Block scoping
if (true) {
  let blockVar = 'scoped';
  const alsoBlock = 'scoped';
}
console.log(blockVar);  // ReferenceError
```

## Destructuring

### Array Destructuring
```javascript
const [a, b, c] = [1, 2, 3];
console.log(a, b, c);  // 1, 2, 3

// Skip elements
const [first, , third] = [1, 2, 3];
console.log(first, third);  // 1, 3

// Rest pattern
const [head, ...tail] = [1, 2, 3, 4];
console.log(head);  // 1
console.log(tail);  // [2, 3, 4]

// Default values
const [x = 0, y = 0] = [1];
console.log(x, y);  // 1, 0

// Swapping variables
let a = 1, b = 2;
[a, b] = [b, a];
```

### Object Destructuring
```javascript
const { name, age } = { name: 'John', age: 30 };

// Rename
const { name: userName } = { name: 'John' };

// Default values
const { role = 'user' } = { name: 'John' };

// Nested
const { address: { city } } = { address: { city: 'NYC' } };

// Rest in objects
const { name, ...rest } = { name: 'John', age: 30, city: 'NYC' };
```

### Function Parameters
```javascript
function greet({ name, greeting = 'Hello' }) {
  return `${greeting}, ${name}!`;
}

greet({ name: 'John' });  // 'Hello, John!'
greet({ name: 'John', greeting: 'Hi' });  // 'Hi, John!'

// Array params
function sum([a, b, c]) {
  return a + b + c;
}

sum([1, 2, 3]);  // 6
```

## Spread Operator

### Array Spread
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Merge
const merged = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]

// Copy
const copy = [...arr1];

// Add elements
const withExtra = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]

// String to array
const chars = [...'hello'];  // ['h', 'e', 'l', 'l', 'o']
```

### Object Spread
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Merge
const merged = { ...obj1, ...obj2 };  // { a: 1, b: 2, c: 3, d: 4 }

// Copy
const copy = { ...obj1 };

// Override
const updated = { ...obj1, b: 10 };  // { a: 1, b: 10 }

// Add
const added = { ...obj1, c: 3 };  // { a: 1, b: 2, c: 3 }
```

### Function Arguments
```javascript
const nums = [1, 2, 3];
Math.max(...nums);  // 3 (same as Math.max(1, 2, 3))

// Multiple spreads
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(...arr1, ...arr2);  // 1 2 3 4
```

## Rest Parameters

```javascript
// Collect remaining arguments
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4);  // 10

// With regular params
function greet(name, ...greetings) {
  return greetings.map(g => `${g}, ${name}!`);
}

greet('John', 'Hello', 'Hi', 'Hey');
// ['Hello, John!', 'Hi, John!', 'Hey, John!']
```

## Template Literals

```javascript
const name = 'John';
const age = 30;

// Interpolation
`My name is ${name} and I'm ${age}`;

// Expressions
`2 + 2 = ${2 + 2}`;

// Multi-line
const html = `
  <div>
    <h1>${name}</h1>
    <p>Age: ${age}</p>
  </div>
`;

// Nested templates
const isAdult = age >= 18 ? 'adult' : 'minor';
console.log(`${name} is an ${`${isAdult}`}`);

// Functions in templates
const capitalize = str => str.toUpperCase();
`${capitalize('hello')}`;  // 'HELLO'
```

## Enhanced Object Literals

```javascript
const name = 'John';

// Property shorthand
const user = { name };  // Same as { name: name }

// Method shorthand
const calculator = {
  value: 0,
  add(n) { this.value += n; },
  subtract(n) { this.value -= n; }
};

// Computed property names
const key = 'dynamicKey';
const obj = { [key]: 'value' };

// Getter/Setter
const person = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() { return `${this.firstName} ${this.lastName}`; },
  set fullName(name) { [this.firstName, this.lastName] = name.split(' '); }
};
```

## Optional Chaining

```javascript
const user = { address: { city: 'NYC' } };

// Old way
const city = user && user.address && user.address.city;

// New way
const city = user?.address?.city;  // 'NYC'
const zip = user?.address?.zipCode;  // undefined (no error!)

// With methods
user.getName?.();  // Calls if exists, undefined otherwise

// With arrays
users?.[0]?.name;  // Safe array access
```

## Nullish Coalescing

```javascript
// ?? returns right side only if left is null or undefined
// || returns right side for any falsy value

const x = null ?? 'default';     // 'default'
const y = undefined ?? 'default'; // 'default'
const z = 0 ?? 'default';        // 0
const w = '' ?? 'default';       // ''
const v = false ?? 'default';   // false

// vs ||
const a = 0 || 'default';       // 'default'
const b = '' || 'default';      // 'default'
const c = false || 'default';   // 'default'
```

## Classes (ES6)

```javascript
class Person {
  #privateField = 0;  // Private field
  
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return `Hello, I'm ${this.name}`;
  }
  
  static create(name) {
    return new Person(name, 0);
  }
  
  get info() {
    return `${this.name}, ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  
  greet() {
    return `${super.greet()} (Grade: ${this.grade})`;
  }
}
```

## Modules

```javascript
// named exports
export const PI = 3.14159;
export function add(a, b) { return a + b; }

// default export
export default class Calculator { }

// import
import { PI, add } from './math.js';
import Calculator from './calculator.js';
import * as math from './math.js';

// dynamic import
const module = await import('./module.js');
```
