# The 'this' Keyword

## What is 'this'?

`this` refers to the object that is currently executing the code. Its value depends on HOW a function is called, not WHERE it's defined.

---

## 'this' in Different Contexts

### 1. Global Context
```javascript
console.log(this);  // Window (browser) or global (Node.js)
```

### 2. Object Method
```javascript
const person = {
  name: 'John',
  greet() {
    return `Hello, ${this.name}`;  // this = person object
  }
};

person.greet();  // "Hello, John"
```

### 3. Function (non-strict)
```javascript
function showThis() {
  console.log(this);  // Window (browser)
}

showThis();
```

### 4. Arrow Function
```javascript
const obj = {
  name: 'John',
  greet: () => {
    console.log(this);  // Lexical 'this' = outer context
    return `Hello, ${this.name}`;
  }
};

obj.greet();  // "Hello, undefined" (this is NOT obj!)
```

---

## call(), apply(), bind()

### call()
Invoke function with specific `this` and individual arguments:

```javascript
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: 'Alice' };

greet.call(person, 'Hello', '!');  // "Hello, Alice!"
```

### apply()
Invoke function with specific `this` and array of arguments:

```javascript
greet.apply(person, ['Hi', '.']);  // "Hi, Alice."
```

### bind()
Create a new function with permanently bound `this`:

```javascript
const boundGreet = greet.bind(person);
boundGreet('Hey', '~');  // "Hey, Alice~"

// With partial application
const greetAlice = greet.bind(person, 'Hello');
greetAlice('!');  // "Hello, Alice!"
```

---

## Common Problem: Lost 'this'

### Problem in Callbacks
```javascript
class Counter {
  constructor() {
    this.count = 0;
  }
  
  increment() {
    this.count++;
  }
}

const counter = new Counter();
const increment = counter.increment;

increment();  // Error! 'this' is undefined (or Window)
```

### Solutions

#### 1. Arrow Function
```javascript
// When passing as callback
button.addEventListener('click', () => counter.increment());
```

#### 2. bind()
```javascript
const increment = counter.increment.bind(counter);
increment();  // Works!
```

#### 3. Store Reference
```javascript
const self = this;
setTimeout(function() {
  self.increment();
}, 1000);
```

#### 4. in Constructor
```javascript
class Counter {
  constructor() {
    this.increment = this.increment.bind(this);
  }
  
  increment() {
    this.count++;
  }
}
```

---

## 'this' in Class Constructors

```javascript
class Person {
  constructor(name) {
    this.name = name;
    this.describe = this.describe.bind(this);
  }
  
  describe() {
    return `Name: ${this.name}`;
  }
}

const p = new Person('John');
const describe = p.describe;
describe();  // Works because bound in constructor
```

---

## 'this' Priority

When a function is called, determine `this` in this order:

1. Is `new` used? → `this` = newly created object
2. Is `call()`/`apply()`/`bind()` used? → `this` = specified object
3. Is the function called as a method? → `this` = object before dot
4. Default: global (or undefined in strict mode)

---

## Arrow Functions

Arrow functions don't have their own `this`. They capture `this` from enclosing scope:

```javascript
function Timer() {
  this.seconds = 0;
  
  // ✅ Arrow inherits 'this' from Timer
  setInterval(() => {
    this.seconds++;
  }, 1000);
  
  // ❌ Regular function gets its own 'this'
  setInterval(function() {
    this.seconds++;  // 'this' is NOT Timer!
  }, 1000);
}
```

---

## Practical Examples

### Event Handlers
```javascript
class Button {
  constructor(label) {
    this.label = label;
    
    // Arrow preserves 'this'
    this.handleClick = () => {
      console.log(`Clicked: ${this.label}`);
    };
  }
  
  mount(element) {
    element.addEventListener('click', this.handleClick);
  }
  
  unmount(element) {
    element.removeEventListener('click', this.handleClick);
  }
}
```

### Array Methods
```javascript
const obj = {
  values: [1, 2, 3],
  process() {
    // Arrow function for callback
    return this.values.map(v => v * 2);
    
    // ❌ Problem with regular function
    // return this.values.map(function(v) {
    //   return v * 2;  // 'this' is lost!
    // });
  }
};
```
