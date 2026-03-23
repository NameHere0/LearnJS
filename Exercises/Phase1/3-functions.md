# Functions

## Function Declaration

```javascript
function greet(name) {
  return "Hello, " + name;
}
```

**Hoisted:** Can be called before they appear in code.

## Function Expression

```javascript
const greet = function(name) {
  return "Hello, " + name;
};
```

**Not hoisted:** Must be defined before calling.

## Arrow Functions

```javascript
// Basic arrow function
const greet = (name) => {
  return "Hello, " + name;
};

// Single parameter - parentheses optional
const greet = name => {
  return "Hello, " + name;
};

// Implicit return (no curly braces)
const greet = name => "Hello, " + name;

// Multiple parameters - parentheses required
const add = (a, b) => a + b;

// No parameters
const getTime = () => new Date().getHours();
```

**Arrow functions do not have their own `this` binding.**

## Default Parameters

```javascript
function greet(name = "World", greeting = "Hello") {
  return greeting + ", " + name + "!";
}

greet();                    // "Hello, World!"
greet("John");               // "Hello, John!"
greet("John", "Hi");         // "Hi, John!"
greet(undefined, "Hey");     // "Hey, World!"
```

## Rest Parameters

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3, 4, 5);  // 15
```

## Arguments Object

```javascript
function showArgs() {
  console.log(arguments);  // Array-like object
}

showArgs(1, 2, 3);  // [1, 2, 3] (not available in arrow functions)
```

## Return Values

```javascript
// Explicit return
function add(a, b) {
  return a + b;
}

// Implicit return (arrow functions only)
const add = (a, b) => a + b;

// Returning objects (use parentheses)
const createUser = (name, age) => ({ name, age });

// Multiple values - return array or object
function getStats(numbers) {
  return { min: Math.min(...numbers), max: Math.max(...numbers) };
}
```

## Recursion

A function that calls itself:

```javascript
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

factorial(5);  // 120
```

## Higher-Order Functions

Functions that take or return other functions:

```javascript
function applyTwice(fn, x) {
  return fn(fn(x));
}

const addTen = x => x + 10;
applyTwice(addTen, 5);  // 25
```

## Closures

Functions that remember their outer scope variables:

```javascript
function counter() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
}

const c = counter();
c.increment();
c.increment();
c.getCount();  // 2
```
