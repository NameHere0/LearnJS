# Closures & Scope

## Scope

Scope determines where variables are accessible.

### Global Scope
```javascript
const globalVar = 'I am global';

function demo() {
  console.log(globalVar);  // Accessible
}
```

### Function Scope
```javascript
function outer() {
  const outerVar = 'I am outer';
  
  function inner() {
    const innerVar = 'I am inner';
    console.log(outerVar);  // Accessible (closure)
    console.log(innerVar);   // Accessible
  }
  
  console.log(innerVar);  // Error! Not accessible
}
```

### Block Scope
```javascript
if (true) {
  let blockVar = 'I am block scoped';
  const alsoBlock = 'me too';
}
console.log(blockVar);  // Error! Not accessible outside block
```

## var vs let vs const

```javascript
// var - function scoped, hoisted, can redeclare
function varDemo() {
  console.log(x);  // undefined (hoisted, not initialized)
  var x = 5;
  console.log(x);  // 5
}

// let - block scoped, not hoisted (TDZ), cannot redeclare
function letDemo() {
  // console.log(y);  // ReferenceError (TDZ)
  let y = 5;
  console.log(y);  // 5
}

// const - block scoped, not hoisted, cannot reassign
const z = 5;
// z = 10;  // TypeError! Cannot reassign
```

### Loop Differences

```javascript
// Problem with var
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);  // Prints 3, 3, 3
}

// Solution with let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);  // Prints 0, 1, 2
}
```

## Closures

A closure is when a function "remembers" variables from its outer scope even after that scope has finished executing.

### Basic Closure
```javascript
function outer() {
  const outerVar = 'I am from outer';
  
  return function inner() {
    console.log(outerVar);  // Closes over outerVar
  };
}

const fn = outer();  // outer() has finished
fn();                // Still prints 'I am from outer'
```

### Practical Closures

#### Counter
```javascript
function createCounter() {
  let count = 0;
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
    reset: () => { count = 0; }
  };
}

const counter = createCounter();
counter.increment();  // 1
counter.increment();  // 2
counter.getCount();   // 2
counter.reset();
counter.getCount();   // 0
```

#### ID Generator
```javascript
function createIdGenerator(prefix) {
  let id = 0;
  
  return function generate() {
    id++;
    return `${prefix}-${id}`;
  };
}

const userIdGen = createIdGenerator('user');
const postIdGen = createIdGenerator('post');

userIdGen();  // 'user-1'
userIdGen();  // 'user-2'
postIdGen();  // 'post-1'
```

#### Private Variables
```javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit: (amount) => { balance += amount; return balance; },
    withdraw: (amount) => {
      if (amount > balance) throw new Error('Insufficient funds');
      balance -= amount;
      return balance;
    },
    getBalance: () => balance
  };
}

const account = createBankAccount(100);
account.deposit(50);   // 150
account.withdraw(30);   // 120
account.getBalance();   // 120
// balance is private - cannot be accessed directly
```

### Common Closure Patterns

#### Event Handlers
```javascript
function createClickLogger(buttonId) {
  let clickCount = 0;
  
  return function logClick() {
    clickCount++;
    console.log(`Button ${buttonId} clicked ${clickCount} times`);
  };
}

document.getElementById('btn').addEventListener('click', createClickLogger('btn'));
```

#### Memoization
```javascript
function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const fibonacci = memoize(function(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});
```

## Lexical vs Dynamic Scope

JavaScript uses **lexical scope** (scope determined by where functions are defined).

```javascript
const x = 10;

function outer() {
  const x = 20;
  
  function inner() {
    console.log(x);  // 20 - lexical scope looks at definition location
  }
  
  inner();
}

outer();  // Prints 20
```
